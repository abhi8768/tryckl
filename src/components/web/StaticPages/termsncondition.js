import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class TermsNCondition extends Component {
  constructor(props) {
    super(props);
   // setPublicIP();
    this.state = {
      currentview    : 'mylisting',
      
    }
   
  }
 
  componentDidMount(){ 
    
  }
 

	UNSAFE_componentWillReceiveProps(nextProps,prevProps,prevState){  
    console.log(nextProps.changeview);
    this.setState({
      currentview : nextProps.changeview
    })
   
	}
  
 

  render() {
      
    return (
        
<div className="content-part-wrapper profile-content-part-wrapper">
            <div className="content-part-wrapper">
              <h2 className="mid-heading">Terms and Conditions</h2>
              <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                <div className="content-part-wrapper dark-part position-relative static-pages">
               <p className="ohters-color">PRIVACY</p> 
              <p className="ohters-color2">This privacy notice discloses the privacy practices employed by Tryckl, LLC (“Tryckl”). This privacy notice applies solely to information collected by this website. It will notify you of the following: What personally identifiable information is collected from you through the website and/or application, how it is used and with whom it may be shared. What choices are available to you regarding the use of your data. The security procedures in place to protect the misuse of your information. How you can correct any inaccuracies in the information.</p>
              <p className="ohters-color">Information Collection, Use, and Sharing.</p>
              <p className="ohters-color2">We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone. We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to list/accept offers, etc. Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
              <p className="ohters-color">Your Control Over Your Information</p>
              <p className="ohters-color2">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address below:</p>
              <ul className="static-list">
                <li>See what data we have about you, if any.</li>
                <li>Change/correct any data we have about you.</li>
                <li>Have us delete any data we have about you.</li>
                <li>Express any concern you have about our use of your data.</li>

              </ul>
               <p className="ohters-color2"><a href="mailto:info@tryckl.com">info@tryckl.com</a></p>
              <p className="ohters-color">SECURITY</p>
              <p className="ohters-color2">We take precautions to protect your information. When you submit sensitive information via the website and/or application, your information is protected both online and offline. Wherever we collect sensitive information (such as bank data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page. While we use encryption to protect sensitive information transmitted online and in the mobile application, we also protect your information offline. Only employees who need the information to perform a specific job (customer service, for example) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment. <b>If you feel that we are not abiding by this privacy policy, you should contact us immediately via email: <a href="mailto:info@tryckl.com">info@tryckl.com</a></b></p>

              <p className="ohters-color">SEXUAL HARASSMENT & DISCRIMINATION</p>
              <p className="ohters-color2">We believe in providing an open and supportive environment, free from all types of unlawful harassment and discrimination for our users and employees. We expect every user to support our values of fairness, decency and respect for others regardless of:</p>
              <p className="ohters-color2">race, color, religion, sex, national origin, ancestry, age, mental or physical disability, marital status, gender identity, gender expression or sexual orientation, pregnancy, childbirth or related medical conditions, pregnancy disability leave, status as a U.S. military veteran, or any other characteristic protected by state or federal discrimination laws.</p>
              <p className="ohters-color2">Because confusion often arises concerning the meaning of sexual harassment in particular, it deserves special mention. Sexual harassment may take many forms, including the following:</p>


               <ul className="static-list">
                <li>Offensive and unwelcome sexual invitations, whether or not the User submits to the invitation, and particularly when a spoken or implied quid pro quo for sexual favors is a benefit of employment or continued employment.</li>
                <li>Offensive and unwelcome conduct of a sexual nature, including sexually–graphic spoken comments; offensive comments transmitted by e-mail or another messaging system; offensive or suggestive images or graphics whether physically present in the workplace or accessed over the Internet; or the possession of or use of sexually suggestive objects.</li>
                <li>Offensive and unwelcome physical contact of a sexual nature, including the touching of another’s body; the touching or display of one’s own body, or any similar contact.</li>
               
              </ul>

              <p className="ohters-color">HARASSMENT VIA MESSAGING</p>
              <p className="ohters-color2">Users are particularly cautioned that the use of e-mail, voice mail, social media or other electronic messaging systems, or the Internet, during employment or while on the Platform, may give rise to liability for harassment. Users may not generate during employment or while on the Platform, should not receive, and must not forward, any message or graphic that might be taken as offensive based on sex, gender, or other protected characteristic. This includes, for example, the generation or forwarding of offensive “humor” which contains offensive terms or images.</p>
              <p className="ohters-color">REPORTING CASES OF HARASSMENT TO TRYCKL.</p>
              <p className="ohters-color2">Any User who believes that she or he has witnessed or been subjected to unlawful harassment of any kind is encouraged to report harassment immediately on the Platform using the “Contact Us” feature. Tryckl is committed to taking all reasonable steps to prevent harassment, and will make every reasonable effort promptly and completely to address and correct any harassment that may occur. However, Tryckl cannot take prompt and effective remedial action unless reports are provided on the Platform through the “Contact Us” feature. Every report of harassment will be investigated promptly and impartially, with every effort to maintain User confidentiality. The complainant and the accused will be informed of the results of the investigation. If Tryckl finds that its policy has been violated, it will take appropriate corrective action.</p>
              <p className="ohters-color">ZERO TOLERANCE & SUSPENSION</p>
              <p className="ohters-color2">Users are expected to maintain this policy at all times during use of the Platform and while communicating on the platform. Tryckl maintains zero tolerance for harassment of any kind. Violations of this policy will result in immediate suspension from the Platform.</p>
              <p className="ohters-color2"></p>
            
              
             
            
               
             
              
             
            </div>
             

              
           
              </div>

               <h2 className="mid-heading">Service Agreement</h2>
              <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                <div className="content-part-wrapper dark-part position-relative static-pages">
              
              <p className="ohters-color2">Tryckl, LLC (“Tryckl”) provides a service that allows licensed real estate agents to connect with other licensed real estate agents (each, a “User”) and enter into arrangements with one or more such Users for the performance of services.</p>
              <p className="ohters-color2">An index of defined terms used in this Agreement is set out in Section 21.</p>
              <p className="ohters-color">1.   ACCEPTANCE OF TERMS</p>
              <p className="ohters-color2">This Agreement constitutes a legal agreement between Tryckl and the person named as “User” in the registration process (“you” or “yours”).   By clicking “ACCEPT”, the individual accepting this Agreement and requesting access to the Services represents that he/she is at least eighteen (18) years old and the person named as “User.”  By clicking “ACCEPT”, and/or accessing or using the Services (defined below), now or in the future, you indicate that you have read, understand, and agree to the terms of this Agreement and any posted guidelines or rules applicable to the Services.</p>
              <p className="ohters-color">2.   DESCRIPTION OF SERVICES</p>
              <p className="ohters-color2">A.   Under this Agreement, Tryckl provides a technology platform and related services through which Users can enter into arrangements for the performance of services.  The platform and related services are aimed at facilitating the work needed by one User and the completion of that work by another User.  As used in this Agreement, the “Services” means all of the services provided by Tryckl to you as described generally in this Section.</p>
              <p className="ohters-color2">B.   A core element of Tryckl’s technology platform is a software application that Tryckl provides to its Users.  As used in this Agreement, the “Application” means the software used by Tryckl (including the software application that Tryckl provides to you) in connection with the Services.</p>
              <p className="ohters-color2">C.   Through the Application, a User may from time to time submit a request for services to Tryckl (a “Service Request”), which will include, but not limited to (i) a description of the services needed by a User; (ii) the deliverables to be provided, including the criteria determining completion of the job (the “Deliverables”); (iii) the date by which the services must be completed; and (iv) the compensation to be paid to the Accepting User for completion of the services (the “Payment”).  Tryckl may pass along the Service Request to one or more Users for possible acceptance.</p>
              <p className="ohters-color2">D.   Through the Application, Users may participate in multiple roles.  As used in this Agreement, “Requesting User” means a User that creates a Service Request and an “Accepting User” means a User that accepts a Service Request.  You, as an Accepting User may reach an agreement to perform the services, including such other terms in addition to, and not inconsistent with, those specified in the Service Request.</p>
              <p className="ohters-color2">E.  Through the Application, if you reach an agreement with another User who retains you to perform the services, the Service Request will become a “Service Engagement”.  </p>
              <p className="ohters-color2">F.   Tryckl reserves the right to modify, discontinue, temporarily or permanently, the Application and/or the Service or any part thereof with or without notice.</p>
              <p className="ohters-color">3.   LICENSE GRANT AND RESTRICTIONS</p>
              <p className="ohters-color2">A.   Subject to the terms of this Agreement and any applicable payments, Tryckl grants you a personal, limited, nonexclusive, nontransferable license, so long as this Agreement remains in effect, to access and use the Application and the Services, solely for the purposes described herein, consistent with any description of the Services published by Tryckl.</p>
              <p className="ohters-color2">B.   Except as expressly permitted herein or by applicable law, you shall not (and shall not allow any third party to) do any of the following: (i) license, sublicense, copy, assign, loan, sell, resell, republish, upload, post, transfer, distribute, or commercially exploit to any third party the Application or the Services; (ii) modify or create derivative works based on the Application; (iii) decompile, disassemble, or reverse engineer the Application; (v) interfere with the proper working of the Services or prevent access to or use of the Services by other licensees or users; or (vi) use the Application or the Services except as contemplated by this Agreement.</p>
              <p className="ohters-color">4.   DELIVERABLES AND USER PAYMENT</p>
              <p className="ohters-color2">A.  Deliverables specified in a Service Engagement may typically be completed in one day, though the time between accepting the Service Request and completing the Service Engagement may span more than one day.</p>
              <p className="ohters-color2">B.   You agree to use your reasonable best efforts to create each Service Request with accuracy and professionalism providing the greatest opportunity for success to an Accepting User. You agree to use your reasonable best efforts to complete each Service Engagement in accordance with the requirements and specifications of the Requesting User.  By entering into a Service Engagement, you are entering into a binding agreement as either the Requesting User or Accepting User resolve a needed service for a specified Payment.  You must not create a Service Request (i) for a service that is not legitimately needed; (ii) for a service that you are not willing to provide payment for; (iii) that you cannot provide clear and concise instructions for; (iv) if you do not have licensed authority by the governing agency to engage in such labors yourself.  You must not accept a Service Request unless you are confident that you (i) understand the requirements of the job; (ii) have the ability to get to the job location; (iii) have the qualifications, tools and ability to perform the requested services and complete all of the Deliverables; and (iv) will be able to complete the Deliverables within the requested time.</p>
              <p className="ohters-color2">C.   At the completion of a Service Engagement, the Requesting User will have four hours to approve payment.  If the Requesting User fails to approve payment in this amount of time, payment will automatically be sent to the Accepting user, so long as the Accepting User has completed the work in a manner consistent with the definitions in the Terms and Conditions.  When payment is approved, (i) Tryckl will reconcile the credit balances of both Users who are party to that Service Engagement to transfer the agreed upon balance from the Requesting User to the Accepting User, reducing the amount credited to the Accepting user by any and all fees for payment processing and administrative fees for providing the Service; (ii) if the Requesting User does not have sufficient credit balance within the Application to provide full payment, a minimum of $25 USD up to the full amount needed, will be transferred from the Requesting User’s bank account to Tryckl in order to satisfy full payment.  Tryckl will complete the balance transfer within twenty-four (24) hours after the Requesting User’s acceptance of the relevant Deliverables and Tryckl’s receipt of payment from the Requesting User.  The Payment will be Tryckl LLC’s only liability to you for services that you render under a Service Engagement.  Tryckl will not cover or reimburse any expenses associated with your performance of a Service Engagement.  If there is a dispute between you and the other User regarding completion of the Deliverables, you are solely responsible for resolving the dispute with the User.  Tryckl will exercise its reasonable best efforts to collect payment from the Requesting User promptly after the Deliverables are completed, but Tryckl does not guarantee such payments.  You agree that Tryckl will not be liable for any delay in payment to you based on Requesting User’s refusal to accept the Deliverables or failure to make timely payment to Tryckl.   A Service Engagement may be canceled at any time by the Requesting User fifteen minutes prior to commencement of performance.</p>
              <p className="ohters-color2">D.   You agree that if a Service Engagement is cancelled within fifteen minutes of the scheduled start time of the Service Engagement, the amount pledged will be paid to the Accepting User.  Typical fees will be charged by Tryckl in the same manner as other Service Engagements.</p>
              <p className="ohters-color">5.   USER ACCOUNT, PASSWORD, AND SECURITY</p>
              <p className="ohters-color2">A.   As a condition of using the Service, you agree to: (i) provide accurate, current, and complete information about yourself as prompted by the Service’s registration (Create Account, Stripe Payment Setup, and Profile) forms, and (ii) maintain and promptly update the registration data to keep it accurate, current and complete, and (iii) you are registering to use the Service in the state where you have been issued a real estate license that is considered to be in good standing.</p>
              <p className="ohters-color2">B.   You will receive a password and account designation upon completing the Service’s registration process.  You are responsible for maintaining the confidentiality of the password and account and are fully responsible for all activities that occur under your password or account.</p>
              <p className="ohters-color2">C.   You may be asked for your social security number as part of the registration process which may be provided to our payment vendor, Stripe, to process payments and ensure the safety of your account.</p>
              <p className="ohters-color">6.   PROPERTY ACCESS</p>
              <p className="ohters-color2">As part of your registration with Tryckl, you confirm that you have lawful right, as well as any necessary software and/or hardware, required to gain access to a property for the purpose of completing a Service Engagement.  You understand that occupying or entering a property, or asking a User of this Service to occupy or enter a property, is  subject to prior permission of the property owner.  Your right to use the Application and the Services is conditioned upon adherence to local and state laws and statutes pertaining to the normal functions of real estate agents.</p>
              <p className="ohters-color">7.   RELATIONSHIPS</p>
              <p className="ohters-color2">A.   Under this Agreement, Tryckl provides services to all Users (Requesting and Accepting), including providing a technology platform, aimed at facilitating an efficient workflow among Users.  If you and another User agree on terms and establish a Service Engagement, a contract is formed directly between you and that User.</p>
              <p className="ohters-color2">B.   TRYCKL’S SERVICES MAY BE USED ONLY FOR ENTERING INTO SERVICE ARRANGEMENTS UNDER INDEPENDENT CONTRACTOR RELATIONSHIPS.  No Service Engagement is intended to create an “employment” relationship between you and any other User.  You will not be eligible for any employee benefits.  You will not be considered an employee or employer of a User for purposes of any laws related to employment termination, employment discrimination, harassment, workplace safety, workers’ compensation, unemployment benefits, minimum wage, overtime, or any claims for sick leave, holiday or vacation pay, or any other employee benefits.  Neither Tryckl nor the Requesting User will deduct any amounts for withholding, unemployment, Social Security, or other taxes in connection with any Payment.</p>
              <p className="ohters-color2">C.   Tryckl will not provide you with any training or any equipment or materials needed for fulfillment of any Service Engagement.  Tryckl will not in any way supervise, direct, or control any of your work for a Requesting User.</p>
              <p className="ohters-color2">D.   You acknowledge and agree that Tryckl has no control over the workplace, and Tryckl will have no liability arising out of or related to the workplace environment in which you perform services under a Service Engagement.</p>
              <p className="ohters-color2">E.   You agree that Tryckl will have no liability to you, in connection with any Service Engagement, for (i) any physical injury or death occurring at any location where you perform services under the Service Engagement, or (ii) any act or omission by any person that gives rise to any claim under employment laws, including laws related to employment termination, employment discrimination, harassment, and workplace safety, and any similar act or omission notwithstanding the non-applicability of such laws to you as an independent contractor; or (iii) any claim for overtime pay, sick leave, holiday or vacation pay, or any other employee benefits.</p>
              <p className="ohters-color2">F.   TRYCKL DOES NOT MAKE ANY REPRESENTATION OR WARRANTY RELATING TO THE ACTIONS, HISTORY, INTEGRITY, OR SUITABILITY OF ANY User.</p>
              <p className="ohters-color2">G.   The parties agree that there exists no partnership or agency relationship between Tryckl and any User.  No User has authority to enter into any written or oral agreement, whether express or implied, on behalf of Tryckl.</p>
              <p className="ohters-color2">H.   Neither of the parties to this Agreement and none of the parties’ agents, employees, representatives, or independent contractors shall (i) be considered an agent, employee, or representative of the other party for any purpose whatsoever, (ii) have any authority to make any agreement or commitment for the other party or to incur liability or obligation in the other party’s name or on its behalf, or (iii) represent to third parties that either of them has any right so to bind the other party.  Nothing contained in this Agreement shall be construed or interpreted as creating an agency, partnership, or joint venture relationship between the parties.</p>
              <p className="ohters-color">8.   INDEPENDENT CONTRACTOR</p>
              <p className="ohters-color2">A.   You will be treated in all respects as an independent contractor in connection with your performance of a Service Engagement.  You are responsible for providing your own electronics, equipment, licensing and other necessary tools related to initiating a Service Request and/or Service Engagement.  You are responsible for all taxes related to Payments, including quarterly tax payments to appropriate government authorities when required, and you agree to make all required tax filings and tax payments in a timely manner.  If any services to be performed by you under a Service Engagement require any registration, license, or other authorization, you are responsible to obtain and maintain the necessary registration, license, or other authorization.</p>
              <p className="ohters-color2">B.   When required by law, Tryckl will report payments in connection with Service Engagements by filing form 1099-MISC with the Internal Revenue Service.</p>
              <p className="ohters-color2">C.   Acceptance of any Service Request by you constitutes a representation and warranty to Tryckl that you, or your broker, have obtained proper insurance covering your services.  </p>
              <p className="ohters-color2">D.   Your response to a Service Request and your performance of a Service Engagement constitute a representation and warranty to Tryckl that you are authorized to work as a licensed real estate agent in the United States and that your performance of the Service Engagement will not violate any law nor conflict with any obligation that you have to any person.</p>
              <p className="ohters-color">9.   ADDITIONAL TERMS AND SERVICES</p>
              <p className="ohters-color2">A.   Certain features of the Application may be subject to additional terms, conditions, or registration requirements.  Any violation of such terms, conditions, or registration requirements will constitute a breach of this Agreement.</p>
              <p className="ohters-color2">B.   Tryckl may offer services, features, products, and applications in addition to the Application and the Services.  If you elect to use such services, you will be required to accept additional terms and conditions governing such services, and separate fees may apply.</p>
              <p className="ohters-color">10.   INFORMATION AND FEEDBACK</p>
              <p className="ohters-color2">A.   You acknowledge that in accessing the Services, you may upload or enter certain data from your account(s) such as names, addresses, phone numbers, purchases, and sales, among others, to the Internet.  You hereby grant Tryckl permission to use information about yourself and your usage experience to enable Tryckl to provide the Services to you, including updating and maintaining your data, addressing errors or service interruptions, and to enhance the types of data and services Tryckl may provide to you in the future.  You also grant Tryckl permission to combine your data with that of others in a way that does not identify you to improve services, to create, market, or promote new Tryckl offerings to you and others and to use such combined data to create, market, or promote new Tryckl offerings.</p>
              <p className="ohters-color2">B.   You acknowledge that all metadata and other information generated or submitted to Tryckl by you in connection with the Application and the Services are owned by Tryckl.</p>
              <p className="ohters-color2">C.   Tryckl may provide you with a mechanism to provide feedback, suggestions, and ideas, if you choose, about its services (“Feedback”).  You agree that Tryckl may, in its sole discretion, use the Feedback in any way, including in future modifications to the Application and/or the Services and in multimedia works, advertising, marketing, and promotional materials relating to the Services.  You hereby grant to Tryckl a perpetual, worldwide, fully transferable, sublicensable (through multiple tiers), non-revocable, fully paid up, royalty free license to use, modify, create derivative works from, distribute, display, and otherwise exploit any information you provide to Tryckl in Feedback.</p>
              <p className="ohters-color">11.   PRIVACY POLICY</p>
              <p className="ohters-color2">For details about Tryckl’s privacy policies, please refer to the Privacy Statement contained in the Terms and Conditions.  You agree to be bound by the applicable Tryckl privacy policy, as amended from time to time, in accordance with its terms.</p>
              <p className="ohters-color">12.   GENERAL PRACTICES</p>
              <p className="ohters-color2">You acknowledge and agree that Tryckl may establish general practices and limits concerning use of the Service.  Tryckl reserves the right to log off accounts that are not active for an extended period of time.  Tryckl shall have no responsibility or liability for the deletion or failure to store any data or other information or materials maintained or transmitted by the Service.  Such general practices and limits may be changed by Tryckl at any time, in its sole discretion, with or without notice.</p>
              <p className="ohters-color">13.   RESERVATION OF RIGHTS AND OWNERSHIP</p>
              <p className="ohters-color2">The Application and the Services are licensed and not sold.  Tryckl reserves all rights not expressly granted to you in this Agreement.  The Application and the Services are protected by copyright, trade secret, and other intellectual property laws.  Tryckl and its licensors, where applicable, own all right, title, and interest in and to the Application and the Services (and all intellectual property rights therein), including but not limited to its technology, content, derivatives, and modifications of the Services by whomsoever made.</p>
              <p className="ohters-color">14.   NO WARRANTIES</p>
              <p className="ohters-color2">A.   THE APPLICATION AND THE SERVICES ARE PROVIDED “AS IS” AND “AS-AVAILABLE.”  TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRYCKL DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, REGARDING THE SERVICES, CONTENT, AND RELATED MATERIALS, INCLUDING ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  Tryckl does not warrant the accuracy, reliability, completeness, usefulness, or quality of any content included in the Services.  Tryckl does not warrant that the Services are secure, free from bugs, interruption, or errors, or that the Services will meet your requirements.</p>
              <p className="ohters-color2">B.   You are solely responsible for the selection of a User for whom you desire to either offer or perform services and for the arrangement under which services are provided.  Tryckl is not liable for the action or inaction of any User in connection with any Service Engagement and your performance of services thereunder.  Tryckl does not guarantee or warrant the Requesting User’s performance in connection with any Service Engagement.</p>
              <p className="ohters-color2">C.   Tryckl does not guarantee you any minimum number of engagements.  Until a Service Request becomes a Service Engagement, it may be accepted by other Users or withdrawn by the Requesting User.  Bacon does not guarantee that a Service Request will remain open or available to you for any particular length of time.  Tryckl does not guarantee that you will be retained by the Requesting User for every (or any) Service Request that you seek to accept.</p>
              <p className="ohters-color2">D.   Tryckl shall have no liability to you or any third party for any modification, suspension, or discontinuance of the Application or the Services or any part thereof.</p>
              <p className="ohters-color">15.   LIMITATION OF LIABILITY AND DAMAGES</p>
              <p className="ohters-color2">A.   TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, THE ENTIRE CUMULATIVE LIABILITY OF TRYCKL AND YOUR EXCLUSIVE REMEDY FOR ALL MATTERS OR CLAIMS ARISING FROM OR RELATED TO THIS AGREEMENT SHALL BE LIMITED TO THE AMOUNT PAYABLE TO YOU UNDER THIS AGREEMENT IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.</p>
              <p className="ohters-color2">B.   TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, PROVIDER SHALL NOT BE LIABLE FOR ANY (i) INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES; OR (ii) DAMAGES RELATING TO TELECOMMUNICATIONS FAILURES, INTERNET AND ELECTRONIC COMMUNICATIONS FAILURES, DELAYS OR LIMITATIONS, LOSS, CORRUPTION, SECURITY, OR THEFT OF DATA, VIRUSES, SPYWARE; OR (iii) LOSS OF INCOME, ARISING OUT OF OR RELATED IN ANY WAY TO THE SERVICES, WHETHER BASED IN TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR OTHERWISE, EVEN IF PROVIDER HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
              <p className="ohters-color">16.   INDEMNIFICATION</p>
              <p className="ohters-color2"> You shall defend, indemnify, and hold harmless Tryckl and its parents, affiliates, employees, and agents from and against any and all liabilities, losses, damages, costs, and other expenses, including attorneys’ fees, arising from or related to (i) a breach by you of any representation, warranty, covenant, or obligation in this Agreement; (ii) any intentional or negligent act or omission committed by you in connection with the performance (or failure to perform) any Service Engagement; and (iii) your violation of any law.  </p>
              <p className="ohters-color">17.   CONSENT TO CONDUCT BUSINESS ELECTRONICALLY</p>
              <p className="ohters-color2">A.   You agree that Tryckl may send notices and other communications to you by email and/or may make communications available to you by posting them on the Application or on Tryckl’s website.  You consent to receive such communications electronically.  You shall notify Tryckl promptly of any change in your email address or other registration data.</p>
              <p className="ohters-color2">B.   You certify that you have the ability to electronically retrieve, download, and print (i) this Agreement; (ii) all terms, policies, rules, notices, and forms (including IRS Form 1099-MISC) related to this Agreement and your relationship with Tryckl hereunder; and (iii) all other items required by law.</p>
              <p className="ohters-color">18.   MODIFICATION AND AMENDMENT</p>
              <p className="ohters-color2">Tryckl may change this Agreement from time to time, effective upon posting of the modified Agreement on its website or through the Application.  Tryckl may also notify you of the change by email or other electronic communication.  You are responsible to review the Agreement periodically for changes.  Tryckl has the right to change, delete, discontinue, or impose conditions on any features or aspect of the Services, including but not limited to pricing, technical support options, and other product-related policies.  Your continued use of the Services after Tryckl’s publication of any changes shall constitute your acceptance of the changes.</p>
              <p className="ohters-color">19.   TERMINATION</p>
              <p className="ohters-color2">Either party may terminate this Agreement without cause at any time, effective upon notice to the other party; provided, however, that termination of this Agreement will not relieve either party of its obligations related to any Service Engagement that has been entered into prior to the time of cancellation.  Sections 4 (Deliverables and Payment), 10 (Information and Feedback), 13 (Reservation of Rights and Ownership), 14 (No Warranties), 15 (Limitation of Liability and Damages), 16 (Indemnification) 17 (Consent to Conduct Business Electronically), and 20 (Miscellaneous) shall survive any termination of this Agreement.  Tryckl shall have the right to terminate your password, account (or any part thereof), or use of the Service, at any time in its sole discretion, with or without cause and with or without prior notice.  Tryckl shall not be liable to you or any third party for any termination of your access to the Service.</p>
              <p className="ohters-color">20.   MISCELLANEOUS</p>
              <p className="ohters-color2">A.   This Agreement shall be governed by and construed in accordance with law of the state in which you reside, without regard to its rules regarding conflicts of law.  Each of the parties consents to the jurisdiction of the courts located in that state with respect to all matters relating to this Agreement.  If the parties reside in different states, it is up to the parties to decide on a venue for resolving disputes.</p>
              <p className="ohters-color2">B.   Any controversy or claim arising out of or relating to this Agreement, or the breach of this Agreement, shall be settled by arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association, except that the parties agree that arbitration will not afford an adequate remedy in connection with any violation of a party’s rights pertaining to any patent, copyright, trade secret, trademark, service mark, or other intellectual property, and the parties shall have the right to seek an injunction or other appropriate relief to restrain or remedy any such violation in any court having jurisdiction.  Judgment upon the award of the arbitrator (or arbitrators) may be entered in any court having jurisdiction.  Before filing a claim for arbitration, you agree first to inform Tryckl of the complaint, including sufficient information to allow Tryckl to evaluate the complaint, and afford Tryckl at least sixty (60) days from its receipt of such information to resolve the matter informally.  To the fullest extent permitted by applicable law, no arbitration or claim under this Agreement shall be joined to any other arbitration or claim, including any arbitration or claim involving any other current or former user of the Service, and no class arbitration proceeding shall be permitted.  In no event shall any claim, action, or proceeding by either party related in any way to the Application and/or the Services be instituted more than one (1) year after the claim arose.</p>
              <p className="ohters-color2">C.   This Agreement constitutes the entire agreement between the parties pertaining to its subject matter, and it supersedes any and all written or oral agreements previously existing between the parties with respect to such subject matter.  Except for changes by Tryckl as provided herein, no modification or amendment of this Agreement shall be binding unless executed in writing by both parties.  No waiver shall be effective unless it is in writing and signed by the party against whom enforcement is sought.</p>
              <p className="ohters-color2">D.   This Agreement may not be assigned by either party without the prior written consent of the other.</p>
              <p className="ohters-color2">E.   If any of the provisions of this Agreement are held by a court or other tribunal having jurisdiction to be unenforceable, the parties intend that the provision shall be enforced to the maximum extent permissible and the remaining portions of this Agreement shall remain in full force and effect.</p>
              <p className="ohters-color">21.   DEFINITIONS</p>
              <p className="ohters-color2">As used in this Agreement, the following terms have the following meanings:</p>
              <p className="ohters-color2">“Services” has the meaning given in 2.A.</p>
              <p className="ohters-color2">“Application” has the meaning given in Section 2.B.</p>
              <p className="ohters-color2">“User” has the meaning given in the preamble.</p>
              <p className="ohters-color2">“Requesting User” has the meaning given in 2.D</p>
              <p className="ohters-color2">“Accepting User” has the meaning given in 2.D</p>
              <p className="ohters-color2">“Payment” has the meaning given in Section 2.C.</p>
              <p className="ohters-color2">“Deliverables” has the meaning given in Section 2.C.</p>
              <p className="ohters-color2">“Feedback” has the meaning given in Section 10.C.</p>
              <p className="ohters-color2">“Service Engagement” has the meaning given in Section 2.E.</p>
              <p className="ohters-color2">“Service Request” has the meaning given in Section 2.C.</p>
              

            
              
             
            
               
             
              
             
            </div>
             

              
           
              </div>
            </div>
          </div>
                
	 );
  }
}


export default (TermsNCondition);

