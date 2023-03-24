const mongoose = require("mongoose")
const PropertySchema = new mongoose.Schema({
             //models
    ppdId: {
        required: true,
        type: String
    },
    siteImage: {
        type: String
    },
    property: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    views: {
        type: String,
    },
    daysleft: {
        type: String,
    },
    status: {
        type: String,
        default: "Unsold"
    }

},{timestamps:true})
const propertyModel = mongoose.model("propertydetails", PropertySchema)

module.exports = propertyModel;