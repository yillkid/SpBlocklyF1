console.log('=== api_block.js 載入成功 ===');
console.log('Blockly 版本:', Blockly.VERSION);
console.log('Blockly.JavaScript:', Blockly.JavaScript);

// 確保 Blockly.JavaScript 存在
if (!Blockly.JavaScript) {
  console.error('Blockly.JavaScript 不存在！');
}

Blockly.JavaScript['call_api'] = function(block) {
  console.log('=== call_api generator 被呼叫 ===');
  console.log('block:', block);
  console.log('block type:', block.type);

  var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  console.log('text:', text, 'x:', x, 'y:', y);

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

  console.log('=== 產生的程式碼 ===');
  console.log(code);

  return code;
};

console.log('=== call_api generator 註冊完成 ===');
console.log('已註冊的 generator:', Blockly.JavaScript['call_api']);

