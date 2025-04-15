import express from 'express';
const router = express.Router();


router.post('/add-user', async(req, res) => {
    try{
        const{email, password} = req.body;
        if(!email){
            return res.status(400).json({message:'Email cannot be empty'});
        }
        if(!password){
            return res.status(400).json({message:'Password cannot be empty'});
        }
        res.status(200).json({message:'User added succesfully!!'});
    }catch(err){
        return res.status(500).json({message:'Internal server error'});
    }
});

export default router;