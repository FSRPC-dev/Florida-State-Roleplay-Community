const links=[...document.querySelectorAll('nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
addEventListener('scroll',()=>{let current=sections[0]?.id;for(const s of sections){if(s.getBoundingClientRect().top<190)current=s.id}links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))});

const music=document.getElementById('bgMusic');
const musicToggle=document.getElementById('musicToggle');
const musicVolume=document.getElementById('musicVolume');
if(music&&musicToggle&&musicVolume){
  music.volume=Number(musicVolume.value);
  musicToggle.addEventListener('click',async()=>{
    if(music.paused){
      try{await music.play();musicToggle.textContent='❚❚ Pause Music';}
      catch(e){musicToggle.textContent='♪ Play Music';}
    }else{
      music.pause();
      musicToggle.textContent='♪ Play Music';
    }
  });
  musicVolume.addEventListener('input',()=>{music.volume=Number(musicVolume.value);});
}
