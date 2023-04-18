import React from "react";
import { Link } from "react-router-dom";

const About = () => {


  return (
    <div>
      <div className="j">
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-warning p-4">
            <h4 class="text-white">Collapsed content</h4>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      </div>
      <div className="ra">
        <p style={{width:690}} className="nav">
          We are maximisers. We're out on our own journeys to maximise - be the
          best at what we choose and care about the most - whether it be our
          impact, voice, potential, ideas, influence, well-being or more.
          Because when we maximise ourselves in our inclusive teams, Vkart is
          able to deliver the best imaginable value for our customers,
          stakeholders and the planet!
        </p>


        <br />
        <br /><br /><br /><br /><br />
   
<div className="im1">

    <img src="https://www.flipkartcareers.com/images/fk_site/Leave_A_Mark_image_1.webp" alt="" />
</div>
<div className="ims">
<h3>Leave a Mark</h3>
<br />
<p>We're known more by the impact we create
than the titles we hold. Impact that is brought by
working together on audacious challenges at scale
with an aim to revolutionize for the Indian customer.
We believe great ideas can emerge from anywhere
and must be backed. Our people - backed by our
culture of end-to-end ownership - have revolutionised
India's e-commerce sector - several times over!</p>
          </div>

      </div>

<div className="im2">
<div className="ims2">
<h3>Experiment Learn Grow</h3>
<br />
<p>Our journey of building India's biggest unicorn
start-up has been full of successes, but also failures
and learning from them. That's why there's calculated
risk-taking, a high willingness to learn and improvise,
and a growth orientation built into everything we do.
Whether it be opening a new warehouse, or making
our mobile app a bit more consumer friendly, we're
always experimenting, learning and growing!</p>
          </div>

</div>
<div className="i"><img src="https://www.flipkartcareers.com/images/fk_site/Experiment_Learn_Grow_image2.webp" alt="" /></div>



<div className="last">

<div className="fl">
<li><Link className="nav-link active" aria-current="page" href="#" to="/" >Home</Link></li>
<li><Link className="nav-link" href="#" to="/about">
                  About us
                </Link></li>
<li>Life@Vcart</li>
<li>Jobs</li>
<li>Privacy policy</li>

</div>
<div className="c">
  <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
  <li><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
  <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
  <li><i class="fa fa-youtube" aria-hidden="true"></i></li>
  <li><i class="fa fa-twitter" aria-hidden="true"></i></li>

  <br />
  <br />
  

</div>
<div className="cp">
  <p><i class="fa fa-copyright" aria-hidden="true"></i> All Rights Reserved | Powered by Vijay</p></div>
  <div className="div5"><p>Beware of fake Vcart jobs and fraud employment agents. Read these guidelines.</p></div>
</div>


    </div>



  );
};

export default About;
