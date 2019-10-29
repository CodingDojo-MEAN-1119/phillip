// Challenge 1


let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function namesAndCohorts(arr){
    for(let i=0; i<arr.length; i++){
        console.log("Name: "+arr[i].name+", Cohort: "+arr[i].cohort);
    }
}
namesAndCohorts(students);

// Challenge 2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function employeeManager(arr){
     const e = arr.employees;
     const m = arr.managers;
     console.log("EMPLOYEES");
     for (let i=0; i<e.length; i++){
         let size= e[i].first_name+e[i].last_name;
         console.log((i+1)+" - "+e[i].last_name+", "+e[i].first_name+" - "+size.length);
     }
     console.log("MANAGERS");
     for (let i=0; i<m.length; i++){
         let size= m[i].first_name + m[i].last_name;
         console.log((i+1)+" - "+m[i].last_name+", "+m[i].first_name+" - "+size.length);
     }
 }
employeeManager(users);

// Platform Solution

for (const key in users) {
    console.log(key.toUpperCase());
    for (let i = 0; i < users[key].length; i++) {
        const num = i + 1;
        const fname = users[key][i].first_name;
        const lname = users[key][i].last_name;
        const length = fname.length + lname.length;
        console.log(`${num} - ${lname}, ${fname} - ${length}`);
    }
};
