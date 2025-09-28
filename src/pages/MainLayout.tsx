import React from "react";
import IntroPages from "./IntroPages";

const MainLayout = () => {
  return (
    <div>
      <IntroPages />
    </div>
  );
};

export default React.memo(MainLayout);
