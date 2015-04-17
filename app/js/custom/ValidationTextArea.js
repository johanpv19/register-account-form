define(["dojo/_base/declare", "dijit/form/SimpleTextarea", "dijit/form/ValidationTextBox"],
    function(declare, SimpleTextarea, ValidationTextBox) {

        return declare("ValidationTextArea", [SimpleTextarea, ValidationTextBox], {
            constructor: function(params) {
                this.constraints = {};
                this.baseClass += ' validationTextArea';
            },

            templateString: "<textarea ${!nameAttrSetting} data-dojo-attach-point='focusNode,containerNode,textbox' ></textarea>",

            validator: function(value, constraints) {
                return value !== '';
            }
        })
    }
);
