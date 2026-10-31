const name= "Vaishnavi"
const repocount=50

//console.log(name+repocount+" value")

//console.log(`my name is ${name} and my repo count is ${repocount}`)

const gameName=new String("vaishnavi-d")

//console.log(gameName[0])
//console.log(gameName.__proto__);


//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(6))
//console.log(gameName.indexOf("a"))

const newString=gameName.substring(0,4)//cannot give negative values in string
//console.log(newString)

const anotherString=gameName.slice(-9,4)
//console.log(anotherString)

const newStringOne="  vaishnavi   "
//console.log(newStringOne.trim())

const url="https://vaishnavi.com/vaishnavi%20dwivedi"

//console.log(url.replace('%20','-'))

//console.log(url.includes('vaishnavi'))

console.log(gameName.split('-'))