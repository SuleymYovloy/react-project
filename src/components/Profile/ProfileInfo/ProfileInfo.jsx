import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          src="https://wowslider.com/sliders/demo-42/data1/images/lighthouse.jpg"
          className={s.profileBg}
        ></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
