console.log("javascript is working");
// Create the loader and queue our 3 images. Images will not 
// begin downloading until we tell the loader to start. 
var loader = new PxLoader(), 
    backgroundImg = loader.addImage('images/headerbg.jpg'), 
    treesImg = loader.addImage('images/trees.jpg'), 
    ufoImg = loader.addImage('images/ufo.png'); 
 
// callback that will be run once images are ready 
loader.addCompletionListener(function() { 
    var canvas = document.getElementById('sample1-canvas'), 
        ctx = canvas.getContext('2d'); 
 
    ctx.drawImage(backgroundImg, 0, 0); 
    ctx.drawImage(treesImg, 0, 104); 
    ctx.drawImage(ufoImg, 360, 50); 
}); 
 
// begin downloading images 
loader.start(); 