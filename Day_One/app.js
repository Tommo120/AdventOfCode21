const fs = require("fs");

const rawInput = fs.readFileSync('input.txt', 'utf8').split('\n');
let input = [];
rawInput.forEach((value, i) => input[i] = parseInt(value));

const countIncreases = () => {

    let increaseCount = 0;

    for(let i = 1; i < input.length; i++) {
        if(input[i] > input[i-1])
            increaseCount++;
    }

    console.log(`Depth values increase ${increaseCount} times`);
}

const countSlidingWindowIncreases = () => {
    let slidingWindowIncreases = 0;
    let previousSlidingWindow = null;

    for(let i = 2; i < input.length; i++) {

        let slidingWindow = input[i-2] + input[i-1] + input[i];

        if(previousSlidingWindow) {
            if(slidingWindow > previousSlidingWindow)
                slidingWindowIncreases++;
        }

        previousSlidingWindow = slidingWindow;
    }

    console.log(`Sliding window values increase ${slidingWindowIncreases} times`);
}

countIncreases();
countSlidingWindowIncreases();