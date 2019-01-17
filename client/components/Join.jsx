import React from 'react';
import { handleJoinSubmit, handleChange,  } from '../actions/actions';
// import { Form, Text } from 'informed';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const Join = (props) => {
  const { handleChange, handleJoinSubmit, name, currentText } = props;
  console.log('value', );
  return (
    <div className="input-field">
      <form id="simple-form" onSubmit={handleJoinSubmit}>
        <label htmlFor="name-field">Enter Name: </label>
        <input type="text" id="name-field" placeholder="Enter your name..." onChange={handleChange} value={currentText}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

// const Join = (props) => {
//   const { handleChange, handleJoinSubmit, name, currentText } = props;
//   console.log('Entered Join');
//   return (
//     <div className="input-field">
//       <Form id="simple-form" onSubmit={handleJoinSubmit}>
//         <label htmlFor="name-field">Enter Name: </label>
//         <Text field="name" id="name-field" placeholder="Enter your name..." onChange={handleChange} value={currentText}/>
//         <button type="submit">
//           Submit
//         </button>
//       </Form>
//     </div>
//   )
// };

const mapStateToProps = (state) => {
  return {
    currentText: state.game.currentText
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleChange: handleChange,
    handleJoinSubmit: handleJoinSubmit
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Join);
