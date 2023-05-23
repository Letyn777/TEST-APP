const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/difer');
then(db => console.log('Ye esta conectado'))
.catch((err) => console.error(err));
