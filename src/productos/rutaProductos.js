const{Router}=require('express');
const router=Router();

const productos=require('./dataProductos.json');
console.log(productos);

router.get('/', (req, res)=> {
    res.json(productos);
});

router.get('/:id', (req, res)=> {
    const {id}=req.params;
    productos.forEach(productos =>{
        if(productos.id==id){
            res.json(productos)
            console.log(productos.nomProduct);
        } //para que sea el id exacto que se puso
    })


    console.log(id);
});

router.post('/', (req, res)=> {
    const{nomProduct, prdID, prdIMG, fotopr1, fotopr2}=req.body;
    if(nomProduct&&prdID&&prdIMG&&fotopr1&&fotopr2&&fotopr2&&fotopr3&&prdinfo&&colores&&qty){
        const id = productos.length +1;
        const newProduct = {...req.body, id};
        productos.push(newProduct); //sistemas optativos, sirve para meter cosas pop sacar
        //console.log(newGame);


        res.status(200).json(productos);
    }else{
        res.status(500).json({error:'no data'});
    } //para verificar que la infor que venga desde euna entreda manual
});

module.exports=router;