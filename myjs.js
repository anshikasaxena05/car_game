m = 0;
var y;
function start() {
    y = setInterval(run, 100);
    
    function run() {
        var x = document.getElementById('car');
        if (m==1350){
            clearInterval(y);
            m = 0
        }
        else {
            m = m + 15;
            
            x.style.marginLeft = m + 'px';
        }

    }
}
function stop() {
    clearInterval(y);
}


