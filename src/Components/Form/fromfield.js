import React, { useState } from "react";
import { Menu, Form ,Button,Radio} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
const FormField = () => {
    const [selectDate ,setSelectDate] = useState (null);
  return (
    <Menu>
      <Form>
        <Menu.Item className="form-text-group">
            Group
            </Menu.Item>
        <Form.Field>
              <input name="title" className="input-group" />
            </Form.Field>
            <Menu.Item className="form-text-configuration">
            Configuration
            </Menu.Item>
        <Form.Field>
              <input name="title" className="input-configuration" />
            </Form.Field>
            <Menu.Item className="form-text-date">
               Date
            </Menu.Item>
        <Form.Field>
            <Menu.Item className="input-date">
        <DatePicker
               className="datepicker"
               selected={selectDate}
               onChange={date =>setSelectDate (date)}
               placeholderText={'dd/mm/yyyy'} 
               
              />
              </Menu.Item>
            </Form.Field>
            <Menu.Item className="form-text-instructions">
            Filling Instructions
            </Menu.Item>
            <Form.Field>
            <textarea
                className="text-instructions"
                placeholder="(Refer to EYEng/TS/8382/Instruction Issue 01/ April 2015 in eDOC"
              />
            </Form.Field>
         
            <Menu.Item className="form-text-ei">
            EI NO
            </Menu.Item>
            <Form.Field>
            <textarea
                className="text-ei"
              />
            </Form.Field>
            <Menu.Item className="form-text-revision">
            Revision
            </Menu.Item>
            <Form.Field>
            <textarea
                className="text-revision"
              />
            </Form.Field>
            <Menu.Item className="form-text-customer">
            Customer
            </Menu.Item>
        <Form.Field>
              <input name="title" className="input-customer" />
            </Form.Field>
            <Menu.Item className="form-text-account">
            A/C Type
            </Menu.Item>
        <Form.Field>
              <input name="title" className="input-account" />
            </Form.Field>
            <Menu.Item className="form-text-compilance">
            Compliance
            </Menu.Item>
        <Form.Field>
              <input name="title" className="input-compliance" />
            </Form.Field> 
            <Menu.Item className="form-text-documents">
            Source Documents
            </Menu.Item>
        <Form.Field>
              <input name="title" className="input-documents" />
            </Form.Field>  
           
                <Button className="add-button">
                ADD DOCUMENT
                </Button>
                <Menu.Item className="form-text-list">
                Effectivity List
            </Menu.Item>
        <Form.Field>
              <input name="title" className="input-list-1" placeholder="A/C MSN" />
            </Form.Field> 
            <Form.Field>
              <input name="title" className="input-list-2" placeholder="A/C Registration"/>
            </Form.Field> 
            <Form.Field>
              <input name="title" className="input-list-3" placeholder="Serial No" />
            </Form.Field> 
            <Form.Field>
              <input name="title" className="input-list-4" placeholder="Serial No"/>
            </Form.Field> 
            <Button className="aircraft-button">
            ADD AIRCRAFT
            </Button>
            <div></div>
            <Menu.Item className="form-text-mandated">
            Mandated By:
            </Menu.Item>
            <div className="radio-button-1">
            <Form.Field>
              <Radio
                className="margin-right"
                label="Company"
                name="radioGroup"
              />
            </Form.Field>
            <Form.Field>
              <Radio
                className="margin-right"
                label="AD"
                name="radioGroup"
              />
            </Form.Field>
 
            <Form.Field>
              <Radio
                label="N/A"
                name="radioGroup"
              />
            </Form.Field>
            </div>
            <Menu.Item className="form-text-trades">
            Trades/Skills:
            </Menu.Item>
            <div className="radio-button-2">
            <Form.Field>
              <Radio
              className="margin-right"
                label="Avionics"
                name="radioGroup"
              />
            </Form.Field>
            <Form.Field>
              <Radio
              className="margin-right"
                label="Airframe"
                name="radioGroup"
              />
            </Form.Field>
            <Form.Field>
              <Radio
              className="margin-right"
                label="Power Plant"
                name="radioGroup"
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Others..."
                name="radioGroup"
              />
            </Form.Field>
            </div>
            <Menu.Item className="form-text-location">
            Location:
            </Menu.Item>
            <div className="radio-button-3">
            <Form.Field>
              <Radio
                className="margin-right"
                label="Hangar"
                name="radioGroup"
              />
            </Form.Field>
            <Form.Field>
              <Radio
              className="margin-right"
                label="Line"
                name="radioGroup"
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Shop"
                name="radioGroup"
              />
            </Form.Field>
            </div>
            <Menu.Item className="form-text-duplicate">
            Duplicate Insp. required:
            </Menu.Item>
            <div className="radio-button-4">
            <Form.Field>
              <Radio
              className="margin-right"
                label="Yes"
                name="radioGroup"
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="No"
                name="radioGroup"
              />
            </Form.Field>
            </div>
            <Menu.Item className="form-text-affected">
            ETOPS Affected:
            </Menu.Item>
            <div className="radio-button-5">
            <Form.Field>
              <Radio
              className="margin-right"
                label="Yes"
                name="radioGroup"
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="No"
                name="radioGroup"
              />
            </Form.Field>
            </div>
            <Menu.Item className="form-text-report">
            Report to be returned to:
            </Menu.Item>
            <div className="radio-button-6">
            <Form.Field>
              <Radio
              className="margin-right"
                label="DE&I"
                name="radioGroup"
              />
            </Form.Field>
            <Form.Field>
              <Radio
              className="margin-right"
                label="Customer"
                name="radioGroup"
              />
            </Form.Field>

            <Form.Field>
              <Radio
                label="N/A"
                name="radioGroup"
              />
            </Form.Field>
            </div>
           <Button className="edit">
           Edit 
           </Button>
           <Button className="clear">
            Clear
            </Button>
            <Link to={"/formfield2"}>
            <Button className="next">
              Next
            </Button>
            </Link>
      </Form>
    </Menu>
  );
};

export default FormField;
