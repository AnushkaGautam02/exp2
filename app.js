const express= require("express");
const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const object=[{id:1,fname:"Rohit", lname:"Maurya"},{id:2, fname:"Sumit", lname:"Kumar"},{id:3, fname:"Nitil", lname:"Prajapati"}];
// // to create the server
let name="abc";
let pass= "def";
const middle=("/",(req,res,next)=>{
    if(name === "abc" && pass==="def"){
        console.log("Middleware is working");
        next();
    }else{
        res.send("Error");
    }
    
})

app.get("/",(req,res)=>{
res.send("welcome");
})

// app.delete("/post/:id",(req,res)=>{
//     const {id} = req.params;
//     myArray = object.filter(({ id }) => id !== req.params.id);
//     res.send(myArray);
// });

app.use(middle);

app.get("/user",(req,res)=>{
    res.send("Got the response");
})

// app.get("/client",(req,res)=>{
//     res.send("Done from this side");
// })

// app.get("/first",(req,res)=>{
//     res.send("First Text");
// })



app.get('/post', (req, res)=>{
    res.send(object);
    console.log(object);
});

// //  by id
// app.get('/table/:id', (req, res)=>{
//     const { id } = req.params;
//     const employee = object.find(e => e.id==id)
//     console.log(employee);
//     res.send(employee);
// });

// // by Query
// app.get("/query",(req,res)=>{
//     const {name}= req.query;
//     const x= object.find(y=>y.fname==name)
//     res.send(x);
// })

// app.get("/last",(req,res)=>{
//     const {last}= req.query;
//     const z= object.find(y=>y.lname==last)
//     res.send(z);
// })

// // app.get("/table/:id",(req,res)=>{
// //     const {id}=1;
// //     const search=object.find(y=>y.id==id)
// //     console.log(search);
// //     res.send(search);
// // })

// app.get("/tab",(req,res)=>{
//     const {name}=req.query;
//     const x= object.find(y=>y.lname==name)
//     res.send(x);
// });

// app.get("/get",(req,res)=>{
//     res.send(object);
// });

// app.post("/",(req,res)=>{
//     res.send("Hello World");
// })

// app.post("/post",(req,res)=>{
//     const x=req.body
//     object.push(x)
//     res.send(x);
//     console.log(x);
// })

app.post('/post', (req, res)=>{
    const data = req.body;
    object.push(data);
    res.send(data);
    console.log(data)
});

// app.post("/postman",(req,res)=>{
//     const x= req.body;
//     object.push(x);
//     res.send(x);
// })


// to define the port number of server
    // app.listen(4000,()=>{
    //     console.log("Server Created");
    // })

// to export the data in www file
module.exports=app;
