 let mydate = new Date();

 console.log(mydate); // current date and time

 console.log(mydate.toString());
 console.log(mydate.toDateString()); // date in user's local format

 console.log(mydate.toLocaleString()); // date and time in user's local format

 console.log(typeof mydate);

 let myCreateDate = new Date(2025,0,30)
 console.log(myCreateDate);

 let myDiff = new Date(2025,0,30) - new Date(2022,0,1)

 console.log(myDiff); // in milliseconds
 console.log(myDiff / 1000); // in seconds
 console.log(myDiff / 60000); // in minutes
 console.log(myDiff / 3600000); // in hours
 console.log(myDiff / 86400000); // in days
 console.log(myDiff / 31536000000); // in years
 console.log(new Date(2025,0,30).getFullYear());
 console.log(new Date(2025,0,30).getMonth());
