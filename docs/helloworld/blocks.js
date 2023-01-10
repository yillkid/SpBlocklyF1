Blockly.Blocks['helloworld'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hello World");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};