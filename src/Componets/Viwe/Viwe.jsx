import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router';

const getData = () => {

    const data = localStorage.getItem("empData");

    if (data != null) {

        return JSON.parse(data);

    }
    else {

        return [];
    }

}

function viweData(){
    const navigate = useNavigate();
    const location = useLocation();
    const [inputValue, setInputValue] = useState(location.state.single)
    const ndata = getData();

 return ndata[location.state.index] = inputValue;
}
function Viwe() {

    
    const location = useLocation();

    const ndata = location.state.single;


    






  return (
<Container>




  <div class="Card-Container">

    <div class="Main-Card">
    
    </div>
    
    <div class="Result-DES">
    
      <h3 class="Sum-Top ">Student information</h3>
      <div class="Reaction">
    
        <p class="Reac">Full Name</p>
        <p class="Reac-Score">{ndata.fname + ndata.lname}</p>
      </div>
      <div class="Reaction">
    
        <p class="Reac">Email</p>
        <p class="Reac-Score">{ndata.email}</p>
      </div>
      <div class="Memory">
        
        <p class="Memo">Phone</p>
        <p class="Memo-Score">{ndata.contact}</p>
      </div>
      <div class="Verbal">
        
        <p class="Verb">Cource</p>
        <p class="Verb-Score">{ndata.cource}</p>
      </div>
      <div class="Visual">

        <p class="Vis">Password</p>
        <p class="Vis-Score">{ndata.password}</p>
      </div>
    
 
    <div class="Continue-BTN">
       <a class="Continue" href='viewData'>Back</a>
    </div>
    </div>

  </div> 
 

 </Container>
  )
}

export default Viwe