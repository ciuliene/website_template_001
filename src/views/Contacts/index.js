import React, { Component } from "react";
import "./style.css";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div className="contacts">
        <div className="contacts-box">
          <div className="contacts-mail">
            <h3>Conctact Us</h3>
            <div className="contacts-box-title">Name</div>
            <Input placeholder="Name..." />
            <div className="contacts-box-title mt-2">Email</div>
            <Input placeholder="Email..." />
            <div className="contacts-box-title mt-2">Subject</div>
            <Input placeholder="Subject..." />
            <div className="contacts-box-title mt-3">Message</div>
            <Input type="textarea" />
            <Link to="https://github.com/ciuliene">
              <Button className="mt-2">Send message</Button>
            </Link>
          </div>
          <div>
            <h3>Info</h3>
            <div className="contacts-info">
              <div>
                <div className="font-weight-bold">Company ABC</div>
                <div>2550 Jones Avenue</div>
                <div>Winston Salem, NC 27104</div>
                <div>United States</div>
              </div>

              <div>
                <div><span className="me-2 font-weight-bold">Phone:</span><span>+1 123-456-7890</span></div>
                <div><span className="me-2 font-weight-bold">Email:</span><span>info@example.com</span></div>
              </div>

              <div className="office-hours">
                <div className="mb-1 font-weight-bold">Office Hours:</div>
                <div>Monday - Friday:</div>
                <div>9:00 AM - 5:00 PM</div>
                <div className="mt-1">Saturday - Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
