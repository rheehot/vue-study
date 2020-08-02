/* trim() */
// console.log(` er ic `.trim() === `er ic `.trim())
// console.log(` er ic `.trim() === `er ic`.trim())
// console.log(` er ic `.trim() === `   er ic `.trim())
// console.log(`er ic`.trim() === `er ic `.trim())
// console.log(` er ic `.trim() === `er ic     `.trim())
// console.log(`er ic`.trim() === `           er ic  `.trim())

/* [].isArray() */

// console.log(Array.isArray([1, 2, 3]));      // true
// console.log(Array.isArray(new Array()));    // true
// console.log(Array.isArray({eric:"hello"})); // false
// console.log(Array.isArray(123));            // false
// console.log(Array.isArray(`123`));          // false

/* Array.forEach() */

// [1, 2, `3`, 4, function(){}, {}, undefined, null].forEach(
//     function(number) {
//         console.log(typeof number);
//     }
// )

/* Array.map() */
// console.log([1, 2, 3, 4, 5].map(e => e * 10));

/* Array.filter() */
// console.log([3,4,5,6,7].filter(value => ``));


/* Array.reduce() */
// var numbers1 = [45, 4, 9, 16, 25];
// var sum = numbers1.reduce(function(total, value) {
//     console.log(`total : ${total}`);
//     console.log(`value : ` + value);
//     return total + value;
// });
// console.log(sum);

/* Array.reduceRight() */
// [1, 2, 3, 4, 5].reduceRight((total, value) => {
//     console.log(`total : ${total}`);
//     console.log(`value : ${value}`);
//     return total + value;
// });

/* Array.every() */
// console.log([1, 2, 3, 4, 5].every(e => e < 5));

/* Array.some() */

//  console.log([1,2,3,4,5].some(e => e > 5));
//  console.log([1,2,3,4,5].some(e => e > 4));

/* Array.indexOf() */
// console.log([1, 2, 3, 1, 5].indexOf(1));
// console.log([1, 2, 3, 1, 5].lastIndexOf(1, 1));

/* JSON.parse() */
// var eric =`{"name":"eric", "age":26, "city":"Seongnam"}`
// var jsonEric = JSON.parse(eric);
// console.log(typeof eric);
// console.log(eric);
// console.log(typeof jsonEric);
// console.log(jsonEric);

/* JSON.stringify() */
// var eric = {name: `eric`};
// var stringEric = JSON.stringify(eric);
// console.log(typeof eric);
// console.log(eric);
// console.log(typeof stringEric);
// console.log(stringEric);

// console.log(new Date());

// var g = {
//     eric: 'eric',
//     get fullName() {
//         return 'eric B';
//     },
//     fullName : function() {
//         return `eric A`;
//     },
// }

// console.log(g.fullName)
// console.log(g.fullName())



// "use strict";

// var str = `Hello World`;
// console.log(str[56]);

// console.log("Hello \
// Dolly!");

// var obj = {name: "John", new: "yes"}
// console.log(obj);

