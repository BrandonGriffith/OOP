// This is a constructor function for creating Stopwatch objects

function Stopwatch() {
    // The function logs a message and the value of 'this'
    console.log('code is running here', this);

    // These variables are used to store the start time, end time, 
    // running status, and duration of the stopwatch
    let startTime, endTime, running, duration;

    // This method starts the stopwatch
    this.start = () => {
        // If the stopwatch is already running, it throws an error
        if (running) throw new Error('Stopwatch has already been started');
        
        // Updates the running status and sets the start time
        running = true;
        startTime = new Date();
    };

    // This method stops the stopwatch
    this.stop = () => {
        // If the stopwatch is not running, it throws an error
        if (!running) throw new Error('Stopwatch is not running');
        
        // Updates the running status, sets the end time, and calculates the duration
        running = false;
        endTime = new Date();
        !duration ? duration = 0 : null;
        duration += (endTime.getTime() - startTime.getTime()) / 1000;
    };

    // This method resets the stopwatch
    this.reset = () => {
        // Resets all the stopwatch variables to null
        startTime = endTime = running = duration = null;
    };

    // This method returns the duration of the stopwatch
    this.getDuration = () => 
        duration ? console.log(duration) : 
            console.log('stopwatch must be started then stopped to get the duration');
}

// Creating a new Stopwatch object
const sw = new Stopwatch();
