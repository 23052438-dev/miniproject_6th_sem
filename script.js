const GAMES={
  gtav:{name:'Grand Theft Auto V',short:'GTA V',price:'₹1,299',pv:'1,299',desc:'Open-world action-adventure by Rockstar North. Play as Michael, Franklin, and Trevor across the massive city of Los Santos.',hero:'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=80',imgs:['https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80','https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80','https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80','https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80']},
  witcher3:{name:'The Witcher 3: Wild Hunt',short:'Witcher 3',price:'₹1,499',pv:'1,499',desc:'Award-winning open-world RPG by CD Projekt Red. Hunt monsters, make choices, and shape the fate of the world as Geralt of Rivia.',hero:'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80',imgs:['https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=600&q=80','https://images.unsplash.com/photo-1494388054-a5c5b8c1d9f1?w=600&q=80','https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&q=80','https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=600&q=80']},
  minecraft:{name:'Minecraft',short:'Minecraft',price:'₹499',pv:'499',desc:'The best-selling sandbox game ever. Mine, craft, build, and survive in an infinite world. Creative or Survival — you choose.',hero:'https://images.unsplash.com/photo-1529154036614-a60975f5c760?w=900&q=80',imgs:['https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&q=80','https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&q=80','https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=600&q=80','https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=600&q=80']}
};

let chatHistory=[];

function goTo(page){
  document.querySelectorAll('.page,.inner-page').forEach(p=>p.classList.remove('active'));
  const fab=document.getElementById('cfab');
  if(['games','offers','support','about','profile','detail','buy'].includes(page)){
    document.getElementById('pg-inner').classList.add('active');
    fab.style.display='flex';
    renderInner(page);
  } else {
    const el=document.getElementById('pg-'+page);
    if(el) el.classList.add('active');
    fab.style.display='none';
  }
}

function navTo(sec,extra){
  document.querySelectorAll('.sl').forEach(l=>l.classList.toggle('active',l.dataset.n===sec));
  renderInner(sec,extra);
}

function renderInner(sec,extra){
  const m=document.getElementById('mainArea');
  if(sec==='games') m.innerHTML=renderGames();
  else if(sec==='offers') m.innerHTML=renderOffers();
  else if(sec==='support') m.innerHTML=renderSupport();
  else if(sec==='about') m.innerHTML=renderAbout();
  else if(sec==='profile') m.innerHTML=renderProfile();
  else if(sec==='detail') m.innerHTML=renderDetail(extra);
  else if(sec==='buy') m.innerHTML=renderBuy(extra);
  else m.innerHTML=renderGames();
}

function renderGames(){
  return`<h1 class="pt">Discover Games 🎮</h1><div class="glist">${Object.entries(GAMES).map(([k,g])=>`<div class="gcard"><img src="${g.hero}" loading="lazy"><div class="gcb"><h3>${g.name}</h3><p>${g.desc.split('.')[0]}.</p><div class="vbtn" onclick="navTo('detail','${k}')">View Game →</div></div></div>`).join('')}</div>`;
}

function renderDetail(key){
  const g=GAMES[key];if(!g)return renderGames();
  return`<h1 class="pt">${g.name}</h1><img src="${g.hero}" class="ghero" loading="lazy"><p class="gdesc">${g.desc}</p><h3 style="font-family:'Rajdhani',sans-serif;font-size:19px;margin-bottom:12px;color:#fff">Screenshots</h3><div class="ggrid">${g.imgs.map(i=>`<img src="${i}" loading="lazy" style="border-radius:8px;">`).join('')}</div><div class="prow"><span class="ptag">${g.price}</span><button class="bbtn" onclick="navTo('buy','${key}')">Buy Now</button></div>`;
}

function renderOffers(){
  const offs=[{key:'gtav',old:'₹1,299',nw:'₹999',disc:'23% OFF'},{key:'witcher3',old:'₹1,499',nw:'₹1,299',disc:'13% OFF'},{key:'minecraft',old:'₹699',nw:'₹499',disc:'29% OFF'}];
  return`<h1 class="pt">Special Offers 🔥</h1>${offs.map(o=>{const g=GAMES[o.key];return`<div class="ocard"><img src="${g.hero}" loading="lazy"><div class="ob"><h3>${g.name}</h3><div class="dbadge">${o.disc}</div><p class="oldp">${o.old}</p><p class="newp">${o.nw}</p><button class="bbtn" onclick="navTo('buy','${o.key}')" style="margin-top:7px">Buy Now</button></div></div>`;}).join('')}`;
}

function renderSupport(){
  return`<h1 class="pt">Support 📞</h1><div class="sinfo"><p><strong>Email:</strong> support@gamehub.com</p><p><strong>Phone:</strong> +91 98765 43210</p><p><strong>Hours:</strong> 24/7 — Always here for gamers.</p></div><div class="sform"><h3>Request a Game or Report an Issue</h3><textarea class="sta" id="issueBox" placeholder="Describe your issue or request..."></textarea><button class="ssbtn" id="ssBtn" onclick="submitSup()">Submit Request</button></div>`;
}

