const {body} = require('express-validator');

const validate = () => {
  return  [
        body('name')
            .not().isEmpty()
            .trim()
            .escape(),
        body('genre')
            .not().isEmpty()
            .trim()
            .escape()
    ]
}

module.exports = validate;