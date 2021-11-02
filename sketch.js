// making a sprite and add background image to it   
var background2, backgroundimage;
// making a variable for cannon sprite and adding a image to it
var cannon, cannonimage;
// making the variable for bullet sprite and the bullet group and adding the image to it 
var bullet, bulletimage, bulletgroup;
// creating the variable to store the images of the balls
var circle1, circle2, circle3, circle4, circle5, circle6, edges;
// making the variable for the ball sprites
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10;
// making the variable to store the value of the ball which will be displayed on the ball 
// making the variable to sore the main score and the each level score
var score1, score2, score3, score4, score5, score6, score7, score8, score9, score10, mainScore, levelScore;
var level1Score, level2Score, level3Score,finalScore
// making variable to something like state to give the velocity to the ball
var ball1V, ball2V, ball3V, ball4V, ball5V, ball6V, ball6V, ball7V, ball8V, ball9V, ball10V;
// making a variable for storing the game state
var gameState; 
// making the variable to store the buttons and the input
var nameBox, Name,replayB, startB,resetB, helpB, backB,storyB, nextLevelB, continueB;
// creating the variable to store sounds
var collideS, enterS, loseS, blastS,clickS,winS
// creating the variable to store image and sprite for the instruction and the story of the game  
var instructonI, instruction, storyI, story;

function preload() {
  cannonimage = loadImage("images/cannon.png");
  bulletimage = loadImage("images/bullet.png");
  backgroundimage = loadImage("images/background.jpg");
  circle1 = loadImage("images/circle1.png");
  circle2 = loadImage("images/circle2.png");
  circle3 = loadImage("images/circle3.png");
  circle4 = loadImage("images/circle4.png");
  circle5 = loadImage("images/circle5.png");
  circle6 = loadImage("images/circle6.png");
  collideS = loadSound("sound/collide.mp3")
  enterS = loadSound("sound/enter.mp3")
  loseS = loadSound("sound/end.mp3")
  clickS = loadSound("sound/click.mp3");
  winS = loadSound("sound/win.mp3")
  instructionI = loadImage("images/instruction.jpg")
  storyI = loadImage("images/story.jpg")
}

