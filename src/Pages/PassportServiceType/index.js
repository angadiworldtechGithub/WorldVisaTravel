import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Reqdouments from "../../Components/Reqdouments/Reqdouments";
import Renew from "../../Components/Renew/Renew";
import Replace from "../../Components/Replace/Replace";
import Newpassport from "../../Components/Newpassport/Newpassport";
import Secondpassport from "../../Components/Secondpassport/Secondpassport";
import Reissuance from "../../Components/Reissuance/Reissuance";
import Lostpassport from "../../Components/Lostpassport/Lostpassport";

import NotFoundPage from "../404";
function PassportServiceType() {
  let { serviceType } = useParams();
  useEffect(() => {
    console.log(serviceType);
  }, []);

  let page;
  switch (serviceType) {
    case "new-us-passport":
      page = <Reqdouments />;
      break;
    case "renew-us-passport":
      page = <Renew />;
      break;
    case "replace-mutilated-damaged-us-passport":
      page = <Replace />;
      break;
    case "new-us-passport-child":
      page = <Newpassport />;
      break;
    case "second-valid-us-passport":
      page = <Secondpassport />;
      break;
    case "re-issuance-us-passport":
      page = <Reissuance />;
      break;
    case "replace-lost-stolen-us-passport":
      page = <Lostpassport />;
      break;
    default:
      page = <NotFoundPage />;
  }

  return page;
}

export default PassportServiceType;
