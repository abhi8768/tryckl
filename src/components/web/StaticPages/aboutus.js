import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


import $$ from 'jquery';



class AboutUs extends Component {
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
            <h2 className="mid-heading">About us</h2>
            <div className="content-part-wrapper profile-content-part-wrapper list-pre">
                <div className="content-part-wrapper dark-part position-relative static-pages">
            
                    <p className="ohters-color2">You’re a real estate agent, which means your life is always predictable and you never have to juggle priorities.  You have all the time in the world for your clients because you have nothing else going on.  Your life is your own and you are in control! (dry the tears, we’ll get through this.)</p>
                    <p className="ohters-color2">Current methods for doing this take too much time, cost too much in human expense and are just not an adequate method of conducting business.</p>
                    <p className="ohters-color2">That all changes now.</p>
                    <p className="ohters-color2">Agents can list their showings, contractor assistance, inspections, etc. in a single platform that shoots it out to an army of agents to snatch it up at the speed of technology and both sides win in a way that’s completely new to the real estate industry!</p>
                    <p className="ohters-color2">Agents with varying schedules can increase their efficiency and incomes by transacting these offers from anywhere!  Need money for MLS fees? Tryckl.  Need extra change for date night? Tryckl.  Need to gain experience and get picked up by a top tier team? Tryckl.  What do you do when your client is 3 hours away and wants to see a second home? Let Tryckl connect you with an agent who can do it for you and you still keep your full fee!</p>
                    <p className="ohters-color2">What would it be like to take the vacation you’ve put off for three years?  Or how about taking that dress off the hanger and finally making dinner plans?  Can you stay in with the family for a movie night and ice cream sundaes? Yes, you can.  Go ahead, make plans and stick to them!</p>
                    <p className="ohters-color">Origin of Tryckl</p>
                    <p className="ohters-color2">Call them blessings, bits of fortune, karma circling back, rays of sunshine…  There are those moments in our days and weeks that prove that someone or something in this world has our back. When you need it most and you're giving it your best - that’s when it happens!</p>
                    <p className="ohters-color2">I had partnered on a business that wasn’t performing quite like I expected it to, and I kept getting bad news after bad news. It was a tough time. My wife had her real estate license and did the occasional deal in between being the CEO of our family and managing 4 young children.  One day, while taking our kids to a skate park about 30 minutes from home, my wife received a call from another agent asking for help.</p>
                    <p className="ohters-color2">The agent on the phone had paid my wife for these services over the last year or so and those little nuggets trickled in regularly and really helped out.  But even more than that, it also helped my wife gain more experience and confidence, which itself has paid dividends over and over.</p>
                    <p className="ohters-color2">On this particular day, the agent asked my wife if she could show a property to some of her clients, and the property just happened to be about 5 minutes away from the exact location where she was at that moment.  My wife packed up the kids, ran over, showed the property, bagged a nice fee, and ran back to the skate park.</p>
                    <p className="ohters-color2">It was on the phone with my wife that day that I realized that Tryckl, or what would become Tryckl, was going to be the key to helping agents of all types: seasoned, new, busy, not busy, single parent, in a slump, treading water in an economic downturn, etc.  In essence, EVERY REAL ESTATE AGENT, could obtain an increase of success, no matter their situation.</p>
                    <p className="ohters-color2">Welcome to Tryckl. Welcome to making more money, closing more deals, and increasing the time you spend doing the things you’ve pushed off for too long.</p>
                    <p className="ohters-color2">Damon Luke<br/>Founder/CEO</p>
                </div>
            </div>
            </div>
        </div>
                
	 );
  }
}



export default AboutUs;

