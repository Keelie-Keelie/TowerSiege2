class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution: 0.4,
          friction: 0.1,
               
        }
         
        this.image = loadImage("block.png");
        this.Visibility=255;    
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      display(){
        if(this.body.speed < 3) {
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,this.body.width,this.body.height);

        }else {
          push();
          World.remove(world,this.body);
          this.Visibility = this.Visibility-5;
          tint(255,this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,this.body.width,this.body.height);
          pop();
        }


      }
}
