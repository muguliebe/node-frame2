import { Router } from 'express'
import { AsyncWrapper } from '../utils/asyncWrapper'
import UserService from '../service/user.service'

//==============================================================================
// initialize
const router = Router()
const service = new UserService()

//==============================================================================
// Default Func for Controller
export const initRouter = () => {
    const thisRouter = {
        baseUrl: '/users',
        router: router,
    }

    router.get('/', AsyncWrapper(getUsers))
    router.get('/:id', AsyncWrapper(getUser))
    router.post('/', AsyncWrapper(createUser))
    router.put('/:id', AsyncWrapper(updateUser))
    return thisRouter
}

//==============================================================================
/*
 사용자 조회
 조회 조건은 body 부에 json "where" 로 던진다.
 ref: https://sequelize.org/master/manual/model-querying-basics.html#the-basics
 ex) {
          "where": {"user_name": "Chris"
          ,"email": "xbdz993@example.com"
          }
      }
 */
export const getUsers = async (req, res) => {
    logger.debug('UserApi] getUsers')
    const result = await service.getUsers(req.body.where)
    res.json(result)
}

/**
 * 사용자 조회 by 사용자 ID
 */
export const getUser = async (req, res) => {
    const result = await service.getUserByPk(req.params.id)
    res.json(result)
}

/*
 사용자 생성
 생성 조건은 body 부 json "data"로 던진다.
 ex){
        "data": {
            "email": "xbdz993@example.com",
            "user_name": "Chris",
            "user_stat_cd": "01",
            "user_type_cd": "01",
            "last_login_dt": "2021-02-16T10:36:56.320Z",
            "pwd": "John bought new car. Anne is shopping. ",
            "use_yn": "N",
            "create_user_id": null,
            "create_dt": "2021-01-09T10:27:26.336Z",
            "update_user_id": null,
            "update_dt": null
        }
    }
 */
export const createUser = async (req, res) => {
    const result = await service.createUser(req.body.data)
    res.json(result)
}

/*
 사용자 단건 수정
 수정 조건은 body 부 json "data"로 던진다.
 ex){
        "data": {
            "email": "xbdz993@example.com",
        }
     }
 */
export const updateUser = async (req, res) => {
    // validation
    const existUser = await service.getUserByPk(req.params.id)
    if (existUser === null) return res.status(400).send('there is no userId:' + req.params.id)

    // update
    const result = await service.updateUser(req.params.id, req.body.data)
    res.json(result)
}
