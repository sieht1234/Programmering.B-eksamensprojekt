console.log('why is it called burgerking, and not NIGGABALLS')






class Ball{
    constructor(radius, xpos, ypos, col, name){
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos
        this.col = col
        this.name = name

        this.gravity = 1
        this.friction = 1 - this.radius/1000
        this.velocity = 0
        this.updrift = 25
        this.button = createButton(this.name)
    }

    show(){
        //textSize(24)
        //text(this.name, this.xpos,this.ypos -( this.radius + 2))
        this.button.position(this.xpos, this.ypos)
        this.button.mousePressed(()=>{
            if(confirm('vil du virkelig hoppe med ' + this.name)){
                this.up()
            }else{
                this.radius-= 5
            }
        })
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
    }

    update() {
        this.velocity += this.gravity
        this.velocity *= this.friction
        this.ypos += this.velocity

        if(this.ypos > height - this.radius){
            this.ypos = height - this.radius
            this.velocity = -this.velocity
            
        }
        
        
        //loftet
        if(this.ypos < this.radius){
            this.ypos = this.radius
            this.velocity = -this.velocity
            
        }
    }

    up(){
        this.velocity -=this.updrift

    }
}
