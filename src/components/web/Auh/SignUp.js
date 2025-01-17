import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import { Formik } from "formik";
import { fetchMasterData } from "../../../actions/web/masterAction";
import { createAccountRequest } from "../../../actions/web/authAction";
import "./login.css";
import { TrendingUpTwoTone } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      master_state: [],
      master_brokerage: [],
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
      user_id: "",
      email: "",
      license_number: "",
      license_number_id: "",
      license_state: "",
      brokerage: "",
      other_brokerage_name: "",
      user_type: "personal",
      latitude: "",
      longitude: "",
      age: 0,
      ssn: "",
      dateOfBirth: "",
      licensed_agent: 0,
      authorized_in_usa: 0,
      terms_n_condition: 0,
      terms_stripe: 0,
      inactive_btn: true,
      brokers_id: this.props.brokers_id,
      userNotverified: this.props.userNotverified,
      first_name_error: "",
      last_name_error: "",
      password_error: "",
      confirm_password_error: "",
      user_id_error: "",
      email_error: "",
      license_number_id_error: "",
      license_state_error: "",
      other_brokerage_name_error: "",
      user_type_error: "",
      terms_n_condition_error: "",
      age_error: "",
      licensed_agent_error: "",
      authorized_in_usa_error: "",
      terms_stripe_error: "",
      showPassword: false,
      showConfirmPassword: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.success = this.success.bind(this);
    this.activeSubmitBtn = this.activeSubmitBtn.bind(this);
  }

  componentDidMount() {
    this.setState({
      first_name:
        localStorage.getItem("first_name") === null ||
        localStorage.getItem("first_name") === undefined
          ? ""
          : localStorage.getItem("first_name"),
      last_name:
        localStorage.getItem("last_name") === null ||
        localStorage.getItem("last_name") === undefined
          ? ""
          : localStorage.getItem("last_name"),
      user_id:
        localStorage.getItem("mobile_no") === null ||
        localStorage.getItem("mobile_no") === undefined
          ? ""
          : localStorage.getItem("mobile_no"),
      email:
        localStorage.getItem("email_id") === null ||
        localStorage.getItem("email_id") === undefined
          ? ""
          : localStorage.getItem("email_id"),
      license_number:
        localStorage.getItem("license_number") === null ||
        localStorage.getItem("license_number") === undefined
          ? ""
          : localStorage.getItem("license_number"),
      license_number_id:
        localStorage.getItem("license_number_id") === null ||
        localStorage.getItem("license_number_id") === undefined
          ? ""
          : localStorage.getItem("license_number_id"),
      license_state:
        localStorage.getItem("license_issuing_state_id") === null ||
        localStorage.getItem("license_issuing_state_id") === undefined
          ? ""
          : localStorage.getItem("license_issuing_state_id"),
      brokerage:
        localStorage.getItem("brokerage_id") === null ||
        localStorage.getItem("brokerage_id") === undefined
          ? ""
          : localStorage.getItem("brokerage_id"),
      other_brokerage_name:
        localStorage.getItem("other_brokerage_name") === null ||
        localStorage.getItem("other_brokerage_name") === undefined
          ? ""
          : localStorage.getItem("other_brokerage_name"),
      user_type:
        localStorage.getItem("user_type") === null ||
        localStorage.getItem("user_type") === undefined
          ? "personal"
          : localStorage.getItem("user_type"),
      age:
        localStorage.getItem("age") === null ||
        localStorage.getItem("age") === undefined
          ? 0
          : localStorage.getItem("age"),
      ssn:
        localStorage.getItem("ssn") === null ||
        localStorage.getItem("ssn") === undefined
          ? ""
          : localStorage.getItem("ssn"),
      dateOfBirth:
        localStorage.getItem("date_of_birth") === null ||
        localStorage.getItem("date_of_birth") === undefined
          ? ""
          : localStorage.getItem("date_of_birth"),
      licensed_agent:
        localStorage.getItem("licensed_agent") === null ||
        localStorage.getItem("licensed_agent") === undefined
          ? 0
          : localStorage.getItem("licensed_agent"),
      authorized_in_usa:
        localStorage.getItem("authorized_in_usa") === null ||
        localStorage.getItem("authorized_in_usa") === undefined
          ? 0
          : localStorage.getItem("authorized_in_usa"),
      terms_n_condition:
        localStorage.getItem("terms_n_condition") === null ||
        localStorage.getItem("terms_n_condition") === undefined
          ? 0
          : localStorage.getItem("terms_n_condition"),
      terms_stripe:
        localStorage.getItem("terms_stripe") === null ||
        localStorage.getItem("terms_stripe") === undefined
          ? 0
          : localStorage.getItem("terms_stripe"),
    });

    let param1 = {
      type: "STATE",
      search_param: "",
      logged_in_brokerid: "",
    };
    this.props.fetchMasterData(param1);

    let param2 = {
      type: "BROKERAGE",
      search_param: "",
      logged_in_brokerid: "",
    };
    this.props.fetchMasterData(param2);
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevProps, prevState) {
    if (localStorage.getItem("userNotverified") == "1") {
      let userNotverifiedDetails = JSON.parse(
        localStorage.getItem("userNotverifiedDetails")
      );
      //console.log(userNotverifiedDetails);
      this.setState({
        first_name: userNotverifiedDetails.first_name,
        last_name: userNotverifiedDetails.last_name,
        user_id: userNotverifiedDetails.phone,
        email: userNotverifiedDetails.email,
        license_number: userNotverifiedDetails.license_no,
        license_number_id: userNotverifiedDetails.license_number_id,
        license_state: userNotverifiedDetails.license_issue_stateid,
        brokerage: userNotverifiedDetails.brokerage_id,
        other_brokerage_name: userNotverifiedDetails.other_brokerage_name,
        user_type: userNotverifiedDetails.user_type,
        age: 1,
        licensed_agent: 1,
        authorized_in_usa: 1,
        terms_n_condition: 1,
        terms_stripe: 1,
        brokers_id: userNotverifiedDetails.brokers_id,
      });
    }
    if (
      nextProps.masterlicensedata != this.props.masterlicensedata &&
      nextProps.masterlicensedata.status == false
    ) {
      ToastsStore.error(nextProps.masterlicensedata.message);
      this.setState({
        license_number: "",
        license_number_id: nextProps.masterlicensedata.masterlicense.id,
      });
    } else if (
      nextProps.masterlicensedata != this.props.masterlicensedata &&
      nextProps.masterlicensedata.status == true
    ) {
      //console.log('id :: ', nextProps.masterlicensedata.masterlicense[0].id);
      this.setState({
        license_number_id: nextProps.masterlicensedata.masterlicense[0].id,
      });
    } else if (
      nextProps.registeruserdata != this.props.registeruserdata &&
      nextProps.registeruserdata.status === false
    ) {
      ToastsStore.error(nextProps.registeruserdata.message);

      localStorage.removeItem("first_name");
      localStorage.removeItem("last_name");
      localStorage.removeItem("mobile_no");
      localStorage.removeItem("email_id");
      localStorage.removeItem("license_number");
      localStorage.removeItem("license_number_id");
      localStorage.removeItem("license_issuing_state_id");
      localStorage.removeItem("brokerage_id");
      localStorage.removeItem("other_brokerage_name");
      localStorage.removeItem("user_type");
      localStorage.removeItem("age");
      localStorage.removeItem("licensed_agent");
      localStorage.removeItem("authorized_in_usa");
      localStorage.removeItem("terms_n_condition");
      localStorage.removeItem("terms_stripe");
    } else if (
      nextProps.registeruserdata != this.props.registeruserdata &&
      nextProps.registeruserdata.status === true
    ) {
      let otp_data = nextProps.registeruserdata.registeruser;
      otp_data.user_id = this.state.user_id;
      otp_data.email_id = this.state.email;
      this.props.openOtpBox(otp_data);
    } else {
      this.setState({
        master_state: nextProps.masterstatedata,
        master_brokerage: nextProps.masterbrokeragedata,
      });
    }
  }

  success(pos) {
    var crd = pos.coords;

    let param = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      mobile_no: this.state.user_id,
      email_id: this.state.email,
      license_number_id: Number(this.state.license_number_id),
      password: this.state.password,
      license_issuing_state_id: this.state.license_state,
      // brokerage_id              : this.state.brokerage,
      other_brokerage_name: this.state.other_brokerage_name,
      user_type: this.state.user_type,
      latitude: crd.latitude,
      longitude: crd.longitude,
      brokers_id: this.state.brokers_id,
    };
    // console.log(param);
    localStorage.setItem("first_name", this.state.first_name);
    localStorage.setItem("last_name", this.state.last_name);
    localStorage.setItem("mobile_no", this.state.user_id);
    localStorage.setItem("email_id", this.state.email);
    localStorage.setItem("license_number", this.state.license_number);
    localStorage.setItem("license_number_id", this.state.license_number_id);
    localStorage.setItem("license_issuing_state_id", this.state.license_state);
    localStorage.setItem("brokerage_id", this.state.brokerage);
    localStorage.setItem(
      "other_brokerage_name",
      this.state.other_brokerage_name
    );
    localStorage.setItem("user_type", this.state.user_type);
    localStorage.setItem("age", this.state.age);
    localStorage.setItem("ssn", this.state.ssn);
    localStorage.setItem("date_of_birth", this.state.dateOfBirth);
    localStorage.setItem("licensed_agent", this.state.licensed_agent);
    localStorage.setItem("authorized_in_usa", this.state.authorized_in_usa);
    localStorage.setItem("terms_n_condition", this.state.terms_n_condition);
    localStorage.setItem("terms_stripe", this.state.terms_stripe);

    localStorage.removeItem("userNotverifiedDetails");
    localStorage.removeItem("userNotverified");
    this.props.createAccountRequest(param);
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    ToastsStore.error("Please allow your browser geolocation. ");
  }

  onSubmit(e) {
    e.preventDefault();
    // this.success();

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  }

  handleChange(e) {
    if (e.target.name == "license_number") {
      if (e.target.value.length > 3) {
        let param = {
          type: "LICENSE",
          search_param: e.target.value,
          logged_in_brokerid: "",
        };
        this.props.fetchMasterData(param);
      }
    }
    if (e.target.name === "first_name") {
      let current_state = this.state.license_state;
      let current_brokerage = this.state.brokerage;
      let value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
      // value = !value.replace(/\s/g, "").length ? "" : value;
      // value = value.replace(/^\s+/, "").replace(/\s+/g, " ");
      if (current_state === "") {
        let state_arr = this.state.master_state;
        this.setState({
          license_state: state_arr[0].id,
        });
      }
      console.log(value, "value");
      this.setState({
        first_name: value.trim(),
        first_name_error:
          value.trim().length !== 0 ? "" : "First Name Is Required",
      });
      if (current_brokerage === "") {
        let brokerage_arr = this.state.master_brokerage;
        this.setState({
          brokerage: brokerage_arr[0].id,
        });
      }
    } else if (e.target.name === "last_name") {
      let value = e.target.value.replace(/[^a-zA-Z\s]/g, "");

      // value = !value.replace(/\s/g, "").length ? "" : value;
      // value = value.replace(/^\s+/, "").replace(/\s+/g, " ");

      this.setState({
        last_name: value.trim(),
        last_name_error:
          value.trim().length !== 0 ? "" : "Last Name Is Required",
      });
    } else if (e.target.name === "password") {
      // let value = e.target.value.replace(/[^a-zA-Z\s]/g, "");

      // value = !value.replace(/\s/g, "").length ? "" : value;
      // value = value.replace(/^\s+/, "").replace(/\s+/g, " ");

      this.setState({
        password: e.target.value,
        password_error:
          // e.target.value.length !== 0 ? "" : "Password Is Required", // testing
          e.target.value.length !== 0 ? "" : "Password should be 8 characters and include at least 1 letter in uppercase & lowercase, 1 number and 1 special character!",
      });
    } else if (e.target.name === "confirm_password") {
      // let value = e.target.value.replace(/[^a-zA-Z\s]/g, "");

      // value = !value.replace(/\s/g, "").length ? "" : value;
      // value = value.replace(/^\s+/, "").replace(/\s+/g, " ");

      this.setState({
        confirm_password: e.target.value,
        confirm_password_error:
          e.target.value === this.state.password
            ? ""
            : "Confirm Password Must Match With Password",
      });
    } else if (e.target.name === "user_id") {
      let value = e.target.value.replace(/[^0-9\s]/g, "");

      // value = !value.replace(/\s/g, "").length ? "" : value;
      // value = value.replace(/^\s+/, "").replace(/\s+/g, " ");

      this.setState({
        user_id: value.trim(),
        user_id_error:
          value.trim().length !== 0 ? "" : "Phone Number Is Required",
      });
    } else if (e.target.name === "email") {
      let value = e.target.value.trim();

      // value = !value.replace(/\s/g, "").length ? "" : value;
      // value = value.replace(/^\s+/, "").replace(/\s+/g, " ");

      this.setState({
        email: value,
        email_error: value.length !== 0 ? "" : "Email Is Required",
      });
    } else if (e.target.name === "license_number_id") {
      let value = e.target.value.replace(/[^0-9\s]/g, "");

      // value = !value.replace(/\s/g, "").length ? "" : value;
      // value = value.replace(/^\s+/, "").replace(/\s+/g, " ");

      this.setState({
        license_number_id: value.trim(),
        license_number_id_error:
          e.target.value.length !== 0 ? "" : "License Number Is Required",
      });
    } else if (e.target.name === "license_state") {
      // value = !value.replace(/\s/g, "").length ? "" : value;
      // value = value.replace(/^\s+/, "").replace(/\s+/g, " ");

      this.setState({
        license_state: e.target.value,
        license_state_error:
          e.target.value.length !== 0 ? "" : "Field Must Be Selected",
      });
    } else if (e.target.name === "other_brokerage_name") {
      // let value = e.target.value.replace(/[^a-zA-Z\s]/g, "");

      // value = !value.replace(/\s/g, "").length ? "" : value;
      // value = value.replace(/^\s+/, "").replace(/\s+/g, " ");

      this.setState({
        other_brokerage_name: e.target.value.trim(),
        other_brokerage_name_error:
          e.target.value.length !== 0 ? "" : "Brokerage Is Required",
      });
    } else if (e.target.name == "terms_n_condition") {
      this.setState(
        {
          [e.target.name]: this.state.terms_n_condition === 1 ? 0 : 1,
          terms_n_condition_error:
            this.state.terms_n_condition === 1
              ? "Please Confirm To Proceed"
              : "",
        }
        // ,
        // function () {
        //   this.activeSubmitBtn();
        // }
      );
    } else if (e.target.name == "age") {
      this.setState(
        {
          [e.target.name]: this.state.age === 1 ? 0 : 1,
          age_error: this.state.age === 1 ? "Please Confirm To Proceed" : "",
        }

        // ,
        // function () {
        //   this.activeSubmitBtn();
        // }
      );
    } else if (e.target.name == "licensed_agent") {
      this.setState(
        {
          [e.target.name]: this.state.licensed_agent === 1 ? 0 : 1,
          licensed_agent_error:
            this.state.licensed_agent === 1 ? "Please Confirm To Proceed" : "",
        }
        // ,
        // function () {
        //   this.activeSubmitBtn();
        // }
      );
    } else if (e.target.name == "authorized_in_usa") {
      this.setState(
        {
          [e.target.name]: this.state.authorized_in_usa === 1 ? 0 : 1,
          authorized_in_usa_error:
            this.state.authorized_in_usa === 1
              ? "Please Confirm To Proceed"
              : "",
        }
        // ,
        // function () {
        //   this.activeSubmitBtn();
        // }
      );
    } else if (e.target.name == "terms_stripe") {
      this.setState(
        {
          [e.target.name]: this.state.terms_stripe === 1 ? 0 : 1,
          terms_stripe_error:
            this.state.terms_stripe === 1 ? "Please Agree To Terms Stripe" : "",
        }
        // ,
        // function () {
        //   this.activeSubmitBtn();
        // }
      );
    } else {
      this.setState(
        {
          [e.target.name]: e.target.value,
        }
        // ,
        // function () {
        //   this.activeSubmitBtn();
        // }
      );
    }
  }

  activeSubmitBtn() {
    // debugger;
    //console.log(this.state);
    if (
      this.state.first_name != "" &&
      this.state.last_name != "" &&
      this.state.password != "" &&
      this.state.confirm_password != "" &&
      this.state.confirm_password == this.state.password &&
      this.state.user_id != "" &&
      this.state.email != "" &&
      this.state.license_number_id != "" &&
      this.state.license_state != "" &&
      this.state.other_brokerage_name != "" &&
      this.state.user_type != "" &&
      this.state.terms_n_condition != 0 &&
      this.state.age != 0 &&
      this.state.licensed_agent != 0 &&
      this.state.authorized_in_usa != 0 &&
      this.state.terms_stripe != 0
    ) {
      //  console.log('HEllo');
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log(this.state, this.activeSubmitBtn(), "value1");
    return (
      <div className="form-container sign-up-container reg-frm">
        {/* <Formik
          initialValues={{ name: "jared" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        ></Formik> */}
        <form onSubmit={this.onSubmit}>
          <h1>Create Account</h1>

          <Scrollbars
            style={{ height: "52vh" }}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
          >
            <div
              className="frm-wrapper text-left"
              data-height="40vh"
              data-scrollable=""
            >
              <label>FIRST NAME</label>
              <input
                type="text"
                placeholder="Enter your First Name"
                name="first_name"
                id="first_name"
                onChange={this.handleChange}
                required
                value={this.state.first_name}
              />
              <p className="text-danger">{this.state.first_name_error}</p>
              <label>LAST NAME</label>
              <input
                type="text"
                placeholder="Enter your Last Name"
                name="last_name"
                id="last_name"
                onChange={this.handleChange}
                required
                value={this.state.last_name}
              />
              <p className="text-danger">{this.state.last_name_error}</p>
              
              <label>Password </label>
              <div className="input-group-password">
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" //testing
                  pattern="(?=^.{8,}$)(?=.*[0-9])((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" // final regex for password
                  placeholder="Enter valid password "
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <div className="input-group-addon">
                  <a
                    onClick={() => {
                      this.setState({
                        showPassword: !this.state.showPassword,
                      });
                    }}
                    className="icon-black pointer"
                  >
                    {this.state.showPassword ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </a>
                </div>
              </div>

              <p className="text-danger">{this.state.password_error}</p>
              <label>CONFIRM PASSWORD</label>
              <div className="input-group-password">
                <input
                  type={this.state.showConfirmPassword ? "text" : "password"}
                  // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  placeholder="Retype your password"
                  name="confirm_password"
                  id="confirm_password"
                  value={this.state.confirm_password}
                  onChange={this.handleChange}
                  required
                />
                <div className="input-group-addon">
                  <a
                    onClick={() => {
                      this.setState({
                        showConfirmPassword: !this.state.showConfirmPassword,
                      });
                    }}
                    className="icon-black pointer"
                  >
                    {this.state.showConfirmPassword ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </a>
                </div>
              </div>

              <p className="text-danger">{this.state.confirm_password_error}</p>
              <label>MOBILE NO. (USER ID)</label>
              <input
                type="tel"
                placeholder="Enter your mobile no."
                value={this.state.user_id}
                name="user_id"
                id="user_id"
                onChange={this.handleChange}
                required
              />
              <p className="text-danger">{this.state.user_id_error}</p>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <p className="text-danger">{this.state.email_error}</p>
              {/* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" */}
              <label>Real estate license #</label>
              <input
                type="text"
                placeholder="Enter Real Estate Lincense number"
                name="license_number_id"
                id="license_number_id"
                value={this.state.license_number_id}
                onChange={this.handleChange}
                required
              />
              <p className="text-danger">
                {this.state.license_number_id_error}
              </p>
              <label>Real estate lic issuing state</label>
              <select
                className="custom-select"
                value={this.state.license_state}
                name="license_state"
                id="license_state"
                onChange={this.handleChange}
                required
              >
                {this.state.master_state.length > 0
                  ? this.state.master_state.map((listitem, index) => {
                      return (
                        // <option key={`state_${index}`} value={listitem.id} selected={(this.state.license_state==listitem.id)?'selected':''}>{listitem.state_code}</option>
                        <option key={`state_${index}`} value={listitem.id}>
                          {listitem.state_code}
                        </option>
                      );
                    })
                  : null}
              </select>
              <p className="text-danger">{this.state.license_state_error}</p>
              <label>Brokerage</label>
              <input
                type="text"
                placeholder="Enter Brokerage"
                name="other_brokerage_name"
                id="other_brokerage_name"
                onChange={this.handleChange}
                value={this.state.other_brokerage_name}
                required
              />
              <p className="text-danger">
                {this.state.other_brokerage_name_error}
              </p>
              <label>User Type</label>
              <input
                type="text"
                disabled
                placeholder="Enter User Type"
                name="user_type"
                id="user_type"
                value={this.state.user_type}
                required
              />
              <p className="text-danger">{this.state.user_type_error}</p>
              {/* <select className="custom-select" value={this.state.brokerage} name="brokerage" id="brokerage" onChange={this.handleChange} required>
                                
                {   (this.state.master_brokerage.length > 0) ?
                                                
                    (this.state.master_brokerage).map((listitem,index) => {
                        return(
                            <option key={`brokerage_${index}`} value={listitem.id}>{listitem.name}</option>
                        )
                    })
                    : null
                }
                </select> 
              */}

              <label
                className="container-check float-left"
                style={{ marginBottom: "30px" }}
              >
                <span>I am 18 years of age or older</span>
                <input
                  type="checkbox"
                  name="age"
                  id="age"
                  onChange={this.handleChange}
                  checked={this.state.age == 1 ? "checked" : ""}
                />
                <span className="checkmark"></span>
              </label>
              <p className="text-danger">{this.state.age_error}</p>
              <label
                className="container-check float-left"
                style={{ marginBottom: "30px" }}
              >
                <span>I am an active licensed real estate agent</span>
                <input
                  type="checkbox"
                  name="licensed_agent"
                  id="licensed_agent"
                  onChange={this.handleChange}
                  checked={this.state.licensed_agent == 1 ? "checked" : ""}
                />
                <span className="checkmark"></span>
              </label>
              <p className="text-danger">{this.state.licensed_agent_error}</p>
              <label
                className="container-check float-left"
                style={{ marginBottom: "30px" }}
              >
                <span>I am authorized to work in the United States</span>
                <input
                  type="checkbox"
                  name="authorized_in_usa"
                  id="authorized_in_usa"
                  onChange={this.handleChange}
                  checked={this.state.authorized_in_usa == 1 ? "checked" : ""}
                />
                <span className="checkmark"></span>
              </label>
              <p className="text-danger">
                {this.state.authorized_in_usa_error}
              </p>
              <label
                className="container-check float-left"
                style={{ marginBottom: "30px" }}
              >
                <span>
                  i agree to the Tryckl, LLC{" "}
                  <a href="/terms-n-condition" className="signup_link">
                    terms and conditions
                  </a>
                </span>
                <input
                  type="checkbox"
                  name="terms_n_condition"
                  id="terms_n_condition"
                  onChange={this.handleChange}
                  checked={this.state.terms_n_condition == 1 ? "checked" : ""}
                />
                <span className="checkmark"></span>
              </label>
              <p className="text-danger">
                {this.state.terms_n_condition_error}
              </p>
              <label
                className="container-check float-left"
                style={{ marginBottom: "30px" }}
              >
                <span>
                  i agree to the Stripe{" "}
                  <a
                    href="https://stripe.com/connect-account/legal"
                    className="signup_link"
                  >
                    Terms of Service
                  </a>
                </span>
                <input
                  type="checkbox"
                  name="terms_stripe"
                  id="terms_stripe"
                  onChange={this.handleChange}
                  checked={this.state.terms_stripe == 1 ? "checked" : ""}
                />
                <span className="checkmark"></span>
              </label>
              <p className="text-danger">{this.state.terms_stripe_error}</p>
            </div>
          </Scrollbars>
          <div className="frm-wrapper">
            <button
              type="submit"
              disabled={this.activeSubmitBtn()}
              className={this.activeSubmitBtn() ? "inactive_btn" : ""}
              style={{ marginTop: "20px" }}
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    masterbrokeragedata: state.masterbrokerage.masterbrokerage,
    masterstatedata: state.masterstate.masterstate,
    masterlicensedata: state.masterlicense,
    registeruserdata: state.signup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMasterData: bindActionCreators(fetchMasterData, dispatch),
    createAccountRequest: bindActionCreators(createAccountRequest, dispatch),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
