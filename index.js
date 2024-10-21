const employee ={
  name: 'Sam', 
  streetAddress: '11 Broadway',
  
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
 return {...employee, [key]: value};

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
 employee[key]= value;
 return employee
 
 }
function deleteFromEmployeeByKey(object, key){
const newObj = Object.assign({}, object);
delete newObj[key]
return newObj;
 }
 function destructivelyDeleteFromEmployeeByKey(object, key) {
delete object[key]
return object

 }