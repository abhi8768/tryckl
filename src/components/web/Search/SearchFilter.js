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
import { requestOfferlisting } from "../../../actions/web/listingAction";
import { useDispatch } from "react-redux";

export default function SearchFilter(props) {
  const [cardList, setCardList] = useState([]);
  const [keywordList, setKeywordList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [agentList, setAgentList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [zipcodeList, setZipcodeList] = useState([]);
  const [accesstypeList, setAccesstypeList] = useState([]);
  const [card, setCard] = useState("");
  const [access_type, setAccess_type] = useState("");
  const [chk_leads, setChk_leads] = useState(false);
  const [city, setCity] = useState("");
  const [flag, setFlag] = useState("");
  const [keyword, setKeyword] = useState("");
  const [listing_agent, setListing_agent] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [type, setType] = useState("");
  const [max_amount, setMax_amount] = useState("");
  const [min_amount, setMin_amount] = useState("");
  const [slidervalue, setSliderValue] = useState([props.min,props.max]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchcard();
    fetchkeyword();
    fetchtype();
    fetchagent();
    fetchcity();
    fetchzipcode();
    fetchaccesstype();
    if (props.filterarr.length !== 0) {
      setCard(props.filterarr[0].card);
      setAccess_type(props.filterarr[0].access_type);
      setChk_leads(props.filterarr[0].chk_leads);
      setCity(props.filterarr[0].city);
      setFlag(true);
      setKeyword(props.filterarr[0].keyword);
      setListing_agent(props.filterarr[0].listing_agent);
      setZipcode(props.filterarr[0].zipcode);
      setType(props.filterarr[0].type);
      setMax_amount(props.filterarr[0].max_amount);
      setMin_amount(props.filterarr[0].min_amount);
      setSliderValue([
        props.filterarr[0].min_amount,
        props.filterarr[0].max_amount
      ]);
    }
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
        setCardList([...resp.data.response.list]);
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
        setKeywordList([...resp.data.response.list]);
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
        setTypeList([...resp.data.response.list]);
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
        setAgentList([...resp.data.response.list]);
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
        setCityList([...resp.data.response.list]);
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
        setZipcodeList([...resp.data.response.list]);
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
        setAccesstypeList([...resp.data.response.list]);
      }
      console.log(resp, "resp");
    } catch (err) {}
  };

  console.log(props, "props");
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
                      name="card"
                      value={card}
                      onChange={(e) => {
                        setCard(e.target.value);
                      }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {cardList.map((val, index) => (
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
                      name="type"
                      className="color-white"
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {typeList.map((val, index) => (
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
                      name="keyword"
                      className="color-white"
                      value={keyword}
                      onChange={(e) => {
                        setKeyword(e.target.value);
                      }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {keywordList.map((val, index) => (
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
                      name="listing_agent"
                      className="color-white"
                      value={listing_agent}
                      onChange={(e) => {
                        setListing_agent(e.target.value);
                      }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {agentList.map((val, index) => (
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
                      name="city"
                      className="color-white"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {cityList.map((val, index) => (
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
                      name="zipcode"
                      className="color-white"
                      value={zipcode}
                      onChange={(e) => {
                        setZipcode(e.target.value);
                      }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {zipcodeList.map((val, index) => (
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
                      name="access_type"
                      className="color-white"
                      value={access_type}
                      onChange={(e) => {
                        setAccess_type(e.target.value);
                      }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {accesstypeList.map((val, index) => (
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
                          checked={chk_leads}
                          onChange={(e) => {
                            setChk_leads(e.target.checked);
                          }}
                          className="color-blue"
                          name="checkedB"
                          // color="primary"
                        />
                      }
                      className="color-white"
                      label="Leads"
                    />
                    {/* flag: "Search",max_amount: "30", min_amount: "20", type:
                    "Open House" 
                    name="access_type" 
                    value={filter.access_type}
                    onChange=
                    {(e) => {
                      handleChange("access_type", e.target.value);
                    }} */}
                    <Slider
                      value={slidervalue}
                      min={props.min}
                      step={1}
                      max={props.max}
                      onChange={(event, newValue) => {
                        console.log(newValue, "value");
                        setSliderValue(newValue);
                        setMax_amount(newValue[1]);
                        setMin_amount(newValue[0]);
                      }}
                      className="color-blue"
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                    <div className="maxminvalue">
                      <p className="color-white">Min: ${props.min}</p>
                      <p className="color-white">Max: ${props.max}</p>
                    </div>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <button
                    className="sv-btn"
                    onClick={() => {
                      dispatch(
                        requestOfferlisting({
                          card: card,
                          access_type: access_type,
                          chk_leads: chk_leads ? "YES" : "NO",
                          city: city,
                          flag: true,
                          keyword: keyword,
                          listing_agent: listing_agent,
                          zipcode: zipcode,
                          type: type,
                          max_amount: max_amount,
                          min_amount: min_amount,
                        })
                      );
                      props.handleFilterarr({
                        card: card,
                        access_type: access_type,
                        chk_leads: chk_leads,
                        city: city,
                        keyword: keyword,
                        listing_agent: listing_agent,
                        zipcode: zipcode,
                        type: type,
                        max_amount: max_amount,
                        min_amount: min_amount,
                      });
                      props.handleClose();
                    }}
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
                {props.filterarr.length !== 0 && (
                  <Grid item xs={12}>
                    <button
                      className="sv-btn"
                      id="cancel-listing"
                      onClick={() => {
                        dispatch(requestOfferlisting());
                        props.handleFilterarr();
                        props.handleClose();
                      }}
                    >
                      CLEAR
                    </button>
                  </Grid>
                )}
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div className="fade modal-backdrop show"></div>
    </div>
  );
}
