define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dijit/form/ValidationTextBox",
        "dijit/form/Button",
        "dojox/form/PasswordValidator",
        "dijit/form/Form",
        "dijit/form/CheckBox",
        "js/custom/ValidationTextArea",
        "js/custom/CountrySelector",
        "dijit/Tooltip",
        "dojox/validate/web",
        "dojo/_base/lang",
        "dojo/text!js/custom/templates/registerFormTemplate.html",
        "dojo/i18n!js/custom/nls/content",
        "dojo/i18n!js/custom/nls/countries",
        "dojo/i18n!js/custom/nls/validation",
        "dojo/domReady!"],
    function(declare,
             WidgetBase,
             TemplatedMixin,
             WidgetsInTemplateMixin,
             ValidationTextBox,
             Button,
             PasswordValidator,
             Form,
             CheckBox,
             ValidationTextArea,
             CountrySelector,
             Tooltip,
             webValidator,
             lang,
             template,
             content,
             countries,
             validation)
    {
        return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
            i18n: {
                content: content,
                validation: validation,
                countries: countries
            },
            templateString: template,
            widgetsInTemplate: true,

            postCreate: function formControllerPostCreate() {
                this.registerForm.onSubmit = lang.hitch(this, onSubmit);

                function onSubmit(event) {
                    if (!this.termsCheckBox.checked) {
                        new Tooltip({
                            connectId: ["termsCheckBox"],
                            label: content.acceptTermsOfUse,
                            defaultPosition: "bellow"
                        });
                        this.termsCheckBox.focus();
                        return false;
                    }

                    if (this.registerForm.validate()) {
                        return confirm(content.formIsValid);
                    } else {
                        alert(content.formContainsInvalidData);
                        return false;
                    }
                };

                this.alternateEmailIdInput.validator = function(email) {
                    return email === '' || webValidator.isEmailAddress(email);
                };

                this.passwordConfirmInput.validator = lang.hitch(this, function() {
                    return this.passwordInput.value === this.passwordConfirmInput.value;
                });
            }
        });
    }
);
