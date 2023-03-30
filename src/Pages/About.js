import React, { useState } from "react";
import NavBar from "../Component/NavBar";
import "../Styles/about.css";
import { ExChange, StoryImage, Ustd } from "../Util/StoryImage";
import Chart from "react-apexcharts";

const About = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["MAR 22", "MAR 23", "MAR 24", "MAR 25"],
      },
    },
    series: [
      {
        name: "serise-1",
        data: [50, 100, 150, 200, 250],
      },
    ],
  });
  return (
    <div>
      <NavBar />

      <section id="about">
        <div className="about_head">
          <div className="ab_head_one">
            <div>
              <StoryImage />
            </div>
            <div className="ab_st_pri">
              <h2>Story</h2>
              <p>story price (story)</p>
            </div>
          </div>
          <div className="ab_head_two">
            <div className="ab_price">
              <h2>$0.0006566</h2>
              <p>52%</p>
            </div>
          </div>
        </div>

        <div className="ab_st_content">
          <h2>STORY Price Live Data</h2>
          <p>
            The live Story price today is $0.000644 USD with a 24-hour trading
            volume of $79,116.59 USD. We update our STORY to USD price in
            real-time. Story is down 12.14% in the last 24 hours. $STORY is a
            utility token on the Binance Smart Chain and it is used to fund
            stories. We're going against the grain of a culture where projects
            hop from contract to contract, in an attempt to keep up with the
            latest trend.
          </p>
        </div>

        <div className="ab_usdt_ch">
          <h2>STORY to USDT Chart</h2>
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="400"
          />
        </div>

        <div className="ab_exChange">
          <h3>STORY to USD Converter</h3>

          <div className="ab_ex_box">
            <div className="ab_ex_box_one">
              <div className="ab_b0x">
                <StoryImage />
                <div className="ab_ch">
                  <h4>Story</h4>
                  <p>Story Token</p>
                </div>
              </div>
              <h1>1</h1>
            </div>
            <div className="ab_ex_box_two">
              <div className="ab_ex_b1x">
                <Ustd />
                <div>
                  <h4>USD</h4>
                  <p>United States Dallar</p>
                </div>
              </div>
              <h2>0.00019</h2>
            </div>
          </div>
          <div className="exch">
            <ExChange />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
