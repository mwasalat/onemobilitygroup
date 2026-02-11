import Count from "@/src/common/count";
import React from "react";

const fact_data = [
  {
    id: 1,
    counte: 26,
    suffix: "+",
    titile: "Years Experiences",
  },
  {
    id: 2,
    counte: 3.6,
    suffix: "+",
    titile: "Yearly Customers",
    decimal: true,
  },
  {
    id: 3,
    counte: 46,
    suffix: "+",
    titile: "Visitors daily",
  },
  {
    id: 4,
    counte: 56,
    suffix: "+",
    titile: "Awards & honors",
  },
];

const FactArea = () => {
  return (
    <>
      <div className="tp-fact-area theme-bg pt-70 pb-40">
        <div className="container">
          <div className="row counter-row">
            {fact_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div className="tp-fact mb-10">
                  <div className="fact-number">
                    <h2 className="counter">
                      {item.decimal ? (
                        <span>{item.counte}</span>
                      ) : (
                        <Count number={item.counte} />
                      )}
                    </h2>
                    <span className="per">{item.suffix}</span>
                  </div>
                  <div className="fact-content">
                    <h4>{item.titile}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FactArea;
