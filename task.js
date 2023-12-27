let duplicateArray = [1, 2, 3, 4, 5, 2, 2, 3];

// console.log(...new Set(duplicateArray));

//using filter
let result = duplicateArray.filter((val, index, arr) => {
    return arr.indexOf(val) === index;
});
console.log(result);

let flattenArray = [1, [2, 3],
    [4, [5, 6]], 7
];

//  console.log(flattenArray.flat());

let res = flattenArray.flat();
console.log(res);
let newresult = res.flat();
console.log(newresult);

//  let nestedArray = [1, [2, 3],
//      [4, [5, 6]], 7
//  ];
//  let flattenedArray = nestedArray.flat(Infinity);
//  console.log(flattenedArray); function generateColor() {}
function generateColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        // color += letters[Math.floor(Math.random() * 16)]; these line usage why to use *16
    }
    return color;
}
const color1 = generateColor();
const color2 = generateColor();
console.log(color1);
console.log(color2);

var arr = [1, 2, 3, 4, 5, 2, 2, 3];
var counts = {};
for (var i = 0; i < arr.length; i++) {
    var num = arr[i];

    if (counts[num] === undefined) {
        counts[num] = 1;
    } else {
        counts[num]++;
    }
}

console.log(counts);
