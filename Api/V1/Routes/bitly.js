const router = require('express').Router();

const {
    create,
    read
} = require('../Controllers/bitly');

router.get('/create/:url', create);
router.get('/read/:url', read);


module.exports = router;