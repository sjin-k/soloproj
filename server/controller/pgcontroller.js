const pg = require('pg');
const conString = '';

const pgController = {};

pgController.createTable = (req, res, next) => {
  // const response = await client.query('CREATE TABLE $1 ')
};

pgController.createTask = (req, res, next) => {
  const {
    task,
    description
  } = req.body;
  const params = [task, description];
  client.query('INSERT INTO todo (task, description) VALUES ($1, $2);', params, (err, result) => {
    if (err) {
      return next({
        log: 'Express error handler in createTask',
        status: 500,
        message: { err: 'An error occurred' }
      });
    } else {
      return next();
    }
  });
};
pgController.readTable = (req, res, next) => {
  client.query('SELECT (task_id, task, description) FROM todo', (err, result) => {
    if (err) {
      return next({
        log: 'Express error handler in readTask',
        status: 500,
        message: { err: 'An error occurred' }
      });
    } else {
      res.locals.response = result.rows;
      return next();
    }
  });
};
pgController.updateTask = (req, res, next) => {
  const {
    task,
    description
  } = req.body;
  const {
    id
  } = req.params;
  const params = [id, task, description];
  client.query('UPDATE todo SET task = $2, description = $3 WHERE task_id = $1;', params, (err, result) => {
    if (err) {
      return next({
        log: 'Express error handler in updateTask',
        status: 500,
        message: { err: 'An error occurred' }
      });
    } else {
      return next();
    }
  });
};
pgController.deleteTask = (req, res, next) => {
  const {
    id
  } = req.params;
  const params = [id];
  client.query('DELETE FROM todo WHERE task_id = $1;', params, (err, result) => {
    if (err) {
      return next({
        log: 'Express error handler in deleteTask',
        status: 500,
        message: { err: 'An error occurred' }
      });
    } else {
      return next();
    }
  });
};

const client = new pg.Client(conString);
client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('client connected');
  }
});

module.exports = pgController;
