const headerel = document.getElementsByTagName('header');

// TODO: check topnav to add bg color after scroll before is rtransparent
const topnav = document.createElement('div');
topnav.setAttribute('class','topnav');

const logoel = document.createElement('img');
logoel.setAttribute('id','logoimg');
logoel.src = 'images/cricket.jpg';
topnav.appendChild(logoel);
const aboutnavel = document.createElement('a');
aboutnavel.innerHTML = 'ABOUT';
const detailsnavel = document.createElement('a');
detailsnavel.innerHTML = 'DETAILS';
const schedulenavel = document.createElement('a');
schedulenavel.innerHTML = 'SCHEDULE';
const locationnavel = document.createElement('a');
locationnavel.innerHTML = 'LOCATION';
const feeribbon = document.createElement('div');
const registerbutton = document.createElement('button');
registerbutton.setAttribute('class','btn');
const buttontext = document.createTextNode('REGISTER NOW');
registerbutton.appendChild(buttontext);
const feepel = document.createElement('span');
feepel.setAttribute('class','box');
feepel.innerHTML = "<strong> @ JUST $150</strong>";


registerbutton.appendChild(feepel);
feeribbon.appendChild(registerbutton);
topnav.appendChild(registerbutton);
topnav.appendChild(locationnavel);
topnav.appendChild(schedulenavel);
topnav.appendChild(detailsnavel);
topnav.appendChild(aboutnavel);
document.body.insertBefore(topnav,headerel[0]);
document.getElementsByTagName('h1')[0].innerHTML = "New York Recreational Cricket League";

// Sections part

document.getElementsByTagName('section')[0].setAttribute('class','section1');
document.getElementsByTagName('section')[1].setAttribute('class','section2');
document.getElementsByTagName('section')[2].setAttribute('class','section3');
document.getElementsByTagName('section')[3].setAttribute('class','section4');
document.getElementsByTagName('section')[4].setAttribute('class','section5');

const sectiondivel = document.createElement('div');
sectiondivel.setAttribute('class','selector');
const inputlbl1 = document.createElement('div');
inputlbl1.setAttribute("id","card1");
inputlbl1.setAttribute("class", "card cards1");
inputlbl1.appendChild(document.getElementsByClassName('section1')[0]);
const inputlbl2 = document.createElement('div');
inputlbl2.setAttribute("for","card2");
inputlbl2.setAttribute("class", "card cards2");
inputlbl2.appendChild(document.getElementsByClassName('section2')[0]);
const inputlbl3 = document.createElement('div');
inputlbl3.setAttribute("for","card3");
inputlbl3.setAttribute("class", "card cards3");
inputlbl3.appendChild(document.getElementsByClassName('section3')[0]);
sectiondivel.appendChild(inputlbl1);
sectiondivel.appendChild(inputlbl2);
sectiondivel.appendChild(inputlbl3);

document.body.insertBefore(sectiondivel,document.getElementsByTagName('section')[0]);

const schmapdiv = document.createElement('div');
schmapdiv.setAttribute('class','scedulemap');
const mapdiv = document.createElement('div');
const mapframediv = document.createElement('div');
mapframediv.setAttribute('class','mapframe');
mapframediv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.0663856669767!2d-73.96815832397081!3d40.782554671383075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sin!4v1722596349405!5m2!1sen!2sin" width="90%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
mapdiv.setAttribute('class','mapdiv');
mapdiv.appendChild(document.getElementsByClassName('section4')[0]);
mapdiv.appendChild(mapframediv);
schmapdiv.appendChild(mapdiv);
document.body.insertBefore(schmapdiv,document.getElementsByTagName('footer')[0]);

const schedulediv = document.createElement('div');
schedulediv.setAttribute('class','schedulediv');
const schchilddiv = document.createElement('div');
schchilddiv.setAttribute('class','schchilddiv');
schchilddiv.appendChild(document.getElementsByClassName('section5')[0]);
schedulediv.appendChild(schchilddiv);
document.body.insertBefore(schedulediv,document.getElementsByTagName('footer')[0]);


