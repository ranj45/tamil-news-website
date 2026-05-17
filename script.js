 document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.querySelectorAll('.pg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.querySelector('i')) return;
      document.querySelectorAll('.pg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  function updateTime() {
    const now = new Date();
    const d = now.toLocaleString('ta-IN', {
      weekday:'short', day:'numeric', month:'long',
      year:'numeric', hour:'2-digit', minute:'2-digit', hour12:true
    });
    document.querySelector('.footer-time').innerHTML = '<i class="fa-regular fa-clock"></i> ' + d;
  }
  updateTime();
  setInterval(updateTime, 60000);