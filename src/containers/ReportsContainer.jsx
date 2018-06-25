import React from 'react';
 
import inputsToReports from "../modules/inputsToReports"
import Reports from "../components/reports/Reports";

const reportsProps = [
    { "id": 1, "label": "Сумма кредита", "unit": "руб."},
    { "id": 2, "label": "Сумма возврата", "unit": "руб."},
    { "id": 3, "label": "Переплата", "unit": "руб."},
    { "id": 4, "label": "Срок кредитования","unit": "мес."},
    { "id": 5, "label": "Процентная ставка", "unit": "% годовых"},
    { "id": 6, "label": "Сумма ежемесячного платежа", "unit": "руб."}
]

const ReportsContainer = ({ inputs }) => {  
    const reports = reportsProps.map(reportProps => {
        reportProps.value = inputsToReports(inputs).find(reportValues => (
            reportProps.id === reportValues.id
        )).value
        return reportProps
    })

    return (
        <Reports reports = {reports}/>
    )
}

export default ReportsContainer;