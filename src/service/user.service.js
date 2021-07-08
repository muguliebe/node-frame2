import initModels from '../models/pg/init-models'

const models = initModels(sequelize)

export default class UserService {
    constructor() {}

    async getUsers() {
        logger.debug('UserService] getUsers')
        let users = await models.com_user_mst.findAll()
        return users
    }

    async getUser(id) {
        logger.debug('UserService] find id:' + id)
        let user = await models.com_user_mst.findAll({
            where: {
                user_id: id,
            },
        })
        return user
    }
}
