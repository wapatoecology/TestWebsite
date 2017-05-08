var source = 1000;
var prey = 10
var pred = 5
var k1 = 0.001
var k2 = 0.05
var k3 = 0.1
var k4 = 0.05
var k5 = 0.3
var dt = 0.05
var dprey
var dpred

function setup() {
    createCanvas(600, 400);   


}
function draw() {
    //backgournd
    background(250, 250, 100);
    
    //line
    line(90,200,500,200)
    
    //source
    fill(250,200,200);
    ellipse(90, 200, 100, 100);
    
    //prey
    fill(200, 250, 200);
    //ellipse(300, 200, prey*5, prey*5);
    ellipse(300, 300-(prey*5), 50, 50);
    
    
    
    //pred
    fill(200, 250, 100);
    //ellipse(500, 200, pred*5, pred*5);
    ellipse(500, 300-(pred*5), 50,50);
    dprey = ((k1*source * prey)-(k2*prey)-(k3 * prey * pred))*dt;
    
    dpred = ((k4*pred*prey)-(k5*pred))*dt;
    
    prey = prey + dprey
    pred = pred + dpred
    
}