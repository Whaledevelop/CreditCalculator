import React, { Component } from 'react';
import { connect } from 'react-redux'
 
import reportsValues from "../modules/reportsValues"
import ReportBlock from "../components/ReportBlock";

class ReportBlockContainer extends Component {
    render() { 
        return <ReportBlock reports = {this.props.reports}/>
    }
}

const mapStateToProps = (state) => {
    const inputValues = state.inputs.map(input => {
        return input.value
    })
    return {
        reports: state.reports.map(report => {
            report.value = reportsValues(inputValues)[report.id - 1]
            return report
        })
    }
}

export default connect(
    mapStateToProps
)(ReportBlockContainer);