// 1. লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ পর্যন্ত randomly নিতে পারি ?

function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(getRandomNumbers(1, 6));

// 2. কিভাবে আমরা আমাদের শ্রেণী কক্ষের সকলের নাম কে alphabetically সাজাতে পারি ?
const students = ["Mamun", "Rahim", "Karim", "Habib", "Miraz", "shiraj"];
// console.log(students.sort());

// 3. কিভাবে আমরা আমাদের শ্রেণী কক্ষের সকলের রুল নাম্বার ক্রম অনুযায়ী সাজাতে পারি ?
const rollNumbers = [5, 4, 8, 20, 7, 10, 22, 13];
// console.log(
//   rollNumbers.sort(function (a, b) {
//     return a - b;
//     যদি উল্টো টা করা লাগে তাহলে return b - a; এটা দিতে হবে ।
//   })
// );

// 4. কোনো সাল leap year কিনা সেটা কিভাবে জানতে পারি ?
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year!`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
// isLeapYear(2028);

// 5. কোনো বাক্যে কতগুলো vowel আছে তা কিভাবে জানা যায় ?
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);

  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });
  return count;
}
// console.log(countVowels("this is my best friends , I like her"));

// 6. কোনো array থেকে কিভাবে duplicate নাম্বার গুলো বের করতে পারি ?
const numbers = [5, 8, 5, 6, 10, 7, 56, 7, 8, 11, 89];

const duplicates = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});
// console.log(duplicates);

// 7. কোনো array থেকে কিভাবে unique নাম্বার গুলো বের করতে পারি ?
const arrayNumbers = [5, 8, 5, 6, 10, 7, 56, 7, 8, 11, 89];

const unique = numbers.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});
// console.log(unique);

//-------------------------------///
