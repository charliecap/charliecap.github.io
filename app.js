const today = new Date();
const before = new Date("May 1 2020 10:00:00");
const update = dateFns.distanceInWords(today, before, {addSuffix: true});




window.onload = function () {
  document.body.classList.remove("is-preload");
};
window.ontouchmove = function () {
  return false;
};
window.onorientationchange = function () {
  document.body.scrollTop = 0;
};


const html = `
<span>Created ${update}</span>
`;

document.querySelector('#footer').innerHTML += html;

window.onload = function () {
  document.body.classList.remove("is-preload");
};
window.ontouchmove = function () {
  return false;
};
window.onorientationchange = function () {
  document.body.scrollTop = 0;
};



//  dateFns.distanceInWords(now, before, {addSuffix: true})

//  time.innerHTML = dateFns.distanceInWords(now, before, {addSuffix: true});



// var textWrapper = document.querySelector('.ml7 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml7 .letter',
//     translateY: ["1.1em", 0],
//     translateX: ["0.55em", 0],
//     translateZ: 0,
//     rotateZ: [180, 0],
//     duration: 750,
//     easing: "easeOutExpo",
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml7',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