// Table part
const eventstable = document.createElement('table');
eventstable.setAttribute('class','eventstable');
const rowelement = document.createElement('tr');
const thelement1 = document.createElement('th');
const calel = document.createElement('td');
thelement1.innerHTML = 'Date';
const thelement2 = document.createElement('th');
thelement2.innerHTML = 'Event';
const thelement3 = document.createElement('th');
thelement3.innerHTML = 'Details';
rowelement.appendChild(calel);
rowelement.appendChild(thelement1);
rowelement.appendChild(thelement2);
rowelement.appendChild(thelement3);
const rowelement1 = document.createElement('tr');
const colelement11 = document.createElement('td');
colelement11.innerHTML = "April 15th";
const colelement12 = document.createElement('td');
colelement12.innerHTML = "Opening Day";
const colelement13 = document.createElement('td');
colelement13.innerHTML = "We will open the games on April 15th. This will entail welcome speech, schedule for the entire season, awards and rewards.";
const calel1 = document.createElement('img');
calel1.setAttribute('src','images/cal.png');
rowelement1.appendChild(calel1);
rowelement1.appendChild(colelement11);
rowelement1.appendChild(colelement12);
rowelement1.appendChild(colelement13);

const rowelement2 = document.createElement('tr');
const colelement21 = document.createElement('td');
colelement21.innerHTML = "July 8th-9th";
const colelement22 = document.createElement('td');
colelement22.innerHTML = "Mid-Season Tournament";
const colelement23 = document.createElement('td');
colelement23.innerHTML = "Mid-season tournaments will take place on July 8th and 9th. Enlisted and qualified teams will be able to showcase their skills and power through to semi finals.";
const calel2 = document.createElement('img');
calel2.setAttribute('src','images/cal.png');
rowelement2.appendChild(calel2);
rowelement2.appendChild(colelement21);
rowelement2.appendChild(colelement22);
rowelement2.appendChild(colelement23);

const rowelement3 = document.createElement('tr');
const colelement31 = document.createElement('td');
colelement31.innerHTML = "September 20th";
const colelement32 = document.createElement('td');
colelement32.innerHTML = "Season Finals";
const colelement33 = document.createElement('td');
colelement33.innerHTML = "We will host the semi finals, which is open to watch by all the participating teams.";
const calel3 = document.createElement('img');
calel3.setAttribute('src','images/cal.png');
rowelement3.appendChild(calel3);
rowelement3.appendChild(colelement31);
rowelement3.appendChild(colelement32);
rowelement3.appendChild(colelement33);

const rowelement4 = document.createElement('tr');
const colelement41 = document.createElement('td');
colelement41.innerHTML = "September 30th";
const colelement42 = document.createElement('td');
colelement42.innerHTML = "Closing ceremony";
const colelement43 = document.createElement('td');
colelement43.innerHTML = "Concluding the successful league for this season, we'll have closing cermony with goodies, awards, rewards and refrshments, while highlighting the season events.";
const calel4 = document.createElement('img');
calel4.setAttribute('src','images/cal.png');
rowelement4.appendChild(calel4);
rowelement4.appendChild(colelement41);
rowelement4.appendChild(colelement42);
rowelement4.appendChild(colelement43);

eventstable.appendChild(rowelement);
eventstable.appendChild(rowelement1);
eventstable.appendChild(rowelement2);
eventstable.appendChild(rowelement3);
eventstable.appendChild(rowelement4);
document.getElementsByClassName('section5')[0].getElementsByTagName('ul')[0].innerHTML = " ";
document.getElementsByClassName('section5')[0].appendChild(eventstable);



//header part
const headervideo = document.createElement('video');
headervideo.setAttribute('id','videoe1');
headervideo.setAttribute('preload','auto');
headervideo.setAttribute('autoplay','');
headervideo.setAttribute('muted','');
headervideo.setAttribute('loop','');
const srcvideo = document.createElement('source');
srcvideo.setAttribute('src','images/cricket.webm');
srcvideo.setAttribute('type','video/webm');
const srcvideo1 = document.createElement('source');
srcvideo1.setAttribute('src','images/cricket.mp4');
srcvideo1.setAttribute('type','video/mp4');
headervideo.appendChild(srcvideo);
headervideo.appendChild(srcvideo1);
const headerdiv1 = document.createElement('div');
headerdiv1.setAttribute('class','headerdiv');
const headerdiv2 = document.createElement('div');
headerdiv2.setAttribute('class','headerdiv2');
headerdiv2.appendChild(document.getElementsByTagName('header')[0]);
headerdiv1.appendChild(headervideo);
headerdiv1.appendChild(headerdiv2);

document.body.insertBefore(headerdiv1,document.getElementsByClassName('selector')[0]);

