import React from "react";
import Slogan from "./UI/Slogan";

const StatsPreview = () => {
  return (
    <div>
      <div className="d-flex flex-row">
        <img
          src="images/boy-and-girl.svg"
          alt="guys"
          style={{ marginLeft: 370 }}
        />
        <div
          className="slogan"
          style={{ gap: "34px" }}
        >
          <Slogan
            main={"Watch your progress every day"}
            bottom={
              "Save statistics on your achievements, words learned, and mistakes"
            }
            img={"images/stat-button.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsPreview;
