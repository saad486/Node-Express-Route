const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=> {
  res.end('Get all the promotions');
})
.put((req,res,next)=> {
  res.statusCode = 403;
  res.end('PUT operation is not supported');
})
.post((req, res, next)=> {
  res.end('Will add this promotion with promotion name: '
          + req.body.name + ' and description: ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('All promotions will be deleted');
});

promoRouter.route('/:promoId')
.get((req, res, next)=> {
  res.end('Will send the promotion with promoId: ' + req.params.promoId);
})
.post((req, res, next)=> {
  res.statusCode = 403;
  res.end('POST operation is not supported on /promotion/' + req.params.promoId);
})
.put((req, res, next)=> {
  res.write('Updating the promotion with promoId: ' + req.params.promoId + '\n');
  res.end('Promotion updated with name: ' + req.body.name
      + ' description: ' + req.body.description);
})
.delete((req, res, next)=> {
    res.end('Promotion with promoId: '  + req.params.promoId + ' will be deleted');
});


module.exports = promoRouter;
