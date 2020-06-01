import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem dos usuários!');
  return response.json([
    "Eduardo",
    "Pedro",
    "Lucas"
  ]);
});

app.listen(3333);