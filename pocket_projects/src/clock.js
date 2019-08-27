export default class Clock {
  constructor(){
    let date = new Date();
    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    // setInterval(this._tick.bind(this), 0);
  }

  printTime() {
    // Format the time in HH:MM:SS
    const timeString = [this.hours, this.minutes, this.seconds].join(":");

    // Use console.log to print it.
    // console.log(timeString);
    return timeString;
  }

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSeconds();

    // 2. Call printTime.
    return this.printTime();
  }

  _incrementSeconds() {
    // 1. Increment the time by one second.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }
}