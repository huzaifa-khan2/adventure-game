import chalk from "chalk";
import inquirer from "inquirer";

console.log("=".repeat(100))
console.log(chalk.green.bold.italic("\t\t\t\t Welcome To Adventure Game"))
console.log("=".repeat(100))

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease(){
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease(){
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease(){
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

let player = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Enter your name:",
  },
]);

let opponent = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"Select opponent",
        choices:["Skeleton","Assasin" , "Zombie"]
    }
])


let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
    //Skeleton
    if(opponent.select === "Skeleton"){
        let ask = await inquirer.prompt([
            {
                name:"select",
                type:"list",
                message:"Select your action",
                choices:["Attack","Drink Potion" , "Run for your life.."],
    
            }
        ]);
        if(ask.select === "Attack"){
            let num = Math.floor(Math.random() * 2);
            if(num > 0){
              p1.fuelDecrease()
              console.log(chalk.bold.red(`${p1.name} Fuel Is ${p1.fuel}`))
              console.log(chalk.bold.green(`${o1.name} Fuel Is ${o1.fuel}`))
              if(p1.fuel <= 0){
                console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time..."))
                process.exit();
              }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.red(`${o1.name} Fuel Is ${o1.fuel}`))
                console.log(chalk.bold.green(`${p1.name} Fuel Is ${p1.fuel}`))
                if(o1.fuel <= 0){
                    console.log("=".repeat(60))
                    console.log(chalk.green.bold.italic("\t\t\tYou Win..."))
                    console.log("=".repeat(60))
                    process.exit();
                  }
            }
        }
        if(ask.select === "Drink Potion"){
            p1.fuelIncrease();
            console.log(chalk.bold.green(`You Drink Health Potion Your Fuel is ${p1.fuel}`))
        }
        if(ask.select === "Run for your life.."){
            console.log(chalk.red.bold.italic("You Lose , Better Luck Next Time...")) 
        }
        }
// Assasin 
        if(opponent.select === "Assasin"){
            let ask = await inquirer.prompt([
                {
                    name:"select",
                    type:"list",
                    message:"Select your action",
                    choices:["Attack","Drink Potion" , "Run for your life.."],
        
                }
            ]);
            if(ask.select === "Attack"){
                let num = Math.floor(Math.random() * 2);
                if(num > 0){
                  p1.fuelDecrease()
                  console.log(chalk.bold.red(`${p1.name} Fuel Is ${p1.fuel}`))
                  console.log(chalk.bold.green(`${o1.name} Fuel Is ${o1.fuel}`))
                  if(p1.fuel <= 0){
                    console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time..."))
                    process.exit();
                  }
                }
                if(num <= 0){
                    o1.fuelDecrease()
                    console.log(chalk.bold.red(`${o1.name} Fuel Is ${o1.fuel}`))
                    console.log(chalk.bold.green(`${p1.name} Fuel Is ${p1.fuel}`))
                    if(o1.fuel <= 0){
                        console.log("=".repeat(60))
                        console.log(chalk.green.bold.italic("You Win..."))
                        console.log("=".repeat(60))
                        process.exit();
                      }
                }
            }
            if(ask.select === "Drink Potion"){
                p1.fuelIncrease();
                console.log(chalk.bold.green(`You Drink Health Potion Your Fuel is ${p1.fuel}`))
            }
            if(ask.select === "Run for your life.."){
                console.log(chalk.red.bold.italic("You Lose , Better Luck Next Time...")) 
            }
            }
        //zombie
            if(opponent.select === "Zombie"){
                let ask = await inquirer.prompt([
                    {
                        name:"select",
                        type:"list",
                        message:"Select your action",
                        choices:["Attack","Drink Potion" , "Run for your life.."],
            
                    }
                ]);
                if(ask.select === "Attack"){
                    let num = Math.floor(Math.random() * 2);
                    if(num > 0){
                      p1.fuelDecrease()
                      console.log(chalk.bold.red(`${p1.name} Fuel Is ${p1.fuel}`))
                      console.log(chalk.bold.green(`${o1.name} Fuel Is ${o1.fuel}`))
                      if(p1.fuel <= 0){
                        console.log(chalk.red.bold.italic("You Lose, Better Luck Next Time..."))
                        process.exit();
                      }
                    }
                    if(num <= 0){
                        o1.fuelDecrease()
                        console.log(chalk.bold.red(`${o1.name} Fuel Is ${o1.fuel}`))
                        console.log(chalk.bold.green(`${p1.name} Fuel Is ${p1.fuel}`))
                        if(o1.fuel <= 0){
                            console.log("=".repeat(60))
                            console.log(chalk.green.bold.italic("You Win..."))
                            console.log("=".repeat(60))
                            process.exit();
                          }
                    }
                }
                if(ask.select === "Drink Potion"){
                    p1.fuelIncrease();
                    console.log(chalk.bold.green(`You Drink Health Potion Your Fuel is ${p1.fuel}`))
                }
                if(ask.select === "Run for your life.."){
                    console.log(chalk.red.bold.italic("You Lose , Better Luck Next Time...")) 
                }
                }
            
            
            
            }
        
        

    
while(true)


