const{Router}=require('express');
const router=Router();

const estilos=require('./dataEstilos.json');
console.log(estilos);

router.get('/', (req, res)=> {
    res.json(estilos);
});


module.exports=router;