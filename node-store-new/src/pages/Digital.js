import React, { Component } from "react";
import {Helmet} from "react-helmet";
import MainDigital from './../forms/MainDigital'

class Digital extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Digital Gift Package | Become the Stars</title>
        </Helmet>

        <div class="container-fluid">
          <div class="row">
            <div class="col-10 offset-1">
                <div class="row">
                    <div class="col-4 bts-store-heading-nav">
                        Digital Package
                    </div>
                    <div class="col-4 bts-store-heading-nav">
                        Premium Package
                    </div>
                    <div class="col-4 bts-store-heading-nav">
                        Deluxe Package
                    </div>
                </div>
                <hr class="bts-hr-white" />
            </div>
          </div>
          <div class="row">
            <div class='col-10 offset-1'>
                    <div class="row">
                        <br/>
                        <div class='col-4'>
                            <img src="https://www.geek.com/wp-content/uploads/2014/10/sunultra.jpg" alt="" class="img-fluid"/>
                            <hr class="bts-hr-white"/>
                            <h1 class="package-heading-form">
                                Package Description
                            </h1>
                            <h1 class="package-price">
                                Starting from $15
                            </h1>
                            <p class="package-options">
                            Our digital package is perfect for those who want to print their own certificates and posters, or are buying for someone who has embraced the digital age. Not only will you be able to name a star, but will also receive our digital gift package which includes high quality digital downloads of:
                            <ul>
                                <li>A certificate of registration</li>
                                <li>An image of your registered star</li>
                                <li>A star chart describing your stars location and surrounding night sky</li>
                                <li>A star fact sheet about your star</li>
                            </ul>
                            If your special someone is interested in astrology (including things like Zodiac Signs), then you can opt for our Astrology package. This upgrade includes not only high quality digital downloads of the items listed above, but also:
                            <ul>
                                <li>A poster with a symbol of their Zodiac Sign and inspiration quote</li>
                                <li>A fact sheet about your Zodiac Sign</li>
                                <li>Specialty matching of your star to your Zodiac Sign</li>
                                <li>Access to our exclusive Star Gazers club</li>
                            </ul>
                            </p>
                        </div>
                        <div class='col-8'>
                            <MainDigital />
                        </div>
                    </div>
                </div>
          </div>
          
        </div>
      </div>
    );
  }
}
 
export default Digital;