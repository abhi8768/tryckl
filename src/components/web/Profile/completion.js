import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { ToastsStore } from "react-toasts";
import moment from "moment";
import {
  updateprofileDetails,
  changeView,
} from "../../../actions/web/brokerAction";
import { fetchMasterData } from "../../../actions/web/masterAction";
import Datepicker from "./datepicker";
// import { ToastsStore } from "react-toasts";
import SearchIcon from '@material-ui/icons/Search';

class ProfileCompletion extends Component {
  constructor(props) {
    super(props);
    // setPublicIP();
    // let [selectedDate, setSelectedDate] = React.useState(new Date());
    this.state = {
      dob: new Date(),
      // brokerage_dob:new Date(),
      master_state: [],
      master_brokerage: [],
      first_name: "",
      last_name: "",
      broker_id: "",
      user_id: "",
      email: "",
      license_number: "",
      license_number_id: "",
      license_state: "",
      brokerage: "",
      other_brokerage_name: "",
      brokerage_office_name: "",
      brokerage_street_name: "",
      brokerage_city_name: "",
      brokerage_state: "",
      zipcode: "",
      brokerId: this.props.brokerId,
    };
    this.gotoEdit = this.gotoEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  componentDidMount() {
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

  gotoEdit() {
    this.props.changeView("detail");
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      // dob:new Date()
    });

    if (e.target.name == "license_number") {
      if (e.target.value.length > 7) {
        let param = {
          type: "LICENSE",
          search_param: e.target.value,
          logged_in_brokerid: "",
        };
        this.props.fetchMasterData(param);
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.state.ssn && this.state.ssn.length < 3) {
      ToastsStore.error("SSN cannot be less than 4");
    } else {
      this.props.updateprofileDetails(this.state);
    }
  }

  handleDate(date) {
    console.log(date, "dob1");
    this.setState(
      {
        dob: date,
      },
      () => {
        console.log(this.state, "dob");
      }
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps, prevProps, prevState) {
    if (
      nextProps.masterlicensedata != this.props.masterlicensedata &&
      nextProps.masterlicensedata.status == false
    ) {
      ToastsStore.error(nextProps.masterlicensedata.message);
      this.setState({
        license_number: "",
        license_number_id: nextProps.masterlicensedata.masterlicense.id,
      });
    } /* else if(nextProps.profiledetail){

      this.setState({
      
      });

    } */ else {
      //return console.log(nextProps.profiledetail);
      this.setState({
        master_state: nextProps.masterstatedata,
        master_brokerage: nextProps.masterbrokeragedata,
        first_name: nextProps.profiledetail.first_name,
        last_name: nextProps.profiledetail.last_name,
        //broker_id: nextProps.profiledetail.brokers_id,
        other_brokerage_name: nextProps.profiledetail.other_brokerage_name,
        user_id: nextProps.profiledetail.phone,
        email: nextProps.profiledetail.email,
        license_number: nextProps.profiledetail.license_no,
        license_number_id: nextProps.profiledetail.license_number_id,
        license_state: nextProps.profiledetail.license_issuing_state_code,
        license_state_id: nextProps.profiledetail.license_issue_stateid,
        brokerage: nextProps.profiledetail.brokerage_id,
        brokerage_name: nextProps.profiledetail.brokerage_name,
        brokerage_office_name: nextProps.profiledetail.brokerage_office_name,
        brokerage_street_name: nextProps.profiledetail.street_name,
        brokerage_city_name: nextProps.profiledetail.city,
        brokerage_state: nextProps.profiledetail.state_id,
        zipcode: nextProps.profiledetail.zipcode,
        ssn: nextProps.profiledetail.ssn,
      });
    }
  }

  render() {
    // console.log(this.state, "dob");
    return (
      <div className="col-lg-6">
        <div className="content-part-wrapper">
          <h2 className="mid-heading">
            EDIT PROFILE
            <span className="edit-user">
              <a
                href={void 0}
                onClick={this.gotoEdit}
                style={{ cursor: "pointer" }}
              >
                {" "}
                Detail
              </a>
            </span>
          </h2>
          <div className="content-part-wrapper profile-content-part-wrapper">
            <div className="form-container2">
              <div className="frm-wrapper text-left frm-wrapper-profile">
                <form onSubmit={this.onSubmit}>
                  <label>FIRST NAME</label>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    name="first_name"
                    id="first_name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                    required
                  />

                  <label>LAST NAME</label>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    name="last_name"
                    id="last_name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                    required
                  />

                  <label>MOBILE NO. (USER ID)</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile no."
                    name="user_id"
                    id="user_id"
                    value={this.state.user_id}
                    readOnly
                  />

                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    id="email"
                    value={this.state.email}
                    readOnly
                  />

                  <label>Real estate license #</label>
                  <input
                    type="text"
                    placeholder="Enter Real Estate Lincense number"
                    name="license_number"
                    id="license_number"
                    value={this.state.license_number}
                    readOnly
                  />

                  <label>Real estate lic issuing state</label>
                  <select
                    className="custom-select2"
                    name="license_state"
                    id="license_state"
                    value={this.state.license_state}
                    readOnly
                  >
                    {this.state.master_state.length > 0
                      ? this.state.master_state.map((listitem, index) => {
                          return (
                            <option key={`state_${index}`} value={listitem.id}>
                              {listitem.state_code}
                            </option>
                          );
                        })
                      : null}
                  </select>

                  <h4 className="profile-frm-mid-heading">BROKERAGE DETAILS</h4>
                  <label>BROKERAGE NAME</label>
                  <input
                    type="text"
                    placeholder="Enter Brokerage"
                    name="other_brokerage_name"
                    id="other_brokerage_name"
                    value={this.state.other_brokerage_name}
                    onChange={this.handleChange}
                    required
                  />
                  {/* <select className="custom-select2" name="brokerage" id="brokerage"  value={this.state.brokerage} onChange={this.handleChange} required>
                    {   (this.state.master_brokerage.length > 0) ?
                                                    
                        (this.state.master_brokerage).map((listitem,index) => {
                            return(
                                <option key={`brokerage_${index}`} value={listitem.id}>{listitem.name}</option>
                            )
                        })
                        : null
                    }
                    </select> */}
                  <label>Brokerage Office Name</label>
                  <input
                    type="text"
                    placeholder="Enter Brokerage Office Name"
                    name="brokerage_office_name"
                    id="brokerage_office_name"
                    value={this.state.brokerage_office_name}
                    onChange={this.handleChange}
                    required
                  />

                  {/* <label>Street</label>
                  <input
                    type="text"
                    placeholder="Enter Street"
                    name="brokerage_street_name"
                    id="brokerage_street_name"
                    value={this.state.brokerage_street_name}
                    onChange={this.handleChange}
                    required
                  /> */}
                  
                  {/* fields newly added start*/}
                  {/* <div className="col-lg-10"> */}
                  <label>Address Line 1</label> 
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="brokerage_street_name"
                    id="brokerage_street_name"
                    value={this.state.brokerage_street_name}
                    onChange={this.handleChange}
                    required
                  />
                                    
                  <label>Address Line 2</label> 
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="brokerage_street_name"
                    id="brokerage_street_name"
                    value={this.state.brokerage_street_name}
                    onChange={this.handleChange}
                    required
                  />
                  {/* fields newly added ends */}
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    name="brokerage_city_name"
                    id="brokerage_city_name"
                    value={this.state.brokerage_city_name}
                    onChange={this.handleChange}
                    required
                  />

                  <label>SSN</label>
                  <input
                    type="text"
                    placeholder="Enter SSN"
                    name="ssn"
                    id="ssn"
                    value={
                      this.state.ssn
                        ? this.state.ssn
                        : (this.state.ssn = JSON.parse(
                            localStorage.getItem("userDetails")
                          ).ssn)
                    }
                    maxLength={9}
                    onChange={this.handleChange}
                    //disabled={this.state.ssn != ""?true:false}
                    disabled={JSON.parse(sessionStorage.getItem("userDetails")).ssn? true: false}
                    pattern="(1[0-2]|0[1-9])\/(1[5-9]|2\d)"
                    required
                  />

                  <label>DOB</label>
                  <Datepicker
                    onChangeDate={this.handleDate}
                    defaultVal={moment().format("YYYY-MM-DD")}
                    required                    
                  />
                  {/* <Datepicker setDate={this.setDate}  defaultVal={moment().format('YYYY-MM-DD')} required/> */}

                  <div className="row">
                    <div className="col-lg-6">
                      <label>State</label>
                      <select
                        className="custom-select2"
                        name="brokerage_state"
                        id="brokerage_state"
                        value={this.state.brokerage_state}
                        onChange={this.handleChange}
                        required
                      >
                        {this.state.master_state.length > 0
                          ? this.state.master_state.map((listitem, index) => {
                              return (
                                <option
                                  key={`state_${index}`}
                                  value={listitem.id}
                                >
                                  {listitem.state_code}
                                </option>
                              );
                            })
                          : null}
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <label>POSTAL CODE</label>
                      <input
                        type="text"
                        placeholder="Enter Postal Code"
                        name="zipcode"
                        id="zipcode"
                        value={this.state.zipcode}
                        onChange={this.handleChange}
                        maxLength={5}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="saveBtn">
                    SAVE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    changeview: state.profileactiveview.activeview,
    profiledetail: state.brokerdetail.profiledetail,
    masterbrokeragedata: state.masterbrokerage.masterbrokerage,
    masterstatedata: state.masterstate.masterstate,
    masterlicensedata: state.masterlicense,
    updateprofiledetail: state.profileupdate.profileupdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: bindActionCreators(changeView, dispatch),
    fetchMasterData: bindActionCreators(fetchMasterData, dispatch),
    updateprofileDetails: bindActionCreators(updateprofileDetails, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCompletion);
