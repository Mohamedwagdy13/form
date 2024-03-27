
var year = document.getElementById('years')
var options ='<option value="2024">2024</option><option value="2023">2023</option>'
for(
    var i= 2024 ; i >= 1900 ; i--){
    options +=
    '<option value="'+i+'">'+i+'</option>' ;

}
year.innerHTML= options ;


var mounths = document.getElementById('mounth')
var mounth = '<option value="1">1</option><option value="2">2</option>'
for(
    var i= 1 ; i <= 12 ; i++){
        mounth +=
    '<option value="'+i+'">'+i+'</option>' ;

}
mounths.innerHTML=mounth

var day = document.getElementById('day')
var days = '<option value="1">1</option><option value="2">2</option>'
for(
    var i= 1 ; i <= 7 ; i++){
        days +=
    '<option value="'+i+'">'+i+'</option>' ;

}
day.innerHTML=days


