function Stopwatch() {
    console.log('code is running here', this);
    this.startTime, this.endTime, this.running, this.duration;
};
Stopwatch.prototype.start = function () {
    if (this.running) throw new Error('Stopwatch has already been started');
    this.running = true;
    this.startTime = new Date();
};
Stopwatch.prototype.stop = function () {
    if (!this.running) throw new Error('Stopwatch is not running');
    this.running = false;
    this.endTime = new Date();
    !this.duration ? this.duration = 0 : null;
    this.duration += (this.endTime.getTime() - this.startTime.getTime()) / 1000;
};
Stopwatch.prototype.reset = function () { this.startTime = this.endTime = this.running = this.duration = null }
Stopwatch.prototype.getDuration = function () {
    this.duration ? console.log(this.duration) :
    console.log('stopwatch must be started then stopped to get the duration')
};

const sw = new Stopwatch();
const sw2 = new Stopwatch();