// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	
	var desiredElements = []
	var desiredClasses = []

	var className = '.' + className
	
	var x = $('*')
		_.each(x, function(ele){

		var classes = ele.classList
		
		if (classes.length > 0){
					
			desiredElements.push(ele)
		}

		})


		for (var i = 0; i < desiredElements.length; i++){

			for (var j = 0; j < desiredElements[i].classList.length; j++){

				console.log('.' + desiredElements[i].classList[j], className)
				if (('.' + desiredElements[i].classList[j]) === className){

					desiredClasses.push(desiredElements[i])
				}
			}
		}





	return desiredClasses
};

