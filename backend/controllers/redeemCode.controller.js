import { codesModel } from "../models/codesModel.js"
import { typesModel } from "../models/typesModel.js";
import { variantsModel } from "../models/variantsModel.js";


// get all types of redeem codes
export const types = async (req, res) => {
  try {
    const types = await typesModel.find()
    res.status(200).json({success: true, types});
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error fetching Types' });
  }
}

// get all variants of a selected Redeem code type
export const variants = async (req, res) => {
  try {
    const id = req.query.id
    if (id === "admin") {
      const type = await typesModel.find();
      const allVariants = await variantsModel.find().lean();
      const allFormattedVariants = await Promise.all(
        allVariants.map(async(variant) => {
          const stock = await codesModel.countDocuments({status: "available", variant_id: variant._id});
          return {...variant, stock}
        })
      ) 
      

      return res
        .status(200)
        .json({
          success: true,
          type: type,
          variants: allFormattedVariants
        });
    } else {
      const type = await typesModel.findById(id);
      const allVariants = await variantsModel.find({ type_id: id }).lean();
      const allFormattedVariants = await Promise.all(
        allVariants.map(async(variant) => {
          const stock = await codesModel.countDocuments({status: "available", variant_id: variant._id});
          return {...variant, stock}
        })
      ) 


      res
        .status(200)
        .json({
          success: true,
          type: [type],
          variants: allFormattedVariants
        });
    }

  
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching allVariants' });
  }
}

// update price of each variants (admin)
export const priceUpdate = async (req, res) => {
  const {variant_id, priceINR, priceUSDT} = req.body;
  try {
    const matchVariant = await variantsModel.findById(variant_id);
    matchVariant.priceINR = priceINR;
    matchVariant.priceUSDT = priceUSDT;
    await matchVariant.save()
    res.status(200).json({ success: true, message: "Price updated", variant: matchVariant })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error in updating price.' });
  }
}

// upload redeem codes
export const upload = async (req, res) => {
  const {variant_id, redeemCode} = req.body;
  try {

    const variantExists = await variantsModel.findById(variant_id);
    if (!variantExists) {
      return res
        .status(400)
        .json({ success: false, message: "Code variant is not exists." });
    }

    const existingCodes = await codesModel.find(
      {
        redeemCode: { $in: redeemCode },
      },
      { redeemCode: 1 }
    );

    // Filter out codes that already exist
    const newCodes = redeemCode.filter(
      (code) => !existingCodes.find(element => element.redeemCode === code));

    if (newCodes.length === 0) {
      return res.status(400).json({
        success: false,
        message: "All codes already exist.",
        existingCodes,
      });
    }

    const fromattedNewCodes = newCodes.map((code) => {
      return {
        variant_id,
        redeemCode: code
      }
    })
    
    const insertedCodes = await codesModel.insertMany(fromattedNewCodes);

    // Send success response
    res.status(201).json({
      success: true,
      message: "New codes added successfully.",
      uploadedCodes: insertedCodes,
      existingCodes,
    });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// remove redeem codes
export const remove = async (req, res) => {
  const { redeemCode } = req.body;
  try {
    const redeemCodeExists = await codesModel.findOne({ redeemCode });
    if (!redeemCodeExists) {
      return res
        .status(400)
        .json({success: false, message: "This code does not exists."})
    }

    await codesModel.deleteOne({ redeemCode });

    res.status(201).json({
			success: true,
			message: "Redeem code removed successfully",
		});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
} 

// apply filter and view codes 
export const viewCodes = async (req, res) => {
  const { type_id, variant_id, redeemCode, status } = req.body;

  try {
    const query = {};

    if (type_id) {
      // Find variants with the given type_id and get their IDs
      const variants = await variantsModel.find({ type_id }, { _id: 1 });
      const variantIds = variants.map((variant) => variant._id);

      query.variant_id = { $in: variantIds };
    }

    if (variant_id) {
      query.variant_id = variant_id;
    }

    if (redeemCode) {
      query.redeemCode = redeemCode;
    }

    if (status) {
      query.status = status;
    }

    const codes = await codesModel.find(query);

    res.status(200).json({ success: true, redeemCode: codes });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};