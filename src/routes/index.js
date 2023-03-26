const newRouter = require('./news');
const siteRouter = require('./site');

function router(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
}

module.exports = router;
