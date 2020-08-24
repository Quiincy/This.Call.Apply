const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476, countryName: 'Ukraine' };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921, countryName: 'Latvia' };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114, countryName: 'Litva' };

       
const salary = 15000;
 
function getMyTaxes(salary) {
            const tax = this.tax * salary;
           return  tax;
        };
        
console.log(`With a salary of ${salary} you will pay ${getMyTaxes.call(ukraine, salary)} tribute in Ukraine `);


function getMiddleTaxes() {
    const middleTax = (this.tax * this.middleSalary).toFixed(1);
    console.log(`On average  ${this.countryName} pays ${middleTax} of tax `);
};

[ukraine, latvia, litva].forEach((country) => getMiddleTaxes.call(country));

function getTotalTaxes() {
    const totalTax = (this.tax * this.middleSalary * this.vacancies).toFixed(1);
    console.log(`${this.countryName} pays ${totalTax} of tax at all`);
};

[ukraine, latvia, litva].forEach((country) => getTotalTaxes.call(country));


function getMySalary() {
     
    setInterval(() => {
        const randomSalary = Math.floor(1500 + Math.random() * (2000 - 1500 +1));
        const taxes = +(this.tax * randomSalary).toFixed(1);
        const profit = +(randomSalary - taxes).toFixed(1);
    
        let objectSalary = {
            randomSalary,
            taxes,
            profit
        }

        return console.log(objectSalary);
    }, 2000);
       
    }

getMySalary.call(ukraine);







    