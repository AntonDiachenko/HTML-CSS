/*
   Assignment 01 
   Developed By: Anton Diachenko
   Developed Date: May 10, 2022   

   Function List: Add the list of your functions here.
   1) addTime(oldtime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.
     
      
   2) showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM

   3) ...
*/
   

   function addTime(oldtime, milliseconds) {
      let newTime = new Date();
      let newValue;

      newValue = oldtime.getTime() + milliseconds;
      newTime.setTime(newValue);
      return newTime;
   }

/**
 * 
 * @param {Date} time 
 */
   function showTime(time) {
      let theHours = time.getHours();
      let theMinutes = time.getMinutes();

      let ampm = (theHours < 12) ? ' AM' : ' PM';
      theHours = (theHours > 12) ? (theHours - 12) : theHours;
      theHours = (theHours == 0) ? 12 : theHours;
      theMinutes = (theMinutes < 10) ? ('0' + theMinutes) : theMinutes;

      return theHours + ':' + theMinutes +  '' + ampm;
   }





