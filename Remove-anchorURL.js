// This method returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
    let arr = url.split('#')
    let word = arr[0]
    console.log(word);
  }
  removeUrlAnchor('www.codewars.com#about')
  removeUrlAnchor('www.codewars.com?page=1') 
  
  // removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com'
  
  // returns 'www.codewars.com?page=1' 
  // removeUrlAnchor('www.codewars.com?page=1') 