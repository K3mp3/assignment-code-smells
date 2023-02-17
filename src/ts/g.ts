/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number {
  return jumpings.reduce((jumpDistanceSoFar, currentJump) =>{
     return jumpDistanceSoFar + currentJump
  });
}

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed ?: boolean
  ) {}
}

function getStudentStatus(student: Student): string {
  if ((student.name == "Sebastian") && (student.handedInOnTime)) {
    return "VG"
  } else {
    return "IG"
  }
}

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

class Temp {
    constructor
    (
        public city: string, 
        public dateToday: Date, 
        public temperature: number,
    ) {}
}

function averageWeeklyTemperature(weeklyTemperature: Temp[] ) {
  const millisecondsInAWeek: number = 604800000;
  const daysInAWeek: number = 7;
  let totalWeekTemperature: number = 0; 

  for (let i = 0; i < weeklyTemperature.length; i++) {
    if ((weeklyTemperature[i].city === "Stockholm") && (weeklyTemperature[i].dateToday.getTime() > Date.now() - millisecondsInAWeek)) {
        totalWeekTemperature += weeklyTemperature[i].temperature
    }
  }
  return totalWeekTemperature / daysInAWeek
}

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

interface productInformation {
    name: string,
    price: number,
    amount ?: number,
    description ?: string,
    image: string,
    parent: HTMLElement
}

function showProduct(products: productInformation) {

  let container = document.createElement("div");

  const name = createH4Element(products.name);
  container.appendChild(name);

  const price = createStrongElement(products.price)
  container.appendChild(price);

  const image = createImgElement(products.image)
  container.appendChild(image);

  products.parent.appendChild(container);
}

function createH4Element(name: string) {
  const productTitle = document.createElement("h4");
  productTitle.innerHTML = name;
  return productTitle;
}

function createStrongElement(price: number) {
  const productPrice = document.createElement("strong");
  productPrice.innerHTML = price.toString();
  return productPrice;
}

function createImgElement(image: string) {
  const imageTag = document.createElement("img");
  imageTag.innerHTML = image;
  return imageTag;
}

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */
function presentStudents(students: Student[]) {
  for (const student of students) {
    const container = document.createElement("li");
    let checkbox = createCheckbox(student.handedInOnTime)
    container.appendChild(checkbox);

    let listOfStudents = student.handedInOnTime 
    ? document.querySelector("#passedstudents") 
    : document.querySelector("#failedstudents");
    
    listOfStudents?.appendChild(container);
  }
}

function createCheckbox(checkBooleanArgument: boolean) {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = checkBooleanArgument;
  
  return checkbox;   
}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */
function concatenateStrings() {
  let result: string[] = ["Lorem", "ipsum", "dolor", "sit", "amet"];
  return result.join("");
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/

interface createUser{
      name: string,
      birthday: Date,
      email: string,
      password: string,
      avatar ?: string,
      adress ?: string,
}

function calculateUserAge(users: createUser) {
  const begginingOfTheUnixEpoc: number = 1970;
  const requiredMinimumAge: number = 20;

  // Validation
  let ageDifferenceInMilliseconds = Date.now() - users.birthday.getTime();
  let ageInDate = new Date(ageDifferenceInMilliseconds);
  let userAge = Math.abs(ageInDate.getUTCFullYear() - begginingOfTheUnixEpoc);

  if (userAge > requiredMinimumAge) {
    // Logik för att skapa en användare
  } else {
    return `Du är under ${requiredMinimumAge} år`;
  }
}