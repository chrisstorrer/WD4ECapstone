// select the form duh
const form = document.querySelector('#meme-form');
//select each input using attribute selector
const imageURL = document.querySelector('input[name="imageURL"]');
const topText = document.querySelector('input[name="topText"]');
const bottomText = document.querySelector('input[name="bottomText"]');
const results = document.getElementById('results');

function makeMeme(event){
	// Prevent default page reload behavior
	event.preventDefault();
	if (imageURL.value == '') {
		return;
	}
	// console.log("you called makeMeme on ");
	// console.dir(event.target);
	// log the values in the console
	// console.log(imageURL.value, topText.value, bottomText.value);
	//create a new image element for our meme
	// newImageURL = imageURL.value;
	newMemeImage = document.createElement('img');
	newMemeImage.src = imageURL.value;
	newMemeImage.classList.add('meme');

	//add classes for image styling
	
	// newTopText = topText.value;
	// newBottomText = bottomText.value;

	


	//Create new div for the meme's top text 
	const newTopText = document.createElement('div');
	newTopText.innerText = topText.value;
	newTopText.classList.add('memeText', 'topMemeText');

	const newBottomText = document.createElement('div');
	newBottomText.innerText = bottomText.value;
	newBottomText.classList.add('memeText', 'bottomMemeText');


	// create a new element to append to the results section
	const newMeme = document.createElement('div');
	newMeme.classList.add('meme');

	//create a new button to append to the meme
	const newButton = document.createElement("button");
	newButton.innerText = "Remove";
	//add the new element to the results section
	results.appendChild(newMeme);

	// newMeme = newMemeImage;
	newMeme.appendChild(newMemeImage);
	newMeme.appendChild(newTopText);
	newMeme.appendChild(newBottomText);
	// Append button to meme
	newMeme.append(newButton);

	
	

	form.reset();
}

form.addEventListener('submit', makeMeme);

results.addEventListener("click", function(event){
	console.log(event.target.tagName);
	// remove the div if the button is clicked
	if (event.target.tagName === "BUTTON") {
		event.target.parentElement.remove();
		// event.target.remove();
    	// console.log(event.target.parentElement);
		
	}
});