class Circle{
    radius : number = 2.0;
    color : string = "black";

    constructor(radius: number, color: string){
        this.radius = radius;
        this.color = color;

    }
    getRadius(){
        return this.radius;
    }

    setRadius(radius: number){
        this.radius = radius;
    }

    getColor(){
        return this.color;
    }

    setColor(color: string){
        this.color = color;
    }

    toString(){
        return `Radius is:${this.radius}, Color is:${this.color} `;
    }

    getArea(){
        return 3.14 * this.radius * this.radius;
    }

    getCircumference(){
        return 2 * 3.14 * this.radius;
    }
}