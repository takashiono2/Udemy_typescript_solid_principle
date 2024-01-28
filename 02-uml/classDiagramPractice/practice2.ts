// クラス図 演習2
interface Sharp{
    calcArea(): number;
}

class Rectangle implements Sharp {
    private width: number;
    private height: number;

    calcArea(): number{
       return  this.width * this.height;
    };
}
class Circle implements Sharp {
    private radius: number;
    calcArea(): number{
        return this.radius * this.radius * Math.PI;
    };
}

class Client{
    private sharp: Sharp;
}
