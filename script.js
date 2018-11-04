function Airplane(model, seatingCapacity, maximumSpeed){
    this.model = model;
    this.seatingCapacity = seatingCapacity;
    this.maximumSpeed = maximumSpeed;
    this.print = function(data) {
        console.log(data);
    }
};
var Airplane1 = new Airplane(1245, 100, 400);
delete Airplane1.maximumSpeed;
Airplane1.averageSpeed = 600;
Airplane1.print(Airplane1);
var Airplane2 = new Airplane(1566, 110, 600);
delete Airplane2.maximumSpeed;
Airplane2.averageSpeed = 600;
Airplane2.print(Airplane2);
var Airplane3 = new Airplane(1456, 120, 500);
delete Airplane3.maximumSpeed;
Airplane3.averageSpeed = 600;
Airplane3.print(Airplane3);