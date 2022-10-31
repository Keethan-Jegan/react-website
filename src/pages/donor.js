import React from 'react';
  
const Donor = () => {
  return (
    <div>
      <h1>Enter the Donor details</h1>
      <form>
      <label>Donor National ID:</label>
      <input type="text" required/> <br/>

      <label>Donor name:</label>
      <input type="text" required/> <br/>
    
      <label>Donor Date of birth:</label>
      <input type="date" required/> <br/>

      <label>Gender:</label>
      <select>
       <option value="M">Male</option>
       <option value="F">Female</option>
      </select> <br/>

      <label>Address:</label>
      <input type="text" required/> <br/>

      <label>District:</label>
      <input type="text" required/> <br/>

      <label>Telephone number:</label>
      <input type="number" required/> <br/>

      <label>Blood group:</label>
      <input type="text" required/> <br/>
   
      <label>Last donation Date:</label>
      <input type="Date" required/> <br/>

      <label>Donor Weight:</label>
      <input type="number" required/> <br/>

      <label>Haemoglobin Level:</label>
      <input type="text" required/> <br/>

      <input type="submit" value="Submit" />
      </form>

    </div>
  );
};
  
export default Donor;