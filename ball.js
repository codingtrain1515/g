class Ball{
    constructor(x,y,w,h){

        let options={
            isStatic:true,
            density:0.1,
            friction:0.1
        }

this.body = Bodies.rectangle(x,y,w,h,options);
this.x=x;
this.y = y;
this.w=w;
this.h=h;

World.add(world,this.body)

    }

    display(){
        push();
        var pos =this.body.position;
        rectMode(CENTER)
        rect(pos.x,pos.y,50,50)
        pop();
    }
}