import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Dialog,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Slider,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useEffect } from "react";
import { getAuthHeader } from "../../../helpers/authHelper";
import Axios from "axios";

export default function SearchFilter(props) {
    const [card, setCard] = useState([]);
    const [keyword, setKeyword] = useState([]);
    const [type, setType] = useState([]);
    const [agent, setAgent] = useState([]);
    const [city, setCity] = useState([]);
    const [zipcode, setZipcode] = useState([]);
    const [accesstype, setAccesstype] = useState([]);

  useEffect(() => {
    fetchcard();
    fetchkeyword();
    fetchtype();
    fetchagent();
    fetchcity();
    fetchzipcode();
    fetchaccesstype();
  }, []);
  const fetchcard = async () => {
    try {
      const resp = await Axios.post(
        `${apiURLPrefix}/masterdata/advance_seach_list`,
        { search_param: "", type: "CARD" },
        {
          headers: {
            Authorization: `Bearer ${getAuthHeader()}`,
            "content-type": "application/json",
          },
        }
      );

      if (resp.data.status) {
        setCard([...resp.data.response.list],
        );
      }
      console.log(resp, "resp");
    } catch (err) {}
  };

  const fetchkeyword = async () => {
    try {
      const resp = await Axios.post(
        `${apiURLPrefix}/masterdata/advance_seach_list`,
        { search_param: "", type: "KEYWORD" },
        {
          headers: {
            Authorization: `Bearer ${getAuthHeader()}`,
            "content-type": "application/json",
          },
        }
      );
      if (resp.data.status) {
        setKeyword([...resp.data.response.list]);
      }
      console.log(resp, "resp");
    } catch (err) {}
  };

  const fetchtype = async () => {
    try {
      const resp = await Axios.post(
        `${apiURLPrefix}/masterdata/advance_seach_list`,
        { search_param: "", type: "TYPE" },
        {
          headers: {
            Authorization: `Bearer ${getAuthHeader()}`,
            "content-type": "application/json",
          },
        }
      );
      if (resp.data.status) {
        setType([...resp.data.response.list]);
      }

      console.log(resp, "resp");
    } catch (err) {}
  };

  const fetchagent = async () => {
    try {
      const resp = await Axios.post(
        `${apiURLPrefix}/masterdata/advance_seach_list`,
        { search_param: "", type: "LISTING_AGENT" },
        {
          headers: {
            Authorization: `Bearer ${getAuthHeader()}`,
            "content-type": "application/json",
          },
        }
      );
      if (resp.data.status) {
        setAgent([...resp.data.response.list]);
      }
      console.log(resp, "resp");
    } catch (err) {}
  };

  const fetchcity = async () => {
    try {
      const resp = await Axios.post(
        `${apiURLPrefix}/masterdata/advance_seach_list`,
        { search_param: "", type: "CITY" },
        {
          headers: {
            Authorization: `Bearer ${getAuthHeader()}`,
            "content-type": "application/json",
          },
        }
      );
      if (resp.data.status) {
        setCity([...resp.data.response.list]);
      }
      console.log(resp, "resp");
    } catch (err) {}
  };

  const fetchzipcode = async () => {
    try {
      const resp = await Axios.post(
        `${apiURLPrefix}/masterdata/advance_seach_list`,
        { search_param: "", type: "ZIPCODE" },
        {
          headers: {
            Authorization: `Bearer ${getAuthHeader()}`,
            "content-type": "application/json",
          },
        }
      );
      if (resp.data.status) {
        setZipcode([...resp.data.response.list]);
      }
      console.log(resp, "resp");
    } catch (err) {}
  };

  const fetchaccesstype = async () => {
    try {
      const resp = await Axios.post(
        `${apiURLPrefix}/masterdata/advance_seach_list`,
        { search_param: "", type: "ACCESS_TYPE" },
        {
          headers: {
            Authorization: `Bearer ${getAuthHeader()}`,
            "content-type": "application/json",
          },
        }
      );
        if (resp.data.status) {
            setAccesstype([...resp.data.response.list]);
        } 
      console.log(resp, "resp");
    } catch (err) {}
  };

  return (
    <div>
      <div
        role="dialog"
        aria-modal="true"
        className="fade modal show followmodal"
        id="loginModal"
        tabIndex={-1}
        style={{ paddingRight: "15px", display: "block" }}
      >
        <div className="modal-dialog modal-dialog-small">
          <div className="modal-content modal-background">
            <div className="modal-header">
              <div className="modal-title h4 color-white">Advanced Search</div>
              {/* <button onClick={() => this.handleClose()}>close</button> */}
            </div>
            <div className="modal-body">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                      className="color-white"
                    >
                      CARD #
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      className="color-white"
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {card.map((val, index) => (
                        <MenuItem key={val.id} value={val.id}>
                          {val.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                      className="color-white"
                    >
                      TYPE
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {type.map((val, index) => (
                        <MenuItem key={val.id} value={val.id}>
                          {val.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                      className="color-white"
                    >
                      KEYWORD
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {keyword.map((val, index) => (
                        <MenuItem key={val.id} value={val.id}>
                          {val.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                      className="color-white"
                    >
                      LISTING AGENT
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {agent.map((val, index) => (
                        <MenuItem key={val.id} value={val.id}>
                          {val.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                      className="color-white"
                    >
                      CITY
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {city.map((val, index) => (
                        <MenuItem key={val.id} value={val.id}>
                          {val.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                      className="color-white"
                    >
                      ZIP CODE
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {zipcode.map((val, index) => (
                        <MenuItem key={val.id} value={val.id}>
                          {val.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                      className="color-white"
                    >
                      ACCESS TYPE
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {accesstype.map((val, index) => (
                        <MenuItem key={val.id} value={val.id}>
                          {val.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      shrink
                      id="demo-simple-select-placeholder-label-label"
                      className="color-white"
                    >
                      OFFER AMOUNT
                    </InputLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          // onChange={handleChange}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      className="color-white"
                      label="Leads"
                    />
                    <Slider
                      value={[10, 20]}
                      // onChange={handleChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <div className="maxminvalue">
                      <p className="color-white">Min: $20</p>
                      <p className="color-white">Max: $20</p>
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <button
                    className="sv-btn"
                    id="cancel-listing"
                    // onClick={() => {
                    //   this.props.acceptOffer(this.state.listingid);
                    // }}
                  >
                    SEARCH
                  </button>
                </Grid>
                <Grid item xs={12}>
                  <button
                    className="sv-btn"
                    id="cancel-listing"
                    onClick={() => props.handleClose()}
                  >
                    BACK
                  </button>
                </Grid>
                {/* <Grid item xs={12}>
                  <button
                    className="sv-btn"
                    id="cancel-listing"
                    // onClick={() => {
                    //   this.props.acceptOffer(this.state.listingid);
                    // }}
                  >
                    CLEAR
                  </button>
                </Grid> */}
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="fade modal-backdrop show"></div>
    </div>
  );
}
