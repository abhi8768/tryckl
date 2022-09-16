import React, { useState } from "react";
import { useEffect } from "react";
import { getAuthHeader } from "../../../helpers/authHelper";
import Axios from "axios";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import HeaderUser from "../HeaderUser";
import Menu from "../Menu";
import "./history.css";
import moment from "moment";

export default function Transactionhistorysub(props) {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    fetchhistory();
  }, []);
  const fetchhistory = async () => {
    try {
      const resp = await Axios.get(`${apiURLPrefix}/dwolla/transaction_list`, {
        headers: {
          Authorization: `Bearer ${getAuthHeader()}`,
          "content-type": "application/json",
        },
      });
      if (resp.data.status) {
        if (resp.data.status_msg === "No transaction record found.") {
          ToastsStore.error(resp.data.status_msg);
        } else {
          setHistoryList([...resp.data.response]);
        }
      } else {
        if (
          resp.data.status_msg !== "Users funding source has not created yet."
        ) {
          ToastsStore.error(resp.data.status_msg);
        }
      }
      console.log(resp, "resp");
    } catch (err) {}
  };

  return (
    <div className="wrapper">
      <HeaderUser />
      <Menu />

      <section className="section-container">
        <div className="content-wrapper">
          <div className="container gapfrm-top">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="content-part-wrapper"
                  style={{ paddingBottom: "9px" }}
                >
                  <h2 className="mid-heading">Transaction History</h2>
                </div>
                {historyList && historyList !== 0 ? (
                  historyList.map((val, index) => (
                    <div
                      className="content-part-wrapper profile-content-part-wrapper list-pre"
                      // onClick={() => this.gotoDetail(val.listing_id)}
                      key={index}
                    >
                      <div className="content-part-wrapper dark-part position-relative mylist-adjust">
                        <div className="row">
                          <div className="col-sm-8"></div>
                          <div className="col-sm-4 text-right">
                            <h2
                              className={`ohters-color3 ${
                                val.amount.includes("-")
                                  ? "color-red"
                                  : "color-green"
                              }`}
                            >
                              ${" "}
                              {val.amount.replace("-", "").replace(" USD", "")}
                            </h2>
                          </div>
                        </div>
                        {/* <div className="row d-flex align-items-center">
                          <div className="col-sm-8">
                            <div className="item user-block  d-flex align-items-center">
                                <div className="font-size-txnid user-block-status ohters-color2 ">
                                  TRANSACTION ID -
                                </div>
                              <div className="profile2-list-txt ohters-color2">
                                {val.transaction_id}
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div className="row d-flex align-items-center">
                          <div className="col-sm-8">
                            <div className="item user-block  d-flex align-items-center">
                              <div className="">
                                <div className="user-block-status ohters-color3">
                                  Status
                                </div>
                              </div>
                              <div className="profile2-list-txt ohters-color2">
                                {val.transaction_status}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row d-flex align-items-center">
                          <div className="col-sm-8">
                            <div className="item user-block  d-flex align-items-center">
                              <div className="">
                                <div className="user-block-status">
                                  <img
                                    className="rounded-circle"
                                    src="/assets/img/time-icon.png"
                                    alt="Avatar"
                                    width="40"
                                    height="40"
                                  />
                                </div>
                              </div>
                              <div className="profile2-list-txt ohters-color2">
                                {moment(val.transaction_date).format("h:mm a")}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row d-flex align-items-center">
                          <div className="col-sm-8">
                            <div className="item user-block  d-flex align-items-center">
                              <div className="">
                                <div className="user-block-status">
                                  <img
                                    className="rounded-circle"
                                    src="/assets/img/calender-icon.png"
                                    alt="Avatar"
                                    width="40"
                                    height="40"
                                  />
                                </div>
                              </div>
                              <div className="profile2-list-txt ohters-color2">
                                {moment(val.transaction_date).format(
                                  "dddd / MMMM Do,YYYY"
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="row">No Record Found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
