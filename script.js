
var mb=document.querySelector('.menu-btn'), nl=document.getElementById('navlinks');
if(mb){mb.addEventListener('click',function(){var o=nl.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'\u2715':'\u2630';});
document.querySelectorAll('#navlinks a').forEach(function(a){a.addEventListener('click',function(){nl.classList.remove('open');mb.textContent='\u2630';});});}
document.querySelectorAll('.tile').forEach(function(t){
  var v=t.querySelector('video'), b=t.querySelector('.play');
  b.addEventListener('click',function(){t.classList.add('playing');v.muted=false;v.setAttribute('controls','');v.play();});
});
