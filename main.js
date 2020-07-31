class Agent {
  constructor(id, x, y) {
    this.id = id;
    this.x = x; 
    this.y = y;
  }
  forward(){this.y -= 1;}
  back(){this.y += 1;}
  left(){this.x -= 1;}
  right(){this.x += 1;}
}

function draw(){
  if (canvas.getContext) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, 150, 150);
    ctx.beginPath();
    ctx.arc(agent.x, agent.y, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(255,0,0,1.0)" ;
    ctx.fill();
    ctx.stroke();
  }
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeRect(0, 0, 150, 150);

var agent = new Agent(1,75, 75);
draw();

$('#forward').click(
  function forward(){
    agent.forward();
    draw();
  }
);

$('#back').click(
  function back() {
    agent.back();
    draw();
  }
);

$('#left').click(
  function left(){
    agent.left();
    draw();
  }
);

$('#right').click(
  function right(){
    agent.right();
    draw();
  }
);

$('#rand').click(
  function rand(){
    var rnd;
    for (let n = 0; n < 5; n++) {
      rnd = Math.random();
      if (0.00 <= rnd < 0.25) {agent.forward();}
      else if (0.25 <= rnd < 0.50) {agent.back();}
      else if (0.50 <= rnd < 0.75) {agent.right();}
      else {agent.left();}
    }
    draw();
  }
);