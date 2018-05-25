let express = require("express")
let app = express()
let bodyparser = require("body-parser")
app.use(bodyparser.json())

let products = require("./data")

app.get("/api/wsproducts", (req, res)=>{
    // res.send("My Products Web Service")
    res.json(products)
})

app.get("/api/wsproducts/:id",(req, res)=>{
    let reqid = req.params.id
    let product = products.filter((e) => e.id == reqid)
    if(product.length<1)
    res.send("no product found")
    else
    res.json(product)
    
})

app.post("/api/wsproducts", (req, res)=>{
    let newproduct = {
        id : products.length+1,
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    }
    products.push(newproduct)
    res.json(products)
})

app.delete("/api/wsproducts/:id", (req, res)=>{
    let pid = req.params.id
    let idx = products.findIndex((e)=>e.id==pid)
    if(idx == -1)
    res.send("Wrong ID")
    else{
    products.splice(idx, 1);
    res.send("Product deletion successful")}
})

app.put("/api/wsproducts/:id", (req, res)=>{
    let reqid = req.params.id
    let idx = products.findIndex((e)=>e.id==reqid)
    let modproduct = {
        id : reqid,
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    }

    products[idx]=modproduct
    res.json(products);
})



app.listen(5001,"localhost", ()=>{
    console.log("Express server is ready on port 5001")
})