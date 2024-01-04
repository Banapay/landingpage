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
  { name: 'Presale:&nbsp;&nbsp;&nbsp;&nbsp;', percentage: '10%', tokens: '20000000' },
  { name: 'Marketing:&nbsp;&nbsp;', percentage: '20%', tokens: '16000000' },
  { name: 'Development:', percentage: '30%', tokens: '10000000' },
  { name: 'Team:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', percentage: '30%', tokens: '10000000' },
  { name: 'Liquidity:&nbsp;&nbsp;', percentage: '30%', tokens: '34000000' },
  { name: 'Airdrop:&nbsp;&nbsp;&nbsp;&nbsp;', percentage: '30%', tokens: '10000000' },
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
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="chart">
                <Doughnut
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right',
                        labels: {
                          fontSize: 60,
                          boxWidth: 60,
                          boxHeight: 35,
                          padding: 20,
                          color: '#fff',
                          font: {
                            size: 26,
                            weight: 'bold',
                            family: 'monospace'
                          }
                        },
                        fontSize: 60,
                      }
                    }
                  }}
                />
              </div>
              <div className="distribution-list">
                <div className="distribution-list-row">
                  <p>Supply:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                  |
                  <p style={{ marginLeft: '7px', marginRight: '7px' }}>100%</p>
                  |
                  <p>&nbsp;10000000</p>
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
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left img-fluid z-2 w-60" src={meshGradient} alt="Image" /> */}
    </section>
  )
}
