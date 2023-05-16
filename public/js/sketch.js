function setup() {
    createCanvas(400, 400);
    background(220);
    noStroke();
  }
  
  function draw() {

  }

  function mouseDragged(){
    console.log('Sending: ' + mouseX +', '+ mouseY);
   
    // data for emit 
    let data = {
      x: mouseX,
      y: mouseY
    }

    // drawing
    fill('blue');
    ellipse(data.x, data.y, 15);
    // actual emission 
    socket.emit('mouse', data);
  }

  // other people have appeared!
  socket.on('otherPeople', (data) => {
    fill('white');
    ellipse(data.x, data.y, 15);
  });
  
  function keyPressed(){
    if ( key == 'e' || key == 'E' ){
      background(220);
    }
  }