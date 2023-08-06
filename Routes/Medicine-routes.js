const express =require('express')
const router = express.Router();
const Medicine=require('../model/Medicine')
// const controller=require('../controller/controller')

// this is get all medicine route
// 1st method
router.get('/', async (req,res,next) => {
let medi;
try{
medi= await Medicine.find();
}catch(err){
    console.log(err);
}

if(!medi){
    return res.status(404).json({message:"No Medicines Availible.."})
}
else{
    return res.status(200).json({ medi })
}
});
// 2nd method
// router.get('/',controller.getallmedi)

// enter medicine into database
router.post('/', async (req,res,next)=>{
const {name,description,price,image}=req.body;
let medicine;
try{
    medicine=new Medicine({
        name,
        description,
        price,
        image,
    });
    await medicine.save();

}catch(err){
    console.log(err);
}
if(!medicine){
    return res.status(500).json({message:"No Medicines Added.."})
}
else{
    return res.status(201).json({medicine})
}
})

// get record by id
router.get('/:id',async (req, res, next)=>{
    const id =  req.params.id;
    let medi;
    try {
        medi = await Medicine.findById(id)
    } catch (error) {
        console.log(error)
    }
    if(!medi){
        return res.status(404).json({message:"There is no medicine on the following id.."})
    }
    else{
        return res.status(201).json({ medi })
    }
    
})

//update medicines by id
router.put('/:id',  async(req, res, next)=>{
    const id=req.params.id;
const {name,description,price,image}=req.body;
let medi;
try{
    medi= await Medicine.findByIdAndUpdate(id,{
        name,
        description,
        price,
        image
    });
    medi =  await medi.save();

}catch(err){
    console.log(err);
}
if(!medi){
    return res.status(404).json({message:"Nothing has been updated.."})
}
else{
    return res.status(200).json({medi})
}

})
// deleteing medicine by id
router.delete('/:id', async(req, res, next )=>{
    let id= req.params.id;
    let medi;
    try {
        medi = await Medicine.findByIdAndRemove(id);
    } catch (error) {
        console.log(error, "u r fked up")
    }
    if (!medi) {
        return res.status(404).json({message: "medicine is deleted successfully..."})
    } else {
        return res.status(200).json({medi})
    }
})

module.exports = router;