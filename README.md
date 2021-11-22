# NODE init source
노드 boiler plate 소스

## 소스구조
```
- bin                                       - executable
|   └ sequelize-init.js                     |   └ DB table schema 땡겨오는 sequelize.js
└ coverage                                  └ jest 테스트 수행 결과(소스 커버리지)가 담기는 폴더 
└ src                                       └ 소스 Root
|   └ api                                   |   └ /api/* 요청을 받는 핸들러    
|   └ batch                                 |   └ 배치 소스
|   └ config                                |   └ 설정 관련
|   └ controllers                           |   └ /* 요청을 받는 핸들러 (뷰)
|   └ middleware                            |   └ 미들웨어 (필터) 집합
|   └ models                                |   └ DB 연결
|       └ entity                            |   |  └ 미사용
|       └ mongo                             |   |  └ MongoDB Scheme
|       └ pg                                |   |  └ Postgres - sequelize 통해 generated 모델
|       └ query                             |   |  └ Postgres query (수기)
|   └ public                                |   └ static files
|   └ views                                 |   └ view (hbs 사용중)
|   └ service                               |   └ service of layer
|                                           |   
└ test                                      └ 테스트        
   └ http                                   |   └ jetbrain 툴에서 돌아가는 .http 테스트 파일
   └ jest                                   |   └ jest test framework 로 돌아가는 테스트 파일
```

## settings
### 콘피그 파일에 몽고DB, POSTGRESQL value 를 셋팅
```shell
touch src/config/secure/config.dev.env
```
```dotenv
MONGO_URL=mongodb://user:password@url/database
PG_HOST=localhost
PG_PORT=5432
PG_USER=test
PG_PASS=test
PG_DB=test
```

## postgresql 에는 com_user_mst 테이블 필요
```sql
CREATE TABLE "public".com_user_mst ( user_id serial NOT NULL , name varchar(100) , CONSTRAINT pk_com_user_mst_user_id PRIMARY KEY ( user_id ) )
```

## postgresql 접근용 모델 생성 command
```shell
node bin/sequelize-init.js
or
npm i -g pg
sequelize-auto -o "src/model/pg" -d {databaseName} -e postgres -h {host} -p 5432 -u {user} -x {password} 
```

## ETC
