# Jenereta
An automated Time-Table Generator.

## Concepts Covered
- MERN Stack
- Genetic Algorithm
- Constraint Programming
- Bootstrap
- Reactstrap
- Redux

## Development and Installation
- Navingate to [time-table](https://github.com/starkblaze01/Jenereta/tree/master/time-table) folder and follow steps below:

### Install Backend Dependencies
- npm install

### Install Frontend Dependencies
- npm run client-install

### Setup up dev_keys for database
- Either run local MongoServer or,
- Setup Mongo Server at online platform like mlab and Create a keys_dev.js file in [config](https://github.com/starkblaze01/Jenereta/tree/master/time-table/config) folder and set up:-
``` 
module.exports = {
  mongoURI: YOUR_LOCAL_MONGO_SERVER_URI,
	secretOrKey: YOUR_SECRET
}; 
```
### Run
- npm run dev

## Note
The number of times we try to generate the final time-table is 20. After that it will show alert to try again. If you want to increase number of tries then change the value of "notPossibleCount < 20" from [here](https://github.com/starkblaze01/Jenereta/blob/master/time-table/client/src/utils/generator.js).

## Team Members
- [Aman Yadav](https://github.com/amany9000)
- [Daksh Gondaliya](https://github.com/DakshGondaliya)
- [Kirtika Singhal](https://github.com/singhalkirtika)
- [Nikhil Sachan](https://github.com/nikhilsachan007)
- [Parmeshwar](https://github.com/parmeshwar01)
- ,and [Me](https://github.com/starkblaze01/) 😎

## Found an Issue or any suggestions
Make an issue [here](https://github.com/starkblaze01/Jenereta/issues/new).
