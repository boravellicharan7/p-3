// object properties

//literal object
var a = {
    name: "ravipati surya",
    job: "manager",
    sal: "30k"
}
console.log(a);

//new object
var b = new Object();
b.name = "original";
b.job = "manager";
b.sal = "10k"
console.log(b);

//shorthand property 
var name = "garuda";
var attendence = "75%";
var emp = { name, attendence }
console.log(emp);

//object methods

//object.entries()
var d = {
    name: "deva",
    job: "clerk",
    sal: "80k"
}
console.log(Object.entries(d));

//object.key() & object.values()
var e = {
    emp_name: "gayu",
    emp_id: 389475,
    emp_no: 121
}
console.log(Object.keys(e));
console.log(Object.values(e));

//object.freeze() & object.isfrozen()
var f = {
    emp_name: "ocean",
    emp_id: 764798,
    emp_no: 183
}
Object.freeze(f)
f.emp_name = "nani";
console.log(f);
console.log(Object.isFrozen());

//object.seal() & object.issealed()
var g = {
    hotel_name: "vasudeva",
    fee: 6000,
    ratting: 4.5
}
Object.seal(g);
g.fee = 6500;
console.log(g);
console.log(Object.isSealed);

//research...

//object.assign()
var c1 = {
    name: "dharani",
    mock: "Good",
    percentage: "70%"
}
var c2 = {
    name: "bhargav"
}
console.log(Object.assign(c1, c2));

//object.getOwnProperties():- The Object.getOwnPropertyDescriptors() static method returns all own property descriptors of a given object...
var h={
    mobile:"redmi",
    model_no:"53WR7635",
    version:"V-53"
}
var hh=Object.getOwnPropertyDescriptor(h,'mobile');
console.log(hh.value);
console.log(hh.keys); //we can not console the keys...
console.log(hh.configurable); // it is used to check that, is it arranged or not...

//object.hasOwnPropertyNames():- this method is using to verify the the property has its own or else in the form of boolean...
var i={};
i.company="foxin";
i.products="100k";
console.log(i.hasOwnProperty('company'));
console.log(i.hasOwnProperty('tostring')); //it doesn't has own property name as in the assign... 
console.log(i.hasOwnProperty('i')); // and also we can not get the result by object name...

//object.create:- by using this method we can assign the values to the object's key with the help of "this" funtion...
