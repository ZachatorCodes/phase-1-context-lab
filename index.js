/* Your Code Here */
const createEmployeeRecord = function(employeeArray){
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(employeeData) {
    return employeeData.map(employee => createEmployeeRecord(employee));
}

const createTimeInEvent = function(dateString){
    const date = dateString.split(' ')[0];
    const hour = dateString.split(' ')[1];
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    });
    return this
}

const createTimeOutEvent = function(dateString){
    const date = dateString.split(' ')[0];
    const hour = dateString.split(' ')[1];
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    });
    return this
}

const hoursWorkedOnDate = function(searchDate){;
    const inEvent = this.timeInEvents.find(e => e.date === searchDate);
    const outEvent = this.timeOutEvents.find(e => e.date === searchDate);
    return (outEvent.hour - inEvent.hour) / 100;
}

let wagesEarnedOnDate = function(searchDate){
    let rawWage = hoursWorkedOnDate.call(this, searchDate) * this.payPerHour;
    return parseInt(rawWage.toString());
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(rec => rec.firstName === firstName);
}

const calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce((memo, rec) => memo + allWagesFor.call(rec), 0);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

