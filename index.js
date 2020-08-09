const canvas2d = document.querySelector('#canvas2d');
canvas2d.height = 2000;
canvas2d.width = 2000;
const ctx = canvas2d.getContext('2d');
ctx.translate(1000, 1000);

const draw = () => {
  ctx.clearRect(0, 0, 2000, 2000);
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(0, 0, 900, 0, 2*Math.PI, true);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(0, 0, 830, 0, 2*Math.PI, true);
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "black";
  ctx.save();
  ctx.beginPath();
  for(let i = 0; i < 12; ++i) {
      ctx.fillRect(-20, -830, 40, 60);
      ctx.rotate(Math.PI / 6);
  }
  ctx.closePath();
  ctx.restore();


  ctx.save();
  ctx.beginPath();
  for(let i = 0; i < 60; ++i) {
      ctx.fillRect(-20, -830, 20, 40);
      ctx.rotate(Math.PI / 30);
  }
  ctx.closePath();
  ctx.restore();

  ctx.beginPath();
  ctx.font = "150px serif"
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for(let i = 0; i < 12; ++i) {
    const x = 680 * Math.sin(i * Math.PI / 6);
    const y = -680 * Math.cos(i *Math.PI / 6);

    ctx.fillText(i ? i : 12, x, y);
  }
  ctx.closePath();
  ctx.restore();

  const date = new Date();

  const hour = date.getHours();

  ctx.save();
  ctx.beginPath();
  ctx.rotate(Math.PI * hour / 6 );
  ctx.fillRect(0, -400, 40, 400);
  ctx.closePath();
  ctx.restore();

  const minute = date.getMinutes();

  ctx.save();
  ctx.beginPath();
  ctx.rotate(Math.PI * minute / 30);
  ctx.fillRect(0, -600, 30, 600);
  ctx.closePath();
  ctx.restore();

  const seconds = date.getSeconds();

  ctx.save();
  ctx.beginPath();
  ctx.rotate(Math.PI * seconds / 30);
  ctx.fillRect(00, -650, 20, 650);
  ctx.closePath();
  ctx.restore();

  requestAnimationFrame(draw)
}

draw();