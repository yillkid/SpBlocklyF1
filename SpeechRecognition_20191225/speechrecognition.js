+(function (window, document) {

  'use strict'; 

  var final_transcript = '';
  var recognizing = false;
  var ignore_onend;
  var two_line = /\n\n/g;
  var one_line = /\n/g;
  var first_char = /\S/;
  var recognition;
  var Recognition_interim = '';
  var Recognition_final = '';

  function Recognition_initial() {
    if ('webkitSpeechRecognition' in window) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = function() {
        recognizing = true;
      };

      recognition.onerror = function(event) {
        if (event.error == 'no-speech') ignore_onend = true;
        if (event.error == 'audio-capture') ignore_onend = true;
        if (event.error == 'not-allowed') ignore_onend = true;
        console.log(event.error);
      };

      recognition.onend = function() {
        recognizing = false;
        if (ignore_onend) return;
        if (!final_transcript) return;
        recognition.start(); 
      };

      recognition.onresult = function(event) {
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript = event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
        final_transcript = capitalize(final_transcript);
        Recognition_interim = linebreak(interim_transcript);
        if (Recognition_interim=='') {
          Recognition_final = linebreak(final_transcript);
          console.log("final   = " + Recognition_final);
        }
        else {
          Recognition_final = "";
          if (!document.getElementById("demo-area-01-show")) {
            var obj = document.createElement('div');
            obj.id = "demo-area-01-show";
            obj.style.position = "absolute";
            obj.style.zIndex = "9999";
            obj.draggable="true";
            obj.setAttribute("onclick", "javascript:onclickid_set(this);");
            obj.setAttribute("ondragstart", "javascript:event.dataTransfer.setData('div/plain',event.target.id);");
            document.body.appendChild(obj);
          }
          document.getElementById("demo-area-01-show").innerHTML = Recognition_interim;
          console.log("interim = " + Recognition_interim);
        }
      };
      return true;
    }
    else {
      console.log('webkitSpeechRecognition failed.');
      return false;
    }
  }

  function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
  }

  function capitalize(s) {
    return s.replace(first_char, function(m) { return m.toUpperCase(); });
  }

  function startButton(event) {
    if (recognizing) {
      recognition.stop();
    }
    final_transcript = '';
    recognition.start();
    ignore_onend = false;
  }

  function Recognition_final_get() {
    var result = Recognition_final;
    Recognition_final = '';
    return result;
  }

  window.Recognition_initial = Recognition_initial;
  window.linebreak = linebreak;
  window.capitalize = capitalize;
  window.startButton = startButton;
  window.Recognition_final_get = Recognition_final_get;

}(window, window.document));
