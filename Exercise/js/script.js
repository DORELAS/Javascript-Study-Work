var students = [
    student1 = {name: 'John', score1:47, score2:46}, 
    student2 = {name: 'Bob', score1:23, score2:24}, 
    student3 = {name: 'Nick', score1:40, score2:35},
    student4 = {name: 'Alex', score1:44, score2:45}
];

var grades = ['A', 'B', 'C', 'D', 'F'];

var limits = [91, 81, 71, 61, 51];

console.log(students);
console.log(grades);
console.log(limits);

function calculate (score1, score2)
{
    var score = score1 + score2;
    return score;
}


for (var i = 0; i < students.length; i++)
{
    var pike = calculate(students[i].score1, students[i].score2);

    if (pike > limits[4])
    {
     console.log(students[i].name + ' passed the final exam successfully.');
     console.log('He has ' + pike + ' points.');

     if (pike >= 91){ console.log('You got the deploma degree of ' + grades[i] + ' .');}
     else  if (pike >=81 && pike <= 90){ console.log('You got the deploma degree of ' + grades[i] + ' .');}
     else  if (pike >= 71 && pike <= 80){ console.log('You got the deploma degree of ' + grades[i] + ' .');}
     else  if (pike >= 61 && pike <= 70){ console.log('You got the deploma degree of ' + grades[i] + ' .');}
     else  if (pike >= 51 && pike <= 60){ console.log('You got the deploma degree of ' + grades[i] + ' .');}
    }
    else {
        console.log(students[i].name + ' had ' + pike + ' points and he didnt pass the exam.');
        console.log('Your degre is ' + grades[4] + ' .');
        
    }
}