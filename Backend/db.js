const mongoose = require("mongoose");

    const names = ["Raghoottam", "Ranjit", "Pramath"]
    const ages = [21, 21, 22]

   const url='mongodb://localhost:27017/teacher';
   const userSchema=new mongoose.Schema({
       name:String,
       age:Number
   });
   const User=mongoose.model('User',userSchema);
   async function main() {
       try{
           await mongoose.connect(url);
           console.log('Connected to MongoDB');
        //    const user=new User({name:"Prasanna",age:22});
        //    const result=await user.save();

           for(let i = 0; i < names.length; i++){
                const currUser = new User({name: `${names[i]}`, age : ages[i]})
                const result=await user.save();
           }
           console.log(result);
       }catch(err){
           console.log('Error connecting to MongoDB');
           console.log(err);
       }
   }
   main();