const{Router}=require('express');
const router=Router();

const artistas=require('./dataartistas.json');
console.log(artistas);

router.get('/', (req, res)=> {
    res.json(artistas);
});

router.get('/:id', (req, res)=> {
    const {id}=req.params;
    artistas.forEach(artistas =>{
        if(artistas.id==id){
            res.json(artistas)
            console.log(artistas.nickname);
        } //para que sea el id exacto que se puso
    })


    console.log(id);
});

router.post('/', (req, res)=> {
    const{banner, nickname, ppart, desart, areas}=req.body;
    if(banner&&nickname&&ppart&&desart&&areas){
        const id = artistas.length +1;
        const newArtist = {...req.body, id};
        artistas.push(newArtist); //sistemas optativos, sirve para meter cosas pop sacar
        //console.log(newGame);


        res.status(200).json(artistas);
    }else{
        res.status(500).json({error:'no data'});
    } //para verificar que la infor que venga desde euna entreda manual
});

module.exports=router;