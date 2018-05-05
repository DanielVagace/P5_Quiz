var model = require("../models/index");

exports.index = (req,res,next) => {
    model.models.quiz.findAll()
        .then( quizzes => {
            res.render("quizzes", {quizzes});
        })
    .catch(error => next(error))

}
