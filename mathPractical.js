function calculatePi(length) {
    if (length < 0) {
        throw new Error("Length should be a non-negative integer.");
    }

    return Math.PI.toFixed(length);
}

function calculateArea(shape, width) { // equal width
    if (shape % 2 === 0) {
        const sideLength = width;
        return shape * sideLength * sideLength * (1 / Math.tan(Math.PI / shape));
    } else if (shape % 2 !== 0) {
        const sideLength = width;
        return shape / 4 * sideLength * sideLength * (1 / Math.tan(Math.PI / shape));
    } else {
        throw new Error("Invalid shape identifier.");
    }
}

function calculateTriFieldAngle(side1, side2, angleInDegrees) {
    // Convert the angle from degrees to radians
    const angleInRadians = angleInDegrees * (Math.PI / 180);

    // Calculate the area using the law of sines formula
    const area = 0.5 * side1 * side2 * Math.sin(angleInRadians);

    return area;
}



const Decimal = require('decimal.js'); // Import the decimal.js library

function calculateEulerNum(decimalPlaces) {
    Decimal.set({ precision: decimalPlaces + 2 }); // Set precision for Decimal calculations
    const one = new Decimal(1);
    const eulerValue = one.exp();
    return eulerValue.toFixed(decimalPlaces);
}

function removeZeros(number){
    let r=(+number).toFixed(4).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')
    return r
}


function logBase(val,base) {
    return Math.log(val) / Math.log(base);
  }

function roundX(num,round,op='ceil'){
    if(op=='ceil'){
        return Math.ceil(num / round) * round;
    }else if(op=='floor'){
        return Math.floor(num / round) * round;
    }else{
        throw Error('Op Input must be floor or ceil')
    }
    
}

function customPad(num,base) {
    if (base && num < base) {
        return num
    } else {
        return num.toString().padStart(num || 2, '0');
    }
}

function toDegrees (angle) {
    return angle * (180 / Math.PI);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

function makePercentage(num1,num2){
    return Math.floor((num1 / num2) * 100)
}

function parseFormula(str) {
    const operators = ['+', '-', '*', '/', '^', '(', ')'];
    const precedence = {'+':1, '-':1, '*':2, '/':2, '^':3};

    function applyOperator(operators, values) {
        const operator = operators.pop();
        const b = values.pop();
        const a = values.pop();
        switch(operator) {
            case '+': values.push(a + b); break;
            case '-': values.push(a - b); break;
            case '*': values.push(a * b); break;
            case '/': values.push(a / b); break;
            case '^': values.push(Math.pow(a, b)); break;
        }
    }

    function evaluate(expression) {
        const values = [];
        const operators = [];
        let i = 0;

        while (i < expression.length) {
            const token = expression[i];
            if (!isNaN(token)) {
                values.push(parseFloat(token));
            } else if (token === '(') {
                operators.push(token);
            } else if (token === ')') {
                while (operators[operators.length - 1] !== '(') {
                    applyOperator(operators, values);
                }
                operators.pop();
            } else if (operators.length === 0 || precedence[token] > precedence[operators[operators.length - 1]]) {
                operators.push(token);
            } else {
                while (operators.length > 0 && precedence[token] <= precedence[operators[operators.length - 1]]) {
                    applyOperator(operators, values);
                }
                operators.push(token);
            }
            i++;
        }

        while (operators.length > 0) {
            applyOperator(operators, values);
        }

        return values[0];
    }

    return evaluate(str.split(/([+\-*/^()])/).filter(token => token.trim() !== ''));
}

  function modifyValues(input, lowerThreshold, upperThreshold) {
    let modified;

    if (Array.isArray(input)) {
        modified = input.map(value => {
            if (value < lowerThreshold) {
                return lowerThreshold;
            } else if (value > upperThreshold) {
                return upperThreshold;
            }
            return value;
        });

        return modified;
    } else if (typeof input === 'object' && input !== null) {
        modified = {};
        for (const key in input) {
            const value = input[key];
            if (value < lowerThreshold) {
                modified[key] = lowerThreshold;
            } else if (value > upperThreshold) {
                modified[key] = upperThreshold;
            } else {
                modified[key] = value;
            }
        }

        return modified;
    } else {
        throw new Error("Input must be an array or an object.");
    }
}

function getIndividualDigits(number) {
    const digitsAsString = number.toString();
    const digitsArray = digitsAsString.split('').map(Number);
    return digitsArray;
}

function sumAndFixDecimal(strings, decimalPlaces) {
    if(!Array.isArray(strings)){
        throw Error('Input must be an array of string')
    }
    const sum = strings.reduce((total, str) => total + parseFloat(str), 0);
    return sum.toFixed(decimalPlaces);
}

var gcd = function(numbers) {
    if (numbers.length === 1) {
        return numbers[0];
    }

    const a = numbers[0];
    const b = gcd(numbers.slice(1)); // Recursively calculate GCD for the rest of the list

    return gcdTwoNumbers(a, b);
};

var gcdTwoNumbers = function(a, b) {
    if (!b) {
        return a;
    }

    return gcdTwoNumbers(b, a % b);
};

function genRandPointCircle(radius, numberOfPoints) {
    const points = [];

    for (let i = 0; i < numberOfPoints; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.sqrt(Math.random()) * radius;

        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);

        points.push({ x, y });
    }

    return points;
}

function divEqParts(integer, parts) {
    if (parts <= 0) {
        throw new Error("Number of parts must be greater than zero.");
    }

    const quotient = Math.floor(integer / parts);
    const remainder = integer % parts;

    const result = new Array(parts).fill(quotient);
    for (let i = 0; i < remainder; i++) {
        result[i]++;
    }

    return result;
}

function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLCMOfArray(numbers) {
    if (numbers.length < 2) {
        throw new Error("At least two numbers are required to find LCM.");
    }

    let lcm = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        lcm = (lcm * numbers[i]) / findGCD(lcm, numbers[i]);
    }

    return lcm;
}

function productArray(list){
    let product = list.reduce((a,b) => a*b)
    let total_list = list.map((value) => product * (1/value))
    return total_list
}

function toFixedNum(x,level=2) {
    return Number(Number.parseFloat(x).toFixed(level))
  }

module.exports = {
    calculatePi:calculatePi,
    calculateArea:calculateArea,
    calculateEulerNum:calculateEulerNum,
    calculateTriFieldAngle:calculateTriFieldAngle,
    removeZeros:removeZeros,
    logBase:logBase,
    roundX:roundX,
    customPad:customPad,
    toDegrees:toDegrees,
    toRadians:toRadians,
    makePercentage:makePercentage,
    parseFormula:parseFormula,
    modifyValues:modifyValues,
    getIndividualDigits:getIndividualDigits,
    sumAndFixDecimal:sumAndFixDecimal,
    gcd:gcd,
    genRandPointCircle:genRandPointCircle,
    divEqParts:divEqParts,
    findLCMOfArray:findLCMOfArray,
    productArray:productArray,
    toFixedNum:toFixedNum
}
