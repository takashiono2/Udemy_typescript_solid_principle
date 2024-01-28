// クラス図 演習1
class Employee {
    private id: number;
    private name: string;
    private salary: number;

    work(): void {
        console.log('働きます');
    }

    protected getSalay():number{
        return this.salary;
    };
    protected setSalay(salary: number): void {
        this.salary = salary;
    };
}
