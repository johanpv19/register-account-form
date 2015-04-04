// Aquí voy cogiendo todos los elementos del form por id y le asigno el valor de texto.

// ej: nls/strings.js

//define({
//	root: {
//		header: "Register - Create Account",
//		country: "Country"
//	},
//	es: true
//});

require(["dojo/i18n!./nls/strings.js", "dojo/dom", "dojo/domReady!"], function (strings, dom) {
    dom.byId("formtitle").innerText = strings.title;
	dom.byId("formheader").innerText = strings.header;
    dom.byId("requiredfieldsmessagestartlabel").innerText = strings.requiredfieldsmessagestart;
    dom.byId("requiredfieldsmessagesendlabel").innerText = strings.requiredfieldsmessagesend;
    dom.byId("yournamelabel").innerHTML = strings.yourname;
    dom.byId("emailidlabel").innerHTML = strings.emailid;
    dom.byId("alternateemailidlabel").innerHTML = strings.alternateemailid;
	dom.byId("countrylabel").innerText = strings.country;
    dom.byId("passwordlabel").innerText = strings.password;
    dom.byId("passwordconfirmlabel").innerText = strings.passwordconfirm;
    dom.byId("yourphonelabel").innerText = strings.yourphone;
    dom.byId("countrycodelabel").innerText = strings.countrycode;
    dom.byId("citycodelabel").innerText = strings.citycode;
    dom.byId("phonenumberlabel").innerText = strings.phonenumber;
    dom.byId("mobilephonelabel").innerText = strings.mobilephone;
    dom.byId("postaladdresslabel").innerText = strings.yourpostaladdress;
    dom.byId("continuebutton").innerText = strings.continue;
    dom.byId("resetbutton").innerText = strings.reset;
    dom.byId("termsacceptlabel").innerText = strings.termsaccept;
    dom.byId("termslinkanchor").innerText = strings.termslink;

	// Los items del select
    // Aquí incluiríamos un id para cada option del select e imperativamente asignaríamos la i18n del nombre del país.
	/*
	dom.byId("country-00").innerText = countries.noselection;
	dom.byId("country-us").innerText = countries.us;
	dom.byId("country-es").innerText = countries.es;
	dom.byId("country-cu").innerText = countries.cu;
	*/
});