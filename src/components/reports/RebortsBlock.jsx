import React from 'react';

import ReportRow from './ReportRow'
import '../../css/reports.css'

const ReportsBlock = ({reports}) => (  
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
 
export default ReportsBlock;