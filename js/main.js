const projects = [
{title:"End To end Performance Analysis",icon:"fa-chart-column",description:"This project involves a comprehensive analysis of a company's sales data to identify trends,top performers and areas for improvement.",tech:["Python","Ms Excel","Power Bi"]},
{title:"Banking Loan Report",icon:"fa-users-gear",description:"A critical real-world project analyzing financial data,such as bank loan applications, to assess risk and performance",tech:["Python","SQL","Power Bi"]},
{title:"My Portfolio",icon:"fa-server",description:"A premium black-and-gold portfolio showcasing Pushkar Arora’s expertise in Python development, data analytics, automation, backend development, and impactful projects.",tech:["HTML","CSS","JavaScript","AI"]}
];

const grid=document.getElementById("projects-grid");
if(grid){
grid.innerHTML=projects.map(p=>`
<article class="project-card">
<div class="project-top"><i class="fa-solid ${p.icon}"></i></div>
<div class="project-content">
<h3>${p.title}</h3><p>${p.description}</p>
<div class="tech-stack">${p.tech.map(t=>`<span>${t}</span>`).join("")}</div>
<div class="project-links"><a href="#" onclick="return false">GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i></a><a href="#" onclick="return false">Live Demo</a></div>
</div></article>`).join("");
}

const typing=document.getElementById("typing-text");
const words=["Python Developer","Data Analyst","Backend Developer"];
let wi=0,li=0,del=false;
function typeLoop(){
 if(!typing)return;
 const word=words[wi];
 typing.textContent=del?word.slice(0,li--):word.slice(0,li++);
 if(!del&&li>word.length){del=true;setTimeout(typeLoop,1200);return}
 if(del&&li<0){del=false;wi=(wi+1)%words.length;li=0}
 setTimeout(typeLoop,del?45:85);
}
typeLoop();

const menu=document.getElementById("menu-toggle"), links=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>links.classList.toggle("open"));
links?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const progress=document.getElementById("progress-bar");
const nav=document.querySelectorAll(".nav-links a");
const sections=document.querySelectorAll("main section");
window.addEventListener("scroll",()=>{
 const max=document.documentElement.scrollHeight-window.innerHeight;
 progress.style.width=(max>0?(scrollY/max)*100:0)+"%";
 let current="home";
 sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});
 nav.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
},{passive:true});

document.getElementById("contact-form")?.addEventListener("submit",e=>{
 e.preventDefault();
 const status=document.getElementById("form-status");
 status.textContent="Thanks! Please connect using the email or social links above.";
 e.target.reset();
});
