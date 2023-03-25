class NewsController {

    // [GET] /news
    index(rep,res){
        res.render('news')

    }
}

module.exports = new NewsController;