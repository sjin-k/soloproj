const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 3000;
const pgController = require('./controller/pgcontroller');

app.use('/', express.static(path.join(__dirname, '../bundle')));
app.use(express.json());
app.use(cors());
// app.get('/', (req, res) => {
//   res.json('Testing');
// });

app.post('/api/', pgController.createTask, (req, res) => {
  res.json(' created task');
});

app.get('/api/list', pgController.readTable, (req, res) => {
  res.json(res.locals.response);
});

app.put('/api/update/:id', pgController.updateTask, (req, res) => {
  res.json('updated task');
});
app.delete('/api/delete/:id', pgController.deleteTask, (req, res) => {
  res.json(' deleted task');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});
