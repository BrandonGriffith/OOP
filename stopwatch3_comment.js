// Define a class named Stopwatch
class Stopwatch {
    // Constructor function to initialize the stopwatch instance
    constructor() {
        // Log a message when the code enters the constructor
        console.log('code is running here', this);
        // Initialize properties for the stopwatch: startTime, endTime, running state, and duration
        this.startTime, this.endTime, this.running, this.duration;
    }

    // Method to start the stopwatch
    start() {
        // If the stopwatch is already running, throw an error
        if (this.running) throw new Error('Stopwatch has already been started');
        // Set the running state to true
        this.running = true;
        // Set the start time to the current date and time
        this.startTime = new Date();
    }

    // Method to stop the stopwatch
    stop() {
        // If the stopwatch is not running, throw an error
        if (!this.running) throw new Error('Stopwatch is not running');
        // Set the running state to false
        this.running = false;
        // Set the end time to the current date and time
        this.endTime = new Date();
        // Calculate the duration by subtracting start time from end time and converting to seconds
        !this.duration ? this.duration = 0 : null;
        this.duration += (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    }

    // Method to reset the stopwatch
    reset() {
        // Reset the startTime, endTime, running state, and duration to null
        this.startTime = this.endTime = this.running = this.duration = null;
    }

    // Method to get the duration of the stopwatch
    getDuration() {
        // If duration is available, log the duration. Otherwise, prompt to start and stop the stopwatch
        this.duration ? console.log(this.duration) :
        console.log('stopwatch must be started then stopped to get the duration');
    }
}

// Create two instances of the Stopwatch class
const sw = new Stopwatch();
const sw2 = new Stopwatch();
