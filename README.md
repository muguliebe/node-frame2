# NODE init source

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
PG_PASS=tese
PG_DB=test
```

## postgresql 에는 com_user_mst 테이블 필요
```sql
CREATE TABLE "public".com_user_mst ( user_id serial NOT NULL , name varchar(100) , CONSTRAINT pk_com_user_mst_user_id PRIMARY KEY ( user_id ) )
```

## postgresql 접근용 모델 생성 command
```shell
npm i -g pg
sequelize-auto -o "src/model/pg" -d {databaseName} -e postgres -h {host} -p 5432 -u {user} -x {password} 
```
