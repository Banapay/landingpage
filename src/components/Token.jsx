import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"
import meshGradient from "../assets/img/mesh-gradient.png"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Table } from 'react-bootstrap';

const distributionData = [
  { name: '<span style="color: rgba(255, 99, 132)">Presale:&nbsp;&nbsp;&nbsp;&nbsp;</span>', percentage: '10%', tokens: '20M' },
  { name: '<span style="color: rgba(54, 162, 235)">Marketing:&nbsp;&nbsp;</span>', percentage: '20%', tokens: '16M' },
  { name: '<span style="color: rgba(255, 206, 86)">Development:</span>', percentage: '30%', tokens: '10M' },
  { name: '<span style="color: rgba(55, 172, 172)">Team:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>', percentage: '30%', tokens: '10M' },
  { name: '<span style="color: rgba(153, 102, 255)">Liquidity:&nbsp;&nbsp;</span>', percentage: '30%', tokens: '34M' },
  { name: '<span style="color: rgba(255, 159, 64)">Airdrop:&nbsp;&nbsp;&nbsp;&nbsp;</span>', percentage: '30%', tokens: '10M' },
];

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Presale', 'Marketing', 'Development', 'Team', 'Liquidity', "Airdrop"],
  datasets: [
    {
      label: 'BANA Tokens',
      data: [20000000, 16000000, 10000000, 10000000, 34000000, 10000000],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const Token = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="token" id="token">
      <div className="container z-3">
        <div className="row">
          <div className="col-12">
            <div className="token-bx wow zoomIn">
              <h2>Token distribution</h2>
              <p>Enjoy cashback, unlock premium features, and influence platform changes through voting. Join us in shaping the future of decentralized finance through our token!</p>
              {/* Token contract address */}
              <div className="token-contract-address">
                <a href="https://solscan.io/token/9mEaVyPj1m15vY8Fr6CYHVvWvdAwfN5sf8FDBA5yac78" target="_blank">Contract: 9mEa...ac78 (SPL)</a>
              </div>

              <div className="token-meter">
                <div className="distribution-list">
                  <div className="distribution-list-row">
                    <p>Supply:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    |
                    <p style={{ marginLeft: '7px', marginRight: '7px' }}>100%</p>
                    |
                    <p>100M</p>
                  </div>
                  {distributionData.map((dist, index) => (
                    <div className="distribution-list-row">
                      <p dangerouslySetInnerHTML={{ __html: dist.name }}></p>
                      |
                      <p>{dist.percentage}</p>
                      |
                      <p>{dist.tokens}</p>
                    </div>
                  ))}
                </div>
                <div className="chart">
                  <Doughnut
                    data={data}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          // position: 'right',
                          display: false,
                          // labels: {
                          //   fontSize: 60,
                          //   boxWidth: 60,
                          //   boxHeight: 35,
                          //   padding: 20,
                          //   color: '#fff',
                          //   font: {
                          //     size: 26,
                          //     weight: 'bold',
                          //     family: 'monospace'
                            // }
                          // },
                          fontSize: 60,
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left img-fluid z-2 w-60" src={meshGradient} alt="Image" /> */}
    </section>
  )
}
