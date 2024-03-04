let font, fontBold;
let bold = false;
let switcher = false;
let currentFont = "Roboto-Regular";

function preload() {
  font = loadFont('assets/fonts/Inconsolata/static/Inconsolata-Black.ttf');
  fontBold = loadFont('assets/fonts/Inconsolata/static/Inconsolata-ExtraBold.ttf');
  fontRoboto = loadFont('assets/fonts/Roboto/Roboto-Regular.ttf');
}

function setup() {
  frameRate(5);
  createCanvas(700, 700);
  
}

function mousePressed(fxn) {
  bold = !(bold);
  switcher = true;
}

function draw() {
  clear();
  if (switcher === true) {
    if (bold === false) {
      textFont(fontRoboto);
      console.log("Roboto-Regular");
      currentFont ="Roboto-Regular";

      // textFont(fontBold);
      // fontBold.elt.id = "Inconsolata-ExtraBold"; 
    

      switcher = false;
    } else {
      textFont(font);
      console.log("Inconsolata-Black");
      currentFont ="Inconsolata-Black";
      switcher = false;
    }
    
  }

  fill('orange');
  textSize(20);
  textWrap(WORD);
  text("Whereas a common understanding of these rights and freedoms is... Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance. Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers. Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.", 50, 40, 650);
  describe('From the UN Declaration of Human Rights.');

  fill('gray');
  textSize(20);
  textWrap(WORD);
  text("Click screen to switch font", 50, 390, 650);
  text("Current font is " + currentFont, 50, 360, 650);


}

//https://p5js.org/reference/#/p5/text
//https://p5js.org/reference/#/p5/textWrap