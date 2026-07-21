const start=new Date("2024-07-21T00:00:00");
function enter(){let v=document.getElementById("pw").value.trim().toLowerCase();if(v==="lala"){overlay.style.display="none";site.classList.remove("hide");music.play().catch(()=>{});tick();setInterval(tick,1000);}else msg.textContent="Resposta incorreta ❤️";}
function tick(){let d=new Date()-start;let s=Math.floor(d/1000),m=Math.floor(s/60),h=Math.floor(m/60),dias=Math.floor(h/24);count.textContent=`${dias} dias | ${h} horas | ${m} minutos | ${s} segundos`;}
const motivos=["Seu sorriso","Seu abraço","Seu carinho","Seu jeito","Seu olhar","Sua companhia","Seu coração"];let i=0;
function nextReason(){reason.textContent=motivos[i%motivos.length];i++;}/*=====================================
      CORAÇÕES PREMIUM
=====================================*/

const heartContainer = document.getElementById("heart-container");

const colors = [
"#ff003c",
"#ff1744",
"#ff4d6d",
"#ff5e95",
"#ff7aa2",
"#ff9ec5",
"#ff3366",
"#ff6699",
"#ffb3c7",
"#ffffff"
];

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    const size=Math.random()*28+12;

    heart.style.width=size+"px";
    heart.style.height=size+"px";

    heart.style.left=Math.random()*100+"vw";

    heart.style.background=
        colors[Math.floor(Math.random()*colors.length)];

    const duration=Math.random()*8+10;

    heart.style.animationDuration=
        `${duration}s, ${Math.random()*3+2}s`;

    heart.style.animationDelay=
        `${Math.random()*-20}s,0s`;

    heart.style.opacity=Math.random()*0.5+0.4;

    heart.style.filter=
        `blur(${Math.random()*1.5}px)
         drop-shadow(0 0 ${Math.random()*15+5}px rgba(255,80,120,.9))`;

    heart.style.zIndex=
        Math.random()>0.5 ? 9999 : 1;

    heartContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },duration*1000);

}

for(let i=0;i<80;i++){
    createHeart();
}

setInterval(createHeart,350);