// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

	var body = document.body

	var desiredElements = [];

	var containsClass = function(body){

		if (body.classList && body.classList.contains(className)){

			desiredElements.push(body)

		}
		if (body.childNodes.length > 0){

			_.each(body.childNodes, containsClass)
		}
		
	}

	containsClass(body)

	return desiredElements

};

