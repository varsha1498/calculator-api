const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req,res)=>{
    return res.status(200).message("Hello world");
});

app.post('/add',(req,res)=>{

    const {num1,num2} = req.body;
    if(typeof(num1)||typeof(num2)){
        return res.status(200).json({
            message: "Invalid data types"
        })
    }
    if(num1>1000000||num2>1000000){
        return res.status(200).json({
            'message': "overflow"
        })
    }
    const sum = num1 + num2;
    return res.status(200).json({
        'message': 'the sum of given two numbers',
        'sum': sum
    })

});

app.post('/sub', (req,res)=>{
    const {num1,num2} = req.body;
    if(typeof(num1)||typeof(num2)){
        return res.status(200).json({
            message: "Invalid data types"
        })
    }
    if(num1<1000000||num2<1000000){
        return res.status(200).json({
            'message': "underflow"
        })
    }
    const sub = num1 - num2;
    return res.status(200).json({
        'message': 'the substract of given two numbers',
        'sum': sub
    })

})

app.post('/multiply', (req,res)=>{
    const {num1,num2} = req.body;
    if(typeof(num1)||typeof(num2)){
        return res.status(200).json({
            message: "Invalid data types"
        })
    }
    if(num1>1000000||num2>1000000){
        return res.status(200).json({
            'message': "overflow"
        })
    }

    const result = num1*num2;
    return res.status(200).json({
        'message': 'the product of given numbers',
        'result': result
    })


})

app.post('/divide',(req,res)=>{
    const {num1,num2} = req.body;

    if(num2==0){
        return res.status(200).json({
            'message': 'Cannot divide by zero'
        });
    }
    const result = num1/num2;
    return res.status(200).json({
        'message': 'the division of given numbers',
        'result': result
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;