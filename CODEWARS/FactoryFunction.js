/** @format */
describe("constructionWorker", () => {
  it("should instantiate an object properly", () => {
    var alfie = constructionWorker(
      "Alfie",
      "Ching",
      13,
      "Male",
      false,
      "Ethan"
    );
    Test.assertEquals(alfie.firstName, "Alfie");
    Test.assertEquals(alfie.lastName, "Ching");
    Test.assertEquals(alfie.age, 13);
    Test.assertEquals(alfie.gender, "Male");
    Test.assertEquals(alfie.employed, true);
    Test.assertEquals(alfie.occupation, "construction worker");
    Test.assertEquals(alfie.married, false);
    Test.assertEquals(alfie.boss, "Ethan");
    Test.assertEquals(alfie.sayName(), "Alfie Ching");
    Test.assertEquals(
      alfie.introduce(),
      "Hello, my name is Alfie Ching.  I am 13 years old.  I am a Male."
    );
    Test.assertEquals(
      alfie.sayBossName(),
      "My boss is called Ethan and is a very nice person!"
    );
  });
});
function person(
  firstName,
  lastName,
  age,
  gender,
  employed,
  occupation,
  married
) {
  return {
    firstName,
    lastName,
    age,
    gender,
    employed,
    occupation,
    married,
    sayName() {
      return `${this.firstName} ${this.lastName}`;
    },
    introduce() {
     return `Hello, my name is ${firstName} ${lastName}.  I am ${age} years old.  I am a ${gender}.`;
    },
  };
}

function constructionWorker(firstName, lastName, age, gender, married, boss) {
  // Membuat objek person sebagai prototipe
  const proto = person(
    firstName,
    lastName,
    age,
    gender,
    true,
    "construction worker",
    married
  );

  const worker = Object.create(proto);


  worker.boss = boss;
  worker.sayBossName = function () {
    return `My boss is called ${this.boss} and is a very nice person!`;
  };

  // Pastikan untuk menetapkan metode yang diperlukan
  worker.sayName = proto.sayName;
  worker.introduce = proto.introduce;

  return worker;
}
