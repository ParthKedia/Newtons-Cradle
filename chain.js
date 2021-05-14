class rope {
    constructor(body1,body2,first,second){
        this.first = first;
        this.second = second;
        var A = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.first, y: this.second},
            stiffness:0.1,
            length: 250
        }
        this.chain = Constraint.create(A);

        World.add(world,this.chain);
    }
   show() {
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;
        
        var anchor1 = pos2.x + this.first;       
        var anchor2 =  pos2.y + this.second;
                    
        push();
        strokeWeight(4);
        stroke(255);
        line(pos1.x,pos1.y,anchor1,anchor2); 
        pop();
    }
}