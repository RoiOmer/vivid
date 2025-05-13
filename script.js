window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    const main = document.getElementById('main-content');
    main.classList.remove('hidden');
    main.classList.add('visible');
  }, 50); // 3.5 seconds coral animation
});

<script>
  const canvas = document.getElementById('geometricCanvas');
  const ctx = canvas.getContext('2d');
  let points = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generatePoints();
  }

function generatePoints() {
  points = [];
  for (let i = 0; i < 80; i++) { // More points for higher quality
    points.push({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * canvas.height / 2,
      centerX: Math.random() * canvas.width,
      centerY: Math.random() * canvas.height
    });
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = 200; // Limit the canvas height to 200px
  generatePoints();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(255, 100, 100, 0.6)'; // Light red, more visible

  ctx.lineWidth = 1;

  for (let i = 0; i < points.length; i++) {
    points[i].x += Math.sin(Date.now() * 0.0005 + i) * 0.2;
    points[i].y += Math.cos(Date.now() * 0.0005 + i) * 0.2;

    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}


    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  draw();
</script>
