const findAll = async (req, res, next) => {
    try {
        const result = await req.context.models.books.findAll({
            include: [{
                all: true
            }]
        })
        return res.send(result)
    } catch (error) {
        next(error)
    }
}

const findOne = async (req, res, next) => {
    try {
        const result = await req.context.models.books.findOne({
            where: { id_books: req.params.id }
        })
        return res.send(result)
    } catch (error) {
        next(error)
    }
}



const create = async (req, res, next) => {
    try {
        const result = await req.context.models.books.create({
            code_book : req.body.code_book,
            title: req.body.title,
            author: req.body.author,
            stock: req.body.stock
        })
        return res.send(result)
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await req.context.models.books.update({
            code_book : req.body.code_book,
            title: req.body.title,
            author: req.body.author,
            stock: req.body.stock
        }, {
            returning: true, where: { id_book: req.params.id }
        })
        return res.send(result)
    } catch (error) {
        next(error)
    }
}

const deleted = async (req, res, next) => {
    try {
        const result = await req.context.models.books.destroy({
            where: { id_book: req.params.id }
        })
        return res.send('delete ' + result + ' rows')
    } catch (error) {
        next(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted
}