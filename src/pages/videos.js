import React from "react";

import Button from "../components/button";

import Card from "../components/card";

// Modules
import { connect } from "react-redux";

const posters = [
  "https://download.muslimpro.com/images/qalbox/en/preview/large/LMOP_Preview_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/Delisa_Preview_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/MenAroundTheProphet_Preview_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/LMOP_preview_image_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/potm_preview_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/Men-Of-Hope_preview_image_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/MetropolisSyria_preview_image_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/OttomansvsChristians_BattleforMediterranean_preview_image_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/GuestsofMostMerciful-Preview_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/Oases_preview_image_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/ArabiaMotors_preview_image_large.jpg",
  "https://download.muslimpro.com/images/qalbox/en/preview/large/OttomansvsChristians_BattleforMediterranean_preview_image_large.jpg",
];

function Videos(props) {
  const renderCards = () => {
    let array = [];

    posters.forEach((image) => {
      array.push(
        <Card
          onClick={() => props.setSidebarHidden(true)}
          key={image}
          to="videos/player"
          focus={() => props.setIsFocusedInSideBar(false)}
          image={image}
        />
      );
    });
    return array;
  };

  return (
    <div className="container padding-left">
      <h2 style={{ zIndex: 3 }}>Videos</h2>
      <Button focus={() => props.setIsFocusedInSideBar(false)} />
      <h4 style={{ margin: 0 }}>Now Available!</h4>
      <div className="wrapper">{renderCards()}</div>
      <h4 style={{ margin: 0 }}>Popular!</h4>
      <div className="wrapper">{renderCards()}</div>
      <h4 style={{ margin: 0 }}>Action</h4>
      <div className="wrapper">{renderCards()}</div>
      <h4 style={{ margin: 0 }}>Drama</h4>
      <div className="wrapper">{renderCards()}</div>
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
    setSidebarHidden: (data) => {
      dispatch({
        type: "SET_SIDEBAR_HIDDEN",
        isHidden: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Videos);
