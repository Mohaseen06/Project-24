class Paper{
    constructor(x,y,radius){
        var paper_options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        this.body = Bodies.circle(x, y, radius, paper_options);
        this.radius = radius;
        World.add(world,this.body)
    }

    display(){
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,20)
    }   
}