var d;

let shape1;
let shape2;
let shape3;
let shape4;
let shape5;
let shape6;
let shape7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.heading');
  d.position(75,0);
  
  // gui = new Gui();
  // let gui_setup = new dat.GUI();
  // gui_setup.add(gui, 'Rotate', 0, 360).step(0.125).onChange(update);
  
 
  shape1 = new Draggable1(windowWidth/2 ,200, windowWidth/2+50,  150, windowWidth/2, 100, windowWidth/2-50, 150);
  

  shape2 = new Draggable3(windowWidth/2+100, 450, windowWidth/2+170.71, 450, windowWidth/2+241.42, 379.29, windowWidth/2+170.71, 379.29);
  

  shape3 = new Draggable2(50,50,100,100,50,150);
  

  shape4 = new Draggable4(50,150,0,200,50,250);
  

  shape5 = new Draggable4(70.71,250,0,320.71,70.71,391.42);
  

  shape6 = new Draggable2(50, 391.42, 150, 491.42, 50, 591.42);
  

  shape7 = new Draggable5(250, 450, 250, 591.42, 108.58, 591.42);
}

function draw() {
  background(245, 235, 214);
  
  shape1.over1();
  shape1.update1();
  shape1.show1();
  
  shape2.over3();
  shape2.update3();
  shape2.show3();
  
  shape3.over2();
  shape3.update2();
  shape3.show2();
  
  shape4.over2();
  shape4.update2();
  shape4.show2();
  
  shape5.over2();
  shape5.update2();
  shape5.show2();
  
  shape6.over2();
  shape6.update2();
  shape6.show2();
  
  shape7.over2();
  shape7.update2();
  shape7.show2();

}

function mousePressed() {
  shape1.pressed1();
  shape2.pressed3();
  shape3.pressed2();
  shape4.pressed2();
  shape5.pressed2();
  shape6.pressed2();
  shape7.pressed2();
}

function mouseReleased() {
  shape1.released1();
  shape2.released3();
  shape3.released2();
  shape4.released2();
  shape5.released2();
  shape6.released2();
  shape7.released2();
}

