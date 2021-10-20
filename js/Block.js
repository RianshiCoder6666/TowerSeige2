class Block{
    constructor(x,y,width,height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png")
        World.add(world,this.body);
        this.visiblity = 255;
    }

      
      display(){

         var pos= this.body.position;

        if(this.body.speed <3){
          rect(pos.x,pos.y,this.width,this.height);
        } else {

          World.remove(world,this.body);
          push();
          this.visiblity = this.visiblity - 2;
          pop();
          }

      }
}