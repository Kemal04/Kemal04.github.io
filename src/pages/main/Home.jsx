import profileImg from '../../assets/imgs/profile.jpg'
import profileImg2 from '../../assets/imgs/profile_2.jpg'
import cardImg from '../../assets/imgs/card.png'
import card2Img from '../../assets/imgs/card_2.png'
import profileImgBack from '../../assets/icons/profile-bg.svg'
import twitterImg from '../../assets/icons/twetter.svg'
import insImg from '../../assets/icons/ins.svg'
import linkImg from '../../assets/icons/link.svg'
import icon_4 from '../../assets/icons/4.svg'
import icon_5 from '../../assets/icons/5.svg'
import icon_6 from '../../assets/icons/6.svg'
import icon_7 from '../../assets/icons/7.svg'
import icon_8 from '../../assets/icons/8.svg'
import icon_9 from '../../assets/icons/9.svg'
import icon_10 from '../../assets/icons/10.svg'
import icon_11 from '../../assets/icons/11.svg'
import webImg from '../../assets/icons/web.svg'
import figmaImg from '../../assets/icons/figma.svg'
import psImg from '../../assets/icons/ps.svg'
import jsImg from '../../assets/icons/js.svg'

const Home = () => {

    return (
        <>
            <div className="container mt-4">
                <div className="row m-0 justify-content-between align-items-center">
                    <div className="col-xl-6 p-0">
                        <div className="bg-dark-light py-5 rounded-4 me-lg-4 me-0 d-flex justify-content-center position-relative" style={{ height: "600px" }}>
                            <img src={profileImgBack} alt="" className='img-fluid rounded-circle w-60' />
                            <img src={profileImg} alt="" className='img-fluid rounded-circle w-50 position-absolute' style={{ top: "35%" }} />
                        </div>
                    </div>
                    <div className="col-xl-6 p-0 mt-lg-0 mt-4">
                        <div className="bg-dark-light py-5 rounded-4 ms-lg-4 ms-0 text-center text-white d-flex justify-content-center flex-column align-items-center" style={{ height: "600px" }}>
                            <div className='bg-black d-inline-block px-3 py-1 rounded-3 small text-warning mb-4'>AVAILABLE FOR WORK</div>
                            <div className='display-4 fw-semibold mb-4'>Product designer</div>
                            <div className='d-flex justify-content-center mb-4'>
                                <div className='h5 w-75 text-secondary'>A passionate SaaS product designer based in the vibrant city of New York.</div>
                            </div>
                            <button className='btn btn-success rounded-5 px-4 py-2'>Book a Free Call</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-4'>
                <div className='row justify-content-between'>
                    <div className='col-xl-auto mb-3 d-flex justify-content-center'>
                        <div className='d-flex align-items-center bg-dark-light rounded-4 px-5 py-3 text-secondary' style={{ width: "240px" }}>
                            <img src={twitterImg} alt="" style={{ width: "35px" }} />
                            <div className='h4 ms-2'>Twitter</div>
                        </div>
                    </div>
                    <div className='col-xl-auto mb-3 d-flex justify-content-center'>
                        <div className='d-flex align-items-center bg-dark-light rounded-4 px-5 py-3 text-secondary' style={{ width: "240px" }}>
                            <img src={insImg} alt="" style={{ width: "35px" }} />
                            <div className='h4 ms-2'>Instagram</div>
                        </div>
                    </div>
                    <div className='col-xl-auto mb-3 d-flex justify-content-center'>
                        <div className='d-flex align-items-center bg-dark-light rounded-4 px-5 py-3 text-secondary' style={{ width: "240px" }}>
                            <img src={linkImg} alt="" style={{ width: "35px" }} />
                            <div className='h4 ms-2'>LinkedIn</div>
                        </div>
                    </div>
                    <div className='col-xl-auto mb-3 d-flex justify-content-center'>
                        <div className='d-flex align-items-center bg-dark-light rounded-4 px-5 py-3 text-secondary' style={{ width: "240px" }}>
                            <img src={twitterImg} alt="" style={{ width: "35px" }} />
                            <div className='h4 ms-2'>Github</div>
                        </div>
                    </div>
                    <div className='col-xl-auto mb-3 d-flex justify-content-center'>
                        <div className='d-flex align-items-center bg-dark-light rounded-4 px-5 py-3 text-secondary' style={{ width: "240px" }}>
                            <img src={twitterImg} alt="" style={{ width: "35px" }} />
                            <div className='h4 ms-2'>Twitter</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5 py-5'>
                <div className='text-success fw-semibold'>SERVICES</div>
                <div className='display-4 text-white mt-3 mb-5 fw-semibold'>Client centric SaaS <br /><span className='text-secondary'>product design</span></div>
                <div className='row pt-5'>
                    <div className='col-xl-4 mb-3'>
                        <div className='bg-dark-light p-5 text-white rounded-4'>
                            <img src={icon_4} alt="icon" style={{ width: "90px" }} className='rounded-circle bg-black p-4' />
                            <div className='h1 my-4'>User-centered</div>
                            <div className='text-secondary h5' style={{ lineHeight: "29px" }}>I work closely with my clients to understand their target audience and their pain points.</div>
                        </div>
                    </div>
                    <div className='col-xl-4 mb-3'>
                        <div className='bg-dark-light p-5 text-white rounded-4'>
                            <img src={icon_5} alt="icon" style={{ width: "90px" }} className='rounded-circle bg-black p-4' />
                            <div className='h1 my-4'>Visual design</div>
                            <div className='text-secondary h5' style={{ lineHeight: "29px" }}>I work closely with my clients to understand their target audience and their pain points.</div>
                        </div>
                    </div>
                    <div className='col-xl-4 mb-3'>
                        <div className='bg-dark-light p-5 text-white rounded-4'>
                            <img src={icon_6} alt="icon" style={{ width: "90px" }} className='rounded-circle bg-black p-4' />
                            <div className='h1 my-4'>Functionality</div>
                            <div className='text-secondary h5' style={{ lineHeight: "29px" }}>I work closely with my clients to understand their target audience and their pain points.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-5 pt-5'>
                <div className='text-primary text-center fw-semibold'>SERVICES</div>
                <div className='display-4 text-white text-center mt-3 mb-5 fw-semibold'>Selected <span className='text-secondary'>Projects</span></div>
                <div className='row pt-5'>
                    <div className='col-xl-4'>
                        <img src={cardImg} alt="" className='img-fluid mb-4 rounded-4' />
                        <img src={card2Img} alt="" className='img-fluid mb-4 rounded-4' />
                        <img src={cardImg} alt="" className='img-fluid mb-4 rounded-4' />
                    </div>
                    <div className='col-xl-4'>
                        <img src={card2Img} alt="" className='img-fluid mb-4 rounded-4' />
                        <img src={cardImg} alt="" className='img-fluid mb-4 rounded-4' />
                        <img src={card2Img} alt="" className='img-fluid mb-4 rounded-4' />
                    </div>
                    <div className='col-xl-4'>
                        <img src={cardImg} alt="" className='img-fluid mb-4 rounded-4' />
                        <img src={card2Img} alt="" className='img-fluid mb-4 rounded-4' />
                        <img src={cardImg} alt="" className='img-fluid mb-4 rounded-4' />
                    </div>
                </div>
            </div>

            <div className='container mt-5 pt-5'>
                <div className='text-danger text-center fw-semibold'>SERVICES</div>
                <div className='display-4 text-white text-center mt-3 mb-5 fw-semibold'>Review of some <br /> exemplary <span className='text-secondary'>good works</span></div>
                <div className='row pt-5'>
                    <div className='col-xl-3'>
                        <div className='bg-dark-light p-5 mb-4 rounded-4 text-secondary text-center h3'>
                            SOME TEXT
                        </div>
                        <div className='bg-dark-light p-5 mb-4 rounded-4 text-secondary text-center h3'>
                            SOME TEXT
                        </div>
                        <div className='bg-dark-light p-5 mb-4 rounded-4 text-secondary text-center h3'>
                            SOME TEXT
                        </div>
                    </div>
                    <div className='col-xl-6 mb-4 mb-xl-0'>
                        <div className='bg-dark-light px-5 py-4 rounded-4'>
                            <div className='h4 mb-4' style={{ letterSpacing: "2px" }}>“We were fortunate to collaborate with Roger Hill on our latest SaaS project, and the experience was nothing short of exceptional. We highly recommend Roger Hill as a talented SaaS product designer."</div>
                            <div className='text-info display-4 fw-semibold'>+230%</div>
                            <div className='text-info small mt-2'>INCREASE IN CONVERSION RATE</div>
                            <hr />
                            <div className='d-flex align-items-center mt-3 pt-2'>
                                <img src={profileImg} alt="" style={{ width: "80px" }} className='rounded-circle' />
                                <div className='ms-3'>
                                    <div className='h5'>Kemal Hojayew</div>
                                    <div className='text-secondary'>Frontend Web Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3'>
                        <div className='bg-dark-light p-5 mb-4 rounded-4 text-secondary text-center h3'>
                            SOME TEXT
                        </div>
                        <div className='bg-dark-light p-5 mb-4 rounded-4 text-secondary text-center h3'>
                            SOME TEXT
                        </div>
                        <div className='bg-dark-light p-5 mb-4 rounded-4 text-secondary text-center h3'>
                            SOME TEXT
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5 py-5'>
                <div className='text-warning fw-semibold'>SERVICES</div>
                <div className='display-4 text-white mt-3 mb-5 fw-semibold'>Pioneering SaaS <br /> excellence<span className='text-secondary'> since 2015</span></div>
                <div className='row pt-5'>
                    <div className='col-xl-6'>
                        <div className='bg-dark-light rounded-4 p-5 mb-4'>
                            <ul className="nav nav-tabs border-bottom-0" id="myTab" role="tablist">
                                <li className="nav-item bg-black p-1 rounded-start-2" role="presentation">
                                    <button className="nav-link active text-secondary rounded-2 py-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Experiences</button>
                                </li>
                                <li className="nav-item bg-black p-1 rounded-end-2" role="presentation">
                                    <button className="nav-link text-secondary rounded-2 py-1" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Fun Facts</button>
                                </li>
                            </ul>
                            <div className="tab-content mt-5" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">

                                    <div className='row align-items-center justify-content-between mb-4 border-bottom border-secondary pb-4'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_7} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Basecom</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>Product Designer</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                    <div className='row align-items-center justify-content-between mb-4 border-bottom border-secondary pb-4'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_8} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Finto</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>Creative Director</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                    <div className='row align-items-center justify-content-between mb-4 border-bottom border-secondary pb-4'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_9} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Manix</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>UI/UX Desinger</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                    <div className='row align-items-center justify-content-between mb-4 border-bottom border-secondary pb-4'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_10} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Asiana</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>Design Lead</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                    <div className='row align-items-center justify-content-between'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_11} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Uttonto</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>Web Designer</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">

                                    <div className='row align-items-center justify-content-between mb-4 border-bottom border-secondary pb-4'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_7} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Basecom</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>Product Designer</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                    <div className='row align-items-center justify-content-between mb-4 border-bottom border-secondary pb-4'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_8} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Finto</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>Creative Director</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                    <div className='row align-items-center justify-content-between mb-4 border-bottom border-secondary pb-4'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_9} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Manix</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>UI/UX Desinger</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                    <div className='row align-items-center justify-content-between mb-4 border-bottom border-secondary pb-4'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_10} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Asiana</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>Design Lead</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                    <div className='row align-items-center justify-content-between'>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <img src={icon_11} alt="" className='img-fluid me-2' />
                                            <div className='fw-semibold fs-18'>Uttonto</div>
                                        </div>
                                        <div className='col-xl-4 d-flex align-items-center'>
                                            <div className='circle-point'></div>
                                            <div className='text-secondary'>Web Designer</div>
                                        </div>
                                        <div className='col-xl-4 text-secondary'>AUG 2014 – SEP 2010</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='text-warning fw-semibold'>Available for work</div>
                        <div className='row align-items-center justify-content-between mt-4'>
                            <div className='col-xl-3 col-6 d-flex justify-content-center'>
                                <img src={webImg} alt="" className='rounded-4 bg-dark-light p-3 px-4' />
                            </div>
                            <div className='col-xl-3 col-6 d-flex justify-content-center'>
                                <img src={figmaImg} alt="" className='rounded-4 bg-dark-light p-3 px-4' />
                            </div>
                            <div className='col-xl-3 col-6 d-flex justify-content-center'>
                                <img src={psImg} alt="" className='rounded-4 bg-dark-light p-3 px-4' />
                            </div>
                            <div className='col-xl-3 col-6 d-flex justify-content-center'>
                                <img src={jsImg} alt="" className='rounded-4 bg-dark-light p-3 px-4' />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6 mt-lg-0 mt-5'>
                        <img src={profileImg2} alt="" className='img-fluid rounded-4' style={{ height: "700px", width: "100%", objectFit: "cover", objectPosition: "0% 0%" }} />
                    </div>
                </div>
            </div>

            <div className='container pt-5' style={{ marginTop: "100px" }}>
                <div className='row'>
                    <div className='col-xl-4'>
                        <div className='bg-dark-light rounded-4 p-5 d-flex flex-column justify-content-center align-items-center'>
                            <img src={profileImg} alt="" style={{ width: "120px", marginTop: "-100px" }} className='rounded-circle border border-black border-4' />
                            <div className='h4 mt-5'>Kemal Hojayew</div>
                            <p className='text-center fs-18 mt-3'>I believe in the power of design to transform ideas into tangible, user-friendly software.</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between my-3'>
                            <div className='bg-dark-light p-4 rounded-4'>
                                <img src={twitterImg} alt="" className='img-fluid' />
                            </div>
                            <div className='bg-dark-light p-4 rounded-4'>
                                <img src={linkImg} alt="" className='img-fluid' />
                            </div>
                            <div className='bg-dark-light p-4 rounded-4'>
                                <img src={insImg} alt="" className='img-fluid' />
                            </div>
                            <div className='bg-dark-light p-4 rounded-4'>
                                <img src={twitterImg} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-8'>
                        <div className='bg-dark-light rounded-4 p-5 d-flex flex-column align-items-center justify-content-center'>
                            <div className='display-2 text-center mb-5 fw-semibold'>Got a project in mind? <span className='text-secondary'>Let’s talk</span></div>
                            <button className='btn btn-success btn-lg' style={{ padding: "30px 110px", borderRadius: "131px" }}>Book a Free Call</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home