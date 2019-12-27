interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
  // the built-in type "Partial" tells Typescript that the empty object which is assigned originally
  // will eventually become an object of the type "CourseGoal"
  // NOTE: What "Partial" type does, it makes all properties of the type it wrappes and make them
  // optional
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
};
console.log("Full course goal:", createCourseGoal("Math", "Know basics", new Date));


const createGoalWithTitle = (title: string): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;

  return courseGoal as CourseGoal;
};
console.log("Course goal with only title:", createGoalWithTitle("Math"));


// the built-in type "Readonly" type locks an array or an object and makes it immutable,
// so it cannot be changed. If we try to do that, compiler throws an error
const names: Readonly<string[]> = ["Max", "Anna"];
names.push("Peter"); // compiles with error
names.pop(); // compiles with error