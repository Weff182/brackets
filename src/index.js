module.exports = function check(str, bracketsConfig) {
  str.split('');
  let stak = [];
  let open = ['(', '{', '[', '|'];
  let closed = [')', '}', ']', '|'];
  let openIndex;
  let closedIndex;
  let palka;
  
  for (let i = 0; i < str.length; i++){
     openIndex = open.indexOf(str[i]);
     palka = stak.indexOf('|');
     if (openIndex !== -1){
        if (openIndex !== '|'){
          if (palka !== -1){
            if (palka !== stak[i-1]){
              return false;
            }
            stak.push(palka);
          }
        stak.push(openIndex);
     }
     }  
      closedIndex = closed.indexOf(str[i]);
      if (closedIndex !== -1){
        openIndex = stak.pop();
      if (openIndex !== closedIndex){
          return false;
      } 
      }
    }
  if(stak.length == 0){
          return true;
      } else {
          return false;
      }
}


