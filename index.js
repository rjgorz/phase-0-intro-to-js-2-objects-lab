// Write your solution in this file!
const employee = {
    name: "Robert",
    streetAddress: "1234 1st Ave"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmp = {...obj};
    newEmp[key] = value;
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmp = {...obj};
    delete newEmp[key];
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
