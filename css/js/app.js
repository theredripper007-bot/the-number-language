const button = document.getElementById("themeToggle");

const themes = [
    "",
    "dark",
    "forest",
    "cosmic",
    "sepia"
];

let current = 0;

button.addEventListener("click",()=>{

    document.body.className="";

    current++;

    if(current>=themes.length){

        current=0;

    }

    if(themes[current]!=""){

        document.body.classList.add(themes[current]);

    }

    const icons=[
        "🌞",
        "🌙",
        "🌿",
        "🌌",
        "📜"
    ];

    button.textContent=icons[current];

});
