const express=require('express'); //inicializacion require de express
const app=express(); //sirve para poder hacer lo que nosotros queramos con la aplicacion, va instanciar lo que es express 
const morgan=require('morgan'); //todos los const para configurar el servidor
//cada vez que nosotros tengamos una dependencia y la vayamos a querer utilizar vamos a crear costantes dentro de nuestro index

//Configuraciones
app.set('port', 3000);  //para crear variable dentro de app
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev')); //para usar morgan y con el parametro dev que seniala errores en el servidor, se usa el parametro combine para mas detalles del error y del servidor
app.use(express.json()); //para parsear json mejor, es un metodo

//rutas
app.use('/api/juegos', require('./routes/rutas')) //se le pone el . para ir a un nivel mas abajo
app.use('/api/artistas', require('./artistas/rutaArtistas'))
app.use('/api/estilos', require('./estilos/rutaEstilos'))
app.use('/api/productos', require('./productos/rutaProductos'))
app.use('/api/home', require('./sao/rutaSAO'))

//empezando el servidor
app.listen(app.get('port')); //para que se lea desde un puerto, para poder accesar al servidor desde un buscador, se pone el app.get para que traiga la variable port, se usa app porque esta variable se puede obtener desde cualquier parte dentro de nuestro codigo
console.log('mi primer servidor'); //esto se va imprimir en la consola



//testing

//b

