import mongoose from 'mongoose';

// Define the schema
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10,
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    Comment: [
        { 
            value: { type: String }, 
            published: { type: Date, default: Date.now } 
        }
    ]
});

// Create the model using mongoose.model
const MovieModel = mongoose.model("Movie", movieSchema);

const singledoc= async () => 
{
    try {
       
        const result = await MovieModel.find({ money: {$lt: 4000 }})

        console.log(result)
       
    
        // result.forEach((movie) =>
        // {
        //     console.log(movie.name)
        // })

    } catch (error){
        console.log(error)
    }

}

export {singledoc};






















 // const m1 =  new MovieModel({
        //     name: "Iron Man",
        //     rating: 5,
        //     money: 4000,
        //     genre: ['action', 'superheros'],
        //     isActive: true,
        //     Comment:[ {value: "he died."}]

        // })
        // const m2 =  new MovieModel({
        //     name: "Spider mam",
        //     rating: 4,
        //     money: 5000,
        //     genre: ['action', 'adventure'],
        //     isActive: true,
        //     Comment:[ {value: "he died."}]

        // })
        // const m3 =  new MovieModel({
        //     name: "Monkey king",
        //     rating: 3,
        //     money: 3000,
        //     genre: ['action', 'god'],
        //     isActive: true,
        //     Comment:[ {value: "he died."}]

        // })
        // const m4 =  new MovieModel({
        //     name: "Love com",
        //     rating: 2,
        //     money: 4000,
        //     genre: ['comedy', 'love'],
        //     isActive: true,
        //     Comment:[ {value: "they married."}]

        // })
        // const m5 =  new MovieModel({
        //     name: "minecraft",
        //     rating: 1,
        //     money: 400,
        //     genre: ['action', 'world'],
        //     isActive: true,
        //     Comment:[ {value: "i mine your mom."}]

        // })