const express = require('express');
const app = express();
const PORT = 8080



app.get('/', function(request, response) {
  console.log("path served: ", __dirname + '/index.html');
  response.sendFile(__dirname + '/index.html')
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> LISTO, el servidor esta escuchando en el puerto %s. Ve a http://localhost:%s/ en el navegador para ver la aplicacion corriendo.", PORT, PORT);
  }
});
