const fetch = require('node-fetch');

module.exports.covid = function(country = "global", callback){
  if (typeof callback != 'function'){
    throw new Error('callback is\'t a function!');
    return;
  }
  if(country == "global"){
    fetch("https://covid19.mathdro.id/api")
      .then(result => result.json())
      .then(res=> {
       	var info = {
          confirmed: res.confirmed.value.toLocaleString(),
          recovered: res.recovered.value.toLocaleString(),
          deaths: res.deaths.value.toLocaleString()
      	}
        return callback(null, info)
      })
  } else {
  	fetch(`https://covid19.mathdro.id/api/countries/${country}`)
  	  .then(result => result.json())
  	  .then(res => {
  	    var info = {
          confirmed: res.confirmed.value.toLocaleString(),
          recovered: res.recovered.value.toLocaleString(),
          deaths: res.deaths.value.toLocaleString()
        }
        return callback(null, info)
  	  })
  	  .catch(error => {
  	    return callback(`I can't found country with name ${country}!`, null)
  	  })
  }
}