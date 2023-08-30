import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
function VisaRequirements() {
  let params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);
  return <div>{VisaRequirements}</div>;
}

export default VisaRequirements;
