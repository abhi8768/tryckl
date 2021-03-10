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
                    <p className="ohters-color">Vision</p> 
                    <p className="ohters-color2">You’re a real estate agent, which means your life is always predictable and you never have to 
juggle priorities. You have all the time in the world for your clients because you have nothing 
else going on. Your life is your own and you are in control! (dry the tears, we’ll get through this.) </p>
                    <p className="ohters-color2">Does any of this sound familiar?: </p>
                    <ul className="static-list">
                      <li>You need a showing agent this Wednesday so you can be at the big soccer game.</li>
                      <li>A contractor needs access to a property 45 minutes away because he left a tool inside.</li>
                      <li>You're out of town and need someone to open the door for an inspector/trade. </li>
                      <li>You’re a new agent and want to get experience, but opportunities are far too few. </li>
                    </ul><br/>
                    <p className="ohters-color2">The list goes on and on. And that list is the reason for Tryckl. Tryckl allows real estate agents to 
market their needs in an agent-only platform within their licensed area. Previous to now, these 
needs were met with clunky texting, time-consuming social media pages, various group 
messaging apps, and of course...the classic phone call. </p>
                    <p className="ohters-color2">Current methods for doing this take too much time, cost too much in human expense and are 
just not an adequate method for conducting business.  </p>
                    <p className="ohters-color2">That all changes now. </p>
                    <p className="ohters-color2">Agents can list their showings, contractor assistance, inspections, etc. in a single platform that 
shoots it out to an army of agents to snatch it up at the speed of technology and both sides win 
in a way that’s completely new to the real estate industry!  </p>
                    <p className="ohters-color2">Agents with varying schedules can increase their efficiency and incomes by transacting these 
                    offers from anywhere! Need money for MLS fees? Tryckl. Need extra change for date night? 
                    Tryckl. Need to gain experience and get picked up by a top tier team? Tryckl. What do you do 
                    when your client is 3 hours away and wants to see a second home? Let Tryckl connect you with 
                    an agent who can do it for you and you still keep your full fee! </p>

                    <p className="ohters-color2">What would it be like to take the vacation you’ve put off for three years? Or how about taking 
that dress off the hanger and finally making dinner plans? Can you stay in with the family for a 
movie night and ice cream sundaes? Yes, you can. Go ahead, make plans and stick to them! </p>

                  <p className="ohters-color2">Expand your vision and your life’s purpose with Tryckl’s efficient transactional platform 
exclusive to licensed real estate professionals. Take what you’re already doing, and do it easier 
and faster, from anywhere! </p>

                  <p className="ohters-color">Origin of Tryckl  </p> 
                  <p className="ohters-color2">Call them blessings, bits of fortune, karma circling back, rays of sunshine... There are those 
moments in our days and weeks that prove that someone or something in this world has our 
back. When you need it most and you're giving it your best - that’s when it happens! </p>

                  <p className="ohters-color2">Summer and Damon (Co-Founders) had partnered on a business that wasn’t performing as 
expected, and they kept getting bad news after bad news. It was a tough time. Summer had her 
real estate license and did the rare occasional deal in between being the CEO of the family and 
managing 4 young children. One day, while taking the kids to a new park about 30 minutes from 
home, Summer received a call from another agent asking for help.  </p>

                  <p className="ohters-color2">This agent had paid Summer for ‘showing assistant’ services over the last year or so and those 
                  little nuggets trickled in regularly and really helped out. They funded some date nights, some 
                  ice-cream cones for the kids, and even helped off-set MLS fees. But even more than that, it 
                  helped Summer gain the necessary experience and confidence being an agent requires, which 
                  itself has paid dividends over and over.  </p>
                  <p className="ohters-color2">On this particular day, the agent asked Summer if she could show a property to some of her 
clients. The property in question just happened to be only 5 minutes away. Summer packed up 
the kids, ran over, showed the property, bagged a nice fee, and ran back to the park. </p>
                  <p className="ohters-color2">It was on the phone later that day that they realized that Tryckl, or what would become Tryckl, 
                  was going to be the key to helping agents of all types: seasoned, new, busy, not busy, second 
                  income, single parent, in a slump, treading water in an economic downturn, etc. In essence, 
                  EVERY REAL ESTATE AGENT, could obtain an increase of success through an efficient, 
                  agent-focused platform, no matter their situation.  </p>

                  <p className="ohters-color2">Summer gained exposure to top-tier agents and joined a banner team. Less than a year later, 
her real estate business had surpassed six figures, all because of the very concept Tryckl was 
built upon.  </p>

                  <p className="ohters-color2">So, welcome! Welcome to dreams coming true. Welcome to making more money. Welcome to 
closing more deals and increasing the time you spend doing the things you’ve pushed off for too 
long. Welcome to Tryckl. </p>

                  <p className="ohters-color">The Management Team  </p> 
                  
                  <p className="ohters-color2">We love real estate, and we love software. Tryckl happens to be the best of both worlds! Our 
management and advisory team has more years in the residential, commercial and software 
industries than we can count (and that’s not just crafty writing, we lost count after about 80 yrs 
combined). We’ve seen the highest of highs and the lowest of lows and have faced the same 
struggles and challenges many of you reading this have.</p>

                  <p className="ohters-color2">One of the ‘ah ha!’ moments that spurred Tryckl into existence was the realization that so many 
software platforms are focused on cutting out the agent and trying to connect the buyer/seller 
directly to the other half of the transaction. It’s an interesting idea, but it is inherently and 
fundamentally flawed. We can say this with confidence because it’s been proven over and over. 
When you remove the agent from the buy/sell process, both parties suffer and there is always 
value left on the table.</p>
                  <p className="ohters-color2">Tryckl is the product of years of experience, over half a billion dollars in transaction volume, and 
working with some of the brightest software minds from billion dollar tech companies. And, 
while we have learned much, we’ll never claim to know it all. Please share with us what you like, 
and especially what you don’t like. We’re an Agent Friendly Tech (AFT) platform and we’re 
committed to improving the daily life of the real estate agent. Ultimately, Tryckl is for you.  </p>
                  <p className="ohters-color2">Thank you, <br/>Tryckl Management </p>
                </div>
            </div>
            </div>
        </div>
                
	 );
  }
}



export default AboutUs;

