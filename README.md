## Ugandan Phone Number

A minimalist package for validating Ugandan phone numbers using Regular Expressions 


### Installation 

```
$ npm install ugandan-numbers --save
```
or 

```
yarn add ugandan-numbers
```

### Usage 

The module assumes that you input field that you will prepend a    `+256` and you should therefore not expect users to type that. This implies that your UI should look like so: 


``` 
     |***********************|
+256 |  Enter phone number   |
     |***********************|
```


Here is the implementation:

```js

const ugandanNumber = require('ugandan-numbers');

let phoneNumberField = document.querySelector('#phone-input').value;

ugandanNumber.isValid(phoneInput);  //returns true or false
```

### More to the above 

```js 
//  10 digits
ugandanNumber.isValid('0781254565'); // true

// pass argument as Number
ugandanNumber.isValid(0781254565); // true

// Unknown provider
ugandanNumber.isValid(0281254565); // false

```
### Inspiration 
This package has been made after an inspiration from [Udokah's Naija PhoneNumber](https://github.com/Udokah/naija-phone-number)


### Reporting bugs 
You can create a new issue for a abug that you noticed here [Report issue](https://github.com/CodeForUganda/ugandan-phone-numbers-/issues)


### Licence

MIT 