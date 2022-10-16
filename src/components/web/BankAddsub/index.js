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
import "./Bankadd.css";
import moment from "moment";

export default function BankAddsub(props) {
  const [bankList, setBankList] = useState([]);

  useEffect(() => {
    fetchbank();
  }, []);
  const fetchbank = async () => {
    try {
      const resp = await Axios.get(
        `${apiURLPrefix}/dwolla/funding_source_list`,
        {
          headers: {
            Authorization: `Bearer ${getAuthHeader()}`,
            "content-type": "application/json",
          },
        }
      );
      if (resp.data.status) {
        if (resp.data.response.length !== 0) {
          setBankList([...resp.data.response]);
        }
      }
      //   else {
      //     if (
      //       resp.data.status_msg !== "Users funding source has not created yet."
      //     ) {
      //       ToastsStore.error(resp.data.status_msg);
      //     }
      //   }
      console.log(resp, "resp");
    } catch (err) {}
  };

  const deletebank = async (id) => {
    try {
      const resp = await Axios.post(
        `${apiURLPrefix}/plaid/remove_bank_account`,
        { fund_source_id: id },
        {
          headers: {
            Authorization: `Bearer ${getAuthHeader()}`,
            "content-type": "application/json",
          },
        }
      );
      if (resp.data.status && resp.data.status_code === 200) {
        fetchbank();
      }
      //   else {
      //     if (
      //       resp.data.status_msg !== "Users funding source has not created yet."
      //     ) {
      //       ToastsStore.error(resp.data.status_msg);
      //     }
      //   }
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
                  className="content-part-wrapper content-wrapper-bank"
                  style={{ paddingBottom: "9px" }}
                >
                  <h2 className="mid-heading">My Bank Accounts</h2>
                  <button className="btn-bank-icon btn-add-margin">
                    {" "}
                    <img
                      className="rounded-circle"
                      src="/assets/img/plush-icon.png"
                      alt="Avatar"
                      width="10"
                      height="10"
                    />{" "}
                    Add Bank Account
                  </button>
                </div>
                {bankList && bankList !== 0 ? (
                  bankList.map((val, index) => (
                    <div
                      className="content-part-wrapper profile-content-part-wrapper list-pre"
                      // onClick={() => this.gotoDetail(val.listing_id)}
                      key={index}
                    >
                      <div className="content-part-wrapper dark-part position-relative mylist-adjust">
                        <div className="row">
                          <div className="col-sm-8">
                            <input type="radio" className="radio-bank" />
                            <div>
                              <div className="row d-flex align-items-center">
                                <div className="col-sm-8">
                                  <div className="item user-block  d-flex align-items-center">
                                    <div className="">
                                      <div className="user-block-status ohters-color2">
                                        Bank Name -
                                      </div>
                                    </div>
                                    <div className="profile2-list-txt ohters-color2">
                                      {val.bank_name}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row d-flex align-items-center">
                                <div className="col-sm-8">
                                  <div className="item user-block  d-flex align-items-center">
                                    <div className="">
                                      <div className="user-block-status ohters-color2">
                                        Account Holder Name -
                                      </div>
                                    </div>
                                    <div className="profile2-list-txt ohters-color2">
                                      {val.account_holder_name}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 text-right">
                            <button
                              className="btn-bank-icon"
                              onClick={() => {
                                deletebank(val.id);
                              }}
                            >
                              <img
                                className="rounded-circle"
                                src="/assets/img/delete-icon.png"
                                alt="Avatar"
                                width="20"
                                height="20"
                              />
                            </button>
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
