var credFile = require("./firebase_private_key.json");

https://www.npmjs.com/package/strapi-provider-upload-to-firebase
module.exports = () => ({
    upload: {
        provider: 'to-firebase',
        providerOptions: {
            serviceAccount: credFile ,
            bucket: "bluemonkey-tw",
            debugLogs: true
        },
    },
}); 