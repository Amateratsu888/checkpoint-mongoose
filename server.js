// import mongoose
var mongoose = require('mongoose')

// connection a la base de donnée
mongoose.connect('mongodb://localhost/personDB', function(err) {
    if (err) { throw err; }
})

// definition d'un schemas
var personSchema = new mongoose.Schema({
    name : { type: String, required: true },
    age : number,
    favoriteFood : [String]
    })

// creation du modele
var personModel = mongoose.model('person', personSchema)

//creation d'une personne
var myPerson = new personModel({
    id : 1,
    name : 'cheikh GUEYE',
    age : 24,
    favoriteFood : ['mafe','poulet','yassa']
});

//sauvegarde dans la base de donnée
myPerson.save(function (err) {
    if (err) { throw err; }
    console.log('personne ajouté avec succès !');
});

//creation et enregistrement de plusieurs personnes 
var arrayOfPersons = [
    {
        id : 2,
        name : 'modou LO',
        age : 36,
        favoriteFood : ['papaye','mango','salade']
    },
    {
        id : 3,
        name : 'saliou KEBE',
        age : 18,
        favoriteFood : ['omelette','burger','poulet']
    },
    {
        id : 4,
        name : 'khady NDAW',
        age : 20,
        favoriteFood : ['pain','fataya','haricot']
    }
]


    Model.create(arrayOfPersons, (err, data) => {
    if(err)  { throw err }
    else console.log('arrayOfpersons saved !!!');
})

//find all persons 
personModel.find(null, function (err, comms) {
    if (err) { throw err }
    console.log(comms);
})

//Find just one person which has a certain food in the person's favorites
PersonModel.find({ favoriteFood: { "$in" : ["yassa"]} })

//find by id 
personModel.findById(personModel.id, (err, data) => err ?
console.log(err) : console.log(data))

//Perform Classic Updates by Running Find, Edit, then Save
personModel.findById(personModel.id, (err, data) => {
if (err) { throw err }
else {data.favoriteFood.push('hamburger')
data.save()
}})

//Perform New Updates on a Document Using model.findOneAndUpdate()
personModel.findOneAndUpdate(personModel.id, (err, data) => err ?
console.log(err) : console.log('updated'))

//Delete One Document Using model.findByIdAndRemove
personModel.findByIdAndRemove(personModel.id, (err, data) => err ?
console.log(err) : console.log('removed'))

//Delete Many Documents with model.remove()
personModel.remove({name : "cheikh GUEYE"}, (err, data) => err ?
console.log(err) : console.log(data))

//Chain Search Query Helpers to Narrow Search Results
personModel.find({favoriteFood : { "$in" : ["burrito"]} })
.sort('name').limit(2).select().exec((err,data)=>{
    err ?
console.log(err) : console.log(data)
})