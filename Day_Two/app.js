const fs = require("fs");

const rawInput = fs.readFileSync('input.txt', 'utf8');
const input = rawInput.split('\n');

const pilotSubmarine = () => {
    let horizontalPosition = 0;
    let depth = 0;

    for(let i = 0; i < input.length; i++){
        let value = input[i].split(" ");
        
        switch(value[0]) {
            case "forward":
                horizontalPosition += parseInt(value[1]);
                break;
            case "up":
                depth -= parseInt(value[1]);
                break;
            case "down":
                depth += parseInt(value[1]);
                break;
        }
    }
    console.log(`Horizontal Position: ${horizontalPosition} - Depth: ${depth} - Result ${horizontalPosition * depth}`);
}

const pilotSubmarineProperly = () => {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;

    for(let i = 0; i < input.length; i++) {
        let value = input[i].split(" ");

        switch (value[0]) {
            case "forward":
                horizontalPosition += parseInt(value[1]);
                depth += aim * parseInt(value[1]);
                break;
            case "up":
                aim -= parseInt(value[1]);
                break;
            case "down":
                aim += parseInt(value[1]);
                break;
        }
    }
    console.log(`Horizontal Position: ${horizontalPosition} - Depth: ${depth} - Result ${horizontalPosition * depth}`);
}

pilotSubmarine();
pilotSubmarineProperly();