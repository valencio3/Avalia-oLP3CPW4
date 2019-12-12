const app = require('./app');

const PORTA = 3001;

app.listen(
    PORTA,
    () => console.log(`App ouvindo na porta ${PORTA}`)
);