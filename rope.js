class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }
  
    // Fly(){
    //     this.chain.bodyA = null;
    // }
    display(){
        
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        
    }
    
}