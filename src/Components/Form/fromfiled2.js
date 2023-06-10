import React from "react";
import { Button, Form, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FormField = () => {
  return (
    <Form>
      <Menu.Item className="iteam-caution">Operational Impact/Caution:</Menu.Item>
      <Form.Field>
        <input name="title" className="text-caution"/>
      </Form.Field>

      <Menu.Item className="iteam-comments">Revision Comment:</Menu.Item>
      <Form.Field>
        <input name="title" className="text-comments-field"/>
      </Form.Field>
      <Menu.Item className="iteam-description">Description:</Menu.Item>
      <Form.Field>
        <input name="title" className="input-description"/>
      </Form.Field>
      <Menu.Item className="iteam-notes">General Comments, notes or cautions:</Menu.Item>
      <Form.Field>
        <input name="title"  className="input-notes"/>
      </Form.Field>
      <Button className="edit-button-second"> Edit</Button>
      <Button className="clear-button-second"> Clear</Button>
      <Link to={"/"}>
        <Button className="previous-button"> Previous</Button>
      </Link>
      <Link to={"/thankyou"}>
        <Button className="submit-button ">Submit</Button>
      </Link>
    </Form>
  );
};

export default FormField;
