import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from './config.js';

import { typesModel } from "./models/typesModel.js";
import { variantsModel } from "./models/variantsModel.js";
import authRoutes from "./routes/auth.route.js"

dotenv.config();

// const corsOptions = {origin: "http://localhost:5173"}
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)

// response all types of redeem codes
app.get("/", async (req,res) => {
  try {
    const Types = await typesModel.find()
    res.json(Types);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching Types' });
  }
})

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

// response a selected redeem codes and its variants with available stocks amount
app.get("/variants", async (req, res) => {
  try {
    const id = req.query.id
    const type = await typesModel.findById(id);
    const allVariants = await variantsModel.find({ type_id: id });
    // const stock = codes.reduce((count, code) => 
    //         code.variantID === current.id && code.status === 'available' ? count + 1 : count
    //       , 0);
    res.json({type, allVariants});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching allVariants' });
  }

  // const id = parseFloat(req.query.id);

  // const type = types.find((element) => element.id === id);

  // const filterVariants = variants.reduce((start, current) => {
  //   if (current.typeID === id) {
  //     const stock = codes.reduce((count, code) => 
  //       code.variantID === current.id && code.status === 'available' ? count + 1 : count
  //     , 0);
  //     const formatedCurrent = {...current, stock: stock}
  //     start.push(formatedCurrent);
  //   }
  //   return start;
  // }, [])

  // res.json({type: type, variants: filterVariants})
})

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

const profile = [
  {
    id: "13429mvk",
    username: "Salam Priyansu Meitei",
    email: "spriyansumeitei@gmail.com",
    password: "kjbfv72893ry",
  }
]
app.get("/profile:id", (req, res) => {
  const id = req.params.id;
  
  res.send(profile)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  connectDB();
  console.log(`server is live : ${PORT}`);
  
})