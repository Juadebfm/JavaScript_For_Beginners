# BREAKDOWN THE REGEXP USED IN THE FORM

## EMAIL REGULAR EXP

Let's explain the regular expression `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` in simpler terms:

This special code is used to check if an email address is valid. An email address is the address you use to send and receive emails. Here's what each part of the code means:

- Imagine we have a line with an email address written on it.
- The code starts with a symbol (/) to show that it's a special code for checking email addresses.
- The (^) symbol means the start of the line. So we're looking at the beginning of the email address.
- Next, we see some strange characters ([^\s@]+). These characters mean we're looking for one or more letters, numbers, or symbols that are not spaces or the (@) symbol. It's like looking for a word without spaces or the (@) symbol in it.
- After that, we find the (@) symbol, which is used in every email address to separate the name and the domain (the part after the (@) symbol).
- Then, we see more strange characters ([^\s@]+) again. This time, it means we're looking for one or more letters, numbers, or symbols that are not spaces or the (@) symbol. It's like looking for another word without spaces or the (@) symbol in it.
- Now, we come across a dot (.), like the dot in a web address. It's used to separate the domain name and the extension, like .com or .org.
- After the dot, we see more strange characters ([^\s@]+) once again. It means we're looking for one or more letters, numbers, or symbols that are not spaces or the (@) symbol. It's like looking for another word without spaces or the (@) symbol in it.
- Finally, we have the ($) symbol, which means the end of the line. It shows that we've reached the end of the email address.

So, this special code helps us make sure that an email address follows a specific pattern:

- It must not have spaces.
- It must have the (@) symbol to separate the name and the domain.
- It should have at least one word before and after the (@) symbol.
- It should have a dot (.) followed by more letters or symbols after the (@) symbol.
- This code is like a rulebook that helps us check if an email address looks right or not. But remember, email addresses can be more complicated than this, so there might be some valid email addresses that don't match this exact pattern

## PHONE NUMBER REGULAR EXPRESSION

The regular expression `/^\d{11}$/` can be explained as follows:

- ^ asserts the start of the string.
- \d matches any digit (0-9).
- {11} specifies that the previous digit pattern \d should occur exactly 11 times.
- $ asserts the end of the string.

In simpler terms:

This regular expression is used to check if a string consists of exactly 11 digits. It ensures that there are no other characters before or after the 11-digit sequence.

Examples of strings that would match this pattern:

- "12345678901": This string contains exactly 11 digits and nothing else.
- "00000000000": Similarly, this string consists of 11 digits.

Examples of strings that would not match this pattern:

- "123456789012": This string has 12 digits, which doesn't satisfy the requirement of exactly 11 digits.
- "abcdefghijk": This string contains alphabetic characters, which are not digits.
- "12345": This string has fewer than 11 digits and doesn't meet the requirement.

So, the regular expression `/^\d{11}$/` helps ensure that a string matches the pattern of exactly 11 digits.

## NOTE

The caret `^` has two different meanings depending on its position:

- When used at the start of a regular expression pattern (outside square brackets), like in /^\d{11}$/, it represents the start of the string. It asserts that the pattern that follows should match from the beginning of the string.

- When used inside square brackets, like [^abc], it represents the negation or exclusion of characters. In this case, it matches any character that is not a, b, or c.

## EXAMPLES OF REGULAR EXPRESSION USEFUL FOR PASSWORDS

Examples of regular expressions that can be useful for password inputs:

### Minimum Length Requirement

_/^.{8,}$/_
Explanation: This regular expression checks if the password has a minimum length of 8 characters. The ^ asserts the start of the string, .{8,} matches any character (.) repeated at least 8 or more times, and $ asserts the end of the string.

### At Least One Uppercase Letter

_/(?=.\*[A-Z])/_
Explanation: This regular expression checks if the password contains at least one uppercase letter. The (?=.\*[A-Z]) is a positive lookahead assertion that ensures the presence of at least one uppercase letter ([A-Z]) anywhere in the string.

### At Least One Numeric Digit

_/(?=.\*\d)/_
Explanation: This regular expression checks if the password contains at least one numeric digit. The (?=.\*\d) is a positive lookahead assertion that ensures the presence of at least one digit (\d) anywhere in the string.

## USE IN JS CODE

```js
const validatePassword = (password) => {
  const minLengthRegex = /^.{8,}$/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*\d)/;

  if (!minLengthRegex.test(password)) {
    return "Password must be at least 8 characters long.";
  }

  if (!uppercaseRegex.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!numericRegex.test(password)) {
    return "Password must contain at least one numeric digit.";
  }

  return "Password is valid.";
};

// Example usage:
const password = prompt("Enter password"); // Sample password to validate
const validationMessage = validatePassword(password);
console.log(validationMessage);
```
