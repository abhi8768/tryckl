
/* This Section for Route Page */
const pathList = {
    home              : {name : "home", path : "/" },
    login             : {name : "login", path : "/login" },
    forgetuserid      : {name : "login", path : "/forget-userid" },
    dashboard         : {name : "login", path : "/dashboard" },
    forgetpassword    : {name : "forget-password", path : "/forget-password" },
    resetpassword     : {name : "reset-password", path : "/reset-password/:id" },
    profile           : {name : "profile", path : "/profile" },
    brokerprofile     : {name : "profile",  path : "/profile/:id" },
    createlist        : {name : "createlist",  path : "/create-listing" },
    listpreview       : {name : "listpreview",  path : "/preview-listing" },
    mylisting         : {name : "mylisting",  path : "/my-listing" },
    detaillisting     : {name : "detaillisting",  path : "/detail-listing/:id" },
};



export default pathList;