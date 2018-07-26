const router = require('express').Router();

const algoliasearch = require('algoliasearch');
const client = algoliasearch('9FA4XZOPYX', 'c6fa56156a6b71235a8693e81296062b');
const index = client.initIndex('myecommerce');



router.get('/', (req, res, next) => {
  if (req.query.query) {
    index.search({
      query: req.query.query,
      page: req.query.page,
    }, (err, content) => {
      res.json({
        success: true,
        message: "Here is your search",
        status: 200,
        content: content,
        search_result: req.query.query
      });
    });
  }
});


module.exports = router;