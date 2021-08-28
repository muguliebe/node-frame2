# NODE init source

## settings
### 콘피그 파일에 몽고DB, POSTGRESQL value 를 셋팅
```shell
touch src/config/secure/config.dev.env
```
```dotenv
MONGO_URL=mongodb://user:password@url/database
PG_HOST=
PG_PORT=
PG_USER=
PG_PASS=
PG_DB=
```

## postgresql 접근용 모델 생성 command
```shell
sequelize-auto -o "./pg" -d {databaseName} -e postgres -h {host} -p 5432 -u {user} -x {password} 
```

## ETC
deploy test
