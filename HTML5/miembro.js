var indexValue = 1;
showImg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
  var i;
  const img = document.querySelectorAll('img');
  const slider = document.querySelectorAll('.btm-slides span');
  if(e > img.length){indexValue = 1}
  if(e < 1){indexValue = img.length}
  for(i = 0; i < img.length; i++){
    img[i].style.display = "none";
  }
  for(i = 0; i < slider.length; i++){
    slider[i].style.background = "rgba(255,255,255,0.1)";
  }
  img[indexValue-1].style.display = "block";
  slider[indexValue-1].style.background = "rgb(173, 0, 241)";
}
const buttons = document.querySelectorAll("a");
buttons.forEach((button) => {
  button.onclick = function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);
    setTimeout(function(){
      ripple.remove();
    }, 600); // 1second = 1000ms
  }
});
