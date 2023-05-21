//rutas
//get porque queremos obtener algo desde la pagina principal que ahorita es la ruta

const{Router}=require('express'); //para agarrar todos los posibles metodos
const router=Router();

//const express=require(express);
//const router=express.Router();

//requerir el data.json
const juegos=require('./data.json');
console.log(juegos);

router.get('/', (req, res)=> {
    res.json(juegos);
});

router.get('/:id', (req, res)=> {
    const {id}=req.params;
    juegos.forEach(juegos =>{
        if(juegos.id==id){
            res.json(juegos)
            console.log(juegos.title);
        } //para que sea el id exacto que se puso
    })


    console.log(id);
});

router.post('/', (req, res)=> {
    const{title, version, genre}=req.body;
    if(title&&version&&genre){
        const id = juegos.length +1;
        const newGame = {...req.body, id};
        juegos.push(newGame); //sistemas optativos, sirve para meter cosas pop sacar
        //console.log(newGame);


        res.status(200).json(juegos);
    }else{
        res.status(500).json({error:'no data'});
    } //para verificar que la infor que venga desde euna entreda manual
});

 //.send es para mandar string .json para mandar json y se hace con {}


module.exports=router;