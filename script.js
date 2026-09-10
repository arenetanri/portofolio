
const projects = {
squishy: {
 title:"Squishy Squeezer", sub:"Automated Retrieval Claw · UBC APSC 101 · Jan–Feb 2026", hero:"assets/squishy-squeezer-photo.jpg",
 body:`<p>In a six-person team, I helped design, fabricate, and test an automated retrieval claw combining Arduino control, ultrasonic sensing, servo actuation, and a sheet-metal gripping mechanism.</p>
 <h3>Design & concept selection</h3><p>We started with six concepts, screened them against the project requirements, and compared the strongest options using ranking and a weighted decision matrix before developing the Squishy Squeezer as the team design.</p>
 <h3>Testing & iteration</h3><p>We focused on the details that actually changed performance: anchor placement, opening width, grip strength, servo attachment, and ultrasonic sensor noise. We tested different anchor positions and used a rolling average to stabilize the sensor readings.</p>
 <div class="metric"><div><strong>3 → 9</strong><span>competition score from Round 1 to Round 2</span></div><div><strong>4–5</strong><span>reading window used for sensor smoothing</span></div><div><strong>9+ cm</strong><span>opening needed for the competition cup</span></div></div>
 <h3>Project slides</h3><p class="case-note">A few of the slides from our final e-poster, kept full-size so the graphs and drawings stay readable.</p>
 <div class="slide-deck" data-slideshow>
   <img class="active" src="assets/squishy-slide-wdm.png" alt="Weighted decision matrix slide">
   <img src="assets/squishy-slide-scoring.png" alt="Concept scoring slide">
   <img src="assets/squishy-slide-anchor.png" alt="Anchor placement investigation slide">
   <img src="assets/squishy-slide-filtering.png" alt="Sensor filtering investigation slide">
   <img src="assets/squishy-slide-drawings.png" alt="Engineering drawings slide">
   <img src="assets/squishy-slide-competition.png" alt="Competition reflection slide">
   <div class="slide-dots"></div>
 </div>
 <p>I contributed across the metal-claw fabrication, testing, engineering-drawing review, requirements/evaluation work, and the final e-poster with the rest of the team.</p>`
},
rwh: {
 title:"Rainwater Harvesting System", sub:"Off-grid potable-water system · UBC APSC 101 · Mar–Apr 2026", hero:"assets/rwh-hero.png",
 body:`<p>Our six-person team designed and modelled an integrated rainwater harvesting system for a remote two-person household in British Columbia. The project connected stakeholder needs with technical modelling and component selection.</p>
 <h3>System modelling</h3><p>We built an Excel-based model incorporating historical rainfall, catchment area, storage, piping, pumps, filtration, disinfection, electrical power, and household water demand. Fluid-flow and pressure calculations were used to evaluate interactions between pump performance, piping losses, storage, and delivery.</p>
 <div class="case-grid"><img src="assets/rwh-results.png"><img src="assets/rwh-hero.png"></div>
 <div class="metric"><div><strong>~80%</strong><span>weighted stakeholder satisfaction</span></div><div><strong>36 m³</strong><span>selected storage volume</span></div><div><strong>64 m</strong><span>total piping in final layout</span></div></div>
 <h3>Trade-offs</h3><p>The final system balanced reliability, relative cost, consumption, environmental impact, and feasibility rather than optimizing a single metric. The design used a solar-energy system and selected components around system flow, cost, and reliability.</p>`
},
chair: {
 title:"Cardboard Chair", sub:"Disaster-relief product design · UBC APSC 100 · Sep–Oct 2025", hero:"assets/cardboard-chair-poster.jpg",
 body:`<p>Our team designed and fabricated a child-sized cardboard chair for disaster-relief settings. The design had to consider children, parents and guardians, manufacturers, and rescue teams at the same time.</p>
 <h3>From needs to a physical product</h3><p>Evaluation criteria included storage, safety, durability, cardboard use, ease of assembly, and entertainment. We generated six concepts, built physical prototypes, and used quantitative ranking and scoring to select the final configuration.</p>
 <h3>Final design</h3><p>The chair used a reinforced cross-base structure, backrest supports, rounded edges, storage space, and interlocking features. The goal was a lightweight, portable chair that could be assembled simply while remaining comfortable and safe for children.</p>
 <p>I also co-designed the final technical poster with a teammate, communicating stakeholder needs, concept generation, prototype development, quantitative selection, specifications, and the final design.</p>`
},
pen: {
 title:"Pen Planter", sub:"Assistive gardening design · UBC APSC 100 · Nov 2025", hero:"assets/pen-planter-hero.jpg",
 body:`<p>Our six-person team designed an assistive gardening tool for a wheelchair user with limited hand function. We translated the user needs into requirements around reach, grip force, weight, stability, and ease of use.</p>
 <h3>My concept — Seed Dispensing Shovel</h3><p>My individual concept was the <b>Seed Dispensing Shovel</b>. I modelled it in SolidWorks with a hollow handle that could store seeds and release them through an opening near the shovel head.</p>
 <img class="wide-detail" src="assets/seed-dispensing-shovel-alexandrene.jpg" alt="Alexandrene's Seed Dispensing Shovel SolidWorks model">
 <h3>The team's final design — Pen Planter</h3><p>After comparing six concepts using engineering requirements and a weighted decision matrix, the team selected the Pen Planter. Its final design used flexible prongs to pick up and place seeds, a narrow shovel-like head for digging, and a secondary grip to help reposition the tool.</p>
 <div class="case-grid"><img src="assets/pen-planter-cad-final.png" alt="Final Pen Planter CAD"><img src="assets/pen-planter-prototype-final.jpg" alt="Final Pen Planter physical prototype"></div>
 <p class="case-note">The Seed Dispensing Shovel above was my individual concept. The Pen Planter shown here was the team's selected final design.</p>`
},
parking: {
 title:"Arduino Parking System", sub:"Solo school project · Early 2025", hero:"assets/parking-digital-model.png",
 body:`<p>This was a solo school project where I built a miniature automated parking gate using an Arduino, HC-SR04 ultrasonic sensor, and a servo-controlled barrier.</p>
 <div class="case-grid"><img src="assets/parking-model-1.png"><img src="assets/parking-hardware.png"></div>
 <h3>Control logic</h3><p>The ultrasonic routine measures echo duration and converts it to distance. When an object is detected within <b>30 cm</b>, the servo sweeps the barrier from 0° to 120°, pauses, returns to 0°, then waits before accepting the next cycle.</p>
 <pre><code>cm = 0.01723 * readUltrasonicDistance(6, 7);

if (cm &lt; 30) {
  for (pos = 0; pos &lt;= 120; pos++) {
    myservo.write(pos);
    delay(15);
  }

  delay(500);

  for (pos = 120; pos &gt;= 0; pos--) {
    myservo.write(pos);
    delay(15);
  }

  delay(5000);
}</code></pre>
 <h3>Design intent</h3><p>The accompanying project report emphasized low-cost technology, straightforward Arduino integration, non-contact operation, flexible use in automation and robotics, and energy-conscious operation.</p>`
},
bike: {
 title:"Vancouver Bike-Lane Proposal", sub:"Systems & sustainability decision-making · UBC APSC 100 · 2025", hero:"assets/bike-lane-final.png",
 body:`<p>Our team evaluated protected-cycle-lane alternatives for Vancouver using stakeholder analysis, sustainability criteria, causal-loop modelling, weighted decision matrices, and sensitivity analysis.</p>
 <h3>Decision framework</h3><p>We considered the City of Vancouver, TransLink, emergency services, cyclists, local workers, and local businesses. Route criteria included connectivity, parking, commute convenience, customer access, efficiency, safety, emergency access, cost, greenspace, and implementation difficulty.</p>
 <div class="metric"><div><strong>Kingsway</strong><span>final route recommendation</span></div><div><strong>Bollards</strong><span>selected barrier type</span></div><div><strong>±10%</strong><span>weight redistribution did not change the conclusion</span></div></div>`
},
mining: {
 title:"Copper Mine Feasibility Assessment", sub:"Sustainability & systems analysis · UBC APSC 101 · 2026", hero:"assets/mining-final.png",
 body:`<p>In an independent-consulting scenario, our team compared three copper deposits using block-model outputs, streamlined life-cycle assessment, a weighted decision matrix, causal-loop/resilience analysis, and stakeholder/rightsholder considerations.</p>
 <h3>Recommendation</h3><p>Deposit 2 ranked first in the weighted decision matrix and was recommended for further feasibility study. An underground approach reduced surface disturbance relative to an open-pit alternative, while uncertainties around rock quality and groundwater remained important risks.</p>
 <div class="metric"><div><strong>7.19</strong><span>Deposit 2 WDM score</span></div><div><strong>$8.79B</strong><span>estimated profit in the course scenario</span></div><div><strong>Deposit 2</strong><span>final recommendation</span></div></div>`
},
watch: {
 title:"Mechanical Watch Build", sub:"Personal project · 2026", hero:"assets/watch-finished.jpeg",
 body:`<p>This was a personal project I took on because I was curious about how an automatic watch actually comes together. Working with such small components was a very different kind of build from my PC and keyboard projects.</p>
 <div class="watch-grid">
   <figure><img src="assets/watch-build-workbench.jpeg" alt="Watch-building workbench with tools and components"><figcaption>Assembly setup and tools</figcaption></figure>
   <figure><img src="assets/watch-finished.jpeg" alt="Completed automatic mechanical wristwatch"><figcaption>Completed watch</figcaption></figure>
 </div>
 <video class="build-video" controls muted playsinline preload="metadata" poster="assets/watch-build-workbench.jpeg">
   <source src="assets/watch-build-preview.mp4" type="video/mp4">
 </video>
 <h3>What I liked about it</h3><p>There was something satisfying about turning a set of tiny components into a working object I could actually wear. The scale made the build slower and more precise, which was part of what made it interesting.</p>`
},
keyboard: {
 title:"Custom Mechanical Keyboard", sub:"Personal build · 2025", hero:"assets/keyboard-finished-horizontal.jpeg",
 body:`<p>I built this keyboard from parts I selected individually after comparing options for sound, feel, and build quality. I wanted the finished board to feel and sound a certain way, so I spent time choosing each part instead of buying a prebuilt setup.</p>
 <div class="slideshow keyboard-slideshow" data-slideshow>
   <img class="active" src="assets/keyboard-finished-horizontal.jpeg" alt="Finished custom mechanical keyboard">
   <img src="assets/keyboard-build-process.jpeg" alt="Mechanical keyboard disassembled during the build">
   <img src="assets/keyboard-switch-lube.jpeg" alt="Mechanical switches sorted during keyboard customization">
   <img src="assets/keyboard-switch-closeup.jpeg" alt="Close-up of keyboard switch components">
   <div class="slide-dots"></div>
 </div>
 <h3>The build</h3><p>I assembled the board myself, worked through the switches one by one, and tuned them before putting everything together. It ended up being one of those projects where a lot of small choices noticeably changed the final result.</p>`
},
pc: {
 title:"Custom PC Build", sub:"Personal hardware build · 2025", hero:"assets/pc-lit.png",
 body:`<p>I selected compatible PC components and assembled the system myself, moving from component research to physical integration and final setup.</p>
 <div class="case-grid"><img src="assets/pc-components.png"><img src="assets/pc-open-case.png"></div>
 <h3>What the build involved</h3><p>Component compatibility, motherboard and case installation, power connections, cooling integration, cable routing, and system setup. It is one of the personal builds that pushed me toward learning by physically working with hardware rather than only reading about it.</p>
 <img class="case-hero" src="assets/pc-desk.png" alt="Completed PC setup">`
}
};

