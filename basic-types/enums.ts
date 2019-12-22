// By default enum constants are assigned number values starting from 0
enum StandartEnum {
  ADMIN, // will have value 0
  USER, // will have value 1
  SUPERUSER // will have value 2
};

// If need you can assign a starting value to the constants
enum EnumWithAssignedValue1 {
  ADMIN = 5, // will have value 5
  USER, // will have value 6
  SUPERUSER // will have value 7
};

enum EnumWithAssignedValue2 {
  ADMIN, // will have value 0
  USER = 5, // will have value 5
  SUPERUSER // will have value 6
};

// You can assign a starting value to all enum constants which don't have to be after each other
enum EnumWithAssignedValues {
  ADMIN = 50, // will have value 50
  USER = 100, // will have value 100
  SUPERUSER = 200 // will have value 200
};

// You can assign a starting values with a different types
enum EnumWithAssignedValuesOfDifferentTypes {
  ADMIN = 50, // will have value 50
  USER = 'USER', // will have value 'USER'
  SUPERUSER = 'SUPER' // will have value 'SUPER'
};