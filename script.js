/* ==========================================================
   PROJECT AROGYA — PRODUCTION SCRIPT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  /* ================= DARK / LIGHT THEME TOGGLE ================= */
  const themeBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("arogya-theme");
  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
    themeBtn.innerText = savedTheme === "dark" ? "☀" : "☾";
  }

  themeBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    if (current === "dark") {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("arogya-theme", "light");
      themeBtn.innerText = "☾";
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("arogya-theme", "dark");
      themeBtn.innerText = "☀";
    }
  });

  /* ================= SMART NAVBAR SCROLL HIDE / SHOW ================= */
  const header = document.querySelector(".site-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 50) {
      header.classList.remove("hidden");
    } else if (currentScrollY > lastScrollY) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
  });

  /* ================= MOBILE NAV MENU ================= */
  const navBtn = document.getElementById("nav-toggle");
  const nav = document.querySelector(".main-nav");

  navBtn.addEventListener("click", () => {
    nav.classList.toggle("mobile-open");
  });

  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("mobile-open"));
  });

  /* ================= HERO IMAGE SLIDER (pic1 - pic4.png) ================= */
  const heroImages = [
    "images/pic1.png",
    "images/pic2.png",
    "images/pic3.png",
    "images/pic4.png"
  ];

  let imageIndex = 0;
  let autoSlideTimer = null;

  const heroPhoto = document.getElementById("hero-photo");
  const dotsContainer = document.getElementById("slider-dots");

  heroImages.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = `dot ${idx === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => {
      imageIndex = idx;
      updateSlider();
      resetTimer();
    });
    dotsContainer.appendChild(dot);
  });

  function updateSlider() {
    if (!heroPhoto) return;
    heroPhoto.style.opacity = "0";
    setTimeout(() => {
      heroPhoto.src = heroImages[imageIndex];
      heroPhoto.style.opacity = "1";
      document.querySelectorAll("#slider-dots .dot").forEach((d, i) => d.classList.toggle("active", i === imageIndex));
    }, 300);
  }

  function nextSlide() {
    imageIndex = (imageIndex + 1) % heroImages.length;
    updateSlider();
  }

  function startTimer() {
    autoSlideTimer = setInterval(nextSlide, 4000);
  }

  function resetTimer() {
    clearInterval(autoSlideTimer);
    startTimer();
  }

  const nextBtn = document.getElementById("next-photo");
  const prevBtn = document.getElementById("prev-photo");

  if (nextBtn) nextBtn.onclick = () => { nextSlide(); resetTimer(); };
  if (prevBtn) prevBtn.onclick = () => {
    imageIndex = (imageIndex - 1 + heroImages.length) % heroImages.length;
    updateSlider();
    resetTimer();
  };

  const sliderCard = document.getElementById("slider-card");
  if (sliderCard) {
    sliderCard.addEventListener("mouseenter", () => clearInterval(autoSlideTimer));
    sliderCard.addEventListener("mouseleave", startTimer);
  }

  startTimer();

  /* ================= PROJECT WEEK DATA ================= */
  const weeks = {
    1: {
      title: "Week 1 — Initial Visit & Location Assessment",
      description: "Visited the proposed community location to evaluate general environmental, health, and sanitation conditions.",
      points: [
        "Assessed general cleanliness and hygiene standards",
        "Identified visible sanitation & environmental concerns",
        "Selected the final location for project execution"
      ],
      photos: [
        "images/WhatsApp Image 2025-11-21 at 7.30.51 PM (1).jpeg",
        "images/WhatsApp Image 2025-11-21 at 7.30.51 PM.jpeg",
        "images/WhatsApp Image 2025-11-21 at 7.30.52 PM (1).jpeg",
        "images/WhatsApp Image 2025-11-21 at 7.30.52 PM.jpeg"
      ]
    },
    2: {
      title: "Week 2 — Survey Initiation & VRO Approval",
      description: "Obtained official survey authorization from the Village Revenue Officer (VRO) and initiated household survey rounds.",
      points: [
        "Received formal approval from the Village Revenue Officer (VRO)",
        "Initiated household and community-level surveys",
        "Interacted with residents to collect preliminary data"
      ],
      photos: [
        "images/WhatsApp Image 2025-11-21 at 7.59.41 PM (1).jpeg",
        "images/WhatsApp Image 2025-11-21 at 7.59.41 PM (2).jpeg",
        "images/WhatsApp Image 2025-11-21 at 7.59.41 PM.jpeg",
        "images/WhatsApp Image 2025-11-21 at 7.59.42 PM.jpeg"
      ]
    },
    3: {
      title: "Week 3 — Community Survey & Field Observations",
      description: "Expanded field coverage across various residential blocks while recording direct environmental observations.",
      points: [
        "Continued door-to-door household interactions",
        "Observed surrounding drainage and waste conditions",
        "Documented localized sanitation and hygiene issues"
      ],
      photos: [
        "images/WhatsApp Image 2025-11-21 at 8.08.35 PM (1).jpeg",
        "images/WhatsApp Image 2025-11-21 at 8.08.35 PM (2).jpeg",
        "images/WhatsApp Image 2025-11-21 at 8.08.35 PM.jpeg",
        "images/WhatsApp Image 2025-11-21 at 8.08.36 PM.jpeg"
      ]
    },
    4: {
      title: "Week 4 — Detailed Survey & Documentation",
      description: "Recorded recurring environmental concerns and categorized field survey findings.",
      points: [
        "Expanded survey reach across the community",
        "Recorded recurring hygiene-related observations",
        "Organized survey feedback for systematic analysis"
      ],
      photos: [
        "images/WhatsApp Image 2025-11-21 at 8.09.54 PM (1).jpeg",
        "images/WhatsApp Image 2025-11-21 at 8.09.54 PM.jpeg",
        "images/WhatsApp Image 2025-11-21 at 8.09.55 PM.jpeg",
        "images/WhatsApp Image 2025-11-21 at 8.09.58 PM.jpeg"
      ]
    },
    5: {
      title: "Week 5 — Completion of Field Survey",
      description: "Concluded primary household surveying and consolidated field observation records.",
      points: [
        "Completed final household survey questionnaires",
        "Consolidated resident feedback & field records",
        "Finalized field-based observation phase"
      ],
      photos: [
        "images/WhatsApp Image 2025-11-21 at 8.10.25 PM (1).jpeg",
        "images/WhatsApp Image 2025-11-21 at 8.10.25 PM.jpeg",
        "images/WhatsApp Image 2025-11-21 at 8.10.26 PM (1).jpeg",
        "images/WhatsApp Image 2025-11-21 at 8.10.26 PM.jpeg"
      ]
    },
    6: {
      title: "Week 6 — Data Compilation & Report Preparation",
      description: "Shifted from field study to data synthesis, report drafting, and observational analysis.",
      points: [
        "Organized and processed raw household survey data",
        "Summarized core health and sanitation findings",
        "Drafted formal Community Service Project documentation"
      ],
      photos: []
    },
    7: {
      title: "Week 7 — Final Documentation & Digital Showcase",
      description: "Finalized official project documentation and built the digital showcase platform.",
      points: [
        "Completed the 7-week Community Service Project report",
        "Organized overall project observations & insights",
        "Developed and launched the Project Arogya digital showcase"
      ],
      photos: []
    }
  };

  /* ================= JOURNEY SLIDER LOGIC ================= */
  let currentJourneyWeek = 1;
  let currentJourneyPhotoIndex = 0;

  const journeySliderWrapper = document.getElementById("journey-slider-wrapper");
  const journeyPhoto = document.getElementById("journey-photo");
  const journeyDotsContainer = document.getElementById("journey-slider-dots");
  const prevJourneyBtn = document.getElementById("prev-journey-photo");
  const nextJourneyBtn = document.getElementById("next-journey-photo");

  function updateJourneySlider() {
    const activeWeekData = weeks[currentJourneyWeek];

    if (!activeWeekData || activeWeekData.photos.length === 0) {
      if (journeySliderWrapper) journeySliderWrapper.style.display = "none";
      return;
    }

    if (journeySliderWrapper) journeySliderWrapper.style.display = "flex";

    journeyPhoto.style.opacity = "0";
    setTimeout(() => {
      journeyPhoto.src = activeWeekData.photos[currentJourneyPhotoIndex];
      journeyPhoto.style.opacity = "1";

      journeyDotsContainer.innerHTML = "";
      activeWeekData.photos.forEach((_, idx) => {
        const dot = document.createElement("div");
        dot.className = `dot ${idx === currentJourneyPhotoIndex ? "active" : ""}`;
        dot.onclick = () => {
          currentJourneyPhotoIndex = idx;
          updateJourneySlider();
        };
        journeyDotsContainer.appendChild(dot);
      });
    }, 250);
  }

  if (nextJourneyBtn) {
    nextJourneyBtn.onclick = () => {
      const activeWeekData = weeks[currentJourneyWeek];
      if (activeWeekData && activeWeekData.photos.length > 0) {
        currentJourneyPhotoIndex = (currentJourneyPhotoIndex + 1) % activeWeekData.photos.length;
        updateJourneySlider();
      }
    };
  }

  if (prevJourneyBtn) {
    prevJourneyBtn.onclick = () => {
      const activeWeekData = weeks[currentJourneyWeek];
      if (activeWeekData && activeWeekData.photos.length > 0) {
        currentJourneyPhotoIndex = (currentJourneyPhotoIndex - 1 + activeWeekData.photos.length) % activeWeekData.photos.length;
        updateJourneySlider();
      }
    };
  }

  /* ================= WEEK SWITCHING SYSTEM ================= */
  const weekButtons = document.querySelectorAll(".week-btn");
  const weekTitle = document.getElementById("week-title");
  const weekDescription = document.getElementById("week-description");
  const weekPoints = document.getElementById("week-points");

  function loadWeek(number) {
    currentJourneyWeek = number;
    currentJourneyPhotoIndex = 0;

    const data = weeks[number];
    if (!data) return;

    weekTitle.innerText = data.title;
    weekDescription.innerText = data.description;

    weekPoints.innerHTML = "";
    data.points.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      weekPoints.appendChild(li);
    });

    updateJourneySlider();
  }

  weekButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      weekButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadWeek(parseInt(btn.dataset.week));
    });
  });

  loadWeek(1);

  /* ================= FULLSCREEN LIGHTBOX MODAL ================= */
  if (journeyPhoto) {
    journeyPhoto.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.className = "lightbox-modal";
      modal.innerHTML = `<img src="${journeyPhoto.src}" alt="Enlarged Survey Photo">`;
      document.body.appendChild(modal);
      modal.onclick = () => modal.remove();
    });
  }

  /* ================= OPTIMIZED SCROLL REVEAL (IntersectionObserver) ================= */
  const sections = document.querySelectorAll(".section, .conclusion-fullscreen");

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(sec => {
    sec.classList.add("reveal");
    sectionObserver.observe(sec);
  });

  /* ================= SCROLL PROGRESS & BACK TO TOP ================= */
  const progress = document.getElementById("progress-bar");
  const topBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progress.style.width = ((window.scrollY / height) * 100) + "%";

    if (window.scrollY > 500) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });

  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= ACTIVE NAVIGATION TRACKER ================= */
  const navLinks = document.querySelectorAll(".main-nav a");
  const allSections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";
    allSections.forEach(section => {
      const top = section.offsetTop - 180;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

});