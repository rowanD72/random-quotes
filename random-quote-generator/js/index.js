$(document).ready(function(){
  $('#quoteBtn').click(function(){
    $('#message').load('https://talaikis.com/api/quotes/random/ ');
  });
  // $("#twitterBtn").click (function(){
  //   $.post("https://talaikis.com/api/quotes/random/");
  // });
  	function tweet(message) {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='   + encodeURIComponent(message));
}

var msg;
function tweetHandler() {
  tweet($(msg).text()); 
  //tweet(msg);
}
   $('#twitterBtn').on('click', tweetHandler);
});