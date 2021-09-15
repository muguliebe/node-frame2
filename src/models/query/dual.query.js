function dual() { }

dual.selectDual = `
    select 1 as first
         , 2 as second
      from (select 1) a
     where 1 = :one
`
module.exports = dual
