const express=require("express")
const router=express.Router();
const postModal=require("../models/add-properties")
router.post("/adding", (req, res) => {
    console.log(req.body);
    postModal
      .create({
        PropertyType: req.body.PropertyType,
        Negotiable: req.body.Negotiable,
        Price: req.body.Price,
        Ownership: req.body.Ownership,
        PropertyAge: req.body.PropertyAge,
        PropertyApproved: req.body.PropertyApproved,
        PropertyDiscription: req.body.PropertyDiscription,
        BankLoan: req.body.BankLoan,
        length: req.body.length,
        Breadth: req.body.Breadth,
        Area: req.body.Area,
        AreaUnit: req.body.AreaUnit,
        bhk: req.body.bhk,
        floor: req.body.floor,
        Furnished: req.body.Furnished,
        car: req.body.car,
        Lift: req.body.Lift,
        Electricity: req.body.Electricity,
        Facing: req.body.Facing,
        name: req.body.name,
        mobile: req.body.mobile,
        poster: req.body.poster,
        sale: req.body.sale,
        fp: req.body.fp,
        Pp: req.body.Pp,
        postImage: req.body.postImage,
        Email: req.body.Email,
        city: req.body.city,
        area: req.body.area,
        pincode: req.body.pincode,
        Address: req.body.Address,
        landmark: req.body.landmark,
        lalitude: req.body.lalitude,
        longitude: req.body.longitude,
      })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  router.get("/posts", (req, res) => {
    postModal
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

router.put("/:id", async (req, resp) => {
  try{

      let result = await postModal.updateOne(
          { _id: req.params.id },
          {
              $set: req.body
          }
      )
      resp.send(result)
  }
  catch{
      resp.status(400).json({ message: "error in upadating" })
  }
})
  
  module.exports=router