const footerelement = document.createElement('div');
footerelement.setAttribute('class','footer');
footerelement.appendChild(document.getElementsByTagName('footer')[0]);
const footerpel = document.createElement('p');
footerpel.setAttribute('class','footerpel');
const imgyt = document.createElement('img');
const footeranchor1 = document.createElement('a');
footeranchor1.setAttribute('href','https://www.youtube.com/');
imgyt.setAttribute('id','imgyt');
imgyt.setAttribute('src','images/yt.png');
footeranchor1.appendChild(imgyt);
const imgtwitter = document.createElement('img');
const footeranchor2 = document.createElement('a');
footeranchor2.setAttribute('href','https://x.com/');
imgtwitter.setAttribute('id','imgtwitter');
imgtwitter.setAttribute('src','images/twitter.png');
footeranchor2.appendChild(imgtwitter);
const imginsta = document.createElement('img');
const footeranchor3 = document.createElement('a');
footeranchor3.setAttribute('href','https://www.instagram.com/');
imginsta.setAttribute('id','imginsta');
imginsta.setAttribute('src','images/insta.png');
footeranchor3.appendChild(imginsta);
const imgfb = document.createElement('img');
const footeranchor4 = document.createElement('a');
footeranchor4.setAttribute('href','https://www.facebook.com/');
imgfb.setAttribute('id','imgfb');
imgfb.setAttribute('src','images/fb.png');
footeranchor4.appendChild(imgfb);
footerpel.appendChild(footeranchor1);
footerpel.appendChild(footeranchor2);
footerpel.appendChild(footeranchor3);
footerpel.appendChild(footeranchor4);
footerelement.appendChild(footerpel);
document.body.appendChild(footerelement);

const contactusbold = document.createElement('strong');
contactusbold.innerHTML = document.getElementsByClassName('footer')[0].getElementsByTagName('p')[0].innerHTML;
document.getElementsByClassName('footer')[0].getElementsByTagName('p')[0].innerHTML = "";
document.getElementsByClassName('footer')[0].getElementsByTagName('p')[0].appendChild(contactusbold);

window.onscroll = function() {
  var scrollvar = Math.round(window.pageYOffset);
  changecolor(scrollvar);
};

function changecolor(scrollvar){
  if( scrollvar < 400){
    document.getElementsByClassName('topnav')[0].style.background = '';
  }else{
    document.getElementsByClassName('topnav')[0].style.background = '#89B7FA';
  }
}

const sec1pel = document.getElementsByClassName('section1')[0].getElementsByTagName('p')[0].innerHTML;
document.getElementsByClassName('section1')[0].getElementsByTagName('p')[0].innerHTML = "";
document.getElementsByClassName('section1')[0].getElementsByTagName('p')[0].innerHTML = "<p>The New York Recreational Cricket League (NYRCL) is dedicated to promoting the sport of cricket among New Yorkers of all ages. <br/> <br/> We offer a friendly but competitive environment where players can improve their skills and enjoy the game.</p>";
const sec2pel = document.getElementsByClassName('section2')[0].getElementsByTagName('p')[0].innerHTML;
document.getElementsByClassName('section2')[0].getElementsByTagName('p')[0].innerHTML = "";
document.getElementsByClassName('section2')[0].getElementsByTagName('p')[0].innerHTML = "<p>Interested in playing? <br/> <br/> We welcome players of all skill levels!  <br/>  <br/> To join, simply fill out our online registration form on our website, or contact us at join@nyrcl.com for more details.</p>";
const sec3pel = document.getElementsByClassName('section3')[0].getElementsByTagName('p')[0].innerHTML;
document.getElementsByClassName('section3')[0].getElementsByTagName('p')[0].innerHTML = "";
document.getElementsByClassName('section3')[0].getElementsByTagName('p')[0].innerHTML = "<p>Registration fee: $150 per player <br/><br/> It covers the entire season. <br/><br/> This fee includes uniforms, equipment rental, and insurance.</p>";
const sec4pel = document.getElementsByClassName('section4')[0].getElementsByTagName('p')[0].innerHTML;
document.getElementsByClassName('section4')[0].getElementsByTagName('p')[0].innerHTML = "";
document.getElementsByClassName('section4')[0].getElementsByTagName('p')[0].innerHTML = "<p>All games are held at the iconic <strong> Central Park Cricket Fields </strong>, located near the north end of Central Park. <br/> <br/> On the bright side, it is easy to access via public transport as well.</p>"
const sec5pel = document.getElementsByClassName('section5')[0].getElementsByTagName('p')[0].innerHTML;
document.getElementsByClassName('section5')[0].getElementsByTagName('p')[0].innerHTML = "";
document.getElementsByClassName('section5')[0].getElementsByTagName('p')[0].innerHTML = "<p>The NYRCL season runs from April through September. <br/> Games will typically be held over weekends. <br/> <br/> <strong> Schedule for upcoming season: </strong></p>"
