const server = require('./config/server')
require('./config/database')

// executa a função dentro do arquivo /config/routes.js   que  recebe um valor como parâmetro.
require('./config/routes')(server)