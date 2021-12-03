const fs = require("fs");

const rawInput = fs.readFileSync("input.txt", "utf8");
const input = rawInput.split('\n');

const calculatePowerConsumption = () => {
    let gammaRate = "";
    let epsilonRate = "";

    for(let i = 0; i < input[0].length; i++) {
        let zeroCount = 0;
        let oneCount = 0;
        for(let j = 0; j < input.length; j++) {
            if(input[j][i] == "0")
                zeroCount++;
            else
                oneCount++;
        }
        if(zeroCount > oneCount) {
            gammaRate += "0"
            epsilonRate += "1";
        } else {
            gammaRate += "1";
            epsilonRate += "0";
        }
    }
    let gammaInt = parseInt(gammaRate, 2);
    let epsilonInt = parseInt(epsilonRate, 2)
    console.log(`Gamma Rate: ${gammaInt} - Epsilon Rate: ${epsilonInt}`);
    console.log(`Gamma x Epsilon: ${gammaInt * epsilonInt}`);
}

const calculateOxygenRating = () => {

    let generatorRating = input.slice();
    let scrubberRating = input.slice();

    for(let i = 0; i < generatorRating[0].length; i++) {

        if(generatorRating.length == 1)
            break;

        let zeroCount = 0;
        let oneCount = 0;
        let commonBit = "";
        for(let j = 0; j < generatorRating.length; j++) {
            if(generatorRating[j][i] == "0")
                zeroCount++;
            else if(generatorRating[j][i] == "1")
                oneCount++;
        }

        if(zeroCount > oneCount)
            commonBit = "0";
        else
            commonBit = "1";

        let results = [];
        for(let j = 0; j < generatorRating.length; j++) {
            if(generatorRating[j][i] == commonBit) {
                results.push(generatorRating[j]);
            }
        }
        generatorRating = new Array();
        generatorRating = results.slice();
    }
    
    for(let i = 0; i < scrubberRating[0]; i++) {

        if(scrubberRating.length == 1)
            break;

        let zeroCount = 0;
        let oneCount = 0;
        let uncommonBit = "";
        for(let j = 0; j < scrubberRating.length; j++) {
            if(scrubberRating[j][i] == "0")
                zeroCount++;
            else if(scrubberRating[j][i] == "1")
                oneCount++;
        }

        if(oneCount < zeroCount)
            uncommonBit = "1"
        else
            uncommonBit = "0";

        let results = [];
        for(let j = 0; j < scrubberRating.length; j++) {
            if(scrubberRating[j][i] == uncommonBit)
                results.push(scrubberRating[j]);
        }

        scrubberRating = new Array();
        scrubberRating = results.slice();
    }

    let generatorRatingInt = parseInt(generatorRating[0], 2);
    let scrubberRatingInt = parseInt(scrubberRating[0], 2);

    console.log(`Generator Rating: ${generatorRatingInt} - Scrubber Rating: ${scrubberRatingInt}`);
    console.log(`Oxygen Generator Rating: ${generatorRatingInt * scrubberRatingInt}`);

}

calculatePowerConsumption();
calculateOxygenRating();