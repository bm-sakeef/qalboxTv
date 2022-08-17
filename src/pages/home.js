import React from "react";

// Css
import Button from "../components/button";

// Modules
import { connect } from "react-redux";

function Home(props) {
  return (
    <div className="container center">
      <h2>Qalbox</h2>
      <h6 style={{ margin: 0 }}>
        Welcome to Qalbox
      </h6>
      <h6 style={{ margin: 0 }}>v1.1.0</h6>

      <Button focus={() => props.setIsFocusedInSideBar(false)} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsFocusedInSideBar: (data) => {
      dispatch({
        type: "SET_FOCUSED_SIDEBAR",
        focused: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
