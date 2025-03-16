import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from './config.js';

import { typesModel } from "./models/typesModel.js";
import { variantsModel } from "./models/variantsModel.js";
import authRoutes from "./routes/auth.route.js";
import redeemCodeRoutes from "./routes/redeemCode.route.js"
import cartTransactionRoutes from "./routes/codeTransaction.route.js"

dotenv.config();

// const corsOptions = {origin: "http://localhost:5173"}
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())


// authentication 
app.use("/api/auth", authRoutes);
// redeem codes operation
app.use("/api/code", redeemCodeRoutes);
// codeTransaction (cart and order)
app.use("/api/codeTransaction", cartTransactionRoutes)





///////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/", async (req, res) => {
  const {name, region, img, flag} = req.body;
  try{
    const newType = new typesModel({name, region, img, flag});
    await newType.save();
    res.status(201).json({message: "User created sucessfully"})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

app.post("/variants", async (req,res) => {
  const {type_id, name, coin, priceINR, priceUSDT} = req.body;
  try{
    const newVariant = new variantsModel({type_id, name, coin, priceINR, priceUSDT});
    await newVariant.save();
    res.status(201).json({message: "newVariant created sucessfully", type_id})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})
/////////////////////////////////////////////////////////////////////////////////////////////////////



// { qty : 1, variant : "30BRL" },{ qty : 3, variant : "1120PHP" }
let cart = []
app.post("/cart", (req, res) => {
  const addCart = req.body;
  if (!cart.find((item) => item.variant === addCart.variant)) {
    cart.push(addCart)
  } else {
    cart.map((item) => 
      item.variant === addCart.variant ? item.qty += addCart.qty : item
    )
  }
  res.send(cart)
})



app.get("/cart", (req, res) => {
  const cartDetails = []
  cart.forEach((item) => {
    const matchingVariant = variants.find((variant) => variant.id === item.variant);
    if (matchingVariant) {
      const typeName = types.find((type) => type.id === matchingVariant.typeID);
      const formatted = { ...matchingVariant, typeName: typeName.name, qty: item.qty };
      delete formatted.typeID;
      cartDetails.push(formatted);
    }
  });
  res.json(cartDetails)
})

app.delete("/cart/:id", (req, res) => {
  const id = req.params.id;

  if (id === "all") {
    cart = [];
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].variant === id) {
        cart.splice(i, 1);
        break;
      }
    }
  }
  res.send(`deleted cart item with variant id ${id}`)
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  connectDB();
  console.log(`server is live : ${PORT}`);
  
})