import React, {useState} from "react";
import styled from "styled-components";
import Logo from "./logo.svg"
import Api from "./API/Api"

function App() {

 const [data, setData] = useState([ ])

 const fetchData = async(searchText) => {
    const res = await Api.get(`/getdb?q=${searchText}`)
    setData(res.data.data)
 }
 const handleChange = (e) =>{
   const value = e.target.value
   if (value) {
     fetchData(value)
   } else {
     setData([])
   }
 }
 console.log(data)



  return (
    <StyledSection>
      <div className="header">
        <img src={Logo} alt="kombo-logo" className="kombo-logo" />
        <h1 className="header-text">Search</h1>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search"
          className="input-search"
          onChange={handleChange}
        />
      </div>
      <div className="result">{data.map(d => <p key={d.id}>{d.name}</p>)} </div>
    </StyledSection>
  );
}

const StyledSection = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    align-items: flex-end;
  }
  .header-text {
    color: white;
    padding-bottom: 6px;
  }
  img {
    width: 200px;
    height: 100px;
  }
  .input-container {
    display: flex;
    width: 600px;
  }
  input {
    border: none;
    height: 24px;
    width: 100%;
    border-radius: 4px;
    border: transparent;
    padding: 8px;
    font-size: 16px;
    background-color: none;
    outline: none;
    appearance: none;
    flex: 1;
  }
  input:focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .result {
    background-color: white;
    width: 600px;
    border-radius: 8px;
    border-top-right-radius:4px;
    border-top-left-radius:4px;
    margin-top: 0.5px;
    p {
      color: #208cfb;
      font-weight: 600;
      padding-left: 10px;
    }
  }
  @media (max-width: 600px) {
    .input-container {
      width: 90%;
    }
    .result {
      width: 90%;
    }

  }
`;


export default App;
