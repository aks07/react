console.log(10+20);
document.write(10+20);
for(let i=1;i<=5;i++){
    console.log(i);
}
//console.log("Value of i outside for loop",i);

const a=10;
console.log(a);
// a=12;

//Anonymous function
let fq=function(){
    return "WF";
}
console.log(fq);//gives function code
console.log(fq());// prints what is to be returned by the function

//Arrow function
let s= ()=>"WF Bangalore";
console.log(s);
console.log(s());

//Arrow function wiht argument msg, return the msg
//let f=(msg)=>msg;
let f=msg=>msg;
console.log(f(true));
console.log(f("Aditya"));
console.log(f(2));
console.log(f(30*23));

//Define a class Point with two data members ie. x and y
class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    display(){
        console.log("X:",this.x, " Y:",this.y);
    }

}

//Instance of Point class
let pt=new Point(3,4);
pt.display();

//Creating a class for 3D points
class Point3D extends Point{
    constructor(x, y, z){
        super(x,y);//To assign value to constructor of Point.
        this.z=z;
    }
    display(){
        
        console.log("Z:", this.z);
        super.display();
    }
}
let p3=new Point3D(2,3,4);
p3.display();

function change(){
    let d=document.getElementById("h");
    //Get the value of reply attribute ie. custom attribute
    let v=d.getAttribute("reply");
    //Manipulate the content of H1 tag
    d.innerHTML=v;
}
