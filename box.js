//to create a class --> class Classname{}
class Box{      //home
    //build the object
    constructor(x,y,width,height){  //automatically works when an object is created     //function setup()
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    boxDisplay(){   //(thing)    //this function has to be called inside the function draw to make it work       //function draw()
        var pos = this.body.position
        var angle=this.body.angle
        push ()
        translate (pos.x,pos.y)
        rotate(angle);
        fill("skyblue")
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop ()
    }
}