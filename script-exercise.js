/*
 The exercise one 


var Mark , John, John_mass, Mark_mass, Mark_height, John_height;
var isRight;

Mark="Mark";
John="John";
John_mass= 66;
Mark_mass=60
Mark_height=1.76;
John_height=1.80;
tim = 200;
var BMI= John_mass/(John_height*John_height);
var BMI_2=Mark_mass/(Mark_height*Mark_height);
isRight=BMI<BMI_2;

console.log("is Mark's BMI higher than John", isRight);

console.log("the value is "+BMI+ "  " +BMI_2+ " ",tim);
*/

/**

The code chanllenge  2:

var teamOne, teamTwo;
var score_01,score_02,score_03,scoreOne,scoreTwo,scoreThree;
teamOne="John";
teamTwo="Mark";
var teamThree="Marry"
score_01=89;
score_02=120;
score_03=103;
scoreOne=116;
scoreTwo=94;
scoreThree=123;
var  Mscore1=97;
var Mscore2=134;
var Mscore3=105;
var averageJohn=(score_03+score_02+score_01)/3;
var averageMark=(scoreOne+scoreTwo+scoreThree)/3;
var averageMarry=(Mscore1+Mscore3+Mscore2)/3;
if(averageJohn>averageMark&&averageJohn>averageMarry){
	console.log("The winner of the team is "+teamOne+"  Their scores are",averageJohn);
}
else if(averageMarry>averageJohn&&averageMarry>averageMark){
	console.log("The winner of the team is "+teamThree+". Their scores are",averageMarry);
}
else if(averageMark>averageJohn&&averageMark>averageMarry){
	console.log("The winner of the team is "+teamThree+"  Their scores are",averageMarry);
}
else{
	console.log('There is a draw');
}

*/


/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator 
(as a function). He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀


function myFunction(bills){
	var tips,final;
	switch(true){
		case bills<50 :
				tips=0.2;
				return final=bills*tips+bills ;
		case bills>50&&bills<200:
				 tips=0.15;
				return final= bills*tips+bills;
		case bills>=200:
				tips=0.1;
				return final=bills*tips+bills;
	}
}

var bill=[124,48,268];

console.log(" the first restaurants amount is: "+myFunction(bill[0])+" the second  restaurants amount is: "
	+myFunction(bill[1])+" the three restaurants amount is: "+myFunction(bill[2]));


*/

// CODING CHALLENGE 4:  

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, 
and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object 
and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full 
name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/
/*
var Mark ={
	firstName:'Mark',
	lastName:"Bao",
	mass:60,
	height:1.76,
	BMI:0,
	fristBMI: function(){
		this.BMI=this.mass/(this.height*this.height);
		return this.BMI;
		
	}
}

var John ={
	firstName:'John',
	lastName:'Heard',
	Jmass:66,
	Mheight:1.80,
	BMI:0,
	secondBMI: function(){
		this.BMI=this.Jmass/(this.Mheight*this.Mheight);
		return this.BMI;

	}
}
//注意*不要忘加括号   

if (Mark.fristBMI()>John.secondBMI()) {
	console.log("Mark:",Mark.firstName,Mark.lastName,Mark.BMI);

}
else if (Mark.fristBMI()<John.secondBMI()){
	console.log("John:",John.firstName,John.lastName,John.BMI);

}
else{ 
	console.log('There is a draw ');
}


*/


/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
var john = {
		fullName: 'John Berry',
		tips: [],
		bills_John: [124, 48, 268, 180, 42],
		finalvale: [],
		mytips: function() {

			for (var i = 0; i < this.bills_John.length; i++) {
				if (this.bills_John[i] < 50) {
					this.tips[i] = 0.2
					
				} else if (this.bills_John[i] > 50 && this.bills_John[i] < 200) {
					this.tips[i] = 0.15
				} else {
					this.tips[i] = 0.1;
				}
				this.finalvale[i]=this.tips[i]*this.bills_John[i]+this.bills_John[i];
				console.log("the tips are : ", this.finalvale[i]);
			}
		}
}
john.mytips();







