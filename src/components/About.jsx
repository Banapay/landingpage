import React from 'react';
import payments from "../assets/img/payment-illustration.svg";
import solanaPayment from "../assets/img/solana-payment.svg";
import openSource from "../assets/img/open-source.svg";
import shopping from "../assets/img/shopping.svg";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container z-3">
        <div className="tiles">
          <div className="tiles-row">
            <div className="tile">
              <div className="tile-content">
                <img src={payments} alt="Payments" />
                <p className="tile-title">Liberate Your Transactions</p>
                <p className="tile-subtitle">Receive payments directly into your wallet, ensuring that your funds remain secure and private. Your money, your control – no corporate interference.</p>
              </div>
            </div>
            <div className="tile">
              <div className="tile-content">
                <img src={openSource} style={{ marginTop: '40px' }} alt="Open Source" />
                <p className="tile-title">Embracing Open Source</p>
                <p className="tile-subtitle">No need for blind trust – verify the code yourself. We're open-source, putting transparency in your hands.</p>
              </div>
            </div>
          </div>
          <div className="tiles-row">
            <div className="tile">
              <div className="tile-content">
                <img src={solanaPayment} style={{ marginTop: '100px' }} alt="Solana Payments" />
                <p className="tile-title">Powered by Solana</p>
                <p className="tile-subtitle">Harness the scalability and speed of Solana, complemented by our commitment to security and freedom.</p>
              </div>
            </div>
            <div className="tile">
              <div className="tile-content">
                <img src={shopping} style={{ marginTop: '24px' }} alt="Shopping" />
                <p className="tile-title">Crypto-Friendly Shopping</p>
                <p className="tile-subtitle">Explore the world of crypto-enabled shopping. Effortlessly make online purchases or pay in-store using our versatile terminals, anytime and anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
