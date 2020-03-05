// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	// your code
  let total = s.toUpperCase().split('')
  let i = 0;
  let arr = [];
  let joinedArr;
  total.forEach( word => {
    str = word.repeat(i).toLowerCase()
    i++
    let dbl = word + str;
    arr.push(dbl);
    joinedArr= arr.join("-");
  })
  console.log(joinedArr)
}

accum("abcdb");
accum("RqaEzty");
accum("cwAt");
accum("ZpglnRxqenU"); 
accum("NyffsGeyylB");