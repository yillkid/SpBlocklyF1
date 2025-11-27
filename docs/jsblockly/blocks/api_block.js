Blockly.Blocks['call_api'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("呼叫 API");
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("文字");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("位置 X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("位置 Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};
