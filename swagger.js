const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./Api/V1/Routes/*.js']

swaggerAutogen(outputFile, endpointsFiles)