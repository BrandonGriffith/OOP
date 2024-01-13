Array.prototype.sort1 = function (compareFunction) {
    // Check if a compare function is provided
    if (compareFunction && typeof compareFunction !== 'function') {
        throw new Error('Invalid compare function');
    }

    // If no compare function is provided, use the default comparison
    compareFunction = compareFunction || defaultCompare;

    // Function to perform the QuickSort
    function quickSort(arr, left, right) {
        // Partition the array
        function partition(arr, left, right, compareFunction) {
            const pivot = arr[Math.floor((left + right) / 2)]; // Choose a pivot element
            let i = left;
            let j = right;

            while (i <= j) {
                while (compareFunction(arr[i], pivot) < 0) { // Find elements smaller than the pivot
                    i++;
                }
                while (compareFunction(arr[j], pivot) > 0) { // Find elements greater than the pivot
                    j--;
                }
                if (i <= j) { // Swap elements if necessary
                    swap(arr, i, j);
                    i++;
                    j--;
                }
            }

            return i; // Return the index of the pivot element
        }

        // Swap two elements in the array
        function swap(arr, i, j) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        // Perform the QuickSort recursively
        function recursiveQuickSort(arr, left, right, compareFunction) {
            if (arr.length <= 1) {
                return arr; // Base case: return if the array has 0 or 1 element
            }

            const index = partition(arr, left, right, compareFunction); // Get the index of the pivot element

            if (left < index - 1) {
                recursiveQuickSort(arr, left, index - 1, compareFunction); // Sort the left subarray
            }
            if (index < right) {
                recursiveQuickSort(arr, index, right, compareFunction); // Sort the right subarray
            }

            return arr; // Return the sorted array
        }

        return recursiveQuickSort(arr, left, right, compareFunction); // Call the recursive QuickSort function
    }

    // Default comparison function
    function defaultCompare(a, b) {
        if (a === b) {
            return 0; // Elements are equal
        }
        return a < b ? -1 : 1; // Elements are not equal, return -1 if a < b, 1 if a > b
    }

    // Call the QuickSort function
    return quickSort(this, 0, this.length - 1);
};

const arr1 = [5, 2, 7, 1, 9];
arr1.sort1();
console.log(arr1);

const arr2 = ['banana', 'apple', 'orange', 'grape'];
arr2.sort1();
console.log(arr2);

const arr3 = [10, 5, 20, 15, 30];
arr3.sort1((a, b) => b - a);
console.log(arr3);

const arr4 = [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 20 }];
arr4.sort1((a, b) => a.age - b.age);
console.log(arr4);