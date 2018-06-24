import React from 'react';
import { connect } from 'react-redux'
 
import inputsToReports from "../modules/inputsToReports"
import Reports from "../components/reports/Reports";

const reportsProps = [
    { "id": 1, "label": "Вы берете", "unit": "руб.",
    "min": 20000, "max": 3000000},
    { "id": 2, "label": "Вы возвращаете", "unit": "руб."},
    { "id": 3, "label": "Переплата", "unit": "руб."},
    { "id": 4, "label": "Срок кредитования","unit": "мес.",
    "min": 1, "max": 60},
    { "id": 5, "label": "Процентная ставка", "unit": "% годовых",
    "min": 1, "max": 30},
    { "id": 6, "label": "Сумма ежемесячного платежа", "unit": "руб."}
]

const ReportsContainer = ({ creditProps }) => {  
    const reports = reportsProps.map(report => {
        report.value = inputsToReports(creditProps).find(reportValues => (
            report.id === reportValues.id
        )).value
        return report
    })
    return (
        <Reports reports = {reports}/>
    )
}
    

const mapStateToProps = (state) => {
    return {
        creditProps: state.creditProps
    }
}

export default connect(
    mapStateToProps
)(ReportsContainer);