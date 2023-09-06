function customConsoleLog() {
    // Extract the calling frame information
    const callingFrame = new Error().stack.split('\n')[2].trim();
    const fileInfoMatch = callingFrame.match(/\((.*):(\d+):(\d+)\)$/);

    if (fileInfoMatch) {
        let fileName = fileInfoMatch[1].split('\\').pop();
        let lineNumber = fileInfoMatch[2];

        const colorReset = '\x1b[0m'; // Reset color
        let colorYellow = '\x1b[33m'; // Yellow text
        let colorBlue = '\x1b[34m'; // Blue text
        let colorRed = '\x1b[31m'; // Red text

        fileName = colorRed + fileName + colorReset
        lineNumber = colorYellow+lineNumber + colorReset

        const logMessage = `[${fileName.replace(/\\/g, '-').replace('.js', '')}-${colorBlue}line:${lineNumber}] `;

        // Extract the log arguments and convert them to an array
        const logArguments = Array.from(arguments);

        // Prefix the log message with the formatted file and line information
        logArguments.unshift(logMessage);

        // Call the original console.log function with the modified arguments
        console.log.apply(console, logArguments);
    } else {
        // If calling frame information is not available, simply log the message
        console.log.apply(console, arguments);
    }
}
  
module.exports = {
    customConsoleLog:customConsoleLog
}