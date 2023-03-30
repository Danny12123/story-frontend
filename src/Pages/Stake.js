import React, { useState } from "react";
import NavBar from "../Component/NavBar";
import "../Styles/stake.css";
import Chart from "react-apexcharts";
import Emoji from "../Util/Emoji";
import { GrClose } from "react-icons/gr";

const Stake = () => {
  const [isActive, setIsActive] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "MAR 22",
          "MAR 23",
          "MAR 24",
          "MAR 25",
        ],
      },
    },
    series: [
      {
        name: "serise-1",
        data: [ 50, 100, 150, 200, 250],
      },
    ],
  });

  const handleShowSt = () => {
    setIsActive(!isActive);
  };
  const handleStakeNow = () => {
    setProceed(!proceed);
  };
  return (
    <div>
      <NavBar />
      <section className="holder_st">
        <section>
          <div className="stake_header">
            <h1>
              Relax while Story token <br /> works for you
            </h1>
            <p>Make up to 28% of passive income with our SMART Staking</p>
          </div>
        </section>

        <section id="st_num">
          <div>
            <div className="st_numbers">
              <div className="st_num_item">
                <p>Total $STORY Staked</p>
                <h3>4,998,235,323</h3>
              </div>
              <div className="st_num_item">
                <p>Total Points generated</p>
                <h3>235,323</h3>
              </div>
              <div className="st_num_item">
                <p>APY rate</p>
                <h3>0.66%</h3>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="st_amo_display">
            <div className="st_amount">
              <div className="st_amo_header">
                <h6>Staking</h6>
                <h6 style={{ color: "#7D7D7D" }}>Claiming</h6>
              </div>
              <div className="st_amo_input">
                <label>Amount</label>
                <input type="number" />
              </div>
              <div className="st_amo_point">
                <div className="st_am0_point_1">
                  <p>Initial Points for staking</p>
                  <h5>1,222,333 points</h5>
                </div>
                <div className="st_am0_point_1">
                  <p>Point generated APY</p>
                  <h5>333 point</h5>
                </div>
              </div>
              <button onClick={handleShowSt}>Stake</button>
            </div>
            <div className="st_display">
              <div className="st_display_header">
                <p>Staking overview</p>
                <select>
                  <option value="" key="">
                    Last week
                  </option>
                  <option value="" key="">
                    Last week
                  </option>
                  <option value="" key="">
                    Last week
                  </option>
                </select>
              </div>
              <div className="mixed-chart">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="area"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="st_step">
            <h3>Stake in 3 steps:</h3>
            <ul>
              <ol>
                Make a deposit to your <br /> story token wallet
              </ol>
              <ol>
                Select any staking plan of <br /> your choice
              </ol>
              <ol>
                Stake and start earning <br /> interest
              </ol>
            </ul>
          </div>
        </section>

        <section>
          <div className="st_plan">
            <h3>Select a staking plan</h3>
            <div className="st_plan_holder">
              <div>
                <h4 style={{ color: "#FD169C", fontSize: "22px" }}>
                  Basic Story Stake
                </h4>
                <h6>10-30 days</h6>
                <p style={{ fontSize: "14px" }}>
                  Earn up to <span style={{ color: "#FD169C" }}> 6% APR </span>{" "}
                  by staking your story token for 10-30 days
                </p>
              </div>
              <div>
                <h4 style={{ color: "#3C38E3", fontSize: "22px" }}>
                  Basic Story Stake
                </h4>
                <h6>10-30 days</h6>
                <p style={{ fontSize: "14px" }}>
                  Earn up to <span style={{ color: "#3C38E3" }}>6% APR</span> by
                  staking your story token for 10-30 days
                </p>
              </div>
              <div>
                <h4 style={{ color: "#2B8F68", fontSize: "22px" }}>
                  Basic Story Stake
                </h4>
                <h6>10-30 days</h6>
                <p style={{ fontSize: "14px" }}>
                  Earn up to <span style={{ color: "#2B8F68" }}>6% APR</span>by
                  staking your story token for 10-30 days
                </p>
              </div>
              <div>
                <h4 style={{ color: "#8631C4", fontSize: "22px" }}>
                  Basic Story Stake
                </h4>
                <h6>10-30 days</h6>
                <p style={{ fontSize: "14px" }}>
                  Earn up to <span style={{ color: "#8631C4" }}>6% APR</span> by
                  staking your story token for 10-30 days
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section
        className={isActive ? "pop_up" : "pop_up_disactive"}
        
      >
        <div className={proceed ? "st_pop-up-active" : "st_pop-up"}>
          <div className="st_pop_holder">
            <h4>Smart Stake for 10-30 days</h4>
            <p>
              Smart stake for 10-30 days, if you withdraw your token before the
              end of the stake date, you will not recieve any interest.
            </p>
            <div className="st_holder_box">
              <h6>Amount you want to stake</h6>
              <input type="text" placeholder="50 Story token" />
              <p>You have 20,000 Storytoken </p>

              <label>Select Stake Period</label>
              <input type="text" placeholder="Pick a stake period" />

              <label>Earning APY</label>
              <input type="text" placeholder="obtained from token staked" />

              <label>Give your stake a title</label>
              <input type="text" placeholder="Enter Stake title" />

              <button onClick={handleStakeNow}>STAKE NOW</button>
            </div>
          </div>
        </div>
        <div
          className={proceed ? "st_pop_up_compl" : "st_pop_up_compl_disactive"}
        >
          <GrClose className="stake_close" onClick={handleShowSt} />
          <div>
            <Emoji style={{ fontSize: "50px" }} />
            <p>
              You are about to stake 20,000 $tory Token, are you sure you want
              to <br /> proceed?
            </p>
            <button>Proceed</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stake;
