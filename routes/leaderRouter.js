const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=> {
  res.end('Get all the leaders');
})
.put((req,res,next)=> {
  res.statusCode = 403;
  res.end('PUT operation is not supported');
})
.post((req, res, next)=> {
  res.end('Will add this leader with leader name: '
          + req.body.name + ' and description: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('All leaders will be deleted');
});

leaderRouter.route('/:leaderId')
.get((req, res, next)=> {
  res.end('Will send the leader with leaderId: ' + req.params.leaderId);
})
.post((req, res, next)=> {
  res.statusCode = 403;
  res.end('POST operation is not supported on /leader/' + req.params.leaderId);
})
.put((req, res, next)=> {
  res.write('Updating the leader with leaderId: ' + req.params.leaderId + '\n');
  res.end('leader updated with name: ' + req.body.name
      + ' description: ' + req.body.description);
})
.delete((req, res, next)=> {
    res.end('leader with leaderId: '  + req.params.leaderId + ' will be deleted');
});


module.exports = leaderRouter;
