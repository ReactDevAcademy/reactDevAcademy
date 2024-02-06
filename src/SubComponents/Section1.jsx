import React from 'react'
import Group158 from "../assets/img/img/Group 158.png"
import Image14 from "../assets/img/img/image 14.png"

const Section1 = () => {
    return (
        <>
            <div className="container-fluid common_container">
                <div className="row common_row">
                    <header>
                        <h1 className='text-center'>Get in Touch</h1>
                    </header>
                    <div className="col-lg-7">
                        <div className="position-relative z-index-1">
                            <img src={Group158} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 color_bg">
                        <div className=''>
                            <h5 className='text-center right_box'>Send Us Message <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask
                                    id="mask0_104_275"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={24}
                                    height={24}
                                >
                                    <rect
                                        x={24}
                                        width={24}
                                        height={24}
                                        transform="rotate(90 24 0)"
                                        fill="#D9D9D9"
                                    />
                                </mask>
                                <g mask="url(#mask0_104_275)">
                                    <path
                                        d="M3 12C3 10.75 3.2375 9.57917 3.7125 8.4875C4.1875 7.39583 4.82917 6.44583 5.6375 5.6375C6.44583 4.82917 7.39583 4.1875 8.4875 3.7125C9.57917 3.2375 10.75 3 12 3C13.25 3 14.4208 3.2375 15.5125 3.7125C16.6042 4.1875 17.5542 4.82917 18.3625 5.6375C19.1708 6.44583 19.8125 7.39583 20.2875 8.4875C20.7625 9.57917 21 10.75 21 12L19 12C19 10.05 18.3208 8.39583 16.9625 7.0375C15.6042 5.67917 13.95 5 12 5C10.05 5 8.39583 5.67917 7.0375 7.0375C5.67917 8.39583 5 10.05 5 12L3 12ZM7 16L8.425 14.6L11 17.175L11 9L13 9L13 17.175L15.6 14.6L17 16L12 21L7 16Z"
                                        fill="#8B12BF"
                                    />
                                </g>
                            </svg>
                            </h5>
                            <div className="form">
                                <form action="">
                                    <div className='form_control'>
                                        <input type="text" placeholder="Name *" className='form-control input_custom' />
                                        
                                    </div>
                                    <div className='form_control'>
                                        <input type="text" placeholder='Mobile Number *' className='form-control input_custom' />
                                    </div>
                                    <div className='form_control'>
                                        <input type="text" placeholder='Email ID *' className='form-control input_custom' />
                                    </div>
                                    <div className='form_control'>
                                        <textarea name="" id="" cols="10" rows="2" placeholder='Requirement *' className='form-control input_custom'></textarea>
                                    </div>
                                    <div className='form_control'>
                                        <button className='form-control input_custom input_btn'><span className="d-flex"></span>
                                            <span className='d-flex justify-content-between'><svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_104_290"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x={0}
                                                y={0}
                                                width={24}
                                                height={24}
                                            >
                                                <rect width={24} height={24} fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_104_290)">
                                                <path
                                                    d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
                                                    fill="white"
                                                />
                                            </g>
                                        </svg>Submit</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1