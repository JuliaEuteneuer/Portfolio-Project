//  scroll-to-top- functionality

const scrollUp = document.getElementById('scroll-up');

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "instant",
    }

    );
});

// Hamburger Menu