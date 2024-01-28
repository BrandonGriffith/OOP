class BubbleSort {
    constructor(arr) {
        this.arr = arr;
        this.n = arr.length;
    }
    bubblesort() {
        for (let i = 0; i < this.n - 1; i++) {
            for (let j = 0; j < this.n - i - 1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    let temp = this.arr[j];
                    this.arr[j] = this.arr[j + 1];
                    this.arr[j + 1] = temp;
                }
            }
        }
        return this.arr;
    }
}
const arr = [64, 34, 25, 12, 22, 11, 90];

const sortedArr = new BubbleSort(arr).bubblesort();

console.log(sortedArr);