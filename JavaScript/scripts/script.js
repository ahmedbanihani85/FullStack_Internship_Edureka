var valu1=1;
let valu2="text1";

let flag=true;

let employee = {
Name:"Alex", 
ID: 10, 
Phone: '313-000-0000', 
Address:{
    City: "Detroit",
    Street:"Warren Ave",
    Building: 5056,
    ZIP: 48202
},
Print: function()
{
    console.log("Employee Name:", this.Name,"\n");
    console.log("Employee ID:", this.ID,"\n");
    console.log("Employee phone:", this.Phone,"\n");
    console.log("Employee Address:", this.Address.Building," ", this.Address.Street,", \n", this.Address.City);


}

}
console.log("Employee Name:", employee.Name,"\n");
employee.Print();
console.log(employee['Phone']);

function Add(x,y)
{
    return x+y;
}
var VarAdd = function(x,y){return x+y;}
var ShortAdd = (x,y) =>x+y;

console.log(Add(1,2),"\n");
console.log(VarAdd(1,2),"\n");
console.log(ShortAdd(1,2),"\n");