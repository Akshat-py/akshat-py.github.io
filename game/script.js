var left = 0;
document.addEventListener('keydown', function(e){
    var car = document.querySelector("div.car");
    if(e.keyCode == 37) {
        if(parseInt(window.getComputedStyle(car).getPropertyValue('left')) <= 0) {
            
        } 
        left++;
        car.style.setProperty('--left', String(left));
    }
});
setInterval(() => {
    
}, 10);