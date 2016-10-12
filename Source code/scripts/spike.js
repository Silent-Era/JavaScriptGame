let ctxObs=document.getElementById("obs").getContext("2d");
//TODO: Make it a class
function drawSpikesDown() {
    //ctxObs.strokeStyle='red';
    ctxObs.lineWidth=3;
    ctxObs.shadowBlur=20;
    let spikeOriginalCoords={
        x1:909,y1:425,
        x2:934,y2:425,
        x3:921.5,y3:325
    };
    let progress=0;
    function spikeDrawer(coords,progress) {
        ctxObs.beginPath();
        ctxObs.moveTo(coords.x1-progress,coords.y1);
        ctxObs.lineTo(coords.x2-progress,coords.y2);
        ctxObs.strokeStyle='red';
        ctxObs.lineTo(coords.x3-progress,coords.y3);
        ctxObs.lineTo(coords.x1-progress,coords.y1);
        ctxObs.stroke();
    }
    function animate() {
        window.requestAnimationFrame(function loop(){
            clearAll();
            spikeDrawer(spikeOriginalCoords,progress);
            progress+=2;
            if(spikeOriginalCoords-progress<=0){
                return;
            }
            window.requestAnimationFrame(loop);
        })
    }
    animate();
}
function drawSpikesUp() {
    //ctxObs.strokeStyle='red';
    ctxObs.lineWidth=3;
    ctxObs.shadowBlur=20;
    let spikeOriginalCoords={
        x1:909,y1:25,
        x2:934,y2:25,
        x3:921.5,y3:125
    };
    let progress=0;
    function spikeDrawer(coords,progress) {
        ctxObs.beginPath();
        ctxObs.moveTo(coords.x1-progress,coords.y1);
        ctxObs.lineTo(coords.x2-progress,coords.y2);
        ctxObs.strokeStyle='blue';
        ctxObs.lineTo(coords.x3-progress,coords.y3);
        ctxObs.lineTo(coords.x1-progress,coords.y1);
        ctxObs.stroke();
    }
    function animate() {
        window.requestAnimationFrame(function loop(){
            clearAll();
            spikeDrawer(spikeOriginalCoords,progress);
            progress+=2;
            if(spikeOriginalCoords-progress<=0){
                return;
            }
            window.requestAnimationFrame(loop);
        })
    }
    animate();
}
drawSpikesDown();
drawSpikesUp();
function clearAll(){
    ctxObs.clearRect(0,0,900,450);
}