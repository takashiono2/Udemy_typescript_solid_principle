export {};

class Computer {
    type: string;
    cpu: string;
    ram: number;
}
//Builder
interface ComputerBuilder {
    addCpu(cpu: string);
    addRam(ram: number);
}

//ConcreteBuilder
class DesktopBuilder implements ComputerBuilder {
    private computer: Computer;
    constructor(){
        this.computer = new Computer();
        this.computer.type = "Desktop";
    }
    addCpu(cpu: string){
        this.computer.cpu = cpu;
    };
    addRam(ram: number){
        this.computer.ram = ram;
    };

    getResult():Computer{
        return this.computer;
    }
}

//ConcreteBuilder
class LaptopBuilder implements ComputerBuilder {
    private computer: Computer;
    constructor(){
        this.computer = new Computer();
        this.computer.type = "Laptop";
    }
    addCpu(cpu: string){
        this.computer.cpu = cpu;
    };
    addRam(ram: number){
        this.computer.ram = ram;
    };

    getResult():Computer{
        return this.computer;
    }
}

class Director {
    constructor(private builder: ComputerBuilder){}
    construct(){
        this.builder.addCpu("Core i5");
        this.builder.addRam(16);
    }
    highSpecConstruct(){
        this.builder.addCpu("Core i9");
        this.builder.addRam(64);
    }
}

function run() {
    const desktopBuilder = new DesktopBuilder();//ConcreteBuiderをインスタンス化
    const desktopDirector = new Director(desktopBuilder);//ConcreteBuiderのインスタンスをDirectorに渡す
    desktopDirector.construct();//Directorはメソッド呼び出しオブジェクトを生成する
    const desktopComputer = desktopBuilder.getResult()//ConcreteBuiderから生成されたオブジェクトを受け取る
    console.log(desktopComputer);

    const laptopBuilder = new LaptopBuilder();
    const laptopDirector = new Director(laptopBuilder);
    laptopDirector.highSpecConstruct();
    const laptopComputer = laptopBuilder.getResult();
    console.log(laptopComputer);
}

run();
