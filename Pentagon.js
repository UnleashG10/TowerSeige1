class Pentagon{
    constructor(x, y){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 20, options);
        
        World.add(world, this.body);


    }

    display(){

        push();
        
        ellipseMode(RADIUS);
        stroke("green")
        fill("250"); 
        ellipse( this.body.position.x, this.body.position.y, 20);
        pop();
      }

}



