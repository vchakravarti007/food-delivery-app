import { Button, TextField } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="conatiner-2">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p>
            We value your feedback and inquiries. If you have any questions,
            concerns, or feedback, please don't hesitate to contact us. Our
            dedicated team is ready to assist you and provide the information
            you need. Whether it's through phone, email, live chat, social
            media, or visiting our office, we're here to ensure your experience
            with us is exceptional. Your satisfaction is important to us, and we
            look forward to hearing from you
          </p>
        </div>
        <div className="contact-img">
          <img
            src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="contact-details">
          <h2>
            Feel up the form and our team will get back to <br /> you within 24
            hours
          </h2>
          <div className="contact-details-info">
            <p>
              <LocalPhoneIcon /> +91 9999999999
            </p>
            <p>
              <EmailIcon /> test@gmail.com
            </p>
            <p>
              <LocationOnIcon /> Test
            </p>
          </div>
        </div>
        <form action="">
          <div>
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              required
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              label="Phone"
              type="number"
              variant="standard"
              required
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Message"
              variant="standard"
              required
            />
          </div>
          <Button variant="contained" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
