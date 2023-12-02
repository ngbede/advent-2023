import * as fs from 'fs'
const dataSet = fs.readFileSync(`./data/day2.txt`, 'utf-8')

const cubeConfig = { red: 12, green: 13, blue: 14 }
const lines = dataSet.split('\n')
let answer = 0
let answer2 = 0

const tallyMan = (lines: string[], color: string) => {
  return lines.filter(p => p.includes(color)).reduce((acc, val) => {
    const count = parseInt(val.replace(' ', '').replace(color, ''))
    acc += count
    return acc
  }, 0)
}

for (let i = 1; i <= lines.length; i++) {
  const text = lines[i - 1].replace(`Game ${i}: `, '')
  const sets = text.split(';')
  let greenRoundScores: number[] = []
  let redRoundScores: number[] = []
  let blueRoundScores: number[] = []

  for (const round of sets) {
    const picks = round.split(',')
    greenRoundScores.push(tallyMan(picks, 'green'))
    blueRoundScores.push(tallyMan(picks, 'blue'))
    redRoundScores.push(tallyMan(picks, 'red'))
  }

  if (
    !greenRoundScores.filter(s => s > cubeConfig.green).length &&
    !blueRoundScores.filter(s => s > cubeConfig.blue).length &&
    !redRoundScores.filter(s => s > cubeConfig.red).length
  ) {
    answer += i
  }
  const power = Math.max(...greenRoundScores) * Math.max(...blueRoundScores) * Math.max(...redRoundScores)
  answer2 += power
}

console.log(answer)
console.log(answer2)
