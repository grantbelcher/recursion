// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {


	var jason = ''

  			if (typeof obj === 'undefined' || typeof obj === 'functions'){
  				return '' 
  			}

	if (typeof obj === 'number'){

    return jason + obj
  } if (obj === null){
  	return jason + obj
  } if (typeof obj === 'boolean'){
  	return jason + obj
  } if (typeof obj === 'string'){
  	return '"' + obj + '"'
  } if (Array.isArray(obj)){
  		var strings = (obj.map(function(ele){
  			return stringifyJSON(ele)
  		}))
      return '[' + strings.join(',') + ']'
  }
  	if (typeof obj === 'object'){


  		var keys = []
  		var vals = []

  		if (Object.keys(obj).length === 0){
  			return '{}'
  		} else {

  		for (var key in obj){
  			keys.push(key)
  			vals.push(obj[key])
  		}


  		var objString = keys.reduce(function(acc, ele, i){



  			if(i < keys.length - 1){

  				if (typeof vals[i] === 'function' || typeof vals[i] === 'undefined'){
  					return acc
  				}

  			return acc += '"'+ ele + '"' + ':' + stringifyJSON(vals[i]) + ','
  		}   
  			if (i === keys.length - 1){
  				if (typeof vals[i] === 'function' || typeof vals[i] === 'undefined'){
  					return acc
  				}

  				return acc += '"'+ ele + '"' + ':' + stringifyJSON(vals[i])
  			}


  		}, '{')

  		return objString + '}'

  	}

  	}

};
