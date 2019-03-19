module.exports = function check(str, bracketsConfig) {
  var array = str.split('');
  

  for (var i = 0; i<array.length; i++ ){
    for(var j = 0; j<bracketsConfig.length; j++){
      if(array[i] == bracketsConfig[j][1]){
        if(array[i-1] == bracketsConfig[j][0]){ 
          delete array[i];
          delete array[i-1];
          i = 0;
          var array = array.filter(Boolean);
        }
        else{
          continue;
        }
      }
      else{
        continue;
      }
    }
  }
  if(array.length == 0){
    return true;
  }
  else{
    return false;
  }
}