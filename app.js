document.querySelector('#submit').addEventListener
('click', getJokes);

function getJokes(e){
	var number= document.querySelector('#number').value;

	const xhr = new XMLHttpRequest();

	xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

	xhr.onload= function(){
		if(this.status==200)
		{
			const response= JSON.parse(this.responseText);


			let content='';

			if(response.type==='success'){
				response.value.forEach(function(joke){
					content += `<li>${joke.joke}</li>`
				});

				console.log(content);
			}
			document.querySelector('.jokes').innerHTML= content;
		}
		
	}
		xhr.send();

	e.preventDefault();
}