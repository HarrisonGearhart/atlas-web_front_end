// Create the user object with the specified attributes
const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Guillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer',
};

// welcome message
function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// Bind the logWelcomeUser function to the user object
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Call the function with the string 'Hello'
bindLogWelcomeUser('Hello');  // Output: Hello, Guillaume. Your occupation is: Engineer
