const cards = document.querySelectorAll(".project-card, .github-card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(245,201,106,0.12),
        #1d1016 60%
      )
    `;
  });

  card.addEventListener("mouseleave", () => {

    card.style.background = "#1d1016";

  });

});
