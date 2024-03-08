const express = require('express')
const app = express()
var cors = require('cors')
const favicon = require('serve-favicon');
const path = require('path');

app.use(cors())

app.use(express.static(path.join(__dirname, 'static')));

app.get("/api/products",(req, res)=> {
  res.json({"products":  [
    { name: "Floral Dress", price: "$49.99", imageUrl: "images/floral-dress.webp" },
    { name: "Leather Handbag", price: "$89.99", imageUrl: "images/handbag.webp" },
    { name: "Floral Dress", price: "$49.99", imageUrl: "images/floral-dress2.webp" },
    { name: "Black Shoes", price: "$20.99", imageUrl: "images/Black shoes" },
]})
})
app.get("/api",(req, res)=> {
  res.json({"users": [
{
  firstName: "Maarten",
  lastName: "van Middelaar",
  greeting: "Allah-u-Abha",
  price: 8,
  pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/330px-Eopsaltria_australis_-_Mogo_Campground.jpg"
},
{
  firstName: "Winny",
  lastName: "Kalondu",
  greeting: "Allah-u-Abha",
  price: 20,
  pictureUrl: "https://www.birds.cornell.edu/home/wp-content/uploads/2023/09/334289821-Baltimore_Oriole-Matthew_Plante.jpg"

},


  ] })
})

app.listen(8000, () => {console.log("server started on port 8000") })
