console.log('running javascript now');
const createCircle = (radius) => {
    console.log('code is running here',this);
    return {
        radius,
        draw : () => {
            console.log('draw');
        }
    };
};
const circle = createCircle(1);
const nextCircle = createCircle.call({}, 1);
createCircle.apply({}, [1]);
console.log(circle.constructor);
console.log(nextCircle.constructor);
circle.draw(1);
function Circle (radius) {
    console.log('code is running here', this);
    let location = {x : 1, y : 2};
    const computeLocation = (factor) => { console.log(factor) };
    this.getLocation = () => {console.log(location); return location};
    Object.defineProperty(
        this,
        'location',{ 
            get : () => {return location},
            set : (value) => {
                // if (!value.x ||!value.y) throw new Error('invalid location');
                if (!value.x ||!value.y) console.log('invalid location');
                location = value;
            }
        }
    );
    this.radius = radius;
    this.draw = () => { 
        console.log('draw');
        computeLocation(0.1);
    };
};
const anotherCircle = new Circle(1);
console.log(anotherCircle.constructor);
anotherCircle.draw();
anotherCircle.getLocation();
console.log(anotherCircle.location);
anotherCircle.location = 1;
anotherCircle.location = {x : 5, y : 5};
console.log(anotherCircle.location);
for (let key in circle) {
    typeof circle[key] == 'function' ? 
    console.log('this is a function:', key, circle[key]) : 
    console.log(key, circle[key]);
};