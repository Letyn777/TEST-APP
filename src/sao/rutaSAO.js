const{Router}=require('express');
const router=Router();

const SAO=require('./dataSAO.json');
console.log(SAO);

router.get('/', (req, res)=> {
    res.json(SAO);
});


module.exports=router;