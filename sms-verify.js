var request = require('request');

module.exports = {

  setVerifyProfile: () => {
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer KEY017BECDFF7F07E1682A77BA9757D0B5A_N0RmqUPxOrC37v18cPBLaO'
    };

    var dataString = {
      "name": "profile name",
      "sms": {
        "messaging_enabled": true,
        "rcs_enabled": true,
        "messaging_template": "Hello, this is the Acme Inc verification code you requested: {code}.",
        "default_verification_timeout_secs": 300,
        "vsms_enabled": true
      },
      "psd2": {
        "default_verification_timeout_secs": 300
      },
      "call": {
        "speech_template": "Hello, this is the Acme Inc verification code you requested: {code}.",
        "default_verification_timeout_secs": 300,
        "default_call_timeout_secs": 30
      },
      "flashcall": {
        "default_verification_timeout_secs": 300
      },
      "whatsapp": {
        "app_name": "Secure App"
      }
    };

    var options = {
      url: 'https://api.telnyx.com/v2/verify_profiles',
      method: 'POST',
      headers: headers,
      body: dataString
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        return body;
      }
      else {
        console.log(error)
      }
    }

    request(options, callback);
  },

  sendVerificationCode: async () => {
    return new Promise((resolve, reject) => {
      var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer KEY017BECDFF7F07E1682A77BA9757D0B5A_N0RmqUPxOrC37v18cPBLaO'
      };

      var dataString = '{"phone_number": "+27631959916", "verify_profile_id": "4900017b-ece0-08ab-d260-53875e3f6304"}';

      var options = {
        url: 'https://api.telnyx.com/v2/verifications/sms',
        method: 'POST',
        headers: headers,
        body: dataString
      };

      function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body)
        }
        else {
          reject(error)
        }
      }

      request(options, callback);
    })
  },

  verifyCode: (code) => {

    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer KEY017BECDFF7F07E1682A77BA9757D0B5A_N0RmqUPxOrC37v18cPBLaO'
    };

    var dataString = `{"code":"62962"}`;

    var options = {
      url: 'https://api.telnyx.com/v2/verifications/by_phone_number/+27631959916/actions/verify',
      method: 'POST',
      headers: headers,
      body: dataString
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }

    request(options, callback);

  }

}

