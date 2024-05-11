import React from "react";

const ContactForm = (props) => {
    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>
                                    KONTAKT
                                </h2>
                                <p>
                                    Marko Tomasevic
                                </p>
                            </div>
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="name"
                                                className="form-control"
                                                placeholder="Ime"
                                                required="required"
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required="required"
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="poruka"
                                        required
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                <a href="mailto:marko.tomasevic1@gmail.com">
                                    <button type="submit" className="btn btn-custom btn-lg">
                                        Posalji
                                    </button>
                                </a>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 contact-info">
                        <div className="contact-item">
                            <h3>
                                ADRESA
                            </h3>
                            <p>
                                <span>
                                    <i className="fa fa-map-marker"></i>{" "}
                                    Ulica XV br.42 Petrovac na moru
                                </span>
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-phone"></i>{" "}
                                    Telefon
                                </span>{" "}
                                <a
                                    className="btn btn-primary"
                                    role="button"
                                    href="tel:+38267313880"
                                >
                                    Tel: +38267/313880
                                </a>
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-envelope-o"></i> Email
                                </span>{" "}
                                marko.tomasevic1@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="social">
                                <ul>
                                    {/* <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li> */}
                                    <li>
                                        <a href={"https://www.instagram.com/tomasevic_smestaj/?hl=sr"}>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    {/* <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li> */}
                                    {/* <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>
                        &copy; 2024 Dizajn i izrada{" "}
                        {/* <a href="http://www.stoleugo.com" rel="nofollow"> */}
                        Predrag Stosic
                        {/* </a> */}
                        <br />
                        <a href="mailto:predragstosic1985@gmail.com">
                            predragstosic1985@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
