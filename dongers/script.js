var c = document.getElementById("c");
var ctx = c.getContext("2d");
var d = document.getElementById("d");
var id = 0;
var arms = 
  ["ヽ","ﾉ","ι","ง","┌","┘","╯","╮","╭","¬","ᕙ","ᕗ","ᕕ","ᕗ","|","つ","っ","ლ "," ლ","ᕦ","ᕤ","乁","ㄏ","凸","ᓄ","୧","୧ "," ୧","୨"," ୨","୨ ","~",""];

var sides = 
  ["(",")","( "," )","༼","༽","༼ "," ༽","ʕ","ʔ","ʕ "," ʔ","[","]","[ "," ]"];

var eyes = 
    ["°","º","⚆","ಠ","ಥ","ຈ","@","Ὸ","☉","●","ʘ","◕","◔","◉","Ɵ͆","Ɵ","•","•̀","•́","⎚","σ","ರೃ","☢","☑","╯","╰","◥▶","◀◤","´","｀","ʘ̚","＾","☯","☭","✪","♥","■","˘","▀̿̿","▀̿","▣","'","'́"," ͒","  ͒","ᑊ"];

var brows = 
    [ "͡","͝","͠", "̿"," ̿","̿ "," ",""];

var mouths = 
  [" ͜ʖ","ʖ"," ͜ʖ͡","~͜ʖ~","╭͜ʖ╮","Ĺ̯̿̿","ل͟","ل͜","⌣","□","ᴥ","౪","◞౪◟","益","ｰ","-","_","▽","(oo)","Д","◡","﹏","ᐛ","▾","ヮ","∀","╾","3","~"," ~ ","┐","∠"," ⌂","⌂","ᘩ","o"," o "];

var parts = [0,2,0,0,0,0,0,3,1];


var update = function() {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight*.5;
    ctx.fillStyle="#ffffff";
    ctx.lineWidth = window.innerWidth/260;
    ctx.fillRect(0,0,c.width,c.height);
    ctx.fillStyle="#000000";
    var fontSize = 100*Math.min(window.innerHeight/625,window.innerWidth/1300);
    ctx.font = fontSize+"px Comic Sans MS";
    ctx.textAlign="center";
    var dong = arms[parts[0]]+sides[parts[1]]+brows[parts[3]]+eyes[parts[2]]+mouths[parts[4]]+brows[parts[5]]+eyes[parts[6]]+sides[parts[7]]+arms[parts[8]]
    d.innerHTML=dong;
    d.style.fontSize=fontSize/16+"em";
    ctx.font = fontSize*.69+"px Comic Sans MS";
    for (var i = 0; i < 9; i++) {
	ctx.rect(window.innerWidth/20 + i*window.innerWidth/10,window.innerHeight*1/10,window.innerWidth/10,window.innerHeight/5);
	ctx.rect(window.innerWidth/20 + i*window.innerWidth/10,0,window.innerWidth/20,window.innerHeight/10);
	ctx.rect(window.innerWidth/10 + i*window.innerWidth/10,0,window.innerWidth/20,window.innerHeight/10);
	var p
	if ( i == 0 || i == 8)
	    p = arms;
	else if (i == 1 || i == 7)
	    p = sides;
	else if (i == 2 || i == 6)
	    p = eyes;
	else if (i == 3 || i == 5)
	    p = brows;
	else if (i == 4)
	    p = mouths;
	ctx.fillText(p[parts[i]],(i+1)*window.innerWidth/10,window.innerHeight*.25);
	ctx.fillText("↑",3*window.innerWidth/40 + i*window.innerWidth/10,window.innerHeight*.07);
	ctx.fillText("↓",5*window.innerWidth/40 + i*window.innerWidth/10,window.innerHeight*.07);	
    }
    ctx.font = fontSize*.42+"px Comic Sans MS";
    ctx.fillText("click arrows above each part to modify",window.innerWidth/2,window.innerHeight*.4);
    ctx.stroke();
    window.requestAnimationFrame(update);  
};


var clicked = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var b = Math.floor(18*(x- (window.innerWidth/20))/(9*window.innerWidth/10));
    var i = Math.floor(b/2);
    var d = b%2;
    var p;
    if (i == 0 || i == 8)
	p = arms;
    else if (i == 1 || i == 7)
	p = sides;
    else if (i == 2 || i == 6)
	p = eyes;
    else if (i == 3 || i == 5)
	p = brows;
    else if (i == 4)
	p = mouths;
    if (d) {
	if (parts[i] <= 0)
	    parts[i] = p.length-1;
	else
	    parts[i]--;
	
    }
    else {
	if (parts[i] >= p.length-1)
	    parts[i] = 0;
	else
	    parts[i]++;
    }
};     


var dongers = [];
window.onload = update();
c.addEventListener("click",clicked);
window.requestAnimationFrame(update);
