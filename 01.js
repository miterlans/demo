const arr = ['a,b', 'b,c', 'a,f,h', 'g', 'c,i']

const set = new Set()
const finalRes = []
arr.forEach((str) => {
  let strList = str.split(',')
  let res = []
  strList.forEach((c) => {
    if (!set.has(c)) {
      set.add(c)
      res.push(c)
    }
  })
  finalRes.push(res.join(','))
})

console.log(finalRes)
