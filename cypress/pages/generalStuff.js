export default class TimeFormating {

    constructor() {
        this.today = new Date();
      }

      
      // Adding days to todays date
      addDaysToToday(days){

        const newDate = this.today.setDate(this.today.getDate() + days);
        return new Date(newDate);
      }
    
      // Returning formated string designed for booking.com date picker
      formatedCypressDate(today){

        const firstNumber = (today.getDate().toString().charAt(0) === '0') ? today.getDate().toString().charAt(1):today.getDate().toString();
        const todayLastFormat = firstNumber + " " + today.toLocaleString('en-US', { month: 'long' }) + " " + today.getFullYear().toString();
        const todayStringForCypress = `'[aria-label="${todayLastFormat}"] > span'`;
        const todayStringForCypressSliced = todayStringForCypress.slice(1,-1);

        return todayStringForCypressSliced;

      }

      // Returning todays formated date for booking.com date picker
      formatedTodayDate(){
        return this.formatedCypressDate(this.today);

      }

      // Returning today plus five formated date for booking.com date picker
      addFiveDaysToToday(){
        return this.formatedCypressDate(this.addDaysToToday(5));
      }

}
