import React from 'react';

const history_data = {
    yearly_info: [
        {
            id: 1, 
            year: "2000",
            title: "Journey Was Started",
            info: <>We believe the value that our functions add to a business with right root.</>,
        },
        {
            id: 1, 
            year: "2010",
            title: "Noman Design Award 2010",
            info: <>We believe the value that our functions add to a business with right root.</>,
        },
        {
            id: 1, 
            year: "2023",
            title: "Best Agency In World 2023",
            info: <>We believe the value that our functions add to a business with right root.</>,
        },
    ]
}
const { yearly_info } = history_data

const OurHistory = () => {
    return (
        <>
            <div className="tp-history-area pb-85 fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-xl-10 col-lg-12">
                            {yearly_info.map((item, i)  => 
                                <div key={i} className="tp-ab-4-right d-flex align-items-center">
                                    <h4 style={{ minWidth: "72px", textAlign: "right", marginRight: "24px" }}>{item.year}</h4>
                                    <div className="ab-4-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
                                    </div>
                                </div>                            
                            )}                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurHistory;