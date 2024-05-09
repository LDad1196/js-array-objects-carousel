function creaSlide (name, title, text) {
    return `
    <div class="slide">
        <img class="img" src="${slide.image}" alt="">
        <h2>${slide.title}</h2>
        <p>${slide.text}</p>
    </div> `;
}