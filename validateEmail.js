function validateEmail(email) {
    // Regular expression for basic email validation
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!email) {
      // Check if the email is empty
      return false;
    }
  
    if (!regex.test(email)) {
      // Check if the email does not match the regular expression
      return false;
    }
  
    // Additional checks for common email provider restrictions
    const emailParts = email.split('@');
    const domain = emailParts[1];
  
    if (domain.includes('..')) {
      // Check for consecutive dots in the domain part
      return false;
    }
  
    if (domain.startsWith('.') || domain.endsWith('.')) {
      // Check for dots at the beginning or end of the domain part
      return false;
    }
  
    if (domain.includes(' ')) {
      // Check for spaces in the domain part
      return false;
    }
  
    if (domain.indexOf('.') === -1) {
      // Check if there is at least one dot in the domain part
      return false;
    }
  
    return true; // If all checks pass, the email is considered valid
  }
  

module.exports = {
    validateEmail:validateEmail
};