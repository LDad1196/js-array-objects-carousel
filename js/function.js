function createdImg(percorso, titolo, testo) {
    return `
            <div class="card text-white py-2 w-50 m-auto my-2">
                <img src="${percorso}" class="card-img image block" alt="...">
                <div class="text">
                    <h5 class="">${titolo}</h5>
                    <p class="">${testo}</p>
                </div>
            </div>
            `
}