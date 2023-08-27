import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "./CountrySelect.css"

export default function App() {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  console.log("SELECT", select);
  return (
    <div className="App" >
    <div className="country_list_container">
    <div class="country_list_item">
      <ReactFlagsSelect className="Country_list" style={{display:"flex"}}
        selected={select}
        onSelect={onSelect} 
        countries={["AF","AL","DZ","AS","AD","AO","AI","AQ",
        "AG","AR","AM","AW","AU","AT","AZ",
        "BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BR","IO","BN","BG","BF","BI",
        "CV","KH","CM","CA","KH","CM","CA","KY","CF","TD","CL","CN","CX","CC","CO","KM","CD","CG","CK","CR","HR","CU","CW","CY","CZ","CI","DK","DJ","DM","DO","EC",
        "EG","SV","GQ","ER","EE","SZ","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP",
        "GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ",
        "KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MG","MW","MY","MV","ML","MT","MH","MQ","MR",
        "MU","YT","MX","FM","MD","MC","MN","ME","MA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS",
        "PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","CG","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST",
        "SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","KR","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ",
        "TZ","TH","TG","TK","TO","TT","TN","TR","TM","TC","TV","VI","UG","UA","AE","GB","US","UY","UZ","VU","VA","VE","VN","WF","EH",
        "YE","ZM","ZW"]}
      />
    </div>


  
    <div class="country_list_item">
      <ReactFlagsSelect className="Country_list"
      selected={select}
      onSelect={onSelect} 
      countries={["AF","AL","DZ","AS","AD","AO","AI","AQ",
      "AG","AR","AM","AW","AU","AT","AZ",
      "BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BR","IO","BN","BG","BF","BI","CV","KH","CM","CA","KH","CM",
      "CA","KY","CF","TD","CL","CN","CX","CC","CO","KM","CD","CG","CK","CR","HR","CU","CW","CY","CZ","CI","DK","DJ","DM","DO","EC",
      "EG","SV","GQ","ER","EE","SZ","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP",
      "GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ",
      "KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MG","MW","MY","MV","ML","MT","MH","MQ","MR",
      "MU","YT","MX","FM","MD","MC","MN","ME","MA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS",
      "PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","CG","RE","RO","RU","RW","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST",
      "SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","KR","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ",
      "TZ","TH","TG","TK","TO","TT","TN","TR","TM","TC","TV","VI","UG","UA","AE","GB","US","UY","UZ","VU","VA","VE","VN","WF","EH",
      "YE","ZM","ZW"]}
    />
    </div>


    <div class="country_list_item">
     <button style={{height:"40px",marginLeft:"20px",borderRadius:"30px",backgroundColor:"#000",color:"#fff"}}>GO</button>
    </div>
    </div>
    </div>
  );
}
