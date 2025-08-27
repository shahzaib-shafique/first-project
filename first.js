/*fullName="Shahzaib shafique";
age=21;
price=99.9;
console.log(fullName);
console.log(age);
console.log(price);
x=null;
y=undefined;
console.log(x);
console.log(y);
isFollow=true;
console.log(isFollow);
isnotFollow=false;
console.log(isnotFollow);
Name=25;
console.log(Name);

lastname="Aman";
LASTNAME="Basit";
console.log(lastname);
console.log(LASTNAME);

//console="Shahzaib Shafique"  fixed or reserved words cant be used as a vaiable// 

let fullName="Tech Titans";
let age=21;
let totalPrice=999.9;
const PI=3.14;
console.log(fullName);
console.log(age);
console.log(totalPrice);
console.log(PI);

let a;
console.log(a);
/*const a; this will create error because its fixed so first time it initialize with some value one time*/

/* block  
{
    let a=4;
    /*let a=4; this can't be redeclared cause an error but updated
    console.log(a);
}
{
    let a=5;
   /*but this time in the seperated block it can be declared and to avoid from redeclaration error
    console.log(a);
}

const student={
    name:"Shahzaib Shafique",
    age:21,
    CGPA:3.2,
    isPass:true
};
console.log(student);

student["age"]=student["age"]+1;
console.log(student["age"]);
console.log(student.name);

//Making different object(collection of different keys along with their Values)

//Q1//
//const Pen={
    fullName:"Parker Jotter Standard CT Ball Pen",
    color:"Black",
    rating:7002,
    offer:5,
    fullPrice:270,
    isoffer:true
};
console.log(Pen);
console.log(Pen["color"]);
console.log(Pen.isoffer);  // if "abc"+1 is given then output is abc1 //
                            // if "1"+1 is given then output is 11
//Q2//
const Profile={
fullName:"shradhaKhapra",
nPosts:195,
nFollowers:569000,
nFollowing:4,
Role:"Entrepreneur",
isFollow:true
};
console.log(Profile);
console.log(Profile.fullName)
console.log(Profile["isFollow"]);
console.log(Profile.Role);
console.log(Profile["nFollowers"]);

console.log(typeof Profile["Role"]);
console.log(typeof Profile["isFollow"]);
console.log(typeof Profile["nFollowing"]);
console.log(typeof Profile["nFollowers"]);
console.log(typeof Profile["nPosts"]);
console.log(typeof Profile["fullName"]);*/


/*Operators in JS */

//Arithmetic operators//

