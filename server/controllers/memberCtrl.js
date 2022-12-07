const findAll = async (req, res, next) => {
    try {
        const result = await req.context.models.members.findAll()
        return res.send(result)
    } catch (error) {
        next(error)
    }
}

const findOne = async (req, res, next) => {
    try {
        const result = await req.context.models.members.findOne({
            where: { id_code: req.params.id }
        })
        return res.send(result)
    } catch (error) {
        next(error)
    }
}

export default {
    findAll,
    findOne,
}