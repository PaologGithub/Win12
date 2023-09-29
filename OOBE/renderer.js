setTimeout(() => {
    video = document.getElementById('video');
    nextbtn = document.getElementById('nextbtn');
    video.play();
    video.addEventListener('ended',vidFinished,false);
    nextbtn.addEventListener('click', next);
    vidFinished()
}, 10)

function vidFinished() {
    video = document.getElementById('video');
    video.remove();
    
}
function next() {
    alert('lol');
}