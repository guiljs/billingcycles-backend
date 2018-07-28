const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next() //importante para ir para o próximo middleware na cadeia de middlewares.
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push('Campo : ' + error.path + ' - ' + error.message))
    return errors
}