// Define a class Point with two data members i.e., x and y - Default Export
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    display() {
        console.log("X: ", this.x, " Y: ", this.y);
    }
}

export default Point;

// Inheritance - Named Export
export class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    display() {
        super.display();
        console.log("Z: ", this.z);
    }
}