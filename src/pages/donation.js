import React from 'react';
  
const Donation = () => {
  return (
    <div>
      <h1>Enter the donation details</h1>
      <form>

      <label>Donor id:</label>
      <input type="text" required/> <br/>

      <label>Campaign id:</label>
      <input type="text" required/> <br/>

      <label>Donor condition:</label>
      <input type="text" required/> <br/>

      <label>Blood state:</label>
      <input type="text" required/> <br/>
 

      <input type="submit" value="Submit" />
      </form>


    </div>
  );
};
  
export default Donation;