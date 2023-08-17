function recursiveMathOperation(op, ...args) {
    if (op === "sum") {
        if (args.length === 0) {
            return 0;
        } else {
            return args[0] + recursiveMathOperation(op, ...args.slice(1));
        }
    } else if (op === "multiply") {
        if (args.length === 0) {
            return 1;
        } else {
            return args[0] * recursiveMathOperation(op, ...args.slice(1));
        }
    } else if (op === "factorial") {
        if (args[0] <= 1) {
            return 1;
        } else {
            return args[0] * recursiveMathOperation(op, args[0] - 1);
        }
    } else if (op === "fibonacci") {
        if (args[0] <= 0) {
            return 0;
        } else if (args[0] === 1) {
            return 1;
        } else {
            return recursiveMathOperation(op, args[0] - 1) + recursiveMathOperation(op, args[0] - 2);
        }
    } else if (op === "subtract") {
        if (args.length === 0) {
            return 0;
        } else {
            return args[0] - recursiveMathOperation(op, ...args.slice(1));
        }
    } else if (op === "divide") {
        if (args.length === 0) {
            return 1;
        } else {
            return args[0] / recursiveMathOperation(op, ...args.slice(1));
        }
    } else {
        return "Invalid operation";
    }
}


module.exports = {
    recursiveMathOperation:recursiveMathOperation
}