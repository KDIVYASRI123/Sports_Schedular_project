const express=require('express');
const app=express();
const axios=require('axios');
const port=2000;
const https = require('https');
const querystring = require('querystring');
const {initializeApp,cert}=require("firebase-admin/app");
const {getFirestore}=require("firebase-admin/firestore");
var serviceAccount=require("./key.json");
initializeApp({
credential:cert(serviceAccount),
});
const db=getFirestore();
app.set('view engine','ejs');
app.set('views', './views');
app.get('/',(req,res)=>{
    res.render("op");
    });
app.listen(port,()=>{
console.log('Example app listening on port 2000');
});
app.get("/CricketSubmit",(req,res)=>{
    const doj=req.query.doj;
    const pt=req.query.pt;
    const dim=req.query.dim;
 db.collection('Cricket_Players').add({
    doj:doj,
    dim:dim,
    pt:pt,
 })
  .then(()=>{    
    
    res.render("Cricket");
    });
    });

    app.get("/FootballSubmit",(req,res)=>{
        const doj=req.query.doj;
        const pt=req.query.pt;
        const dim=req.query.dim;
     db.collection('Football_Players').add({
        doj:doj,
        dim:dim,
        pt:pt,
     })
      .then(()=>{    
        res.render("Football");
        });
        });
        app.get("/VolleyballSubmit",(req,res)=>{
            const doj=req.query.doj;
            const pt=req.query.pt;
            const dim=req.query.dim;
         db.collection('Volleyball_Players').add({
            doj:doj,
            dim:dim,
            pt:pt,
         })
          .then(()=>{    
          
            res.render("Volleyball");
            });
            });
       
    