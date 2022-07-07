const express =require("express");
const mongoose =require("mongoose");
const app = express();

  mongoose.connect('mongodb://localhost/dbMovie' ,{useNewUrlParser: true});  //connection a la base de donnee mongodb;

  const movieSchema = new mongoose.Schema({
     name:String,                                        // le squelette
    year:Number,
    actors:String
});
const people1 = new mongoose.Schema({
    name:String,                                        // le squelette
   year:Number,
   actors:String
});

    // convertir en model

    const Movies= mongoose.model("Movie", movieSchema);
    const People= mongoose.model("people", people1);

    //inserer l'objet javascript

   

    const pulFiction  = new Movies({
        name:"pul Fiction",
        year:"1997",
        actors:" samuel dibango",

    })
    // inserer un autre objet 
    const people_user = new  People({
        name:"brice",
        age:34,
        Favorite:pulFiction

    })
 
  

    const Intersellar = new Movies({
        name:"intersellar",
        year: 2013,
        actors: "mccaunaughey"
    })
        Movies.insertMany([pulFiction,Intersellar,people_user]);  //inserer plusieur
    // Intersellar.save();
    // save en tant  doc dans mongodb

    // pulFiction.save();
     Movies.deleteMany({name:"pul Fiction"},(err)=>{ //supprimer plusieurs
        if(err){
            console.log(err)
        } else{
            console.log(Movies)
        }
     })
    Movies.find({} ,(err,movies)=>{      
        if(err){
            console.log(err);
        }else{
           for(var i=0; i < movies.length; i++){
            console.log(movies[i].actors)
           }
        }
    })

 const port=7000;

 app.set('views','./views');
 app.set("view engine" ,"ejs");
 app.use("/public" , express.static('public'))


    app.get("/" ,(req,res)=>{
        res.render('index')
    })

 app.listen( port,()=>{
    console.log('ecoute sur le port 7000')
 })