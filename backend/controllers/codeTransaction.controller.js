import {cartModel} from "../models/cartModel.js";

// get the cart items
export const fetchCart = async (req, res) => {
  const user_id = req.query.user_id
  try {
    const user_idExists = await cartModel.findOne({ user_id })
    .populate({ path: 'cart.variant_id', populate: { path: 'type_id' } })
    .exec();
    if (!user_idExists) {
      return res.status(200).json({
        succes: true,
        message: `Cart is empty.`,
        cart: []
      }) 
    }

    const formattedCart = user_idExists.cart.map((item) => {
      return {   
        typeName: item.variant_id.type_id.name,
        variant_id: item.variant_id._id,
        variantName: item.variant_id.name,
        priceINR: item.variant_id.priceINR,
        priceUSDT: item.variant_id.priceUSDT,
        qty: item.qty
      }
    })

    return res.status(200).json({
      succes: true,
      message: "Cart fetch successful.",
      cart: formattedCart
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Cart can't fetch.", err });
  }
}

// add items into the cart
export const addToCart = async (req, res) => {
  const {user_id, variant_id, qty} = req.body;
  try {
    const user_idExists = await cartModel.findOne({ user_id })
    if (!user_idExists) {
      const newCart = new cartModel({
        user_id,
        cart: [{ variant_id, qty }]
      })
  
      await newCart.save();

      return res.status(200).json({
        succes: true,
        message: "Cart updated.",
      })
    }

    const variant_idExists = user_idExists.cart.find((item) => 
      item.variant_id.equals(variant_id)
    );
    if (variant_idExists) {
      variant_idExists.qty += qty;
      await user_idExists.save();

      return res.status(200).json({
        succes: true,
        message: "Cart updated.",
      })
    } else if (!variant_idExists) {
      user_idExists.cart.push({variant_id, qty});
      await user_idExists.save();

      res.status(200).json({
        succes: true,
        message: "Cart updated.",
      })
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Cart can't update.", err });
  }
}

// remove items from the cart
export const removeCart = async (req, res) => {
  const {user_id, variant_id} = req.query;
  try {
    const user_idExists = await cartModel.findOne({ user_id });
    if (!user_idExists) {
      return res.status(400).json({ success: false, message: "Your cart is empty", cart: []});
    }

    if (variant_id === "all") {
      await cartModel.deleteOne({ user_id });
      return res
        .status(200)
        .json({ success: true, message: "Cart removed" , cart: [] });
    }

    const updatedCart = user_idExists.cart.filter((item) => 
      item.variant_id.toString() !== variant_id
    );
    user_idExists.cart = updatedCart;

    await user_idExists.save();

    const formattedCart = user_idExists.cart.map((item) => {
      return {   
        typeName: item.variant_id.type_id.name,
        variant_id: item.variant_id._id,
        variantName: item.variant_id.name,
        priceINR: item.variant_id.priceINR,
        priceUSDT: item.variant_id.priceUSDT,
        qty: item.qty
      }
    })
    
    res
      .status(200)
      .json({ success: true, message: "Cart removed" , cart: formattedCart });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error in removeCart", error });
  }
}
