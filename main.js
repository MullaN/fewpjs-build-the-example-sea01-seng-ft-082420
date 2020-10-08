// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorModal = document.getElementById('modal');
errorModal.className = 'hidden';

let hearts = document.getElementsByClassName('like-glyph');
for (let i = 0; i < hearts.length; i++){
  hearts[i].addEventListener('click', function(event){
    changeOfHeart(event);
  })
}

function changeOfHeart(event){
  let currentHeart = event.target.textContent;
  if (currentHeart == EMPTY_HEART){
    mimicServerCall()
      .then(function(){
        event.target.textContent = FULL_HEART;
        event.target.className = 'activated-heart'
      })
      .catch(function(error){
        errorModal.innerText = error;
        errorModal.classList.remove('hidden');
        setTimeout(() => errorModal.className = 'hidden', 5000);
      });
  } else {
    event.target.textContent = EMPTY_HEART;
    event.target.className = 'like-glyph'
  }
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
