var nfc = {
    readNfcV: function (success, error) {
        cordova.exec(success, error, "NfcVPlugin", "startReadingNfcV", []);
    },
    readMifare: function (success, error) {
        cordova.exec(success, error, "NfcVPlugin", "startReadingMifare", []);
    },
    stopReading: function (success, error) {
        cordova.exec(success, error, "NfcVPlugin", "stopReadingNfcV", []);
    },
    writeNfcV: function (oldValue, newValue, success, error) {
        cordova.exec(success, error, "NfcVPlugin", "startWritingNfcV", [oldValue, newValue]);
    },
    stopWriting: function (success, error) {
        cordova.exec(success, error, "NfcVPlugin", "stopWritingNfcV", []);
    },
    checkNfc: function (success, error) {
        cordova.exec(success, error, "NfcVPlugin", "checkNfc", []);
    }
};
module.exports = nfc;