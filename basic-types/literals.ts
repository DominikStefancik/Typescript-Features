// let anyString: string; // can contain any string values

// can contain only two string values ('positive' or 'negative', nothing else)
let twoValuesString: 'positive' | 'negative';

anyString = 'Any string can be added'; // compiles ok
twoValuesString = 'neutral'; // compiles with error

let binary: 0 | 1;
binary = 0; // compiles ok
binary = 2; // compiles with error

let initialisedVariable = 2.5; // the inferred type of the variable is number
const initialisedConstant = 2.5; // the inferred type of the constant is 2.5
const initialisedConstantWithExplicitType: number = 2.5; // the inferred type of the constant is number