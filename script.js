/* =========================
   FOTO PROFIL BERPUTAR SEDIKIT
========================= */
const foto = document.querySelector(".foto-wrapper");

foto.addEventListener("mouseover", function () {

    foto.style.transform = "rotate(5deg) scale(1.05)";
    foto.style.transition = "0.4s";

});

foto.addEventListener("mouseout", function () {

    foto.style.transform = "rotate(0deg) scale(1)";

});

/* =========================
   EFEK MUNCUL CARD
========================= */
const cards = document.querySelectorAll(".card");

cards.forEach(function(card, index){

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(function(){

        card.style.transition = "0.8s ease";

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 300);

});

/* =========================
   WARNA NAVIGASI BERUBAH
========================= */
const nav = document.querySelectorAll(".navigasi a");

nav.forEach(function(link){

    link.addEventListener("mouseover", function(){

        link.style.background = "orange";
        link.style.color = "white";

    });

    link.addEventListener("mouseout", function(){

        link.style.background = "transparent";
        link.style.color = "white";

    });

});

/* =========================
   JAM DIGITAL
========================= */
const jam = document.createElement("div");

document.body.appendChild(jam);

jam.style.position = "fixed";
jam.style.bottom = "20px";
jam.style.right = "20px";

jam.style.background = "orange";
jam.style.color = "white";

jam.style.padding = "12px 18px";

jam.style.borderRadius = "15px";

jam.style.fontSize = "18px";

jam.style.fontWeight = "bold";

jam.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

function updateJam(){

    const waktu = new Date();

    let h = waktu.getHours().toString().padStart(2,"0");
    let m = waktu.getMinutes().toString().padStart(2,"0");
    let s = waktu.getSeconds().toString().padStart(2,"0");

    jam.innerHTML = `${h}:${m}:${s}`;
}

setInterval(updateJam,1000);

updateJam();
