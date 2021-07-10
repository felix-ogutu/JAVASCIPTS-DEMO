//Create the object student
const Student={
    name:'Felix',
    regNo:12,
    courseName:{
        course1:'BIT',
        course2:'SCO',
        course3:'BAA'
    },
    writeName:function () {
        console.log("Hello student")

    }
};

//Create the object using the Factory Function
function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log('draw')
        }
    };

}
const circle =createCircle((1))
circle.draw();

//Create the Object using the constructor
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
    const another =new Circle(1);

}