function setup() {
  createCanvas(400, 600);

  background2 = createSprite(200, 300);
  background2.addImage("fbgbj", backgroundimage);
  background2.scale = 1;

  cannon = createSprite(50, 550, 50, 50);
  cannon.addImage("shxc", cannonimage);
  cannon.scale = 0.26;
  cannon.y = 540;
  cannon.debug = false;
  cannon.setCollider("rectangle", 0, 0, 230, 470);

  bulletgroup = new Group();

  edges = createEdgeSprites();

// creating the balls and keeping it out of the canvas
  ball1 = createSprite(-50, 100, 30, 30);
  ball1.scale = 0.13;
  ball1.addImage(circle1);
  ball1.setCollider("circle",0,0,200)

  ball2 = createSprite(520, 100, 30, 30);
  ball2.scale = 0.13;
  ball2.addImage(circle2);
  ball2.setCollider("circle",0,0,200)

  ball3 = createSprite(-50, 100, 30, 30);
  ball3.scale = 0.13;
  ball3.addImage(circle3);
  ball3.setCollider("circle",0,0,200)

  ball4 = createSprite(520, 100, 30, 30);
  ball4.scale = 0.13;
  ball4.addImage(circle4);
  ball4.setCollider("circle",0,0,200)

  ball5 = createSprite(-50, 100, 30, 30);
  ball5.scale = 0.13;
  ball5.addImage(circle5);
  ball5.setCollider("circle",0,0,200)

  ball6 = createSprite(520, 100, 30, 30);
  ball6.scale = 0.13;
  ball6.addImage(circle6);
  ball6.setCollider("circle",0,0,200)
  
  ball7 = createSprite(-50, 100, 30, 30);
  ball7.scale = 0.13;
  ball7.addImage(circle1);
  ball7.setCollider("circle",0,0,200)
  
  ball8 = createSprite(520, 100, 30, 30);
  ball8.scale = 0.13;
  ball8.addImage(circle2);
  ball8.setCollider("circle",0,0,200)
  
  ball9 = createSprite(-50, 100, 30, 30);
  ball9.scale = 0.13;
  ball9.addImage(circle6);
  ball9.setCollider("circle",0,0,200)
  
  ball10 = createSprite(520, 100, 30, 30);
  ball10.scale = 0.13;
  ball10.addImage(circle4);
  ball10.setCollider("circle",0,0,200)

  giveValueToBall();
  
  //creating the buttons and the input and making them hide
  replayB = createButton(' REPLAY ')
  replayB.position(165,490);
  replayB.hide();
  replayB.style('color', 'black')
  replayB.mousePressed(ReplayF)

  resetB = createButton(' RESET ')
  resetB.position(170,540);
  resetB.hide();
  resetB.style('color', 'black')
  resetB.mousePressed(ResetF)

  helpB = createButton(' HOW TO PLAY ')
  helpB.position(135,415);
  helpB.hide();
  helpB.style('color', 'black')
  helpB.mousePressed(helpF)

  storyB = createButton(' STORY ')
  storyB.position(155,370);
  storyB.hide();
  storyB.style('color', 'black')
  storyB.mousePressed(storyF)

  backB = createButton(' BACK ')
  backB.position(330,560);
  backB.hide();
  backB.style('color', 'black')
  backB.mousePressed(backF)

  startB = createButton(' START ')
  startB.position(155,290);
  startB.hide();
  startB.mousePressed(storeName);

  nextLevelB = createButton('PLAY NEXT LEVEL')
  nextLevelB.position(135,490);
  nextLevelB.hide();
  nextLevelB.mousePressed(nextLevelF);

  continueB = createButton('CONTINUE')
  continueB.position(155,490);
  continueB.hide();
  continueB.mousePressed(continueF);

  nameBox =  createInput("").attribute("placeholder", "Name");
  nameBox.position(110,250);
  nameBox.hide();

  //add the image to the sprite for displaying it as the story and how to play the game
  instruction = createSprite(200,360)
  instruction.addImage("dk",instructionI)
  instruction.scale =0.6
  instruction.visible = false

  story = createSprite(200,360)
  story.addImage("dkd",storyI)
  story.scale =0.6
  story.visible = false

// giving the intial value to the mainscore(total score) and each level sore
  mainScore = 0;
  levelScore = 0;
  level1Score = 0;
  level2Score = 0;
  level3Score = 0;
  finalScore = 0;

// adding the gameState and giving it he intial value
  gameState = "HOME";
}

