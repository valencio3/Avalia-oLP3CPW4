const mongoose = require('mongoose')

//const dbURI = 'mongodb://localhost/lista-compras-dev';
const dbURI = 'mongodb+srv://ifms:ifms@ifms0-pt2xv.mongodb.net/lista-compras-dev?retryWrites=true&w=majority'
mongoose.pluralize(null)
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => console.log('Mongoose conectado'))
    .catch(erro => console.log(erro))