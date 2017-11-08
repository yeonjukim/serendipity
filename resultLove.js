var url = document.location.href;
var tokens = url.split('?');
var parameterString = tokens[1];
var parameters = parameterString.split('&');
var num = parameters[0].split('=')[1];

console.log(num);

var req = new XMLHttpRequest();

  req.open('GET', 'json/luck.json', true);

  req.onreadystatechange=function(){
    if(req.status==200){
      var response = req.responseText;

      // var Obj = JSON.parse('response');
      // console.log(Obj);
    }
  };
  req.send();



  $.getJSON('json/luck.json', function(data) {
       var str = '';
       $.each(data, function(entryIndex, entry) {
         for(i=0; i<=77; i++){
           var a = Math.floor(Math.random()*78);
           var b = Math.floor(Math.random()*78);

           var temp = data[a];
           data[a] = data[b];
           data[b] = temp;

         }

       });

       var selectedCard = data[num-1];
       str += '<h5 id="cardName">'+selectedCard.title+'</h5>'
       str += '<img id="card" src="'+selectedCard.image+'">'
       str += '<span id="explain">'+selectedCard.content+'</span>'
       console.log(selectedCard);

       box.innerHTML += str;
     });
