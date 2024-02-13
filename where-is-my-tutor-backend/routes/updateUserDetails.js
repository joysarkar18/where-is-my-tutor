const StudentDetails = require("../models/student/studentDetails");
const tokenAuthentication = require("../utils/tokenAuthentication")

const router = require("express").Router()


router.post("/student-details", tokenAuthentication, (req, res) => {

    console.log(req.user);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let phNumber = req.body.phNumber;
    let gender = req.body.gender;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    let pinCode = req.body.pinCode;
    let address = req.body.address;
    let profileImage = req.body.profileImage;
    let currentClass = req.body.currentClass;
    let subjects = req.body.subjects;



    StudentDetails.create({ firstName: firstName, lastName: lastName, phNumber: phNumber, gender: gender, latitude: latitude, longitude: longitude, pinCode: pinCode, address: address, profileImage: profileImage, currentClass: currentClass, subjects: subjects, })
        .then((result) => {

            console.log("student details entered");
            return res.json({ status: true, message: "student details entered" });

        }).catch((err) => {
            console.log("error is details", err);
            return res.json({ status: false, message: "Something went wrong" });
        })






})

module.exports = router;