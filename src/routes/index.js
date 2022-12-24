const {Router} = require("express")
const router = Router()
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./../../nodejs-project-first-firebase-adminsdk-z60ia-0bc28d24ec.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// const admin = require("firebase-admin")

// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//     databaseURL: "https://node-first-project-d8715-default-rtdb.firebaseio.com/"
// })

// const db = admin.database();

router.get("/", (req, res) => {
    console.log("holi")
    res.send("received")
})

router.post("/new-contact", async(req, res) => {

    console.log(req)

    await db.collection('contacts').add({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
    });

    res.send(req.body)
})

module.exports = router;