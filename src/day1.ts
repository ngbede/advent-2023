import * as fs from 'fs'
const dataSet = fs.readFileSync(`./data/day1.txt`, 'utf-8')
const lines = dataSet.split('\n')

const numberRizzer = (val: string) => {
  const integers = val.replace(/[a-zA-Z ]+/g, '')
  let nums: number
  if (integers.length > 1) {
    nums = parseInt(integers[0].concat(integers[integers.length - 1]))
  } else {
    console.log(integers)
    nums = parseInt(integers[0].concat(integers[0]))
  }
  return nums
}

const answer1 = lines.reduce((acc, val) => {
  const nums = numberRizzer(val)
  return acc += nums
}, 0)

console.log(answer1)

const digits: { [key: string]: number } = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 }
const words = /one|two|three|four|five|six|seven|eight|nine/


let count = 0
const answer2 = lines.reduce((acc, val) => {
  if (words.test(val)) {
    for (let word of [...Object.keys(digits), ...Object.keys(digits), ...Object.keys(digits)]) {
      val = val.replace(word, digits[word].toString())
      // console.log(val)
    }
  }
  const nums = numberRizzer(val)
  console.log(val, nums)
  count += 1
  return acc += nums
}, 0)

// console.log(count)
console.log(answer2)
