/* ========== Helper Funtions ========== */
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function buildNewArray(size) {
  let arr = [];
  for (var i = 0; i < size; i++) {
    arr[i] = getRandomNumber(0, 10000);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivotVal = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivotVal) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

/* ========== Sorting Algorithms ========== */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let tempIdx = i - 1;
    let currentVal = arr[i];
    while (arr[tempIdx] > currentVal) {
      arr[tempIdx + 1] = arr[tempIdx];
      tempIdx = tempIdx - 1;
    }
    arr[tempIdx + 1] = currentVal;
  }
  return arr;
}

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
}

/* ========== Testing Functions ========== */
function testInsertionSort() {
  for (let i = 0; i < 1000; i++) {
    let arr = buildNewArray(getRandomNumber(1, 1000));
    let mySortedArray = insertionSort(arr);
    let jsSortedArray = arr.sort();
    if (mySortedArray !== jsSortedArray) {
      console.log("Algorithm Failed: ");
      console.log(arr);
      console.log(mySortedArray);
      console.log(jsSortedArray);
      break;
    }
  }
  console.log("All tests for Insertion Sort passed.");
}

function testBubbleSort() {
  //DOES NOT WORK OR TEST PROPERLY -- testInsertionSort() LIKELY DOESN'T EITHER
  for (let i = 0; i < 1000; i++) {
    let arr = buildNewArray(getRandomNumber(1, 1000));
    let mySortedArray = bubbleSort(arr);
    let jsSortedArray = arr.sort();
    if (mySortedArray !== jsSortedArray) {
      console.log("Algorithm failed: ");
      console.log(arr);
      console.log(mySortedArray);
      console.log(jsSortedArray);
      break;
    }
  }
  console.log("All tests for Bubble Sort passed.");
}

function testQuickSort() {}

/* ========== Driver Function Calls ========== */
//testInsertionSort();

let testArray = [
  79,
  49,
  1896,
  144,
  3,
  1,
  89113,
  189,
  16,
  38,
  9,
  6349,
  38632,
  14,
  26,
  98,
  9,
  16,
];
console.log(testArray);
let sortedAray = quickSort(testArray, 0, testArray.length - 1);
console.log(sortedAray);

//testBubbleSort();
