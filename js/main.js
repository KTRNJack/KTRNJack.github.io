/* resume-site v2 — vanilla enhancements, zero dependencies */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* year */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* career uptime: days since 2022-07 + live hh:mm:ss */
  var up = document.getElementById('uptime');
  if (up) {
    var t0 = new Date('2022-07-01T09:00:00+08:00').getTime();
    var pad = function (n) { return String(n).padStart(2, '0'); };
    var tick = function () {
      var s = Math.floor((Date.now() - t0) / 1000);
      var d = Math.floor(s / 86400);
      up.textContent = d + 'd ' + pad(Math.floor(s / 3600) % 24) + ':' + pad(Math.floor(s / 60) % 60) + ':' + pad(s % 60);
    };
    tick();
    if (!reduced) setInterval(tick, 1000);
  }

  /* scroll progress bar */
  var bar = document.getElementById('progressBar');
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* reveal on scroll */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* custom cursor (fine pointers only) */
  var fine = window.matchMedia('(pointer: fine)').matches;
  var dot = document.getElementById('curDot');
  var ring = document.getElementById('curRing');
  if (fine && !reduced && dot && ring) {
    var mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener('pointermove', function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
    (function loop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = 'translate(' + (mx - 3) + 'px,' + (my - 3) + 'px)';
      ring.style.transform = 'translate(' + (rx - 17) + 'px,' + (ry - 17) + 'px)';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, .cs, .etc li').forEach(function (el) {
      el.addEventListener('pointerenter', function () { document.body.classList.add('cur-hover'); });
      el.addEventListener('pointerleave', function () { document.body.classList.remove('cur-hover'); });
    });
  }

  /* card tilt + hover glow position */
  if (fine && !reduced) {
    document.querySelectorAll('.tilt').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (px * 100) + '%');
        card.style.setProperty('--my', (py * 100) + '%');
        card.style.transform =
          'perspective(1100px) rotateX(' + ((0.5 - py) * 2.4) + 'deg) rotateY(' + ((px - 0.5) * 2.4) + 'deg)';
      });
      card.addEventListener('pointerleave', function () {
        card.style.transform = '';
      });
    });
  }
})();
