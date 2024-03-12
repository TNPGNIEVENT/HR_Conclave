var wrapper = document.getElementsByClassName("text-animation")[0];
wrapper.style.opacity="1";
wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

var spans = wrapper.getElementsByTagName("span");

for(var i=0;i<spans.length;i++){
  spans[i].style.animationDelay = i*80+"ms";
}  



window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0;i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');

    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}