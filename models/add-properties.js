const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
//   PropertyType: {
//     type: String,
 
    
//   },
//   Negotiable: {
//     type: String,

   
//   },
//   Price: {
//     type:String,
 
// },
//   Ownership: {
//     type: String,
  
//   },
//   PropertyAge: {
//     type: String,

//   },
//   PropertyApproved: String,
//   PropertyDiscription: String,
//   BankLoan: {
//     type: String,
//   },
//   length: String,
//   Breath: String,
//   Area: String,
//   AreaUnit: String,
//   bhk: String,
//   floor: String,
//   Furnished: String,
//   car: String,
//   Lift: String,
//   Electricity: String,
//   Facing: String,
//   name: String,
//   mobile: String,
//   poster: String,
//   sale: String,
//   fp: String,
//   Pp: String,
//   postImage: String,
//   Email: String,
//   city: String,
//   area: String,
//   pincode: String,
//   Address: String,
//   landmark: String,
//   lalitude: String,
//   longitude: String,
// });

    //models
    propertyType:{ type: String},
    negotiable:{ type: String},
    price:{ type: String},
    ownership:{ type: String},
    propertyAge:{ type: String},
    propertyApproved:{ type: String},
    propertyDescription:{ type: String},
    bankLoan:{ type: String},
    length:{ type: String},
    breadth:{ type: String},
    totalArea:{ type: Number},
    areaUnit:{ type: String},
    noOfBHK:{ type: String},
    attached: { type: String },
    western: { type: String },
    furnished: { type: String },
    carParking: { type: String },
    lift: { type: String },
    electricity: { type: String },
    facing: { type: String },

    name: { type: String },
    mobile: { type: String },
    postedBy: { type: String },
    saleType: { type: String },
    featuredPackage: { type: String },
    ppdPackage: { type: String },

    email: { type: String },
    city: { type: String },
    area:{ type: String },
    pincode: { type: String },
    address: { type: String },
    landmark: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    ppdId: { required: true, type: String },
    views: { required: true, type: String },
    daysLeft: { required: true, type: String },

    siteImage: { type: String },
    status: { type: String, default: "Unsold" },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

}, {timestamps:true})

// const Property = mongoose.model('property', propertySchema);

// module.exports = Property;

const postModal = mongoose.model("post", postSchema);

module.exports = postModal;
