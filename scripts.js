const PI = 3.1415;
const radius=5;
let space=.8;
let weeksgrowth=2;
const area = PI * radius * radius;
console.log(area)
let capacity= area/space;
console.log(capacity)
let plantnow=20;


 /*Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.*/

//Predict the plant growth after a specific number of weeks/
// x plant growth= 0.8x20(2)/

let weeks=2;

let plantgrow= plantnow*weeks*1;
console.log(plantgrow) // calulated plant  in 2 weeks growth/

/*Implement control flow to make decisions on whether the plants should be:
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 
80% of the maximum capacity of the garden */

let Pruned=0;
switch(Pruned){
    case '1':
        console.log("1 weeks of growth"+ plantnow)
        break;
        case '2':
            
            console.log("2 weeks of growth"+ plantgrow*2)
        break;
            case '3':
                plantgrow++
                console.log("3 weeks of growth"+ plantgrow)
                break;
                default:
                    console.log("exceed capacity after 3 weeks of growth")
                    break;

            
            
}

/*Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 
50% and 80% of the maximum capacity of the garden after the given number of weeks.*/
let Monitored=0;
switch(Monitored){
    case '1':
        console.log("1 weeks of growth"+ plantnow)
        break;
        case '2':
            
            console.log("2 weeks of growth"+ plantgrow*2)
        break;
        default:
            console.log("the plants are growing at an acceptable rate at week 2")
            break;
        }
/*Planted, if there is room to plant more plants.
This condition should be met if the plant 
count after the given number of weeks is less than 50% of the maximum capacity of the garden. */
  let Planted=0;
  switch(Planted){
    case "1":
        console.log("growth after week 1" + plantgrow)
        break;
        default:
            console.log("growth is 50% less at week 1")
        break;
    }

    /*The amount of additional space that would be required
     if the scientists were to start with 100 plants, and did not prune them for 10 week*/

     let thinkingbigger = space *100;
     console.log(thinkingbigger)
 let didntprune= plantgrow *10;
 console.log(didntprune)

 //Use try and catch to wrap your work in an error-handling block/
 
 try {
	if (didntprune < 78) {
		console.log("should of pruned");
	} else {
		throw "Error -should of pruned.";
	}
} catch (error) {
	console.log(error);
}

console.log("not enough space");

