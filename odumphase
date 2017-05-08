var source = 1000;
var prey = 10;
var pred = 5;
var k1 = 0.0005;
var k2 = 0.05;
var k3 = 0.17;
var k4 = 0.02;
var k5 = 0.03;
var dt = 0.2;
var dprey;
var dpred;

//add another
var pred2 = 2  ;
var dpred2;
var k6 = 0.1;
var k7 = 0.02;
var k8 = 0.3;
 

function setup() {
    createCanvas(700, 600);   
    //backgournd
    background(250, 250, 100);

}
function draw() {
 
    
    //line
    //line(90,300,500,300)
    
    //source
    fill(250,200,200);
    //ellipse(90, 200, 100, 100);
    
    //prey
    fill(200, 250, 200);
    //ellipse(300, 300-(prey*20), 50, 50);
    
    
    //pred
    fill(200, 250, 100);
    //ellipse(500, 300-(pred*200), 50,50);
    
    //pred2
    fill(100, 100, 200);
    //ellipse(550, 300-(pred2*20), 50, 50);
    
    //phase
    fill(100, 100, 200);
    ellipse(prey*100, pred*100, .2, .2);
    
    dprey = ((k1*source * prey)-(k2*prey)-(k3 * prey * pred))*dt;
    
    dpred = ((k4*pred*prey)-(k5*pred)-(k6 * pred * pred2))*dt;
    
    dpred2 =((k7*pred2*pred)-(k8*pred2))*dt;
    
    prey = prey + dprey
    pred = pred + dpred
    pred2 = pred2 + dpred2
    
}