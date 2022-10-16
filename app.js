const btn = document.querySelector("#btn");
const ctr = document.querySelector(".ctr");
btn.addEventListener('click', () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
     .then(info => info.json())
     .then(info1 => {
        info1.forEach(info2 => {
            const img = document.createElement("img");
            img.src = info2.url
            img.className = "img";
            ctr.appendChild(img);
        })
    });
});