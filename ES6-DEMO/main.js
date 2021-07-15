const companies=[
    {name:"Company One",category:"Finance",start:1981,end:2003},
    {name:"Company Two",category:"Retail",start:1992,end:2008},
    {name:"Company Three",category:"Auto",start:1999,end:2007},
    {name:"Company Four",category:"Retail",start:1989,end:2010},
    {name:"Company Five",category:"Technology",start:2009,end:2014},
    {name:"Company Six",category:"Finance",start:1987,end:2010},
    {name:"Company Seven",category:"Auto",start:1986,end:1996},
    {name:"Company Eight",category:"Technology",start:2011,end:2016},
    {name:"Company Nine",category:"Retail",start:1981,end:1989}
];
const ages =[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//forEach
//filter
//map
//sort
//reduce

//Looping  through the array using the for loop
for(let i=0;i<companies.length;i++){
    console.log(companies[i]);
}
//Looping through the array using for loop
for(let j=0;j<ages.length;j++){
    console.log(ages[j])
}
//for each
companies.forEach(function(company){
    console.log(company)
})

//to loop specific properties
companies.forEach(function(company){
    console.log(company.category)
})

//to loop the specific properties

companies.forEach(function(company){
    console.log(company.name)
})

//Filter allow us to filter things from the array
//Filter using the for loop
//get 21 and above
let canDrink =[];
for(let i=0;i<ages.length;i++){
    if(ages[i]>=21){
        canDrink.push(ages[i])
    }
}
console.log(canDrink);

//using filter

const willDrink=ages.filter(function (age) {
    if(age>=21){
        return true;
    }
});
console.log(willDrink);

//arrow function
const Drink=ages.filter(age=>age >=21);

console.log(Drink);

//Filter retail companies
const Retail=companies.filter(companies=>companies.category==="Retail")

console.log(Retail);

//Filter technology companies
const technology=companies.filter(companies=>companies.category==="Technology");
console.log(technology);

//create array of the company name
const companyName=companies.map(function(company){
    return company.name;

});
console.log(companyName);






























