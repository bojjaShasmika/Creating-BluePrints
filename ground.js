class Ground{
    constructor(){
        var gr_options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(200,400,400,60,gr_options);
        this.width = 400
        this.height= 60
        World.add(world,this.body)

    }

    groundDisplay(){
        fill ("grey")
        var grpo = this.body.position
        rectMode (CENTER);
        rect(grpo.x,grpo.y,this.width,this.height)
        
    }
}