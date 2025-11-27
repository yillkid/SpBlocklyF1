Blockly.JavaScript['call_api'] = function(block) {
  var prompt = Blockly.JavaScript.valueToCode(block, 'PROMPT', Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;

  var code = `
fetch("https://your-api-endpoint/emotion", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    prompt: ${prompt},
    position: [${x}, ${y}]
  })
})
.then(res => res.json())
.then(data => {
  console.log("API 回傳:", data);
});
`;

  return code;
};

