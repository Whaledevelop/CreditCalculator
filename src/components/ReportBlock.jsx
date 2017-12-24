import React from 'react';

import moneyView from '../modules/moneyView'
import unitHandler from '../modules/unitHandler'

const ReportBlock = ({ reports }) => {
    return (
        <div id = "reportBlock">
            <h3 className = "blockHeader">Результат</h3>
                {reports.map(report => {
                    return (
                        <div 
                            key = {report.id}
                            className = "reportString"
                        >
                            <div style = {{ width: "50%" }}>{report.label}</div>
                            <div style = {{ paddingLeft: "25px"}}>
                                <strong style = {{ fontSize: "19px" }}>
                                    {moneyView(report.value)}
                                </strong>
                                <span className = "unitSpan">
                                    {unitHandler(report.value, report.unit)}
                                </span>  
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
 
export default ReportBlock;