class Draggable1 {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4;
    this.y4 = y4;
    this.offsetX1 = 0;
    this.offsetY1 = 0;
    this.offsetX2 = 0;
    this.offsetY2 = 0;
    this.offsetX3 = 0;
    this.offsetY3 = 0;
    this.offsetX4 = 0;
    this.offsetY4 = 0;
  }

  over1() {
    // Is mouse over object
    
    if (mouseX > this.x4 && mouseX < this.x2 && mouseY < this.y2 && mouseY > this.y4)
    {
      print("2")
      this.rollover = true;
    } else {
      this.rollover = false;
    }
 }

  update1() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x1 = mouseX + this.offsetX1;
      this.y1 = mouseY + this.offsetY1;
      this.x2 = mouseX + this.offsetX2;
      this.y2 = mouseY + this.offsetY2;
      this.x3 = mouseX + this.offsetX3;
      this.y3 = mouseY + this.offsetY3;
      this.x4 = mouseX + this.offsetX4;
      this.y4 = mouseX + this.offsetY4;
    }
  }

  show1() {
    stroke(0);
    fill(60, 81, 36);
    quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
  }

  pressed1() {

    if (mouseX > this.x4 && mouseX < this.x2 && mouseY < this.y2 && mouseY > this.y4) {
      this.dragging = true;

      this.offsetX1 = this.x1 - mouseX;
      this.offsetY1 = this.y1 - mouseY;
      this.offsetX2 = this.x2 - mouseX;
      this.offsetY2 = this.y2 - mouseY;
      this.offsetX3 = this.x3 - mouseX;
      this.offsetY3 = this.y3 - mouseY;
      this.offsetX4 = this.x4 - mouseX;
      this.offsetY4 = this.y4 - mouseY;
    }
  }

  released1() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable3 {
  constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4;
    this.y4 = y4;
    this.offsetX1 = 0;
    this.offsetY1 = 0;
    this.offsetX2 = 0;
    this.offsetY2 = 0;
    this.offsetX3 = 0;
    this.offsetY3 = 0;
    this.offsetX4 = 0;
    this.offsetY4 = 0;
  }

  over3() {
    // Is mouse over object
    
    if (mouseX > this.x4 && mouseX < this.x2 && mouseY < this.y2 && mouseY > this.y4)
    {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
 }

  update3() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x1 = mouseX + this.offsetX1;
      this.y1 = mouseY + this.offsetY1;
      this.x2 = mouseX + this.offsetX2;
      this.y2 = mouseY + this.offsetY2;
      this.x3 = mouseX + this.offsetX3;
      this.y3 = mouseY + this.offsetY3;
      this.x4 = mouseX + this.offsetX4;
      this.y4 = mouseX + this.offsetY4;
 
    }
  }

  show3() {
    stroke(0);
    fill(132, 138, 96);
    quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
  }

  pressed3() {
    print("3")
    // Did I click on the rectangle?
    if (mouseX > this.x4 && mouseX < this.x2 && mouseY < this.y2 && mouseY > this.y4) {
      this.dragging = true;
      print("5")
      //print("hello2")
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX1 = this.x1 - mouseX;
      this.offsetY1 = this.y1 - mouseY;
      this.offsetX2 = this.x2 - mouseX;
      this.offsetY2 = this.y2 - mouseY;
      this.offsetX3 = this.x3 - mouseX;
      this.offsetY3 = this.y3 - mouseY;
      this.offsetX4 = this.x4 - mouseX;
      this.offsetY4 = this.y4 - mouseY;
    }
  }

  released3() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable2 {
  constructor(x1, y1, x2, y2, x3, y3) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.offsetX1 = 0;
    this.offsetY1 = 0;
    this.offsetX2 = 0;
    this.offsetY2 = 0;
    this.offsetX3 = 0;
    this.offsetY3 = 0;
  }

  over2() {
     //Is mouse over object
     if (mouseY < ((this.y2-this.y3)/(this.x2-this.x3) * (mouseX-this.x3)+ this.y3) && (mouseY > ((this.y1-this.y2)/(this.x1-this.x2)* (mouseX-this.x2)+ this.y2)) && mouseX > this.x1 && mouseX<this.x2)
     {
         this.rollover = true;
       }
     else {
       this.rollover = false;
     }
 }

  update2() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x1 = mouseX + this.offsetX1;
      this.y1 = mouseY + this.offsetY1;
      this.x2 = mouseX + this.offsetX2;
      this.y2 = mouseY + this.offsetY2;
      this.x3 = mouseX + this.offsetX3;
      this.y3 = mouseY + this.offsetY3;
    }
  }

  show2() {
    stroke(0);
    fill(89, 104, 39);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  pressed2() {
    //print("3")
    // Did I click on the rectangle?
    if (mouseY < ((this.y2-this.y3)/(this.x2-this.x3) * (mouseX-this.x3)+ this.y3) && (mouseY > ((this.y1-this.y2)/(this.x1-this.x2)* (mouseX-this.x2)+ this.y2)) && mouseX > this.x1 && mouseX<this.x2) {
      this.dragging = true;
      //print("hello2")
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX1 = this.x1 - mouseX;
      this.offsetY1 = this.y1 - mouseY;
      this.offsetX2 = this.x2 - mouseX;
      this.offsetY2 = this.y2 - mouseY;
      this.offsetX3 = this.x3 - mouseX;
      this.offsetY3 = this.y3 - mouseY;

    }
  }

  released2() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable4 {
  constructor(x1, y1, x2, y2, x3, y3) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.offsetX1 = 0;
    this.offsetY1 = 0;
    this.offsetX2 = 0;
    this.offsetY2 = 0;
    this.offsetX3 = 0;
    this.offsetY3 = 0;
  }

  over2() {
     //Is mouse over object
     if (mouseY < ((this.y2-this.y3)/(this.x2-this.x3) * (mouseX-this.x3)+ this.y3) && (mouseY > ((this.y1-this.y2)/(this.x1-this.x2)* (mouseX-this.x2)+ this.y2)) && mouseX < this.x1 && mouseX>this.x2)
     {
         this.rollover = true;
       }
     else {
       this.rollover = false;
     }
 }

  update2() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x1 = mouseX + this.offsetX1;
      this.y1 = mouseY + this.offsetY1;
      this.x2 = mouseX + this.offsetX2;
      this.y2 = mouseY + this.offsetY2;
      this.x3 = mouseX + this.offsetX3;
      this.y3 = mouseY + this.offsetY3;
    }
  }

  show2() {
    stroke(0);
    fill(132, 138, 96);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  pressed2() {
    if (mouseY < ((this.y2-this.y3)/(this.x2-this.x3) * (mouseX-this.x3)+ this.y3) && (mouseY > ((this.y1-this.y2)/(this.x1-this.x2)* (mouseX-this.x2)+ this.y2)) && mouseX < this.x1 && mouseX>this.x2) {
      this.dragging = true;
      this.offsetX1 = this.x1 - mouseX;
      this.offsetY1 = this.y1 - mouseY;
      this.offsetX2 = this.x2 - mouseX;
      this.offsetY2 = this.y2 - mouseY;
      this.offsetX3 = this.x3 - mouseX;
      this.offsetY3 = this.y3 - mouseY;

    }
  }

  released2() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable5 {
  constructor(x1, y1, x2, y2, x3, y3) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.offsetX1 = 0;
    this.offsetY1 = 0;
    this.offsetX2 = 0;
    this.offsetY2 = 0;
    this.offsetX3 = 0;
    this.offsetY3 = 0;
  }

  over2() {
     //Is mouse over object
     if (mouseY < this.y3 && mouseX<this.x1 && mouseY>((this.y3-this.y1)/(this.x3-this.x1))*(mouseX - this.x3)+ this.y3)
     {
         this.rollover = true;
       }
     else {
       this.rollover = false;
     }
 }

  update2() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x1 = mouseX + this.offsetX1;
      this.y1 = mouseY + this.offsetY1;
      this.x2 = mouseX + this.offsetX2;
      this.y2 = mouseY + this.offsetY2;
      this.x3 = mouseX + this.offsetX3;
      this.y3 = mouseY + this.offsetY3;
    }
  }

  show2() {
    stroke(0);
    // Different fill based on state
    // if (this.dragging) {
    //   fill(50);
    // } else if (this.rollover) {
    //   fill(100);
    // } else {
    //   fill(175, 200);
    // }
    //translate(25,25)
    //rotate(0.01)
     fill(60, 81, 36);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  pressed2() {

    if (mouseY < this.y3 && mouseX<this.x1 && mouseY>((this.y3-this.y1)/(this.x3-this.x1))*(mouseX - this.x3)+ this.y3) {
      this.dragging = true;
      this.offsetX1 = this.x1 - mouseX;
      this.offsetY1 = this.y1 - mouseY;
      this.offsetX2 = this.x2 - mouseX;
      this.offsetY2 = this.y2 - mouseY;
      this.offsetX3 = this.x3 - mouseX;
      this.offsetY3 = this.y3 - mouseY;

    }
  }

  released2() {
    // Quit dragging
    this.dragging = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}