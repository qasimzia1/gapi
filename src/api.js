//base api 

const base_url = "https://api.rawg.io/api/";

//current month 
const getcurrentmonth = ()=> {

    const month = new Date().getMonth() + 1; 

  if (month < 10 ) {
    return `0${month}`;
  } else {
    return month;
  }
} ;

//current day

const getcurrentday = ()=> {

    const day = new Date().getDay() + 19 ; 

  if (day < 10 ) {
    return `0${day}`;
  } else {
    return day;
  }
} ;

//current day/month/year
const currentyear = new Date().getFullYear();
const currentmonth = getcurrentmonth();
const currentday = getcurrentday(); 
const currentdate = `${currentyear}-${currentmonth}-${currentday}`;
const nextyear = `${currentyear + 1}-${currentmonth}-${currentday}`;
const lastyear = `${currentyear - 1}-${currentmonth}-${currentday}`;


//populargames 
 
const populargames = `games?key=a75edc0889f6482a92aef3228cad5689&dates=${lastyear},${currentdate}&ordering=-rating&page_size=10`;

 export const populargamesurl= () => `${base_url}${populargames}`;
 