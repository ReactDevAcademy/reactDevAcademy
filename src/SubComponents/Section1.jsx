import React from 'react'
import Image1 from "../assets/img/image3.png"
const Section1 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row  bg-primary" >
                    <div className="col-5">
                        <div className="container1"></div>
                    </div>
                    <div className="col-7">
                        <div className="container2">
                            <img src={Image1} alt="" style={{ height: "486px", width: "715px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1