class Developer{
  constructor(name){
    this.name = name;
  }
  commitChanges(){
    console.log(`${this.name} is committing changes`);
  }
}

class FrontEndDev extends Developer{
  buildUI(){
    console.log(`${this.name} is Building UI...`);
  }
}

class BackEndDev extends Developer{
  buildApi(){
    console.log(`${this.name} is building API`);
  }
}

class DevOPS extends Developer {
  deployApp(){
    console.log(`${this.name} is deploying app...`);
  }
}

// Seluruh class sudah terdefinisikan dengan baik, tetapi kurang Full-stack Developer
//

class FullstackDev extends Developer{

}
// Jika menggunakan pewarisan tentu tidak ada cara selain kita menulis kembali
// method buildUI(), buildAPI(), dan deployApp() di dalam fullstack dev
 
class FullStackDeveloper extends Developer {
  buildUI() {
    console.log(`${this.name} is building UI...`);
  }

  buildAPI() {
    console.log(`${this.name} is building API...`);
  }

  deployApp() {
    console.log(`${this.name} is deploying app...`);
  }
}

//  Cara ini tidak begitu efektif karena jika terjadi perubahan pada salah satu fungsi
// kita perlu mengubahnya di dua tempat

// Solusinya adalah meninggalkan pewarisan dan gunakan teknik object composition
// Object composition, dia tidak memperdulikan peran, melainkan kode distrukturkan
// berdasarkan kemampuan yang dapat dilakukan, seperti buildUI(), buildAPI() dan 
// deployApp()

class Developer{
  constructor(name){
    this.name = name;
  }
  commitChanges(){
    console.log(`${this.name} is committing changes`);
  }
}

function canBuildUI(developer){
  return{
    buildUI: () => {
      console.log(`${developer.name} is building API`);
    }
  }
}

function canDeployApp(developer){
  return{
    deployApp: () =>{
      console.log(`${developer.name} is deploying app`);
    }
  }
}

// Aagar lebih mudah dalam membuat objek, kita bisa membuat sebuah
// fungsi sebagai object creator dengana mengomposisikan kemampuan-kemampuan
// yang dibutuhkan. Di JavaScript, kita bisa secara mudah megomposisikan
// objek dengan menggunakan method Object.assign().

function createFrontEndDeveloper(name){
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createDevOps(name){
  const developer = new Developer(name);
  return Object.assign(developer, canBuildApi(developer));
}

function createFullStackDev(name){
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer), canBuildApi(developer), canDeployApp(developer));
}

// Setelah membuat fungsi object creater, kita bisa secara mudah membuat objek Front
// End Developer, BackEnd Developer, DevOps, dan FullStack Developer

class Developer {
  constructor(name){
    this.name = name;
  }
  commitChanges(){
    console.log(`${this.name} is committing changes...`);
  }
}
function canBuildUI(developer) {
  return {
    buildUI: () => {
      console.log(`${developer.name} is building UI...`);
    }
  }
}
 
function canBuildAPI(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API...`);
    }
  }
}
 
function canDeployApp(developer) {
  return {
    deployApp: () => {
      console.log(`${developer.name} is deploying app...`);
    }
  }
}
 
function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}
 
function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}
 
function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}
 
function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}
 
const frontEndDeveloper = createFrontEndDeveloper('Fulan');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);
 
const backEndDeveloper = createBackEndDeveloper('Fulana');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);
 
const devOpsDeveloper = createDevOps('Fulani');
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);
 
const fullStackDeveloper = createFullStackDeveloper('Fulanah');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);
 
/**
* Output:
* Fulan is committing changes...
* Fulan is building UI...
* is Fulan developer?  true
* Fulana is committing changes...
* Fulana is building API...
* is Fulana developer?  true
* Fulani is committing changes...
* Fulani is deploying app...
* is Fulani developer?  true
* Fulanah is building UI...
* Fulanah is building API...
* Fulanah is deploying app...
* is Fulanah developer?  true
*/