//1//
/*let a=5;
let b=2;
let c=a+b;
let d=a-b;
let x=a*b;
let y=a/b;
console.log("a =",a ,"b =",b)
console.log("a+b =",c);
console.log("a-b =",d);
console.log("a*b =",x);
console.log("a/b =",y);

//Modulus operator//
console.log("a%b =",a%b);

//Exponentiation//
console.log("a**b =",a**b); //5^2//

//Unary Operator[increment]

let a=5;
let b=2;
console.log("a =",a ,"b =",b);
//a=a+1;//
a++;
console.log("a =",a);

//Unary Operator[decrement]//
//b=b-1;//
b--;
console.log("b =",b);

//Unary Operator[pre & post increment]//
let a=5;
let b=2;
console.log("a =",a,",","b =",b);
//preincrement firstly incremented the val then print it/
console.log("++a =",++a);
console.log("--a =",--a);
//postincrement firstly print the val then increment it on the next line//
console.log("b++ =",b++);
console.log("b =",b);
console.log("b-- =",b--);
console.log("b =",b);

//Assignment Operators(assign values to some variables)//
// 1. symbol(=) if left=right then the right val assign to left//
let x=1;
console.log("x =",x);
//2. symbol(+=) if a+=1 then we can say a=a+1 //
//x=x+1 or if x=4,2,3 anything we can write as x=x+4,2,3, or x+=4,2,3//
x+=1;
console.log("x =",x);
//3. symbol(-=)//
x=5;
x-=2; //x=x-2//
console.log("x =",x);
//4. symbol(*=)//
x=5;
x*=2; //x=x*2//
console.log("x =",x);
//5. symbol(/=)//
x=5;
x/=2; //x=x/2//
console.log("x =",x);
//6. symbol(%=)//
x=5;
x%=2; //x=x%2//
console.log("x =",x);
//7. symbol(%=)//
x=5;
x**=2; //x=x**2//
console.log("x =",x);

//Comparison Operator//
//symbol(== equalto operator, != notequalto operator,  === equalto & type operator, !==notequalto & type operator )//

let a=5;
let b=2;
console.log("5==2","->",a==b);//return true or false//
console.log("5!=2","->",a!=b);
console.log("5===2","->",a===b);//strictly check//
console.log("5!==2","->",a!==b);

let x=1;
let y="1";//(string) firstly convert string "1" into no then comapring start//
console.log("x==y","->",x==y);
console.log("x===y","->",x===y);

let a=5;
let b=2;
console.log("a>=b","->",a>=b);

//Logical Operators//(evaluate multiple expressions to give us answers)

//logicalAnd(&&)//
// all values or variables meet the condition if any one of false then return false//
//like strictly say if u want to return true then all also true//
let a=1,b=1;
let x=2,y=3;
console.log(a==b&&x==y);

//logicalAnd(||)//
// if any one of value meet the condition or true then true//
//like strictly say if u want to return true then any one also true//
let a=1,b=1;
let c=4,d=5;
let x=2,y=3;
console.log(a==b||x==y||c==d);

//logicalNot(!)//
//always gives the opposite value if true then gives false//
//always gives the opposite value if false then gives true//
let a=2,b=1;
console.log("2<1",!(a<b));//logically it should give false but in not operator it will give true


//2//
//Conditional Statement//

//1. if statement//

let a=1;
let b=2;
if(a===b){
    console.log("Its True");
}
else{
    console.log("Its False");
}

let age=19;
if(age>18){
    console.log("You Can vote!");
}
if(age<18){
    console.log("You Can't vote!");
}

let mode="light";
let color;

if(mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="white";
}
console.log(color);
 
//2. if-else statement//

let mode="dark";
let color;

if(mode==="dark"){

    color="black";
}
else{

    color="white";

}
console.log(color);

let a=3;
if(a%2===0){
    console.log(a,"is even!");
}
else if(a%2!==0){
    console.log(a,"is odd!");
}
 
let age=21;
if(age<18){
    console.log("Junior");
}
else if(age>50){
    console.log("Seniors");
}
else{
    console.log("Middle");
}

let mode="blue";
let color;
if(mode==="dark"){
    color="black";
}
else if(mode==="pink")
{
    color="pink";
}
else if(mode==="blue")
{
    color="blue";
}
else if(mode==="light")
{
    color="white";
}
console.log(color);

//Ternary operator (special operator [?]) compact if-else//
//Syntax: condition?true output:false output;
//       a?b:c(3 operands and 2 operators)             //

let age=18;
let res=age>=18?"Adult!":"Not Adult!";
console.log(res);

let age=21;
age>18?console.log("Adult!"):console.log("Not Adult!");


//MDN Docs//
//Switch statement//
//Syntax: switch(exp){case1: case2: breaketc}

//alert("Hello!");creates the one time popup on our browser
// prompt("Hello!");creates the one time popup on our browser and take input from the user


//Practice Questions//

//1//

let no;
no=prompt("Enter a Number: ");
if(no%5===0){
    console.log(no, "is multiple of 5");
}
else if(no%5!==0){
    console.log(no, "is not multiple of 5");
}

//2//

let score;
let grade;
score=prompt("Enter the Score of Student(0-100): ");
if(score>=90&&score<=100)
{
    grade="A";
    console.log("Grade is" ,grade);
}
else if(score>=70&&score<=89)
{
    grade="B";
    console.log("Grade is" ,grade);
}
else if(score>=60&&score<=69)
{
    grade="C";
    console.log("Grade is" ,grade);
}
else if(score>=50&&score<=59)
{
    grade="D";
    console.log("Grade is" ,grade);
}
else if(score>=0&&score<=49)
{
    grade="F";
    console.log("Grade is" ,grade);
}


 Loops And Strings 

//Loops(again and again execute)//

//1. For-loops//

for(let i=0;i<5;i++)// for(initialization;stopping;updation)//
{
    console.log("Shahzaib Shafique!");
}

let no=5;
let sum=0;
for(let i=1;i<=no;i++)
{
sum=sum+i;
}
console.log("Sum = " ,sum);

//infinite loops//

//While-Loops//

let i=0;
while(i<5)
{
console.log("Shahzaib Shafique");
i++;
}

//do-While only change is that the condition at the last and execute at least one time run and then check the condition// 

let i=21;
do{
console.log("shahzaib Shafique");
i++;
}while(i<=20);

//for-of loop (help[strings & Arrays] for us to iterate some specific datatype)//
//for-in loop (help[Objects] for us to iterate some specific datatype gives us the key val)//

let str="ShahzaibShafique";
let size=0;
for(let i of str){
    console.log("i=", i);
    size++;
}
console.log("Size of str: ", size);

let student={
    name:"shahzaib",
    grade:"A",
    age:21,
    isPass:"true"
};
for(let key in student)
{
console.log("key=" ,key ," Value=" ,student[key]);
}

//Practice Questions//

//1//

for(i=0;i<=100;i++)
{
    if(i%2===0)
    {
        console.log("even no=" ,i);
    }
}


//2//

 let gameNo=5;
 let userNo=prompt("Input the random number to guess:");
 console.log("user No=" ,userNo);

 while(userNo!=gameNo)
 {
userNo=prompt("Wrong no,Input again to guess right:");
 }
console.log("Congrats you guess it right!")






//strings in JS(string is a sequentiol of char used to represent text//
//Strings are immeutable in JS//
//inbuilt properties in JS called methods//

let str="Shahzaib";
console.log("str length:" ,str.length);


let str="Shahzaib";
console.log("str 1st ind:" ,str[5]);


 //Template Literals in JS(A way to embedded expressions in strings)//
 //Special type of string//
 //symbol:backticks(``)//
 //string interpolation in it is ${expression}//
 

 let  sentence=`This is a Template Literal`;
 console.log(sentence);

 let obj={
    item:"Pen",
    price:99
 };
 let output=`the name of item is: ${obj.item} \nthe price of item is: ${obj.price} Rs.`;
 console.log(output);

//escape characters like \n and \t//

let str="Shahzaib\t\tShafique";
console.log("str lenght:" ,str.length);


//String methods(like built in functions)//
 // str.toUpperCase , str.toLowerCase , str.trim(removes whitespaces)//

 let str="shahzaib";
 console.log("Upper Case:" ,str.toUpperCase());

 let str="shafique";
 let newStr=str.toUpperCase();// not change happen in the original str we have to create always new str//
 console.log(newStr);

let str="    S h a h z a i b     ";//triming starting and ending spaces only//
let newStr=str.trim();
console.log("str without spaces:" ,newStr);

let str1="shahzaib";
let str2="shafique";
let newStr=str1.concat(str2);
console.log(newStr);


let str="abcdefgh";
console.log("Slice String:" ,str.slice(2,5));

let str="hello";
console.log("Slice String:" ,str.slice(1,3));

let str="Shahzaib";
console.log(str.replace("Sh",12));


let str="hello";
console.log(str.replace("h","y"));

let str="ShahzaibShafique";
console.log(str.replaceAll("a","@"));

let str="IloveJS";
console.log(str.charAt(2));

//practice Questions//

//1//

let str=prompt("Enter Your FullName: ");
let strlen=str.length;
let res=str.concat("\n\n" ,"@" ,str ,strlen);
console.log(res);

let userName=prompt("Enter ur fullName without spaces:");
let strLen=userName.length;
let res="@"+userName+strLen;
console.log(res);



//Arrays in JS(collection of same type of data)//
//Array itself basically special type of object//


let marks=[97,82,78,62,36];
console.log(marks);
console.log(marks.length);//property(return only value)/method(return proper work)//
console.log(marks[0]);
console.log(marks[6]);//gives undefined in output//
console.log(marks);
console.log(marks[1]=90);
console.log(marks);

//strings:immeutable(not directly change assigning new var to change)//
//Arrays:meutable not need new var for replacing//


let eDevices=["Mouse","Keyboard","CPU","Printer","Monitor"];
//for(let i=0;i<eDevices.length;i++)
//{
//    console.log(eDevices[i]);
//}
for(let e of eDevices)
{
    console.log(e);
}

let cities=["Lahore","Islamabad","Karachi","Rawalpindi","Sawat","Mansehra","Skardu"]
for(let city of cities)
{
    console.log(city.toUpperCase());
}

//practice question//
//1//

let marks=[85,97,44,37,76,60];
let sum=0;
let avg;
for(let i=0;i<marks.length;i++)
{
     sum+=marks[i];
     avg=sum/marks.length;
      
}
console.log(`Average marks of entire class: ${avg}`);

//2//

let prices=[250,645,300,900,50];
console.log("Original Prices:" ,prices)
let dArr=[0];
for(let i=0;i<prices.length;i++)
{
dArr[i]=prices[i]-0.10*prices[i];
 
}
console.log("Discounted Prices:" ,dArr);


//Array methods(usefull methods)//
//Push()[add something at the end] , pop()[delete from the end] , toString()[convert arr to string]//

let veggies=["Apple","tomato","Mangoes","Lichi"];

veggies.push("Banana");

console.log(veggies);

veggies.pop();

console.log(veggies);

console.log(veggies.toString());


let vegetables=["potato","tomato","Onion","Carrot"];
let fruits=["Apple","Nashpati","Banana","Lichi"];

let foodItems=vegetables.concat(fruits);
console.log(foodItems);

//Unshift() helpfull in adding the no in start of arr//
//shift() helpfull in deleting the no in start of arr//

let Names=["Aman","Shahzaib","Basit","Wasif"];
console.log(Names);
let newNames=Names.shift();
console.log(newNames);

let veggies=["Apple","tomato","Mangoes","Lichi"];

console.log(veggies);

console.log(veggies.slice(1,3));

let arr=[1,2,3,4,5,6,7];
console.log(arr);
//add//
let arr1=arr.splice(1,2,101,102);
console.log(arr);
//delete//
let arr2=arr.splice(6,1);
console.log(arr);
//replace//
let arr3=arr.splice(5,1,103);
console.log(arr);

//practice Question//

//1//

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("Original:" ,companies.toString());

//a//
let Ind_1=companies.splice(0,1);
console.log("After Initial Index removal:" ,companies.toString());

//b//
let last_Ind=companies.splice(1,1,"Ola");
console.log("After rem&add at centre :" ,companies.toString());

//c//
let add_last=companies.push("Amazon");
console.log("Final:" ,companies.toString());


/*Practice Questions

//1//
for(let i=1;i<=20;i++)
{
    if(i%2!==0)
    {
        console.log("Odd numbers:" ,i);
    }
}

let no=prompt("Enter the number:");
if(no%7==0)
{
    console.log(no ," is divisible by 7");
}
else{
   console.log(no ," is not divisible by 7");
}

let arr=[250,300,350,400,450];
let disArr=[0];
console.log(arr);
for(let i=0;i<arr.length;i++)
{
disArr[i]=arr[i]-0.20*arr[i];
}
console.log(disArr);

let str="javascript";
console.log("lenght:" ,str.length);
console.log("UpperCase:" ,str.toUpperCase());
console.log("3rd char:" ,str[2]);*/

let rno=10;
let Uno=prompt("Input the random number b/w (1-10):");
while(Uno!=rno)
{
    console.log("OOP wrong guess,Again Input: ");
}
   console.log("congratulations u guess it right! ");