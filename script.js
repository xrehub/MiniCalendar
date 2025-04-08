const currentDate = new Date();
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

if (day < 10){
    day = "0" + currentDate.getDate();
};

document.getElementById("number-day").innerHTML = day;
document.getElementById("month-name").innerHTML = Months[currentDate.getMonth()];
document.getElementById("year").innerHTML = year;
