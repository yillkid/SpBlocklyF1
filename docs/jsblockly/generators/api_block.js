// Blockly v10+ 使用新的 API
// 需要使用 javascriptGenerator 而不是 Blockly.JavaScript
const javascriptGenerator = Blockly.JavaScript || window.Blockly.JavaScript;

javascriptGenerator.forBlock['call_api'] = function(block, generator) {
  var text = generator.valueToCode(block, 'TEXT', generator.ORDER_ATOMIC) || "''";
  var x = generator.valueToCode(block, 'X', generator.ORDER_ATOMIC) || '0';
  var y = generator.valueToCode(block, 'Y', generator.ORDER_ATOMIC) || '0';

  var code = 'fetch("https://your-api-endpoint/emotion", {\n' +
    '  method: "POST",\n' +
    '  headers: { "Content-Type": "application/json" },\n' +
    '  body: JSON.stringify({\n' +
    '    text: ' + text + ',\n' +
    '    position: [' + x + ', ' + y + ']\n' +
    '  })\n' +
    '})\n' +
    '.then(res => res.json())\n' +
    '.then(data => {\n' +
    '  console.log("API 回傳:", data);\n' +
    '});\n';

  return code;
};

