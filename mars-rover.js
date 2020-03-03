// Rover Object Goes Here
// ======================
let theRover = {
    direction : 'N',
    position : { 
     x:0, 
     y:0, 
     },
     travelLog : []
   };
   
   // ======================
   function turnLeft(rover){
     let order = rover.direction;
     switch(order){
       case 'N':
         rover.direction ='W'
         console.log(`Rover is now facing West/${rover.direction}`);
         break;
       case 'W':
         rover.direction ='S'
         console.log(`Rover is now facing South/${rover.direction}`);
         break;
       case 'S':
         rover.direction ='E'
         console.log(`Rover is now facing East/${rover.direction}`);
         break;
       case 'E':
         rover.direction ='N'
         console.log(`Rover is now facing North/${rover.direction}`);
         break;
     } 
   }
   
   function turnRight(rover){
     let order = rover.direction;
     switch(order){
       case 'N':
         rover.direction ='E'
         console.log(`Rover is now facing East/${rover.direction}`);
         break;
       case 'E':
         rover.direction ='S'
         console.log(`Rover is now facing South/${rover.direction}`);
         break;
       case 'S':
         rover.direction ='W'
         console.log(`Rover is now facing West/${rover.direction}`);
         break;
       case 'W':
         rover.direction ='N'
         console.log(`Rover is now facing North/${rover.direction}`);
         break;
     } 
   }
   
   function moveForward(rover){
     if (rover.direction == 'N'){
       if (rover.position.y <= 0){
         console.log('You have exceeded the boundaries of the grid, turn around!');
         return;
       }
       rover.position.y--;
     }else if(rover.direction == 'W'){
       if (rover.position.x <= 0){
         console.log('You have exceeded the boundaries of the grid, turn around!');
         return;
       }
       rover.position.x--;
     }else if(rover.direction == 'S'){
       if (rover.position.y > 8 ){
         console.log('You have exceeded the boundaries of the grid, turn around!');
         return;
       }
       rover.position.y++;
     }else if(rover.direction == 'E'){
       if (rover.position.x > 8 ){
         console.log('You have exceeded the boundaries of the grid, turn around!');
         return;
       }
       rover.position.x++;
     }
     console.log(`The Rover's coordinates are : x=${rover.position.x}, y=${rover.position.y}`);
     rover.travelLog.push([`x=${rover.position.x}, y=${rover.position.y}`])
   }
   
   function moveBackward(rover){
     if (rover.direction == 'N'){
       if (rover.position.y > 8){
         console.log('You have exceeded the boundaries of the grid, turn around!');
         return;
       }
       rover.position.y++;
     }else if(rover.direction == 'W'){
       if (rover.position.x > 8){
         console.log('You have exceeded the boundaries of the grid, turn around!');
         return;
       }
       rover.position.x++;
     }else if(rover.direction == 'S'){
       if (rover.position.y <= 0 ){
         console.log('You have exceeded the boundaries of the grid, turn around!');
         return;
       }
       rover.position.y--;
     }else if(rover.direction == 'E'){
       if (rover.position.x <= 0){
         console.log('You have exceeded the boundaries of the grid, turn around!');
         return;
       }
       rover.position.x--;
     }
     console.log(`The Rover's coordinates are : x=${rover.position.x}, y=${rover.position.y}`);
     rover.travelLog.push([`x=${rover.position.x}, y=${rover.position.y}`])
   }
   
   function moveRover(rover, moveArr){
     let commands = ['f','r','l','b']
     moveArr.forEach(way => {
       let test = commands.includes(way)
       if(!test){
         console.log(`${way} is not a command`);
         return;
       }
        if( way == 'f'){
         moveForward(rover);
       }else if( way == 'r'){
          turnRight(rover)
       }else if( way == 'l'){
         turnLeft(rover)
        }else if( way == 'b'){
         moveBackward(rover)
       } 
     })
     console.log(rover.travelLog)
   }
   
   let movement = ['l','z','z','z','r','r','f',
   'f','r','f','f','f','f', 'b','b','b','b','b','b','b',]
   moveRover(theRover, movement)
   