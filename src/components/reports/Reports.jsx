import React from 'react';

import ReportRow from './ReportRow';

const Reports = ({ reports }) => {
    return (
        <div id = "reportBlock">
            <h3 className = "blockHeader">Результат</h3>
            {reports.map(report => (
                <ReportRow 
                    key = {report.id}
                    report = {report} 
                />
            ))}
        </div>
    )
}
 
export default Reports;