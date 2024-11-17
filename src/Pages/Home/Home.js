import React from "react";
import CardSection from "../../Components/CardSection";
import Modal from "../../selfMadeComponent/Modal/Modal";

const Home = () => {
  return (
    <div>
      <CardSection />
      <Modal>
        <button>Open modal</button>
      </Modal>
      <div className="toast">
        <div className="child">Request Submitted successfully !!</div>
      </div>
    </div>
  );
};

export default Home;
