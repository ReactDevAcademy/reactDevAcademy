import { faAtom, faComment, faFile, faGlobe, faHeadset, faLaptopFile, faPeopleArrows, faPeopleGroup, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Section2 = () => {
    return (
        <>
            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-12">
                        <div className="textcontent">Why Choose React Dev Academy ?</div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-6 justify-content-center Mainbox1">
                        <div className="box" style={{backgroundColor:"#858585"}}>
                        <FontAwesomeIcon icon={faGlobe} className="icons"/>
                            <span className='txt1'>100% placement assistance and best support</span>
                        </div>
                    </div>
                    <div className="col-6 justify-content-center">
                        <div className="box">
                        <FontAwesomeIcon icon={faPeopleArrows} className="icons"/>
                            <span className='txt1'>Daily Mock Interviews</span>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6 justify-content-center Mainbox1">
                        <div className="box" style={{backgroundColor:"aqua"}}>
                        <FontAwesomeIcon icon={faAtom} className="icons"/>
                            <span className='txt1'>HR Discussion and Soft Skill</span>
                        </div>
                    </div>
                    <div className="col-6 justify-content-center">
                        <div className="box" style={{backgroundColor:"coral"}}>
                        <FontAwesomeIcon icon={faUsersBetweenLines} className="icons"/>
                            <span className='txt1'>Collaborative Environment</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 justify-content-center Mainbox1">
                        <div className="box" style={{backgroundColor:"darkorange"}}>
                        <FontAwesomeIcon icon={faGlobe} className="icons"/>
                            <span className='txt1'>Regular Updates on Industry Trends</span>
                        </div>
                    </div>
                    <div className="col-6 justify-content-center">
                        <div className="box" style={{backgroundColor:"violet"}}>
                        <FontAwesomeIcon icon={faLaptopFile} className="icons"/>
                            <span className='txt1'>Flexible Learning Schedule</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 justify-content-center Mainbox1">
                        <div className="box" style={{backgroundColor:"darkcyan"}}>
                        <FontAwesomeIcon icon={faFile} className="icons"/>
                            <span className='txt1'>Resume Handling on Different Job Portals</span>
                        </div>
                    </div>
                    <div className="col-6 justify-content-center">
                        <div className="box" style={{backgroundColor:"coral"}}>
                        <FontAwesomeIcon icon={faPeopleGroup} className="icons"/>
                            <span className='txt1'>industry Guest Lectures</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 justify-content-center Mainbox1">
                        <div className="box" style={{backgroundColor:"lightgreen"}}>
                        <FontAwesomeIcon icon={faComment} className="icons"/>
                            <span className='txt1'>Feedback and Improvement Loop</span>
                        </div>
                    </div>
                    <div className="col-6 justify-content-center">
                        <div className="box" style={{backgroundColor:"springgreen"}}>
                        <FontAwesomeIcon icon={faHeadset} className="icons"/>
                            <span className='txt1'>dedicated support team is ready to assist you 24/7 </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2