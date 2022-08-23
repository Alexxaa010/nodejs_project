const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const bitlyRouter = require('./Api/V1/Routes/bitly')
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./swagger_output.json');

require('dotenv').config();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));


app.use('/bitly', bitlyRouter)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports=app;

