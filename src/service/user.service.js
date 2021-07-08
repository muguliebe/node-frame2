import initModels from '../models/pg/init-models'

const models = initModels(sequelize)

export default class UserService {
    constructor() {}

    async getUsers(where) {
        logger.debug('UserService] getUsers')
        let users = await models.com_user_mst.findAll({
            where: where,
        })
        return users
    }

    async getUserByPk(id) {
        logger.debug('UserService] find id:' + id)
        return await models.com_user_mst.findByPk(id)
    }

    async createUser(data) {
        logger.debug('UserService] create user')
        const user = await models.com_user_mst.create(data)
        logger.debug('UserService] created user id:' + user.user_id)
        return user
    }

    async updateUser(id, data) {
        logger.debug('UserService] update user')

        let result = await models.com_user_mst.update(data, {
            where: {
                user_id: id,
            },
        })

        if (result[0] > 0) logger.debug('UserService] update user success')
        else logger.debug('UserService] update user failed')
    }
}
