import React from 'react';
import Slider from '../includes/Slider';
import { Link } from 'react-router-dom';
import Vision from '../includes/Vision';
import Service1 from '../images/s1.jpg';
import Service2 from '../images/s2.jpg';
import Service3 from '../images/s3.jpg';
function Home() {
    return (
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Vision Section/ */}
            <Vision />
            {/* Our Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card shadow">
                                <img src={Service1} alt="services" className="w-1oo border-bottom" />
                                <div className="card-body text-center">
                                    <h6>Service 1</h6>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    </p>
                                    <Link to="/services" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card shadow">
                                <img src={Service2} alt="services" className="w-1oo border-bottom" />
                                <div className="card-body text-center">
                                    <h6>Service 2</h6>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    </p>
                                    <Link to="/services" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card shadow">
                                <img src={Service3} alt="services" className="w-1oo border-bottom" />
                                <div className="card-body text-center">
                                    <h6>Service 3</h6>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                                    </p>
                                    <Link to="/services" className="btn btn-link">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;