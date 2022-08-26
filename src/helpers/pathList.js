
/* This Section for Route Page */
const pathList = {
  home: { name: "home", path: "/" },
  howitworks: { name: "home", path: "/how-it-works" },
  //login             : {name : "login", path : "/agent-login" }, -- Disabled for production only
  login: { name: "login", path: "/agent-login" },
  forgetuserid: { name: "login", path: "/forget-userid" },
  dashboard: { name: "dashboard", path: "/dashboard" },
  dashboard_success: { name: "dashboard_success", path: "/dashboard/:success" },
  forgetpassword: { name: "forget-password", path: "/forget-password" },
  resetpassword: { name: "reset-password", path: "/reset-password/:id" },
  profile: { name: "profile", path: "/profile/:section?" },
  brokerprofile: { name: "profile", path: "/profile/:id" },
  createlist: { name: "createlist", path: "/create-listing" },
  listpreview: { name: "listpreview", path: "/preview-listing" },
  mylisting: { name: "mylisting", path: "/my-listing" },
  search: { name: "search", path: "/search" },
  mycards: { name: "mycards", path: "/mycards" },
  detaillisting: { name: "detaillisting", path: "/detail-listing/:id/:offer?" },
};



export default pathList;