var express   = require('express');
var router    = express.Router();

router.use((req, res, next) => {
    req.name = 'Iorgen';
    console.log('Router Custom Middleware ' + req.name);
    next();
});

router.get('/', (req, res, next) => {
    // res.json({
    //     message: 'Hello World'
    // });

    next(new Error('Custom error'));
});

router.get('/params/:name', (req, res) => {
    res.json({
        params: req.params,
        host: req.hostname,
        headers: req.headers
    });
});

router.post('/body', (req, res) => {
    res.json(req.body);
});

router.get('/res', (req, res) => {
    res.status(201).send({
        name: 'Iorgen',
        lastname: 'Silva'
    });
});

// Accept 'a+r' or only 'r'
router.get('/a?r', () => {
    res.send('router a?r');
});

// Accept only 'aaaaaa+r' and 'a+r'
router.get('/a+r', () => {
    res.send('router a+r');
});

// Accept 'abr'
router.get('/a*r', () => {
    res.send('router a+r');
});

module.exports = router;
