import React from 'react';

import unitHandler from '../../modules/unitHandler'

const ReportRow = ({ report }) => {
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
                <span className = "unitSpan">
                    {unitHandler(report.value, report.unit)}
                </span>  
            </div>
        </div>
    )
}
 
export default ReportRow;