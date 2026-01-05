const text = "I'm a second-year Computer Science student at IPB University. Navigating the IT world has been a wild ride of exploration. I’ve always been fascinated by how technology works under the hood, but recently, everything clicked when I realized code isn't just about logic—it's about creation. My curiosity has now laser-focused on one dynamic area: Web Development, specifically Front-End. To me, coding isn't just about syntax; it's about crafting visual experiences that users enjoy. Right now, I'm diving deep into JavaScript to bring static pages to life. My goal is simple: to build websites that are not only functional but also beautiful and interactive. This journey has only just begun, but I'm excited to keep learning and turning creative designs into reality.";
  let i = 0;
  const speed = 30;
  const typingEl = document.getElementById("typing");

  function typeWriter() {
    if (i < text.length) {
      typingEl.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();