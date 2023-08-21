function checkPasswordStrength(password) {
    // Define regular expressions to check for character types
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
  
    // Define a dictionary of common passwords (for demonstration purposes)
    const commonPasswords = ['password', '123456', 'qwerty', 'letmein'];
  
    // Check password length and character types
    if (password.length < 8) {
      return 'Weak';
    } else if (
      (hasLowerCase && hasUpperCase && hasDigit) ||
      (hasLowerCase && hasUpperCase && hasSpecialChar) ||
      (hasLowerCase && hasDigit && hasSpecialChar) ||
      (hasUpperCase && hasDigit && hasSpecialChar)
    ) {
      // Check if the password has a combination of lowercase, uppercase, digit, and special character
      return 'Strong';
    } else if (commonPasswords.includes(password.toLowerCase())) {
      return 'Common';
    } else {
      return 'Medium';
    }
  }

  function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    return password;
  }

  function validatePasswordPolicy(password) {
    const minLength = 8;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const hasSpecialChar = format.test(password);
  
    return (
      password.length >= minLength &&
      hasLowerCase &&
      hasUpperCase &&
      hasDigit &&
      hasSpecialChar
    );
  }





  module.exports = {
    checkPasswordStrength:checkPasswordStrength,
    generateRandomPassword:generateRandomPassword,
    validatePasswordPolicy:validatePasswordPolicy,
  }