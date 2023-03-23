const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  PropertyType: {
    type: String,
    required:true
    
  },
  Negotiable: {
    type: String,
    required:true,
   
  },
  Price: {
    type:String,
  required:true
},
  Ownership: {
    type: String,
  
  },
  PropertyAge: {
    type: String,

  },
  PropertyApproved: String,
  PropertyDiscription: String,
  BankLoan: {
    type: String,
  },
  length: String,
  Breath: String,
  Area: String,
  AreaUnit: String,
  bhk: String,
  floor: String,
  Furnished: String,
  BankLoan: String,
  car: String,
  Lift: String,
  Electricity: String,
  Facing: String,
  name: String,
  mobile: String,
  poster: String,
  sale: String,
  fp: String,
  Pp: String,
  postImage: String,
  Email: String,
  city: String,
  area: String,
  pincode: String,
  Address: String,
  landmark: String,
  lalitude: String,
  longitude: String,
});

const postModal = mongoose.model("post", postSchema);

module.exports = postModal;