const modal=document.getElementById('projectModal'), content=document.getElementById('modalContent');
document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>{
  const p=projects[el.dataset.open]; if(!p)return;
  content.innerHTML=`<article class="case"><img class="case-hero" src="${p.hero}" alt=""><h2>${p.title}</h2><p class="subtitle">${p.sub}</p>${p.body}</article>`;
  initSlideshows();
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelector('[data-close]').click()});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));

function initSlideshows(){
  document.querySelectorAll('[data-slideshow]').forEach(show=>{
    const imgs=[...show.querySelectorAll('img')], dots=show.querySelector('.slide-dots');
    if(!imgs.length || !dots) return;
    let i=0, timer;
    dots.innerHTML='';
    const activate=n=>{
      imgs.forEach((im,j)=>im.classList.toggle('active',j===n));
      [...dots.children].forEach((d,j)=>d.classList.toggle('active',j===n));
      i=n;
    };
    imgs.forEach((_,j)=>{
      const b=document.createElement('button');
      b.setAttribute('aria-label',`Show image ${j+1}`);
      b.addEventListener('click',()=>{activate(j); clearInterval(timer); timer=setInterval(()=>activate((i+1)%imgs.length),3500)});
      dots.appendChild(b);
    });
    activate(0);
    timer=setInterval(()=>activate((i+1)%imgs.length),3500);
  });
}

function initMiniSlideshows(){
  document.querySelectorAll('[data-mini-slideshow]').forEach(show=>{
    const imgs=[...show.querySelectorAll('img')], dots=show.querySelector('.mini-slide-dots');
    if(!imgs.length || !dots) return;
    let i=0;
    dots.innerHTML='';
    const set=n=>{
      imgs.forEach((im,j)=>im.classList.toggle('active',j===n));
      [...dots.children].forEach((d,j)=>d.classList.toggle('active',j===n));
      i=n;
    };
    imgs.forEach((_,j)=>{
      const b=document.createElement('button');
      b.addEventListener('click',()=>set(j));
      dots.appendChild(b);
    });
    set(0);
    setInterval(()=>set((i+1)%imgs.length),4000);
  });
}
initMiniSlideshows();
