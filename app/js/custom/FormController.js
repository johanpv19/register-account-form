define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/form/ValidationTextBox",
        "dijit/form/Button",
        "dojox/form/PasswordValidator",
        "dijit/form/Form",
        "dijit/form/CheckBox",
        "js/custom/ValidationTextArea",
        "js/custom/CountrySelector",
        "dijit/Tooltip",
        "dojox/validate/web",
        "dojo/text!js/custom/templates/registerFormTemplate.html",
        "dojo/i18n!js/custom/nls/content",
        "dojo/i18n!js/custom/nls/countries",
        "dojo/i18n!js/custom/nls/validation",
        "dojo/domReady!"],
    function(declare,
             WidgetBase,
             TemplatedMixin,
             ValidationTextBox,
             Button,
             PasswordValidator,
             Form,
             CheckBox,
             ValidationTextArea,
             CountrySelector,
             Tooltip,
             webValidator,
             template,
             i18n,
             countries,
             validation)
    {
        return declare([WidgetBase, TemplatedMixin], {
            i18n: i18n,
            templateString: template,

            postCreate : function formControllerPostCreate() {
               new Form({
                   onSubmit: function(event) {
                       if(!checkBox.checked) {
                           new Tooltip({
                               connectId: ["termsCheckBox"],
                               label: i18n.acceptTermsOfUse,
                               defaultPosition: "bellow"
                           });
                           checkBox.focus();
                           return false;
                       }

                       if (this.validate()) {
                           return confirm(i18n.formIsValid);
                       } else {
                           alert(i18n.formContainsInvalidData);
                           return false;
                       }
                   }
                }, this.registerForm);

                new ValidationTextBox({
                    baseClass: "dijitTextBox dijitValidationTextBox large-input",
                    placeHolder: i18n.yourNamePlaceHolder,
                    required : true,
                    regExp: "([A-Z][a-z]*( ){0,1})+",
                    invalidMessage: validation.invalidNameMessage,
                    missingMessage: validation.missingNameMessage
                }, this.nameInput);

;                new ValidationTextBox({
                    baseClass: "dijitTextBox dijitValidationTextBox xlarge-input",
                    placeHolder: i18n.emailIdPlaceHolder,
                    required: true,
                    validator: webValidator.isEmailAddress,
                    invalidMessage: validation.invalidEmailIdMessage,
                    missingMessage: validation.missingEmailIdMessage
                }, this.emailIdInput);

                new ValidationTextBox({
                    baseClass: "dijitTextBox dijitValidationTextBox xlarge-input",
                    placeHolder: i18n.alternateEmailIdPlaceHolder,
                    validator: function(email) {
                        return email == '' || webValidator.isEmailAddress(email);
                    },
                    invalidMessage: validation.invalidAlternateEmailIdMessage
                }, this.alternateEmailIdInput);

                new ValidationTextBox ({
                    baseClass: "dijitTextBox dijitValidationTextBox phone-column-country-id",
                    regExp: "\\+{0,1}\\d{1,2}",
                    invalidMessage: validation.invalidCountryCodeMessage
                }, this.countryCodeInput);

                new ValidationTextBox ({
                    baseClass: "dijitTextBox dijitValidationTextBox phone-column-city-id",
                    regExp: "\\d{3}",
                    invalidMessage: validation.invalidCityCodeMessage
                }, this.cityCodeInput);

                new ValidationTextBox ({
                    baseClass: "dijitTextBox dijitValidationTextBox phone-column-phone-number",
                    regExp: "\\d{8,10}",
                    invalidMessage: validation.invalidPhoneNumberMessage
                }, this.phoneNumberInput);

                new ValidationTextBox ({
                    baseClass: "dijitTextBox dijitValidationTextBox medium-input",
                    regExp: "\\+{0,1}\\d{8,10}",
                    invalidMessage: validation.invalidMobilePhoneMessage
                }, this.mobilePhoneInput);

                new ValidationTextArea({
                    required: "true",
                    missingMessage: validation.missingPostalAddressMessage,
                    rows: "5",
                    cols: "40"
                }, this.postalAddressInput);

                new CountrySelector({
                    required: true,
                    placeHolder: countries.selectCountry,
                    missingMessage: validation.countryMissing,
                    invalidMessage: validation.countryInvalid,
                    searchAttr: "name"
                }, this.countrySelectorInput);

                var pi = new ValidationTextBox({
                    baseClass: "dijitTextBox dijitValidationTextBox small-input",
                    type: "password",
                    required: true,
                    missingMessage: validation.missingPassword
                }, this.passwordInput);

                new ValidationTextBox({
                    baseClass: "dijitTextBox dijitValidationTextBox small-input",
                    type: "password",
                    validator: function () {
                        return pi.value === this.value;
                    },
                    invalidMessage: validation.differentPasswords
                }, this.passwordConfirmInput);

                var checkBox = new CheckBox({
                    id: "termsCheckBox"
                }, this.termsCheckBox);

                new Button({
                    type: "reset"
                }, this.resetButton);

                new Button({
                    type: "submit"
                }, this.continueButton);
            }
        });
    }
);
