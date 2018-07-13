import React from 'react';
import {connect} from 'react-redux'

import ReportsBlock from '../components/reports/RebortsBlock';
 
const ReportsBlockContainer = ({ reports }) => {
  return (  
    <ReportsBlock
      reports = {reports}
    />
  );
}

const reportsProps = [
  { "id": 1, "label": "Сумма кредита", "unit": "руб."},
  { "id": 2, "label": "Сумма возврата", "unit": "руб."},
  { "id": 3, "label": "Переплата", "unit": "руб."},
  { "id": 4, "label": "Срок кредитования","unit": "мес."},
  { "id": 5, "label": "Процентная ставка", "unit": "% годовых"},
  { "id": 6, "label": "Сумма ежемесячного платежа", "unit": "руб."}
]

const calculateReportsValues = ([creditSum, period, percent]) => {
  const monthlyRate = percent.value / 12 / 100;
  const regularPayment = (creditSum.value * monthlyRate) / 
  (1 - (1 / Math.pow((1 + monthlyRate), period.value)))
  const returnSum = regularPayment * period.value;
  const overPayment = returnSum - creditSum.value;
  return [
    {id: 1, value: creditSum.value} , 
    {id: 2, value: returnSum}, 
    {id: 3, value: overPayment}, 
    {id: 4, value: period.value}, 
    {id: 5, value: percent.value}, 
    {id: 6, value: regularPayment}
  ]
}

const mapStateToProps = state => {
  const reportsValues = calculateReportsValues(state.creditPropsValues);
  const reports = reportsProps.map(reportProp => {
    reportProp.value = reportsValues.find(reportValue => (
        reportProp.id === reportValue.id
    )).value
    return reportProp
  })
  return {
    reports: reports
  }
}
 
export default connect(
  mapStateToProps
)(ReportsBlockContainer);