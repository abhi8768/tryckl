<div className="row">
             <MyCardPreview />
             <div className="col-lg-6">
                <div className="content-part-wrapper profile-content-part-wrapper">
                  <div className="content-part-wrapper">
                    <h2 className="mid-heading">LISTing</h2>
                    <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Type</p>
              <p className="ohters-color2">{detail.type}</p>
             
            </div>
            {
              (keyword.length > 0) ?  
                <div className="content-part-wrapper dark-part position-relative">
                  <p className="ohters-color">Keyword</p>
              
                    { (keyword).map((sinsle_keyword,index) => {
                          return (
                              <Chip key={`chip${index}`} label={sinsle_keyword} className="chips" onDelete={this.handleDelete} key={index}/>
                          )
                      })
                                    
                    } 
                
                </div> 
              : null
            }
              
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Property Address</p>
              <p className="ohters-color2">{detail.property_address}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative custom-height">
              <p className="ohters-color">Map VIEW</p>
             
              {/* <img src="img/map.png" className="img-fluid position-absulute mt-3" /> */}
                {
                  (detail.property_latitude !== undefined) ? 
                  <MapWithAMarker 
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkaV_9E9-b0FjMwak5UFwI0T1JtMrd_to&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                  : null
                }
                
            </div>

              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">MLS</p>
               { (mls).map((sinsle_mls,index) => {
                    let rs = this.validURL(sinsle_mls.mls_link);
                      return (
                        <p key={`mls${index}`} className="ohters-color2 mt-3">{sinsle_mls.mls_name} 
                        <span className="float-right"> <a target="_blank" href={rs}><img src="/assets/img/www-img.png" /></a></span></p>
                       
                      )
                  })
                                
                } 
             
             
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Date</p>
            <p className="ohters-color2">{detail.listing_date}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Time</p>
              <p className="ohters-color2">{detail.listing_time}</p>
             
            </div>
              <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Access Type</p>
              <p className="ohters-color2">{detail.access_type}</p>
             
            </div>
            {
              (detail.agent_instruction != "") ? 
              <div className="content-part-wrapper dark-part position-relative">
                <p className="ohters-color">Instruction for Agent</p>
                <p className="ohters-color2">{detail.agent_instruction}</p>
              </div> : null
            }

            {
              (detail.client_name != "") ? 
              <div className="content-part-wrapper dark-part position-relative">
                <p className="ohters-color">Client Name</p>
                <p className="ohters-color2">{detail.client_name}</p>
              
              </div> : null
            }
            {
              (detail.client_number != "") ? 
              <div className="content-part-wrapper dark-part position-relative">
                <p className="ohters-color">Client Number</p>
                <p className="ohters-color2">{detail.client_number}</p>
              
              </div> : null
            }
              
              
              
            <div className="content-part-wrapper dark-part position-relative">
              <p className="ohters-color">Offer Amount</p>
              <p className="ohters-color2">$ {detail.offer_amount}</p>
             
            </div>
            {
              ((detail.listing_status == "ACCEPTED") || (detail.listing_status == "COMPLETED")) ? 
                <div className="content-part-wrapper dark-part position-relative">
                  <p className="ohters-color">Accepted by</p>
                  <div className="item user-block  d-flex align-items-center">
                                  
                    <div className="">
                        <div className="user-block-status">
                            {    (detail.accepted_by_profile_photo != '') ?
                                    <img className="rounded-circle" src={detail.accepted_by_profile_photo} alt="Avatar" style={{width : '40px', height : "40px"}} />
                                :   <div className="small-profile-alpha text-center">{letterImage}</div>
                            }
                        </div>
                    </div>
                    <div className="profile2-list-txt ohters-color2">
                        <p className="ohters-color2" onClick={()=>this.gotoProfile(detail.card_owner_id)}>{detail.accepted_by_name}</p>
                    </div>
                  </div>
                </div>
                : null
            }
             {
              (detail.listing_status == "ACCEPTED") ? 
               <button className="sv-btn" onClick={this.checkcancelStatus}>Cancel Listing</button>
               : null
            }
              </div>
                      </div>   
                      </div>  
                    </div>
                 <div className="col-lg-3">
                   
                </div>

        <Modal open={this.state.modal} onClose={this.onClose} showCloseIcon={true} center>
          
        <form id="payment-form" className="sr-payment-form">
          <div className="modal-header2">
           
            
          </div>
          <div className="modal-body" style={customStyles}>
          
        
          <div className="sr-input sr-card-element" id="cardelement"></div>
          {/* <CardElement />  */}
          
            
          </div>
          <div className="modal-footer">
            <input type="button" className="otp_btn" value="pay" />
          </div>
          
        </form>

      </Modal>
            </div>
        