function draw(){
background("black")

if (gameState=== "LEVEL 1 STARTING"){
  if (keyDown("space")){
    clickS.play();
    gameState = "LEVEL 1 STARTED";
  }
}

if (gameState=== "LEVEL 2 STARTING"){
  if (keyDown("space")){
    clickS.play();
    gameState = "LEVEL 2 STARTED";
  }
}

if (gameState=== "LEVEL 3 STARTING"){
  if (keyDown("space")){
    clickS.play();
    gameState = "LEVEL 3 STARTED";
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
if (gameState === "LEVEL 1 STARTED"|| gameState === "LEVEL 2 STARTED"|| gameState === "LEVEL 3 STARTED") {
  if(mouseDidMove()){
  cannon.x = mouseX;
  }
  if(keyDown(LEFT_ARROW) && cannon.x>0 && cannon.x<400){
    cannon.x = cannon.x - 8
  }
  if(keyDown(RIGHT_ARROW) && cannon.x>0 && cannon.x<400){
    cannon.x = cannon.x + 8
  }

  if (keyDown("space") || mousePressedOver(cannon)) {
    firebullet();
  }

  if (ball1V === "false") {
    ball1.x = 10;
    ball1.velocityX = random(-4, 4);
    ball1.velocityY = random(-4, 4);
    ball1V = "true";
    enterS.play();
  }

  if (
    ball2V === "false" &&
    ball1V === "true" &&
    frameCount % 110 === 0&&
    mainScore>2
  ) {
    ball2.x = 390;
    ball2.velocityX = random(-4, 4);
    ball2.velocityY = random(-4, 4);
    ball2V = "true";
    enterS.play();
  }

  if (
    ball3V === "false" &&
    ball2V === "true" &&
    frameCount % 120 === 0&&
    mainScore>199
    
  ) {
    ball3.x = 10;
    ball3.velocityX = random(-4, 4);
    ball3.velocityY = random(-4, 4);
    ball3V = "true";
    enterS.play();
  }

  if (
    ball4V === "false" &&
    ball3V === "true" &&
    frameCount % 170 === 0&&
    mainScore>390
  ) {
    ball4.x = 390;
    ball4.velocityX = random(-4, 4);
    ball4.velocityY = random(-4, 4);
    ball4V = "true";
    enterS.play();
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
if (gameState === "LEVEL 2 STARTED" || gameState === "LEVEL 3 STARTED"){
  if (
    ball5V === "false" &&
    ball4V === "true" &&
    frameCount % 469 === 0&&
    mainScore>699
  ) {
    ball5.x = 10;
    ball5.velocityX = random(-4, 4);
    ball5.velocityY = random(-4, 4);
    ball5V = "true";
    enterS.play();
  }

  if (
    ball6V === "false" &&
    ball5V === "true" &&
    frameCount % 329 === 0&&
    mainScore>999
  ) {
    ball6.x = 390;
    ball6.velocityX = random(-4, 4);
    ball6.velocityY = random(-4, 4);
    ball6V = "true";
    enterS.play();
  }

  if (
    ball7V === "false" &&
    ball6V === "true" &&
    frameCount % 629 === 0&&
    mainScore>1400
  ) {
    ball7.x = 10;
    ball7.velocityX = random(-5, 5);
    ball7.velocityY = random(-5,5);
    ball7V = "true";
    enterS.play();
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////
if (gameState === "LEVEL 3 STARTED")
if (
  ball8V === "false" &&
  ball7V === "true" &&
  frameCount % 699 === 0&&
  mainScore>1900
) {
  ball8.x = 390;
  ball8.velocityX = random(-5, 5);
  ball8.velocityY = random(-5,5);
  ball8V = "true";
  enterS.play();
}

if (
  ball9V === "false" &&
  ball8V === "true" &&
  frameCount % 359 === 0&&
  mainScore>2400
) {
  ball9.x = 10;
  ball9.velocityX =random(-5, 5);
  ball9.velocityY = random(-5, 5);
  ball9V = "true";
  enterS.play();
}

if (
  ball10V === "false" &&
  ball9V === "true" &&
  frameCount % 759 === 0&&
  mainScore>2700
) {
  ball10.x = 390;
  ball10.velocityX = random(-5, 5);
  ball10.velocityY = random(-5, 5);
  ball10V = "true";
  enterS.play();
}
}


drawSprites();

ballBounce();

show_HideButtton();

displayText();

cannonVisibility();

bulletTouchingBall();

destroyBall();

loseState();

level1_Won();

level2_Won();

level3_Won();

waitingForBall();

calculateScore();
}


// function to show the button only when in use and making it hide if not in use
function show_HideButtton(){
if(gameState === "LEVEL 1 LOSE"||gameState === "LEVEL 2 LOSE"|| gameState === "LEVEL 3 LOSE"){
  replayB.show();
}else{
  replayB.hide();
}

if(gameState ==="LEVEL 1 WON"||gameState ==="LEVEL 1 LOSE"||
gameState ==="LEVEL 2 WON"||gameState ==="LEVEL 2 LOSE"||
gameState ==="LEVEL 3 WON"||gameState ==="LEVEL 3 LOSE"||
gameState === "FINAL"){
  resetB.show();
}else{
  resetB.hide();
}

if(gameState === "HOME"){
  helpB.show();
}else{
  helpB.hide();
}

if(gameState === "HOME"){
  storyB.show();
}else{
  storyB.hide();
}

if(gameState === "HELP"|| gameState === "STORY"){
  backB.show();
}else{
  backB.hide();
}

if(gameState === "HOME"){
  startB.show();
}else{
  startB.hide();
}

if(gameState === "HOME"){
  nameBox.show();
}else{
  nameBox.hide();
}

if(gameState === "LEVEL 1 WON"||gameState === "LEVEL 2 WON"){
  nextLevelB.show();
}else{
  nextLevelB.hide();
}

if(gameState === "LEVEL 3 WON"){
  continueB.show();
}else{
  continueB.hide();
}
}

//function to create the small ball or the bullet that will be fired from the cannon
function firebullet(){
  if (frameCount % 2 === 0) {
    bullet = createSprite(50, 480);
    bullet.addImage("dsad", bulletimage);
    bullet.scale = 0.085;
    bullet.velocityY = -6;
    bullet.x = cannon.x;
    bullet.depth = 1;
    bullet.debug = false;
    bullet.lifetime = 75;
    bullet.setCollider("rectangle", 0, 0, 220, 50);
    bulletgroup.add(bullet);
  }
}

// function to display the text when in use
function displayText(){
  if(gameState ==="HOME"||gameState ==="LEVEL 1 STARTING"||gameState==="HELP"|| gameState==="STORY"||
     gameState ==="LEVEL 1 LOSE"|| gameState ==="LEVEL 1 WON"|| gameState ==="LEVEL 2 STARTING"||
     gameState === "LEVEL 2 LOSE" || gameState === "LEVEL 2 WON" || gameState ==="LEVEL 3 STARTING"||
     gameState === "LEVEL 3 LOSE" || gameState === "LEVEL 3 WON" || gameState === "FINAL" ){
    textSize(60)
    textFont("Cooper Black")
    stroke("black")
    strokeWeight(10)
    fill("lime")
    text ("CRAZY",50,80)
    fill("yellow")
    text("CANNON",75,140)
  }
/////////////////////////////////////////////////////////////
if (gameState ==="LEVEL 1 STARTING"|| gameState === "LEVEL 2 STARTING"||gameState === "LEVEL 3 STARTING"){
  textSize(30)
  strokeWeight(8)
  fill("cyan")
  stroke("black")
  text("PRESS SPACE",90,350);
  text("TO START",110,390)
}
/////////////////////////////////////////////////////////////
if (gameState ==="LEVEL 1 STARTING"){
  textSize(50)
  strokeWeight(8)
  fill(rgb(225,0,225))
  stroke("black")
  text("LEVEL 1",90,260);
}
////////////////////////////////////////////////////////////
if (gameState ==="LEVEL 2 STARTING"){
  textSize(50)
  strokeWeight(8)
  fill(rgb(225,0,225))
  stroke("black")
  text("LEVEL 2",90,260);
}
////////////////////////////////////////////////////////////
if (gameState ==="LEVEL 3 STARTING"){
  textSize(50)
  strokeWeight(8)
  fill(rgb(225,0,225))
  stroke("black")
  text("LEVEL 3",90,260);
}
////////////////////////////////////////////////////////////
  textFont("Arial Black")
  fill("black");
  textSize(16);
  strokeWeight(3);
  stroke("white");
  text(Math.round(score1), ball1.x - 15, ball1.y + 5);
  text(Math.round(score2), ball2.x - 15, ball2.y + 5);
  text(Math.round(score3), ball3.x - 15, ball3.y + 5);
  text(Math.round(score4), ball4.x - 15, ball4.y + 5);
  text(Math.round(score5), ball5.x - 15, ball5.y + 5);
  text(Math.round(score6), ball6.x - 15, ball6.y + 5);
  text(Math.round(score7), ball7.x - 15, ball7.y + 5);
  text(Math.round(score8), ball8.x - 15, ball8.y + 5);
  text(Math.round(score9), ball9.x - 15, ball9.y + 5);
  text(Math.round(score10), ball10.x - 15, ball10.y + 5);
///////////////////////////////////////////////////////////
if(gameState === "LEVEL 1 STARTED"||gameState ==="LEVEL 2 STARTED"||gameState ==="LEVEL 3 STARTED"){
  textFont("Cooper Black")
  textSize(25);
  fill("yellow");
  stroke("black");
  strokeWeight(7);
  text("SCORE : " + Math.round(mainScore), 135, 30);
}
//////////////////////////////////////////////////////////
if(gameState === "LEVEL 1 LOSE"){
    textSize(40)
    textFont("Cooper Black")
    stroke("black")
    strokeWeight(6)
    fill("red")
    text("YOU LOSE",80,220)
    text("LEVEL 1",110,260)
    fill("cyan")
    textSize(30)
    text("Player's Name:",70,320)
    text(Name,70,360);
    fill(rgb(225,0,225))
    text("SCORE: " +mainScore, 100,420)
}

if(gameState === "LEVEL 1 WON"){
  textSize(40)
  textFont("Cooper Black")
  stroke("black")
  strokeWeight(6)
  fill("red")
  text("YOU COMPLETED",15,220)
  text("LEVEL 1",110,260)
  fill("cyan")
  textSize(30)
  text("Player's Name:",70,320)
  text(Name,70,360);
  fill(rgb(225,0,225))
  text("SCORE: " +mainScore, 100,420)
}

//////////////////////////////////////////////////////////
if(gameState === "LEVEL 2 LOSE"){
  textSize(40)
  textFont("Cooper Black")
  stroke("black")
  strokeWeight(6)
  fill("red")
  text("YOU LOSE",80,220)
  text("LEVEL 2",110,260)
  fill("cyan")
  textSize(30)
  text("Player's Name:",70,320)
  text(Name,70,360);
  fill(rgb(225,0,225))
  text("SCORE: " +mainScore, 100,420)
}

if(gameState === "LEVEL 2 WON"){
textSize(40)
textFont("Cooper Black")
stroke("black")
strokeWeight(6)
fill("red")
text("YOU COMPLETED",15,220)
text("LEVEL 2",110,260)
fill("cyan")
textSize(30)
text("Player's Name:",70,320)
text(Name,70,360);
fill(rgb(225,0,225))
text("SCORE: " +mainScore, 100,420)
}

//////////////////////////////////////////////////////////
if(gameState === "LEVEL 3 LOSE"){
  textSize(40)
  textFont("Cooper Black")
  stroke("black")
  strokeWeight(6)
  fill("red")
  text("YOU LOSE",80,220)
  text("LEVEL 3",110,260)
  fill("cyan")
  textSize(30)
  text("Player's Name:",70,320)
  text(Name,70,360);
  fill(rgb(225,0,225))
  text("SCORE: " +mainScore, 100,420)
}

if(gameState === "LEVEL 3 WON"){
textSize(40)
textFont("Cooper Black")
stroke("black")
strokeWeight(6)
fill("red")
text("YOU COMPLETED",15,220)
text("LEVEL 3",110,260)
fill("cyan")
textSize(30)
text("Player's Name:",70,320)
text(Name,70,360);
fill(rgb(225,0,225))
text("SCORE: " +mainScore, 100,420)
}

if(gameState === "FINAL"){
  textSize(30)
  textFont("Cooper Black")
  stroke("black")
  strokeWeight(6)
  fill("red")
  text("YOU COMPLETED",65,195)
  text("ALL LEVELS",105,235)
  fill("cyan")
  textSize(25)
  text("Player's Name:",90,280)
  text(Name,70,315);
  fill("yellow")
  strokeWeight(7)
  text("LEVEL 1 SCORE:  "+level1Score,40,365)
  text("LEVEL 2 SCORE:  "+level2Score,40,400)
  text("LEVEL 3 SCORE:  "+level3Score,40,435)
  fill("lime")
  text("TOTAL SCORE:  "+finalScore,40,470)
  }

}

// function to store the name typed in the input box when start button is pressed
function storeName(){
  Name = nameBox.value();
  clickS.play();
  if(Name ===""){
    alert ("------> Please Enter Your Name <--------");
  }
 
  if(Name !==""){
  console.log(Name);
gameState ="LEVEL 1 STARTING"
  }
}

// function which will make cannon disapper if not in use
function cannonVisibility(){
if (gameState === "HOME"||
    gameState === "HELP"||
    gameState === "STORY"||
    gameState === "LEVEL 1 LOSE"||
    gameState === "LEVEL 1 WON"||
    gameState === "LEVEL 2 LOSE"||
    gameState === "LEVEL 2 WON"||
    gameState === "LEVEL 3 LOSE"||
    gameState === "LEVEL 3 WON"||
    gameState === "FINAL"){
  cannon.visible = false;
}else{
  cannon.visible = true;
}
}

// function which will be called when the how to play button is press and will display the rules to play
function helpF(){
  if(gameState === "HOME" ){
    clickS.play();
instruction.visible =true
gameState = "HELP"
  }
}

// function which will be called if the story button is pressed and will display the story of the game 
function storyF(){
  if(gameState === "HOME" ){
    clickS.play();
    story.visible =true
    gameState = "STORY"
  }
}

// function which will be called when the back button is press 
function backF(){
  if (gameState==="HELP"||gameState === "STORY"){
    clickS.play();
    instruction.visible = false;
    story.visible = false
    gameState= "HOME"
  }

}

// function to mke the ball bounce off if on edge
function ballBounce(){
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  ball7.bounceOff(edges);
  ball8.bounceOff(edges);
  ball9.bounceOff(edges);
  ball10.bounceOff(edges);
  cannon.collide(edges)
}

// function to give te value to the ball which will be displayed on the ball 
function giveValueToBall(){
  var qwer = 1
  if(qwer === 1 ){
    score1 = 0 
    score1 = Math.round(random(200, 100))
    score2 = 0
    score2 = Math.round(random(200, 100));
    score3 = 0 
    score3 = Math.round(random(300, 200));
    score4 = 0
    score4 = Math.round(random(400, 300));
    score5 = 0 
    score5 = Math.round(random(500, 400));
    score6 = 0
    score6 = Math.round(random(600, 500));
    score7 = 0 
    score7 = Math.round(random(500, 600))
    score8 = 0
    score8 = Math.round(random(500, 600));
    score9 = 0 
    score9 = Math.round(random(500, 600));
    score10 = 0
    score10 = Math.round(random(500, 600));
    ball1V = "false"
    ball2V = "false"
    ball3V = "false"
    ball4V = "false"
    ball5V = "false"
    ball6V = "false"
    ball7V = "false"
    ball8V = "false"
    ball9V = "false"
    ball10V = "false"
    qwer = 2
  }
}

// function will be excuted if small ball(bullet) is touching the ball
function bulletTouchingBall(){
  if (ball1.isTouching(bulletgroup) && score1 > 0) {
    score1 = score1 - 3;
    mainScore = mainScore + 3;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
  if (ball2.isTouching(bulletgroup) && score2 > 0) {
    score2 = score2 - 3;
    mainScore = mainScore + 3;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
  if (ball3.isTouching(bulletgroup) && score3 > 0) {
    score3 = score3 - 3;
    mainScore = mainScore + 3;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
  if (ball4.isTouching(bulletgroup) && score4 > 0) {
    score4 = score4 - 3;
    mainScore = mainScore + 3;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
  if (ball5.isTouching(bulletgroup) && score5 > 0) {
    score5 = score5 -3;
    mainScore = mainScore + 3;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
  if (ball6.isTouching(bulletgroup) && score6 > 0) {
    score6 = score6 - 3;
    mainScore = mainScore + 3;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
  if (ball7.isTouching(bulletgroup) && score7 > 0) {
    score7 = score7 - 4;
    mainScore = mainScore + 4;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
  if (ball8.isTouching(bulletgroup) && score8 > 0) {
    score8 = score8 - 4;
    mainScore = mainScore + 4;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
  if (ball9.isTouching(bulletgroup) && score9 > 0) {
    score9 = score9 - 4;
    mainScore = mainScore + 4;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
  if (ball10.isTouching(bulletgroup) && score10 > 0) {
    score10 = score10 - 4;
    mainScore = mainScore + 4;
    bulletgroup[0].destroy();
    collideS.play();
    collideS.setVolume(0.5)
  }
}

// function will work if the balls' value will be less than zero.
// It will send the ball out of the canvas so the ball will look like it is destroyed 
function destroyBall(){
  if (score1 <= 0) {
    ball1.velocityX = 0;
    ball1.velocityY = 0;
    ball1.x = 540;
    ball1.y = 50;
  }
  if (score2 <= 0) {
    ball2.velocityX = 0;
    ball2.velocityY = 0;
    ball2.x = 540;
    ball2.y = 50;
  }
  if (score3 <= 0) {
    ball3.velocityX = 0;
    ball3.velocityY = 0;
    ball3.x = 540;
    ball3.y = 50;
  }
  if (score4 <= 0) {
    ball4.velocityX = 0;
    ball4.velocityY = 0;
    ball4.x = 540;
    ball4.y = 50;
  }
  if (score5 <= 0) {
    ball5.velocityX = 0;
    ball5.velocityY = 0;
    ball5.x = 540;
    ball5.y = 50;
  }
  if (score6 <= 0) {
    ball6.velocityX = 0;
    ball6.velocityY = 0;
    ball6.x = 540;
    ball6.y = 50;
  }
  if (score7 <= 0) {
    ball7.velocityX = 0;
    ball7.velocityY = 0;
    ball7.x = 540;
    ball7.y = 50;
  }
  if (score8 <= 0) {
    ball8.velocityX = 0;
    ball8.velocityY = 0;
    ball8.x = 540;
    ball8.y = 50;
  }
  if (score9 <= 0) {
    ball9.velocityX = 0;
    ball9.velocityY = 0;
    ball9.x = 540;
    ball9.y = 50;
  }
  if (score10 <= 0) {
    ball10.velocityX = 0;
    ball10.velocityY = 0;
    ball10.x = 540;
    ball10.y = 50;
  }
}

// this function will send the ball out of the canvas 
function stopBall(){
    ball1.velocityX = 0;
    ball1.velocityY = 0;
    ball1.x = 540;
    ball1.y = 50;

    ball2.velocityX = 0;
    ball2.velocityY = 0;
    ball2.x = 540;
    ball2.y = 50;

    ball3.velocityX = 0;
    ball3.velocityY = 0;
    ball3.x = 540;
    ball3.y = 50;

    ball4.velocityX = 0;
    ball4.velocityY = 0;
    ball4.x = 540;
    ball4.y = 50;

    ball5.velocityX = 0;
    ball5.velocityY = 0;
    ball5.x = 540;
    ball5.y = 50;

    ball6.velocityX = 0;
    ball6.velocityY = 0;
    ball6.x = 540;
    ball6.y = 50;

    ball7.velocityX = 0;
    ball7.velocityY = 0;
    ball7.x = 540;
    ball7.y = 50;

    ball8.velocityX = 0;
    ball8.velocityY = 0;
    ball8.x = 540;
    ball8.y = 50;

    ball9.velocityX = 0;
    ball9.velocityY = 0;
    ball9.x = 540;
    ball9.y = 50;

    ball10.velocityX = 0;
    ball10.velocityY = 0;
    ball10.x = 540;
    ball10.y = 50;
}

// this function will work if the ball touches the cannon
function loseState(){
  if( ball1.isTouching(cannon) ||
  ball2.isTouching(cannon) ||
  ball3.isTouching(cannon) ||
  ball4.isTouching(cannon) ||
  ball5.isTouching(cannon) ||
  ball6.isTouching(cannon) ||
  ball7.isTouching(cannon) ||
  ball8.isTouching(cannon) ||
  ball9.isTouching(cannon) ||
  ball10.isTouching(cannon) 
) {
   if (gameState==="LEVEL 1 STARTED"){
   stopBall();
   gameState ="LEVEL 1 LOSE"
   loseS.play();
   }

   if (gameState==="LEVEL 2 STARTED"){
    stopBall();
    gameState ="LEVEL 2 LOSE"
    loseS.play();
    }

    if (gameState==="LEVEL 3 STARTED"){
      stopBall();
      gameState ="LEVEL 3 LOSE"
      loseS.play();
      }
 }

}

// this function will work if the player will the first level
function level1_Won(){
  if(gameState === "LEVEL 1 STARTED" &&
  score1<=0 && score2<=0 &&
  score3<=0 && score4<=0){
  stopBall();
  gameState = "LEVEL 1 WON"
  var a = 1
  if(a === 1){
  winS.play();
  winS.setVolume(0.8);
  a=2
  }
 }
}

function nextLevelF(){
  if(gameState === "LEVEL 1 WON"){
  gameState = "LEVEL 2 STARTING"
  giveValueToBall();
  mainScore = 0;
  }

  if(gameState === "LEVEL 2 WON"){
    gameState = "LEVEL 3 STARTING"
    giveValueToBall();
    mainScore = 0;
    }
}

function ReplayF(){
  if (gameState === "LEVEL 1 LOSE"){
    giveValueToBall();
    gameState = "LEVEL 1 STARTING"
    mainScore = 0 ;
  }

  if (gameState === "LEVEL 2 LOSE"){
    giveValueToBall();
    gameState = "LEVEL 2 STARTING"
    mainScore = 0 ;
  }

  if (gameState === "LEVEL 3 LOSE"){
    giveValueToBall();
    gameState = "LEVEL 3 STARTING"
    mainScore = 0 ;
  }
}

function level2_Won(){
  if(gameState === "LEVEL 2 STARTED" &&
  score1<=0 && score2<=0 &&
  score3<=0 && score4<=0 && score5<=0 &&
  score6<=0 && score7<=0){
  stopBall();
  gameState = "LEVEL 2 WON"
  var b = 1
  if(b === 1){
  winS.play();
  winS.setVolume(0.8);
  b=2
  }
 }
}

function level3_Won(){
  if(gameState === "LEVEL 3 STARTED" &&
  score1<=0 && score2<=0 &&
  score3<=0 && score4<=0 && score5<=0 &&
  score6<=0 && score7<=0 && score8<= 0 &&
  score9<=0 && score10<=0){
  stopBall();
  gameState = "LEVEL 3 WON"
  var c = 1
  if(c === 1){
  winS.play();
  winS.setVolume(0.8);
  c=2
  }
 }
}

function waitingForBall(){
  if(gameState === "LEVEL 1 STARTED"||gameState === "LEVEL 2 STARTED"||gameState === "LEVEL 3 STARTED"){
    if((400<ball1.x||ball1.x<0)&&
       (400<ball2.x||ball2.x<0)&&
       (400<ball3.x||ball3.x<0)&&
       (400<ball4.x||ball4.x<0)&&
       (400<ball5.x||ball5.x<0)&&
       (400<ball6.x||ball6.x<0)&&
       (400<ball7.x||ball7.x<0)&&
       (400<ball8.x||ball8.x<0)&&
       (400<ball9.x||ball9.x<0)&&
       (400<ball10.x||ball10.x<0)
       ){
         fill("grey")
         stroke("black")
         strokeWeight(3)
         textSize(21)
         textFont("Cooper Black")
          text("WAIT FOR THE BALL TO COME",30,200)
       }
  }
}

function continueF(){
if(gameState === "LEVEL 3 WON"){
  gameState= "FINAL"
}
}

function calculateScore(){
  if(gameState === "LEVEL 1 WON"){
    level1Score = mainScore;
  }
  if(gameState === "LEVEL 2 WON"){
    level2Score = mainScore;
  }
  if(gameState === "LEVEL 3 WON"){
    level3Score = mainScore;
  }
  if(gameState ==="FINAL"){
    finalScore = level1Score+level2Score+level3Score;
  }

  console.log(level1Score,level2Score,level3Score,finalScore)
}

function ResetF(){
  if(gameState ==="LEVEL 1 WON"||gameState ==="LEVEL 1 LOSE"||
  gameState ==="LEVEL 2 WON"||gameState ==="LEVEL 2 LOSE"||
  gameState ==="LEVEL 3 WON"||gameState ==="LEVEL 3 LOSE"||
  gameState ==="FINAL"){
    gameState="HOME"
    level1Score = 0;
    level2Score = 0;
    level3Score = 0;
    finalScore = 0;
    stopBall();
    giveValueToBall();
    mainScore = 0;
    clickS.play();
  }
}

//////////////////////////////////////////code by Ashutosh Kumar/////////////////////
