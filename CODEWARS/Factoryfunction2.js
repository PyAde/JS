// {/** @format */
// describe("Your factory function", () => {
//   it("should instantiate an object properly with the given parameters", () => {
//     var john = person("John", "Doe", 18, "male", false, null, true);
//     Test.assertEquals(john.firstName, "John");
//     Test.assertEquals(john.lastName, "Doe");
//     Test.assertEquals(john.age, 18);
//     Test.assertEquals(john.gender, "male");
//     Test.assertEquals(john.employed, false);
//     Test.assertEquals(john.occupation, null);
//     Test.assertEquals(john.married, true);
//     Test.assertEquals(john.sayName(), "John Doe");
//     Test.assertEquals(
//       john.introduce(),
//       "Hello, my name is John Doe.  I am 18 years old.  I am a male."
//     );
//     var cathy = person(
//       "Cathy",
//       "Destexhe",
//       16,
//       "female",
//       true,
//       "Designer",
//       false
//     );
//     Test.assertEquals(cathy.firstName, "Cathy");
//     Test.assertEquals(cathy.lastName, "Destexhe");
//     Test.assertEquals(cathy.age, 16);
//     Test.assertEquals(cathy.gender, "female");
//     Test.assertEquals(cathy.employed, true);
//     Test.assertEquals(cathy.occupation, "Designer");
//     Test.assertEquals(cathy.married, false);
//     Test.assertEquals(cathy.sayName(), "Cathy Destexhe");
//     Test.assertEquals(
//       cathy.introduce(),
//       "Hello, my name is Cathy Destexhe.  I am 16 years old.  I am a female."
//     );
//   });
// });
function person(firstName, lastName, age, gender, employed, occupation, married) {
  // Create a new object with the provided parameters
  let personObj = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    employed: employed,
    occupation: occupation,
    married: married,
    sayName: function () {
      return `${firstName} ${lastName}`
    },
    introduce: function () {
      let intro = `Hello, my name is ${this.sayName()}.  I am ${
        this.age
      } years old.  I am a ${this.gender}.`;
      if (this.employed) {
        intro += ` I am employed as a ${this.occupation}.`;
      }
      if (this.married) {
        intro += " I am married.";
      }
      return intro;
    },
  };

  return personObj;
}