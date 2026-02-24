//Einstellungsbutton ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
const settingsButton = document.getElementById('settings-button');
const settingsPopup = document.getElementById('settings-popup');
const closeBtn = settingsPopup.querySelector('.close-btn');
const toggles = settingsPopup.querySelectorAll('.toggle-button');

const settingsState = { funktionA: 1, funktionB: 1 };

function togglePopup(open) {
  if (open) {
    settingsPopup.classList.add('open');
    settingsPopup.setAttribute('aria-hidden', 'false');
    toggles[0].focus();
  } else {
    settingsPopup.classList.remove('open');
    settingsPopup.setAttribute('aria-hidden', 'true');
    settingsButton.focus();
  }
}

settingsButton.addEventListener('click', () => togglePopup(true));
closeBtn.addEventListener('click', () => togglePopup(false));

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const key = toggle.dataset.setting;
    if (!key) return;
    settingsState[key] = settingsState[key] === 1 ? 2 : 1;
    toggle.textContent = settingsState[key]=== 2 ? "An" : "Aus";
    toggle.classList.toggle('active', settingsState[key] === 2);
  });
  toggle.addEventListener('keydown', e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle.click();
    }
  });
});
        function toggleStyle(buttonElement) {
  const stylesheet = document.getElementById("stylesheet");
  const currentValue = buttonElement.textContent.trim();

  if (currentValue === "1") {
    stylesheet.href = "style.css";
    buttonElement.textContent = "aus";
  } else {
    stylesheet.href = "style.css";
    buttonElement.textContent = "an";
  }
}

function showTab(tabName) {
document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
document.getElementById(tabName).style.display = 'block';
document.querySelector(`.tab[onclick="showTab('${tabName}')"]`).classList.add('active');
}

// === Lightmode/Darkmode ===
let darkmodedeanble = 1

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('themeswitch')

