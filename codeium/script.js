function Rectangle(x , y) {
    let width = x;
    let length = y;

    this.calculateArea = function () {
        return length * width;
    };

    this.setLength = function (newLength) {
        if (isNaN(newLength)) {
            throw new Error("Invalid length");
        }
        length = newLength;
    };

    this.setWidth = function (newWidth) {
        if (isNaN(newWidth)) {
            throw new Error("Invalid width");
        }
        width = newWidth;
    };

    this.getLength = function () {
        return length;
    };

    this.getWidth = function () {
        return width;
    };
}

let rectangle = new Rectangle(1,1);

rectangle.setLength(800);
rectangle.setWidth(1200);

// Output: 96
console.log(rectangle.calculateArea());

// Output: 8
console.log(rectangle.getLength());

// Output: 12
console.log(rectangle.getWidth());

// Code visualization
displayVisualization(rectangle);

function displayVisualization(rectangle) {
    let visualization = document.getElementById("visualization");
    visualization.innerHTML = `
        <h2>Code Visualization</h2>
        <p>Rectangle Object:</p>
        <ul>
            <li>Length: ${rectangle.getLength()}</li>
            <li>Width: ${rectangle.getWidth()}</li>
            <li>Area: ${rectangle.calculateArea()}</li>
        </ul>
    `;
}
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function drawRectangle(rectangle) {
    const length = rectangle.getLength();
    const width = rectangle.getWidth();

    // Set the fill color of the rectangle
    context.fillStyle = "blue";

    // Draw the rectangle on the canvas
    context.fillRect(0, 0, length, width);
}

// Call the drawRectangle function with the rectangle object
drawRectangle(rectangle);