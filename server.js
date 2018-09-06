'use strict';

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config');
const {Log} = require('./models');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200);
  res.json('test');
});



app.post('/logs', (req, res) => {
   
    const requiredFields = ['date', 'stress', 'waterIntake'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`;
            console.error(message);
            return res.status(400).send(message);
    }
  }
    
      if (missingError) {
    return res.status(400).send(message);
  }

    Log.find({ date: date }).then(log => {
    if (log.length !== 0) {
      return res.status(400).send('A log with this date already exists');
    } else {
      Log.create({
        date: req.body.date,
        stress: req.body.stress,
        waterIntake: req.body.waterIntake
      });
        .then(log => res.status(201).json(log.serialize()))
        .catch(err => {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        });
    }
  });
});
    








let server;

function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      databaseUrl,
      err => {
        if (err) {
          return reject(err);
        }
        server = app
          .listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve();
          })
          .on('error', err => {
            mongoose.disconnect();
            reject(err);
          });
      }
    );
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, server, runServer, closeServer };