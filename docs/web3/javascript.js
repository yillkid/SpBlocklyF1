function mint() {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "uuid": "00000000",
  "address": "0xE5b3c06873D4C2da2598b67535331A12a0cCc3f4",
  "image": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*LZ4b4hq6rpMEYJknRKzNjQ.jpeg",
  "description": "Froot print IoT device",
  "name": "Webduino",
  "attributes": [
    {
      "trait_type": "watering",
      "value": "10"
    },
    {
      "trait_type": "temperature",
      "value": "20"
    },
    {
      "trait_type": "humidity",
      "value": "40"
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://beta-nft.townway.com.tw/mint_with_metadata", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

Blockly.Arduino['helloworld'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'Hello World;\n';
  console.log(code);

  mint();

  return code;
};
