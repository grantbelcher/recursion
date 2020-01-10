// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {


	var jason = ''
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

};
