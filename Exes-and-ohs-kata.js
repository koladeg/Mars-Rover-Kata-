// A method to check if a string has the same amount of 'x's and 'o's.

function XO(str) {
  let xos = str.toLowerCase().split('')
  let xs = 0;
  let os = 0;
  let xando;
  xos.forEach( word => {
    if (word == 'x'){
      xs++
    }else if( word == 'o'){
      os++
    }
  })
  xando = (xs === os)
  if ( xs == 0 && os == 0){
    xando = true;
  }
  console.log(`XOs=${xando}`)
}

XO('xo')
XO("xxOo")
XO("xxxm")
XO("Oo")
XO("ooom")
XO("zpzpzpp")
XO("ooxx") 
XO("xooxx")
XO("ooxXm") 
XO("zzoo")
XO("zpzpzpp")
