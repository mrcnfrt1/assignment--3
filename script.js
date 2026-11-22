const techniques = {
    "chiaroscuro": {
        title: "Chiaroscuro",
        img: "images/chiaroscuro.jpg",
        text: "Strong contrast between light and dark to give figures volume and form."
    },
    "fresco": {
        title: "Fresco",
        img: "images/fresco.jpg",
        text: "Pigments mixed with water applied onto freshly laid wet lime plaster."
    },
    "tenebrism": {
        title: "Tenebrism",
        img: "images/tenebrism.jpg",
        text: "Dramatic light emerging from deep darkness for strong theatrical contrast."
    },
    "linear-perspective": {
        title: "Linear Perspective",
        img: "images/linear-perspective.jpg",
        text: "Diagonal lines meeting at a vanishing point to create depth on a flat surface."
    },
    "impasto": {
        title: "Impasto",
        img: "images/impasto.jpg",
        text: "Thick layers of paint that keep visible brush or palette-knife marks."
    },
    "contrapposto": {
        title: "Contrapposto",
        img: "images/contrapposto.jpg",
        text: "Weight shifted onto one leg so the hips and shoulders balance naturally."
    },
    "ink-wash": {
        title: "Ink Wash",
        img: "images/ink-wash.jpg",
        text: "East Asian brush technique using diluted ink and graded tonal washes."
    },
    "haboku": {
        title: "Haboku",
        img: "images/haboku.jpg",
        text: "Loose 'broken ink' brushwork combining bold strokes with soft washes."
    }
};

const popup = document.getElementById("center-popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const frames = document.querySelectorAll(".oval-frame");

for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const key = frame.dataset.key;
    const item = techniques[key];

    tippy(frame, {
        content: "Open on Smarthistory",
        placement: "top"
    });

    frame.addEventListener("mouseenter", function () {
        popupImg.src = item.img;
        popupTitle.textContent = item.title;
        popupText.textContent = item.text;
        popup.classList.add("is-open");
    });

    frame.addEventListener("mouseleave", function () {
        popup.classList.remove("is-open");
    });
}