function submitSup(){
  const v=document.getElementById('issueBox').value.trim();
  const b=document.getElementById('ssBtn');
  if(!v){alert('Please enter your issue first.');return;}
  b.textContent='✔ Submitted!';b.style.background='#22c55e';b.style.color='#000';b.disabled=true;
}

function renderAbout(){
  return`<h1 class="pt">About Game Hub</h1><div class="asec"><h2>Who We Are</h2><p>Game Hub is an online gaming store where players can explore, purchase and enjoy top-rated games at affordable prices.</p></div><div class="asec"><h2>Our Mission</h2><p>Secure payments, instant digital access, and the best gaming deals — making great games accessible to everyone.</p></div><div class="asec"><h2>Why Choose Us?</h2><ul><li>🔒 Secure Payment System</li><li>⚡ Instant Digital Access</li><li>🕐 24/7 Customer Support</li><li>🏷️ Exclusive Gaming Discounts</li><li>🎮 Curated Game Collection</li></ul></div><div class="asec"><h2>Our Team</h2><div class="tgrid"><div class="tc"><div class="tav">👨‍💻</div><h4>Arjun Sharma</h4><p>Founder & CEO</p></div><div class="tc"><div class="tav">👩‍🎨</div><h4>Priya Nair</h4><p>Lead Designer</p></div><div class="tc"><div class="tav">👨‍🔧</div><h4>Ravi Kumar</h4><p>Dev Lead</p></div></div></div>`;
}

function renderProfile(){
  const u=getUser();
  if(!u)return`<h1 class="pt">Profile</h1><div class="prcard"><p style="color:var(--text2);font-size:14px">No profile found. Please <span style="color:var(--gold);cursor:pointer" onclick="goTo('login')">login</span> or <span style="color:var(--gold);cursor:pointer" onclick="goTo('register')">register</span>.</p></div>`;
  return`<h1 class="pt">My Profile</h1><div class="prcard"><div class="prav">👤</div><div class="prrow"><span>Name</span><span>${u.name}</span></div><div class="prrow"><span>Email</span><span>${u.email}</span></div><div class="prrow"><span>Phone</span><span>${u.phone}</span></div><button class="lobtn" onclick="doLogout()">Log Out</button><button class="dbtn" onclick="doDelete()">Delete Account</button></div>`;
}

function renderBuy(key){
  const g=GAMES[key];if(!g)return renderGames();
  return`<h1 class="pt">Checkout</h1><div class="cocard" id="coBox"><h2>${g.name}</h2><div class="coprice">${g.price}</div><p class="plbl">Select Payment Method:</p><label class="popt"><input type="radio" name="pay" value="upi"> UPI / Google Pay</label><label class="popt"><input type="radio" name="pay" value="card"> Credit / Debit Card</label><label class="popt"><input type="radio" name="pay" value="nb"> Net Banking</label><label class="popt"><input type="radio" name="pay" value="cod"> Cash on Delivery</label><div id="errB" class="errbox">⚠️ Please select a payment method.</div><button class="cfbtn" onclick="confirmPay('${g.name}')">Confirm & Pay</button></div><div class="sucmsg" id="sucBox" style="display:none"><div class="sucicon">🎉</div><h2>Payment Successful!</h2><p>You've purchased <strong>${g.name}</strong>.<br>Enjoy your game!</p><button class="bbtn" onclick="navTo('games')" style="margin-top:22px">Back to Games</button></div>`;
}

function confirmPay(name){
  const s=document.querySelector('input[name="pay"]:checked');
  if(!s){document.getElementById('errB').style.display='block';return;}
  document.getElementById('coBox').style.display='none';
  document.getElementById('sucBox').style.display='block';
}

function getUser(){try{return JSON.parse(localStorage.getItem('ghU'))||null;}catch{return null;}}

function doLogin(){
  const e=document.getElementById('lEmail').value.trim().toLowerCase();
  const p=document.getElementById('lPwd').value;
  const m=document.getElementById('lMsg');
  const u=getUser();
  if(!u){m.textContent='No account found. Please register.';m.style.color='orange';return;}
  if(e===u.email&&p===u.password){m.textContent='✔ Logging in...';m.style.color='#22c55e';setTimeout(()=>goTo('games'),900);}
  else{m.textContent='Wrong credentials. Try again.';m.style.color='#ef4444';}
}

function doRegister(){
  const n=document.getElementById('rName').value.trim();
  const e=document.getElementById('rEmail').value.trim().toLowerCase();
  const ph=document.getElementById('rPhone').value.trim();
  const p=document.getElementById('rPwd').value;
  const m=document.getElementById('rMsg');
  if(!n||!e||!ph||!p){m.textContent='Please fill all fields.';m.style.color='orange';return;}
  localStorage.setItem('ghU',JSON.stringify({name:n,email:e,phone:ph,password:p}));
  m.textContent='✔ Registered! Redirecting...';m.style.color='#22c55e';
  setTimeout(()=>goTo('login'),1100);
}