function enableDarkmode() {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

function disableDarkmode() {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', 'null')
}

if (darkmode === 'active') enableDarkmode()

themeSwitch.addEventListener('click', () => {
  if (darkmodedeanble === 1){
    alert('Darkmode switcher is disabled right now')
  }
  else if (darkmodedeanble === 0){
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
  }
})

// === Hintergrundmusik ===
let musik = localStorage.getItem('musik')
const musikswitch = document.getElementById('musik')
const audio = document.getElementById('musikplayer')

function enablemusik() {
  document.body.classList.add('musikon')
  audio.play()
  localStorage.setItem('musik', 'active')
}

function disablemusik() {
  document.body.classList.remove('musikon')
  audio.pause()
  localStorage.setItem('musik', 'null')
}

if (musik === 'active') enablemusik()

musikswitch.addEventListener('click', () => {
  musik = localStorage.getItem('musik')
  musik !== 'active' ? enablemusik() : disablemusik()
})

// === Konsumopfermodus ===
let brainrot = localStorage.getItem('brainrot')
const brainrotswitch = document.getElementById('brainrot')

function enablebrainrot() {
  document.body.classList.add('brainroten')
  localStorage.setItem('brainrot', 'active')
  document.getElementById('musikplayer1').play()
}

function disablebrainrot() {
  document.body.classList.remove('brainroten')
  localStorage.setItem('brainrot', 'null')
  document.getElementById('musikplayer1').pause()
}

if (brainrot === 'active') enablebrainrot()

brainrotswitch.addEventListener('click', () => {
  brainrot = localStorage.getItem('brainrot')
  brainrot !== 'active' ? enablebrainrot() : disablebrainrot()
})


//IQ-Meßer
const iq = document.getElementById('iq')

function iqmessurment(){
  if(document.getElementById('iq').value < 100){
    document.getElementById('bilddumm').style.opacity = `${(100 - document.getElementById('iq').value)}%`
  }
  else if(document.getElementById('iq').value > 100){
    document.getElementById('bildschlau').style.opacity = `${(document.getElementById('iq').value - 100)/(118/100)}%`
  }
  else if (document.getElementById('iq').value == 100){
    document.getElementById('bilddumm').style.opacity = '0%'
    document.getElementById('bildschlau').style.opacity = '0%'
  }
}

document.getElementById('iq').addEventListener('input', () => document.getElementById('iqwert').innerText = `${document.getElementById('iq').value} IQ`)
document.getElementById('iq').addEventListener('input', () => iqmessurment())


//Navbarswitcher
function switchToStartseite(){
  document.getElementById('Twitch').classList.add('Twitch')
  document.getElementById('Autogrammkartenmacher').classList.add('Autogrammkartenmacher')
  document.getElementById('Archiv').classList.add('Archiv')
  document.getElementById('Extras').classList.add('Extras')
  document.getElementById('Startseite').classList.remove('Startseite')
  pausetwitchifoff()
}

let onetimepassthoughfortwitchvariable = 1

function switchToTwitch(){
  document.getElementById('Startseite').classList.add('Startseite')
  document.getElementById('Autogrammkartenmacher').classList.add('Autogrammkartenmacher')
  document.getElementById('Archiv').classList.add('Archiv')
  document.getElementById('Extras').classList.add('Extras')
  document.getElementById('Twitch').classList.remove('Twitch')
  if (onetimepassthoughfortwitchvariable === 1){
    onetimepassthoughfortwitchvariable = 0
    onetimeclickontwitch()
  }
  starttwitchifon()

  setTimeout(() => {zartipauseon()}, 1000);
}

function switchToAutogrammkartenmacher(){
  document.getElementById('Startseite').classList.add('Startseite')
  document.getElementById('Twitch').classList.add('Twitch')
  document.getElementById('Archiv').classList.add('Archiv')
  document.getElementById('Extras').classList.add('Extras')
  document.getElementById('Autogrammkartenmacher').classList.remove('Autogrammkartenmacher')
  pausetwitchifoff()
}

function switchToArchiv(){
  document.getElementById('Startseite').classList.add('Startseite')
  document.getElementById('Twitch').classList.add('Twitch')
  document.getElementById('Autogrammkartenmacher').classList.add('Autogrammkartenmacher')
  document.getElementById('Extras').classList.add('Extras')
  document.getElementById('Archiv').classList.remove('Archiv')
  pausetwitchifoff()
}

function switchToExtras(){
  document.getElementById('Startseite').classList.add('Startseite')
  document.getElementById('Twitch').classList.add('Twitch')
  document.getElementById('Autogrammkartenmacher').classList.add('Autogrammkartenmacher')
  document.getElementById('Archiv').classList.add('Archiv')
  document.getElementById('Extras').classList.remove('Extras')
  pausetwitchifoff()
}

//Zartipause
function zartipauseon(){
  document.getElementById('zartipause').classList.remove('displaynone')
  setTimeout(() => {
    zartipauseoff()
}, 16000);
}

function zartipauseoff(){
  document.getElementById('zartipause').classList.add('displaynone')
}

//Twitch
var options = {
  video: "2676189193",
  autoplay: true,
  muted: true,
  time: "0h0m0s",
  width: "1000px",
  height: "563px",
  volume: "0.5",
  quality: "1080p60"
};
var player = new Twitch.Player("twitch-embed", options);

function onetimeclickontwitch(){
  player.setMuted(false)
  player.seek(16010)
}

function pausetwitchifoff(){
  player.setMuted(true)
}

function starttwitchifon(){
  player.setMuted(false)
}

let onetimepassthoughforabovariable = 1

document.getElementById('abob').addEventListener('click', () => {
  if (onetimepassthoughforabovariable === 1){
    changeAutogrammies(30000)
    onetimepassthoughforabovariable = 0
    document.getElementById('abobtext').innerText = 'Abonniert'
  }
})

let onetimepassthoughforsubvariable = 1

document.getElementById('subb').addEventListener('click', () => {
  if (onetimepassthoughforsubvariable === 1){
    alert('Du hast erfolgreich einen Sub an nem random Dude gegifted!')
    onetimepassthoughforsubvariable = 0
    changeAutogrammies(30000)
    document.getElementById('subbtext').innerText = 'Subs ausverkauft'
  }
})

let autogrammies = 100

function changeAutogrammies(count){
  if (count < 0){
    if((autogrammies + count) < 0){
      alert('Zu wenig Autogrammies')
      return true
    }
    else{
      autogrammies += count
      document.getElementById('pointcount').innerText = `${autogrammies} Autogrammies`
      return false
    }
  }
  else{
    autogrammies += count
    document.getElementById('pointcount').innerText = `${autogrammies} Autogrammies`
    return false
  }
}

let pointsBtnswitchonorswitchoff = 1
document.getElementById('pointsBtn').addEventListener('click', () => {
  if (pointsBtnswitchonorswitchoff === 1){
    document.getElementById('pointsmenu').classList.remove('displaynone')
    pointsBtnswitchonorswitchoff = 0
  }
  else if (pointsBtnswitchonorswitchoff === 0){
    document.getElementById('pointsmenu').classList.add('displaynone')
    pointsBtnswitchonorswitchoff = 1
  }
})

function angst(){
  document.getElementById('angstvid').classList.remove('displaynone')
  document.getElementById('angstvid').play()
  setTimeout(() => {document.getElementById('angstvid').pause(); document.getElementById('angstvid').classList.add('displaynone')}, 5000);
}

function ttsragebait(){
  alert('JUNGE ICH HABE ALLES VERSUCHT NE FUCKING TTS API EINZUFÜGEN. nix hat funktioniert. MANNNNN')
}

function digitalAutogramm(){
  const link = document.createElement("a");
  link.download = "autogrammkarte_digital.png";
  link.href = "medien/bilder/autogrammkarte.png"
  link.click();
}

document.getElementById('pointAngst').addEventListener('click', () => {if (changeAutogrammies(-100)) return; angst();})
document.getElementById('pointDarkmode').addEventListener('click', () => {if (changeAutogrammies(-320)) return; alert('DarkMode ist jetzt freigeschaltet'); darkmodedeanble = 0})
document.getElementById('pointTTS').addEventListener('click', () => {if (changeAutogrammies(-500)) return; ttsragebait()})
document.getElementById('pointDA').addEventListener('click', () => {if (changeAutogrammies(-50000)) return; digitalAutogramm();})
document.getElementById('pointRA').addEventListener('click', () => {if (changeAutogrammies(-100000)) return; alert('HAHAHA Geprankt, dachtest du wirklich ich würde dir wirklich ne richtige Autogrammkarte geben');})

// Autogrammkartenmacher
const canvasAK = document.getElementById("canvasAK");
const ctxAK = canvasAK.getContext("2d");

let sizeAK = 10;
let isPressed = false;
let colorAK = "black";

const btnPlusAK = document.getElementById("plusAK");
const btnMinusAK = document.getElementById("minusAK");
const sizePanelAK = document.getElementById("sizePanelAK");
const colorChangeAK = document.getElementById("colorAK");
const btnClearAK = document.getElementById("clearAK");
const btnDownloadAK = document.getElementById("downloadAK");

// Maus-Events
canvasAK.addEventListener("mousedown", () => isPressed = true);
canvasAK.addEventListener("mouseup", () => isPressed = false);
canvasAK.addEventListener("mouseleave", () => isPressed = false); // Maus raus → stoppen

canvasAK.addEventListener("mousemove", (e) => {
  if (!isPressed) return;

  // Mausposition korrekt auf Canvas-Koordinaten
  const rect = canvasAK.getBoundingClientRect();
  const x = (e.clientX - rect.left) * (canvasAK.width / rect.width);
  const y = (e.clientY - rect.top) * (canvasAK.height / rect.height);

  drawCircleAK(x, y);
});

// Buttons
btnPlusAK.addEventListener("click", () => {
  if (sizeAK < 50) sizeAK += 5;
  updateSizeAK();
});

btnMinusAK.addEventListener("click", () => {
  if (sizeAK > 5) sizeAK -= 5;
  updateSizeAK();
});

colorChangeAK.addEventListener("change", (e) => {
  colorAK = e.target.value;
});

btnClearAK.addEventListener("click", () => {
  ctxAK.clearRect(0, 0, canvasAK.width, canvasAK.height);
});

btnDownloadAK.addEventListener("click", () => {
  if (confirm('Möchtest du die Datei wirklich Runterladen?') == true){
    const link = document.createElement("a");
    link.download = "autogramm.png";
    link.href = canvasAK.toDataURL();
    link.click();
  }
});

// Zeichen-Funktion
function drawCircleAK(x, y) {
  ctxAK.beginPath();
  ctxAK.arc(x, y, sizeAK, 0, 2 * Math.PI);
  ctxAK.fillStyle = colorAK;
  ctxAK.fill();
}

function updateSizeAK() {
  sizePanelAK.textContent = sizeAK;
}

updateSizeAK();

//archiv
let currentOpen = null;

document.querySelectorAll('.folder-header').forEach(header => {
  header.addEventListener('click', () => {

    const folder = header.parentElement;
    const content = folder.querySelector('.folder-content');

    // Wenn schon offen → schließen
    if (currentOpen === folder) {
      document.querySelector('.folder-files-row')?.remove();
      currentOpen = null;
      return;
    }

    // Alte offene schließen
    document.querySelector('.folder-files-row')?.remove();

    // Neue Dateizeile erstellen
    const filesRow = document.createElement('div');
    filesRow.classList.add('folder-files-row');
    filesRow.innerHTML = content.innerHTML;

    // Nach der kompletten Ordnerreihe einfügen
    folder.closest('.Archivwrap').appendChild(filesRow);

    currentOpen = folder;
  });
});

// Datei Fullscreen anzeigen (Event Delegation, funktioniert auch für dynamisch eingefügte Dateien)
document.addEventListener('click', function(e) {
  const trigger = e.target.closest('.file-preview');
  if (!trigger) return;

  const src = trigger.dataset.full;
  const type = trigger.dataset.type;

  if (!src || !type) return;

  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '91vw';
  overlay.style.height = '91vh';
  overlay.style.background = 'rgba(0,0,0,0.7)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = '100000';
  overlay.style.cursor = 'pointer';

  let element;

  if (type === "image") {
    element = document.createElement('img');
    element.src = src;
    element.style.maxWidth = '80vw';
    element.style.maxHeight = '80vh';
  }

  if (type === "video") {
    element = document.createElement('video');
    element.src = src;
    element.controls = true;
    element.autoplay = true;
    element.style.maxWidth = '80vw';
    element.style.maxHeight = '80vh';
  }

  if (type === "audio") {
    element = document.createElement('audio');
    element.src = src;
    element.controls = true;
    element.autoplay = true;
  }

  overlay.appendChild(element);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
});
