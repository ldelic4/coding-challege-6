//task 1
const employees = [

     { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    
  { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    
        { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
    
    ];

//task 2
function displayemployeeshifts (employees){
    console.log('Employee name:' ${employees.name},'day:'${employees.day}, 'Shift:'${employees.shift})
}

//task3 
function assignShift(employees.name, employees.day, employees.hours){
    const employees= employees.find((employees)=>employee.name===employeename);

    if (!employee){
        console.log('Error'):
        return;

    }

    const assignShift(employees){
        const assignShift= employees.find((shift)=>employees.shift===shift);
        if (assignShift? "Already assinged a shift": "Not Assigned a shift");
//adding new shift
        assign.shifts.push({day, hours});
        console.log('shift':${employees.name}, ${day},${hours});

}}