function doLogout(){goTo('home');}
function doDelete(){if(confirm('Delete your account?')){localStorage.removeItem('ghU');goTo('home');}}

function updateClock(){const el=document.getElementById('clk');if(el)el.textContent=new Date().toLocaleTimeString();}
setInterval(updateClock,1000);

function toggleTheme(){
  document.body.classList.toggle('light');
  document.getElementById('themeBtn').classList.toggle('lit');
  localStorage.setItem('ghTheme',document.body.classList.contains('light')?'light':'dark');
}
if(localStorage.getItem('ghTheme')==='light'){
  document.body.classList.add('light');
  setTimeout(()=>{const b=document.getElementById('themeBtn');if(b)b.classList.add('lit');},0);
}

// ===== GAMEBOT AI (OpenAI) =====
// 🔑 Paste your OpenAI API key here — visitors chat instantly, no setup needed
const BOT_SYSTEM = `You are GameBot AI, a friendly and expert assistant for Game Hub — an online gaming store.

You have TWO core jobs:

1. GAME RECOMMENDATIONS: When a user shares their taste, genre, mood, or platform, recommend the best matching games worldwide. For each game include: name, developer, release year, platforms, and a 1-sentence reason why they will love it. Number them clearly and use gaming emojis naturally.

2. WEBSITE GUIDE: Help users navigate Game Hub. Here is how the site works:
   - HOME: Landing page — click "GAME ON" to enter the store.
   - LOGIN / REGISTER: Create an account or sign in to access the store.
   - GAMES (sidebar): Browse all games — GTA V (₹1,299), The Witcher 3 (₹1,499), Minecraft (₹499). Click "View Game" to see details, screenshots, and a Buy Now button.
   - OFFERS (sidebar): Discounted games — GTA V at ₹999 (23% off), Witcher 3 at ₹1,299 (13% off), Minecraft at ₹499 (29% off).
   - SUPPORT (sidebar): Contact info and a form to report issues or request new games.
   - ABOUT US (sidebar): Learn about Game Hub's mission and team.
   - PROFILE (sidebar or top-right icon): View your name, email, phone, log out, or delete account.
   - CHECKOUT: Pick a payment method (UPI/Google Pay, Credit/Debit Card, Net Banking, Cash on Delivery) then click Confirm & Pay.
   - THEME TOGGLE: The switch in the top-right bar toggles between dark and light mode.

Always be warm, concise, and gamer-friendly. Keep replies under 220 words unless a detailed game list is requested.`;

function toggleChat(){
  const w=document.getElementById('cwin');
  w.classList.toggle('open');
  if(w.classList.contains('open')){
    setTimeout(()=>{const i=document.getElementById('cinp');if(i)i.focus();},120);
  }
}

function appendMsg(txt,cls){
  const c=document.getElementById('cmsgs');
  const d=document.createElement('div');
  d.className='cmsg '+cls;
  d.innerHTML=txt;
  c.appendChild(d);
  c.scrollTop=c.scrollHeight;
  return d;
}

function qs(txt){
  document.getElementById('cinp').value=txt;
  document.getElementById('qrow').style.display='none';
  sendMsg();
}

function sendMsg(){
  const inp=document.getElementById('cinp');
  const btn=document.getElementById('csend');
  const txt=inp.value.trim();
  if(!txt)return;
  appendMsg(esc(txt),'user');
  chatHistory.push({role:'user',content:txt});
  inp.value='';inp.disabled=true;btn.disabled=true;
  document.getElementById('qrow').style.display='none';
  const typing=appendMsg('Thinking...','typing');

fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    messages: [
      { role: 'system', content: BOT_SYSTEM },
      ...chatHistory.slice(-12)
    ]
  })
})
  .then(r=>r.json())
  .then(d=>{
    if(typing.parentNode)typing.parentNode.removeChild(typing);
    let reply='';
    if(d.choices&&d.choices[0]){
      reply=d.choices[0].message.content;
      chatHistory.push({role:'assistant',content:reply});
    } else if(d.error){
      reply='⚠️ Error: '+d.error.message;
    } else {
      reply='⚠️ Unexpected response. Please try again.';
    }
    appendMsg(fmt(reply),'bot');
  })
  .catch(err=>{
    if(typing.parentNode)typing.parentNode.removeChild(typing);
    appendMsg('⚠️ Network error. Please check your connection and try again.','bot');
    console.error(err);
  })
  .finally(()=>{inp.disabled=false;btn.disabled=false;inp.focus();});
}

function fmt(t){
  return t.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\*(.*?)\*/g,'<em>$1</em>').replace(/\n/g,'<br>');
}
function esc(t){const d=document.createElement('div');d.appendChild(document.createTextNode(t));return d.innerHTML;}

goTo('home');
