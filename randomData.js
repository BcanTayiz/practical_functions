// Function to generate random user data
function generateRandomUser() {
    const firstNames = ['John', 'Alice', 'Bob', 'Eva', 'Daniel'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Lee', 'Wilson'];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomAge = Math.floor(Math.random() * 50) + 20; // Random age between 20 and 70
    return {
        firstName: randomFirstName,
        lastName: randomLastName,
        age: randomAge,
    };
}

// Function to generate a list of random users
function genRanUserList(count) {
    const userList = [];
    for (let i = 0; i < count; i++) {
        userList.push(generateRandomUser());
    }
    return userList;
}

// Function to generate random product data
function generateRandomProduct() {
    const products = ['Laptop', 'Phone', 'Tablet', 'Headphones', 'Camera'];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomPrice = (Math.random() * 1000).toFixed(2); // Random price between 0 and 1000
    return {
        name: randomProduct,
        price: randomPrice,
    };
}

// Function to generate a list of random products
function genRandProductList(count) {
    const productList = [];
    for (let i = 0; i < count; i++) {
        productList.push(generateRandomProduct());
    }
    return productList;
}

// Function to generate random email addresses
function generateRandomEmail() {
    const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
    const randomUsername = Math.random().toString(36).substring(7); // Generate a random username
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `${randomUsername}@${randomDomain}`;
}

// Function to generate a list of random users with email addresses
function genRandEmailList(count) {
    const firstNames = ['John', 'Alice', 'Bob', 'Eva', 'Daniel', 'Sarah', 'Michael', 'Emily', 'David', 'Olivia'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Lee', 'Wilson', 'Davis', 'Clark', 'Anderson', 'White', 'Taylor'];
    const userList = [];
    for (let i = 0; i < count; i++) {
        userList.push({
            id: Math.random().toString(36).substring(7),
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            email: generateRandomEmail(),
        });
    }
    return userList;
}


// Function to generate random order data
function generateRandomOrder() {
    const products = ['Laptop', 'Phone', 'Tablet', 'Headphones', 'Camera'];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomQuantity = Math.floor(Math.random() * 5) + 1; // Random quantity between 1 and 5
    const randomPrice = (Math.random() * 1000).toFixed(2); // Random price between 0 and 1000
    return {
        id: Math.random().toString(36).substring(7), // Generate a random order ID
        product: randomProduct,
        quantity: randomQuantity,
        price: randomPrice,
    };
}

// Function to generate a list of random orders
function genRandomOrder(count) {
    const orderList = [];
    for (let i = 0; i < count; i++) {
        orderList.push(generateRandomOrder());
    }
    return orderList;
}

// Function to generate random dates within a range
function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Function to generate a list of random events with dates
function genRandomEvent(count) {
    const eventList = [];
    const eventNames = [
        'Conference',
        'Workshop',
        'Seminar',
        'Webinar',
        'Meetup',
        'Symposium',
        'Hackathon',
        'Expo',
        'Panel Discussion',
        'Training Session'
    ];
    for (let i = 0; i < count; i++) {
        eventList.push({
            id: Math.random().toString(36).substring(7),
            name: eventNames[Math.floor(Math.random() * eventNames.length)],
            date: generateRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
        });
    }
    return eventList;
}

// Random User Data Generator Function
function genRandUserObjList(count) {
    const userList = [];
    for (let i = 0; i < count; i++) {
        const firstNames = ['John', 'Alice', 'Bob', 'Eva', 'Daniel'];
        const lastNames = ['Smith', 'Johnson', 'Brown', 'Lee', 'Wilson'];
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomAge = Math.floor(Math.random() * 50) + 20; // Random age between 20 and 70
        const randomEmail = `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`;
        userList.push({
            firstName: randomFirstName,
            lastName: randomLastName,
            age: randomAge,
            email: randomEmail,
        });
    }
    return userList;
}

// Random Event Data Generator Function
function genRandEventObjList(count) {
    const eventList = [];
    for (let i = 0; i < count; i++) {
        const eventNames = ['Conference', 'Workshop', 'Seminar', 'Webinar', 'Meetup'];
        const randomEventName = eventNames[Math.floor(Math.random() * eventNames.length)];
        const randomDate = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        eventList.push({
            name: randomEventName,
            date: randomDate,
        });
    }
    return eventList;
}

// Random Date Generator Function
function genRandDateObjList(count) {
    const dateList = [];
    for (let i = 0; i < count; i++) {
        const startDate = new Date(2022, 0, 1); // Start date (January 1, 2022)
        const endDate = new Date(2022, 11, 31); // End date (December 31, 2022)
        const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
        dateList.push({
            date: randomDate,
        });
    }
    return dateList;
}

// Random Email Generator Function
function genRandEmailObjList(count) {
    const emailList = [];
    for (let i = 0; i < count; i++) {
        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
        const randomUsername = Math.random().toString(36).substring(7); // Generate a random username
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        emailList.push({
            email: `${randomUsername}@${randomDomain}`,
        });
    }
    return emailList;
}



module.exports = {
    genRanUserList:genRanUserList,
    genRandProductList:genRandProductList,
    genRandEmailList:genRandEmailList,
    genRandomOrder:genRandomOrder,
    genRandomEvent:genRandomEvent,
    genRandUserObjList:genRandUserObjList,
    genRandEventObjList:genRandEventObjList,
    genRandDateObjList:genRandDateObjList,
    genRandEmailObjList:genRandEmailObjList
}