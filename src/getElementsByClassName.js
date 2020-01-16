// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

	var result = [];

	var body = document.body

	

	function containsClass (element){

		


		if (element.childNodes.length === 0){

			if (element.classList === undefined){

				

			} else if (element.classList.contains(className)){
				console.log('pushed', element)
				result.push(element)
			}


		}





		else if (element.childNodes.length > 0){

			if(element.classList === undefined || !element.classList.contains(className)){

				_.each(element.childNodes, containsClass)

			} else if(element.classList.contains(className)){
			console.log('pushed', element)
			result.push(element)
			_.each(element.childNodes, containsClass)
		}
		}


		// else if (element.childNodes.length > 0){
		// 	_.each(element.childNodes, containsClass)
		// }


	}

	
	containsClass(body)

	return result

};

