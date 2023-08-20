const { combineAndFlattenLists } = require("./aggregate");


// List of common informal words and phrases
const informalWords = [
    'hey', 'hi', 'hello', 'yo', 'what\'s up', 'wassup', 'gonna', 'wanna', 'lemme',
    'ya', 'nah', 'lol', 'brb', 'ttyl', 'cool', 'awesome', 'chill', 'nope', 'yep',
    'haha', 'omg', 'dude', 'guys', 'buddy', 'bros', 'hella', 'lit', 'sick', 'rad',
    'meh', 'm8', 'thx', 'u', 'r', 'gr8', 'lmao', 'smh', 'wtf', 'idk', 'bff', 'cya',
    'gimme', 'gon', 'luv', 'rofl', 'b4', 'im', '2', 'plz', 'k', 'np', 'fam', 'hmu',
    'irl', 'kewl', 'nvm', 'sup', 'tho', 'tbh', 'btw', 'smth', 'noob', 'sry', 'wass',
    'lit', 'af', 'fml', 'tmi', 'hbu', 'ily', 'yolo', 'tbh', 'omw', 'bday', 'm8',
    'totes', 'tbf', 'fwiw', 'omw', 'h8', 'srsly', 'yass', 'oml', 'smol', 'stan',
    'snack', 'fam', 'savage', 'flex', 'yikes', 'yeet', 'vibes', 'fomo', 'GOAT', 'thirsty'
];

const informalWords2 = [
    'Hey', 'Hi', 'What\'s up', 'Gonna', 'Wanna', 'Lemme', 'Yeah', 'Nope', 'Yep',
    'LOL', 'BRB', 'TTYL', 'Cool', 'Awesome', 'Chill', 'Haha', 'OMG', 'Dude', 'Guys',
    'Buddy', 'Bros', 'Hella', 'Lit', 'Sick', 'Rad', 'Meh', 'Thx', 'U', 'R', 'Gr8', 'LMAO',
    'SMH', 'WTF', 'IDK', 'BFF', 'CYA', 'Gimme', 'Gonna', 'Luv', 'ROFL', 'B4', 'IM', '2', 'Plz',
    'K', 'NP', 'Fam', 'HMU', 'IRL', 'Noob', 'Sry', 'Wass', 'Lit', 'AF', 'FML', 'TMI', 'HBU',
    'ILY', 'Yolo', 'TBH', 'BTW', 'Smth', 'Nvm', 'Sup', 'Tho', 'Tbh', 'Omw', 'Bday', 'M8',
    'Totes', 'Tbf', 'Fwiw', 'Oml', 'Smol', 'Stan', 'Snack', 'Fam', 'Savage', 'Flex', 'Yikes',
    'Yeet', 'Vibes', 'FOMO', 'GOAT', 'Thirsty', 'Cray', 'Hangry', 'FOMO', 'Binge', 'Lit',
    'Slay', 'Squad', 'Woke', 'Cringe', 'Sesh', 'Yas', 'Basic', 'Chillax', 'Fam', 'Sippin',
    'Adorbs', 'Bae', 'Goals', 'Sis', 'Sus', 'Suh', 'Wassup', 'Sis', 'Yas', 'Blessed', 'Swag',
    'Fleek', 'Litty', 'Ratchet', 'Slayin', 'Sippin', 'Gucci', 'Savage', 'Cuz', 'Lolz', 'Werk',
    'Thicc', 'Yaaas', 'Chillin', 'Fosho', 'Fam', 'Dope', 'Lit', 'Bet', 'Hundo', 'Bruh',
    'Suh', 'Adorbs', 'Cray', 'Chillin', 'Yasss', 'Fleek', 'Blessed', 'Squad', 'Sippin',
    'Woke', 'Litty', 'Ratchet', 'Slayin', 'Gucci', 'Savage', 'Cuz', 'Lolz', 'Werk', 'Thicc',
    'Yaaas', 'Fosho', 'Hundo', 'Bruh', 'Nah', 'Yup', 'Dope', 'Bet', 'Hella', 'Chillax',
    'Bae', 'Goals', 'Sis', 'Sus', 'Fosho', 'Yup', 'Legit', 'Holler', 'Holla', 'Foshizzle',
    'Adorbs', 'Lurk', 'Cray', 'Yuppers', 'Chillin', 'Holler', 'Foshizzle', 'Lurk', 'Legit',
    'Nopers', 'Prolly', 'Totes', 'Peeps', 'Sicko', 'Woot', 'Bust', 'Probs', 'Obvi', 'Natch',
    'Deets', 'Def', 'Vaca', 'Fave', 'Cray-Cray', 'Fab', 'Faves', 'Whatevs', 'BFFL', 'Obvi',
    'Natch', 'Deets', 'Def', 'Vaca', 'Fave', 'Cray-Cray', 'Fab', 'Faves', 'Whatevs', 'BFFL',
    'Awks', 'Betch', 'Frenemy', 'Mkay', 'Obvi', 'Yas', 'Natch', 'NBD', 'Sitch', 'Hundo P',
    'Presh', 'JK', 'ILYSM', 'Woot', 'Werk', 'Noms', 'Fleek', 'PPL', 'Meh', 'Awks', 'Betch',
    'Frenemy', 'Mkay', 'Obvi', 'Yas', 'Natch', 'NBD', 'Sitch', 'Hundo P', 'Presh', 'JK',
    'ILYSM', 'Woot', 'Werk', 'Noms', 'Fleek', 'PPL', 'Meh', 'G2G', 'CYR', 'OOTD', 'F2F',
    'YOLO', 'YOYO', 'ICYMI', 'SMH', 'IDC', 'B4N', 'G2G', 'CYR', 'OOTD', 'F2F', 'YOLO', 'YOYO',
    'ICYMI', 'SMH', 'IDC', 'B4N'
];

const informalAdjectives = [
    "awesome",
    "cool",
    "amazing",
    "fantastic",
    "fabulous",
    "awesome",
    "wonderful",
    "crazy",
    "wild",
    "epic",
    "lit",
    "sick",
    "rad",
    "hilarious",
    "chill",
    "dope",
    "insane",
    "incredible",
    "outstanding",
    "terrific",
    "mind-blowing",
    "stellar",
    "super",
    "groovy",
    "neat",
    "funky",
    "slick",
    "breathtaking",
    "phenomenal",
    "extraordinary",
];

const informalNouns = [
    "buddy",
    "mate",
    "pal",
    "dude",
    "guys",
    "chick",
    "guy",
    "babe",
    "bros",
    "hella",
    "fam",
    "homie",
    "peeps",
    "posse",
    "crew",
    "gang",
    "buddy",
    "bud",
    "hombre",
    "dawg",
    "mama",
    "papa",
    "kiddo",
    "homeboy",
    "homegirl",
    "bruh",
    "sis",
    "cuz",
    "lady",
    "fella",
    "y'all",
    "baddie",
];


let all_list = combineAndFlattenLists([informalWords,informalWords2,informalAdjectives,informalNouns])

function detectNaiveInformality(text) {
    // Create a regex pattern to match whole words in the all_list
    const pattern = new RegExp(`\\b(${all_list.join('|')})\\b`, 'gi');

    // Find all matches in the text
    const matches = text.match(pattern);

    // If any matches are found, it's informal
    return !!matches;
}


module.exports = {
    detectNaiveInformality:detectNaiveInformality
}