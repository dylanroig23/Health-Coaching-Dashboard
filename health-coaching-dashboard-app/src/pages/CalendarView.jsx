import React, { Component } from "react";
import CalendarLayout from '../components/CalendarLayout';
import PageHeading from "../components/PageHeading";

export default class Calendar extends Component {
    render(){
    return (
      <div className="calendar-view">
        <PageHeading headingText="Program Calendar View" />  
        <CalendarLayout/> 
      </div>
    );
  }
}