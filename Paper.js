class Paper{
    constructor(){
        var options={
            isStactic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body.position(x=200,y=675);
        Matter.Bodies.circle(200,675,2,options);
    }






}