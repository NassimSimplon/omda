import React, { useState } from "react";
import CardSection from "../../Components/CardSection";
import Modal from "../../selfMadeComponent/Modal/Modal";

const Home = () => {
  const [data,setData]= useState({
    email:"",
    password:""
  })

  const [error, setError] = useState("");

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // // Check if email is valid
    if (!emailRegex.test(data.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // If email is valid, reset error message
    setError("");

    // Proceed with form submission
    console.log("Form submitted successfully:", data);

    // imed().then((res)= if(res.data.status === 200  ){
    //   console.log("Form submitted successfully:", data);
    // })
  
  };


  return (

    <div>
      <CardSection />
      <Modal>
        <button>Open modal</button>
      </Modal>
      <div className="toast">
        <div className="child">Request Submitted successfully !!</div>
      </div>
      <form className="form"  onSubmit={handleSubmit}>
        <input type="email" onChange={(e)=>handleChange(e)} placeholder="Email"  />
        <input type="password"  onChange={(e)=>handleChange(e)}   placeholder="Password"  />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
