// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');
var priceTag = document.querySelector('.price-tag');
var overlay = document.querySelector('.overlay');
var randomButton = document.querySelector('.random-cover-button');
var makeYourOwnCoverButton = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var savedView = document.querySelector('.saved-view');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeBookButton = document.querySelector('.create-new-book-button');
var coverInput = document.querySelector('#cover');
var titleInput = document.querySelector('#title');
var taglineOneInput = document.querySelector('#descriptor1');
var taglineTwoInput = document.querySelector('#descriptor2');
var savedCoversDisplay = document.querySelector('.saved-covers-section');
var miniCover = document.querySelector('.mini-cover');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover = {};

// Add your event listeners here 👇
window.addEventListener('load', loadRandomPoster);
randomButton.addEventListener('click', loadRandomPoster);
makeYourOwnCoverButton.addEventListener('click', showForm);
homeButton.addEventListener('click', showHome);
makeBookButton.addEventListener('click', makeBook);
saveCoverButton.addEventListener('click', saveBook);
viewSavedButton.addEventListener('click', showSaved);
savedCoversDisplay.addEventListener('dblclick', deleteCover);

// Create your event handlers and other functions here 👇
// goal: delete cover from savedCovers once the user dblclicks the specified cover
// 

function deleteCover(event) {
  // miniCover.innerHTML = ''
  // savedCovers.splice(i, 1)
  var removeCover = event.target.parentNode.id.remove;
  for (var i = 0; i < savedCovers.length; i++){
    if (removeCover.id === savedCovers[i].id) {
      //splice or remove method
      savedCovers.splice(i, 1);
    }
  }
}

function saveBook() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function makeBook(event) {
  coverImage.src = coverInput.value; 
  coverTitle.innerText = titleInput.value;
  taglineOne.innerText = taglineOneInput.value;
  taglineTwo.innerText = taglineTwoInput.value;
  covers.push(coverInput.value);
  titles.push(titleInput.value);
  descriptors.push(taglineOneInput.value);
  descriptors.push(taglineTwoInput.value);
  currentCover = createCover(coverImage.src, coverTitle.innerText, taglineOne.innerText, taglineTwo.innerText);
  event.preventDefault();
  showHome();
};

function loadRandomPoster() {
    coverImage.src = covers[getRandomIndex(covers)]; 
    coverTitle.innerText = titles[getRandomIndex(titles)];
    taglineOne.innerText = descriptors[getRandomIndex(descriptors)];
    taglineTwo.innerText = descriptors[getRandomIndex(descriptors)];
    currentCover = createCover(coverImage.src, coverTitle.innerText, taglineOne.innerText, taglineTwo.innerText);
  };

function showForm() {
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden')
  makeYourOwnCoverButton.classList.add('hidden')
}

function showSaved() {
  savedView.classList.remove('hidden');
  homeView.classList.add('hidden');  
  saveCoverButton.classList.add('hidden');  
  randomCoverButton.classList.add('hidden');  
  homeButton.classList.remove('hidden');
  viewSavedButton.classList.add('hidden');
  makeYourOwnCoverButton.classList.remove('hidden');
  displaySavedCovers();
}

function displaySavedCovers() {
  savedCoversDisplay.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversDisplay.innerHTML +=
    `
      <div class = 'mini-cover' id=${savedCovers[i].id}>
        <img class="cover-image" src= ${savedCovers[i].coverImg}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> 
        and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </div>
    `    
    }
}

function showHome() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  homeButton.classList.add('hidden');
  viewSavedButton.classList.remove('hidden');
  makeYourOwnCoverButton.classList.remove('hidden');

}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover;
}
