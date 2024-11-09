import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import UserModel from './model/db.js'
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT | 3000

mongoose.connect('mongodb://localhost:27017/crud')
.then(()=>console.log("mongodb connected"))
.catch(()=>console.log("mongodb not connected"))

app.post('/create',(req,res)=>{
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.get('/getuser/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})


app.listen(PORT,()=>{
    console.log("server is running")
})