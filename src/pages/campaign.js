import React from 'react';
  
const Campaign = () => {
  return (
    <div>
      <h1>Welcome to Blood donation Campaign</h1>
      <form>

      <label>Campaign name:</label>
      <input type="text" required/> <br/>

      <label>Campaign location:</label>
      <input type="text" required/> <br/>

      <label>Campaign date:</label>
      <input type="date" required/> <br/>

      <label>Campaign Time:</label>
      <input type="time" required/> <br/>

     
      <label>Campaign status:</label>
      <select>
       <option value="Y">Yes</option>
       <option value="N">No</option>
      </select> <br/>


      <input type="submit" value="Submit" />

    
      </form>
    </div>
  );
};
  
export default Campaign;