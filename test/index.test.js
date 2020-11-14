const api = require('../index.js')

api.covid('global', (err, res)=>{
  if(err) throw err
  console.log(res)
})