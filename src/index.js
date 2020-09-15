const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req,res)=>{
    return res.json("Hello world");
});

app.post('/add',(req,res)=>{

    const {num1,num2} = req.body;
    if(typeof(num1)==="string"||typeof(num2)==="string"){
        return res.json({
            status: "failure",
            message: "Invalid data types"
        })
    }
   
    const result = num1 + num2;
    if(num1>1000000||num2>1000000||result>1000000){
        return res.json({
            status: "failure",
            message : "overflow"
        })
    }
    return res.json({
        status: 'success',
        message: 'the sum of given two numbers',
        sum: result
    })

});

app.post('/sub', (req,res)=>{
    const {num1,num2} = req.body;
    if(typeof(num1)==="string"||typeof(num2)==="string"){
        return res.json({
            status: "failure",
            message: "Invalid data types"
        })
    }
    
    const sub = num1 - num2;
    if(sub<-1000000){
        return res.json({
            status: "failure",
            message: "underflow"
        })
    }
    return res.json({
        status: "success",
        message: 'the substract of given two numbers',
        difference: sub
    })

})

app.post('/multiply', (req,res)=>{
    const {num1,num2} = req.body;
    if(typeof(num1)==="string"||typeof(num2)==="string"){
        return res.json({
            status: "failure",
            message: "Invalid data types"
        })
    }
   

    const mult = num1*num2;
    if(mult>1000000){
        return res.json({
            status:"failure",
            message: "overflow"
        })
    }
    return res.json({
        status: "success",
        message: 'the product of given numbers',
        result: mult
    })


})

app.post('/divide',(req,res)=>{
    const {num1,num2} = req.body;
    if(typeof(num1)==="string"||typeof(num2)==="string"){
        return res.json({
            status: "failure",
            message: "Invalid data types"
        });
    }
    if(num2==0){
        return res.json({
            status: "failure",
            message: 'Cannot divide by zero'
        });
    }
    const div = num1/num2;
    return res.json({
        status: "success",
        message: 'the division of given numbers',
        result: div
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;