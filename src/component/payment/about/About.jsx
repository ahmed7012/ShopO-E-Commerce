import React from 'react'

export default function About() {




  return <>
  
  
  
  <div class="about" id="about">
        <div class="container mt-5 mb-5 about-cont p-5">

            <div class="row">

                <div class="col-lg-6 col-sm-12 ego">
                    <div class="info row">
                        <div class="about-img col-lg-4 col-sm-12">
                            <img src={require("../../../img/cute-young-cozy-woman-indoor-portrait.jpg")} alt="ahmed image"/>
                        </div>
                        <div class="info-data col-lg  ">
                            <table class="ms-lg-4 ">

                                <tr>
                                    <th>Name : </th>
                                    <td> Ahmed Emad</td>
                                </tr>

                                <tr>
                                    <th>Profile : </th>
                                    <td> full stack developer</td>
                                </tr>

                                <tr>
                                    <th>email : </th>
                                    <td> aemad7012@gmail.com</td>
                                </tr>

                                <tr>
                                    <th>Phone : </th>
                                    <td> 01152762201</td>
                                </tr>

                            </table>

                        </div>
                    </div>

                    <div class="skill mt-sm-3">
                        <h5 class="">Skill</h5>

                        <div class="skill-prog row">
                            <span class="col-6">HTML</span>
                            <span class="col-6 text-end">85%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-label="Animated striped example" aria-valuenow="85" aria-valuemin="0"
                                aria-valuemax="100" style="width: 85%"></div>
                        </div>
                        <div class="skill-prog row">
                            <span class="col-6">CSS</span>
                            <span class="col-6 text-end">75%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100" style="width: 75%"></div>
                        </div>
                        <div class="skill-prog row">
                            <span class="col-6">C#</span>
                            <span class="col-6 text-end">50%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-label="Animated striped example" aria-valuenow="50" aria-valuemin="0"
                                aria-valuemax="100" style="width: 50%"></div>
                        </div>
                        <div class="skill-prog row">
                            <span class="col-6">Java Script</span>
                            <span class="col-6 text-end">90%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-label="Animated striped example" aria-valuenow="90" aria-valuemin="0"
                                aria-valuemax="100" style="width: 90%"></div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6 col-sm-12 about-me mt-sm-3">
                    <h6 class="mb-5 fs-2">About me</h6>
                    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan
                        id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas
                        non nisi. Nulla porttitor accumsan tincidunt.</p>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                        porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        porttitor at sem.</p>
                    <p>Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    </p>
                </div>
            </div>
        </div>

    </div>
  </>
}
