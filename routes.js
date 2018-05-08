var express   = require('express');
var router    = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
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
