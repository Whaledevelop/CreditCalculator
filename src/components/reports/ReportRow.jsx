import React from 'react';

import UnitHandler from '../../components/app/UnitHandler'

const ReportRow = ({report}) => {
  return (  
    <div 
      key = {report.id}
      className = "reportRow"
    >
      <div style = {{ width: "50%" }}>{report.label}</div>
      <div style = {{ paddingLeft: "25px"}}>
        <strong style = {{ fontSize: "19px" }}>
          {Math.round(report.value).toLocaleString()}
        </strong>
        <UnitHandler/>
      </div>
    </div>
  );
}
 
export default ReportRow;