let colorPicker;

function setup() {
    createCanvas(400, 400);
    background(220);
    noStroke();
    colorPicker = createColorPicker(color('red'));
  }
  
  function draw() {
  }

  function mouseDragged(){
    //console.log('Sending: ' + mouseX +', '+ mouseY);
    // color
    let fillColor = colorPicker.color();
    console.log(fillColor);
    // data for emit 
    let data = {
      x: mouseX,
      y: mouseY,
      fill: fillColor.toString()
    }

    // drawing
    fill(fillColor);
    ellipse(data.x, data.y, 15);
    // actual emission 
    socket.emit('mouse', data);
  }

  // other people have appeared!
  socket.on('otherPeople', (data) => {
    fill(data.fill);
    ellipse(data.x, data.y, 15);
  });
  
  function keyPressed(){
    if ( key == 'e' || key == 'E' ){
      background(220);
    }
  }