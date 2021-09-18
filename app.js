//Q-1 = write a function which returns array. call the function and destructure array values and 
//print the value

// function arr() {

//     const food = ['Nihari','Naan','Salad','Water','Drink'];
//     return food
// }
// let [f1,f2,f3,f4,f5] = arr()

// alert(f5);
///////////////////////////////////////////////////////


//Q-2 = Make a car object with model, year, color. display all the values by destructuring

// let car = {
//    model : 'audi',
//    year : '2020',
//    color : 'green',
// }
// let {model,year,color} = car;
// alert(`My car model is, ${model},from year ${year} and ${color} color.`)

/////////////////////////////////////////////////////

// Q-3 = use three variable name, greeting and display value using template literals


// let yourName = prompt('Your Name','Please enter your name');
// let yourage = prompt('Your age','Please enter your age');
// let prof = prompt('Your profession','Please enter your profession');
// let greet = 'Assalam-o-Alaikum'

// document.write(` ${greet} ! ${yourName} your age is ${yourage} and you are a ${prof}`);

//////////////////////////////////////////////////////////

//Q-4= use array [1,2,3,4,5,6,7,8,9,10] assign first three values in seperate variables and all
// remaining in one element as an array

// const num =  [1,2,3,4,5,6,7,8,9,10];

// let nums = [n1,n2,n3, ...rest]=num;

// alert (rest)

///////////////////////////////////////////////////

// Q-5 if car speed is less than 80 display "car speed is slow", if greater than 80 but less 
//than 120 than display  " car speed is moderate" and if greater than 120 display 
//"car speed is fast"

// let speed =80;
// let a = (speed == 80) ? "car speed is slow" : (speed >80 && speed<120)? " car speed is moderate":(speed>120)?"car speed is fast":

// alert(a);