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

var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);