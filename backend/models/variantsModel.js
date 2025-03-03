import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Types", // Reference to the RedeemCodeType model
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  coin: {
    type: Number,
    required: true,
  },
  priceINR: {
    type: Number,
    required: true,
  },
  priceUSDT: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Variants", variantSchema);

