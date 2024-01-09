function calculateage() {
    const birthdate = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("result");

     if (birthdate) {
         const today = new Date();
         const birthDate = new Date(birthdate);

         let ageYears = today.getFullYear() - birthDate.getFullYear();
         let ageMonths = today.getMonth() - birthDate.getMonth();
         let ageDays = today.getDate() - birthDate.getDate();

         if (ageDays<0){
             ageMonths--;
             ageDays += new Date (
                 today.getFullYear(),
                 today.ageMonth(),
                 0
             ).getDate();
         }
         if (ageMonths < 0) {
             ageYears--;
             ageMonths +=12;
         }
         resultElement.innerText =`Your Age is ${ageYears } years, ${ageMonths} months, ${ageDays} days.`;
         resultElement.style.color  = "blue";
        } else{
            resultElement.innerText ="Please enter your birthadte";
            resultElement.style.color="pink"
        }
     }
