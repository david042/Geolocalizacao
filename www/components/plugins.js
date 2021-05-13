$(document).on("click","#alerta",function(){
  navigator.notification.alert("minha mensagem",null,"Aviso!","Aceito");
});

$(document).on("click","#confirm",function(){
  function confirma(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.confirm("Escolha a opção A");
    }else{
      navigator.notification.confirm("Escolha a opção B");
    }
  }
  navigator.notification.confirm("Escolha A ou B",confirma,"Escolha: ",['A','B']);
});

$(document).on("click","#beep",function(){
   navigator.notification.beep(3);
});

$(document).on("click","#vibrar",function(){
   navigator.vibrate(3000);
});

function mostraMapa(lat, long){
  L.mapquest.key = 'vOMG1OZwAUYdsWAkDCYobJ2qatZqUTf1';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 13
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function(){
   var onSuccess = function(position) {
        mostraMapa(position.coords.latitude, position.coords.longitude)

    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});