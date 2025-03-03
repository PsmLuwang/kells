// all types of redeem codes
// const redeemCodeTypes = [
//   {
//     id : 1,
//     name: 'SMILE ONE COIN',
//     region: 'Brazil', 
//     img: '../public/img/soc.png',
//     flag: '../public/img/brazil.png',
//     varients: ["30BRL", "100BRL", "500BRL", "1000BRL", "5000BRL"]
//   },
//   {
//     id : 2,
//     name: 'SMILE ONE COIN',
//     region: 'Philippines',
//     img: '../public/img/soc.png',
//     flag: '../public/img/philippines.jpg',
//   },
//   {
//     id : 3,
//     name: 'UNI-PIN',
//     region: 'Philippines',
//     img: '../public/img/uniPin.jpg',
//     flag: '../public/img/philippines.jpg',
//   },
//   {
//     id : 4,
//     name: 'MOOGOLD',
//     region: 'India',
//     img: '../public/img/moogold.png',
//     flag: '../public/img/india.png',
//   }
// ]

// all the redeem codes 
// const redeemCodes = [
//   {
//     typeID: 1,
//     varient: "30BRL",
//     coin: 300,
//     name: "30 BRL",
//     code: "KDFJ8347EW",
//     status: "available",
//     priceINR: 470,
//     priceUSDT: 5,
//   },
//   {
//     typeID: 1,
//     varient: "100BRL",
//     coin: 1000,
//     name: "100 BRL",
//     code: "FSKJL3476V",
//     status: "available",
//     priceINR: 1570,
//     priceUSDT: 17.45,
//   },
//   {
//     typeID: 1,
//     varient: "500BRL",
//     coin: 5000,
//     name: "500 BRL",
//     code: "KDFG874DFT",
//     status: "available",
//     priceINR: 7850,
//     priceUSDT: 65.34,
//   },
//   {
//     typeID: 1,
//     varient: "1000BRL",
//     coin: 10000,
//     name: "1000 BRL",
//     code: "BVHFD73BV",
//     status: "available",
//     priceINR: 15300,
//     priceUSDT: 173.5,
//   },
//   {
//     typeID: 1,
//     varient: "5000BRL",
//     coin: 50000,
//     name: "5000 BRL",
//     code: "KHVFKJ32N",
//     status: "available",
//     priceINR: 78000,
//     priceUSDT: 653.45,
//   }
// ]

const redeemCodeTypes = [
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7a1"),
    "name": "Gift Card",
    "description": "Redeemable for store credit."
  },
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7a2"),
    "name": "Discount Code",
    "description": "Provides a discount on purchase."
  },
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7a3"),
    "name": "Subscription Code",
    "description": "Redeemable for a subscription plan."
  },
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7a4"),
    "name": "Premium Code",
    "description": "Redeemable for premium features."
  }
]

const codeVariants = [
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7b1"),
    "type_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7a1"),
    "variant_name": "$10 Gift Card",
    "price": 10.00
  },
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7b2"),
    "type_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7a1"),
    "variant_name": "$20 Gift Card",
    "price": 20.00
  },
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7b3"),
    "type_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7a2"),
    "variant_name": "10% Discount Code",
    "price": 0.00
  },
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7b4"),
    "type_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7a2"),
    "variant_name": "20% Discount Code",
    "price": 0.00
  },
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7b5"),
    "type_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7a3"),
    "variant_name": "1-Month Subscription",
    "price": 15.00
  }
]

const redeemCodes = [
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7c1"),
    "code": "ABC123-XYZ456",
    "variant_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7b1"),
    "status": "available",
    "created_at": ISODate("2025-02-21T10:00:00Z"),
    "sold_at": null,
    "redeemed_at": null
  },
  {
    "_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7c2"),
    "code": "DEF456-GHI789",
    "variant_id": ObjectId("65f8c1e4f1a2b3c4d5e6f7b2"),
    "status": "sold",
    "created_at": ISODate("2025-02-21T10:05:00Z"),
    "sold_at": ISODate("2025-02-21T10:30:00Z"),
    "redeemed_at": null
  }
]