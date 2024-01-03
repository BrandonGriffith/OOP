function Stopwatch() {
    console.log('code is running here',this);
    let startTime, endTime, running, duration;
    this.start = () => {
        if (running) throw new Error('Stopwatch has already been started');
        running = true;
        startTime = new Date();
    };
    this.stop = () => {
        if (!running) throw new Error('Stopwatch is not running');
        running = false;
        endTime = new Date();
        !duration ? duration = 0 : null;
        duration += (endTime.getTime() - startTime.getTime()) / 1000;
    };
    this.reset = () => {
        startTime = endTime = running = duration = null;
    };
    this.getDuration = () => duration ? console.log(duration) : 
    console.log('stopwatch must be started then stopped to get the duration');
};
const sw = new Stopwatch();