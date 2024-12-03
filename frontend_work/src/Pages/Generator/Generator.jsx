import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

const Generator = () => {

  const districts = [
    "",
    "Ariyalur",
    "Chengalpattu",
    "Chennai",  // 	13.073226-	80.260918
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris", //11.416667 -	76.683334
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  const handleGeneratePDF = async (event) => {
    event.preventDefault();
    const form = event.target.closest("form");


    const data = new FormData(form);
    const formValues = Object.fromEntries(data.entries());

    const doc = new jsPDF();
    Object.entries(formValues).forEach(([key, value], index) => {
      doc.text(20, 20 + index * 10, `${key}: ${value}`);
    });

    console.log(formValues);

    const pdfBlob = doc.output("blob");
    const file = new File([pdfBlob], "form-data.pdf", { type: "application/pdf" });

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:3320/generate", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading PDF:", error);
      alert("Error uploading PDF");
    }
  };



  const handleGenerateExcel = async (event) => {
    event.preventDefault();


    const form = event.target.closest("form");


    const data = new FormData(form);
    const formValues = Object.fromEntries(data.entries());
    console.log(data, "+_+_+_+_");


    const ws = XLSX.utils.json_to_sheet([formValues]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "FormData");
    const excelBlob = new Blob([XLSX.write(wb, { bookType: "xlsx", type: "array" })], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const file = new File([excelBlob], "form-data.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });


    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:3320/generate", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error uploading Excel:", error);
      alert("Error uploading Excel");
    }
  };



  const handleSubmit = () => {

  }



  return (
    <Form style={{ marginTop: 50 }} className="w-50 mx-auto" >
      <Form.Group controlId="eventName">
        <FloatingLabel className="mb-3" label="Event Name">
          <Form.Control name="eventName" type="text" required />
        </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="name">
        <FloatingLabel className="mb-3" label="Name">
          <Form.Control name="name" type="text" required />
        </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <FloatingLabel className="mb-3" label="Phone Number">
          <Form.Control name="phoneNumber" type="number" required min={6000000000} max={9999999999}/>
        </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="email">
        <FloatingLabel className="mb-3" label="Email">
          <Form.Control name="email" type="email" required />
        </FloatingLabel>
      </Form.Group>
      <Form.Group controlId="location">
        <FloatingLabel className="mb-3" label="Location">
          <Form.Select name="location" required>
            {districts.map((dis) => (
              <option key={dis} value={dis}>
                {dis}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
      {/* <Form.Group controlId="eventDate">
        <FloatingLabel className="mb-3" label="Event Date">
          <Form.Control name="date" type="date" min={new Date().toISOString().split("T")[0]} defaultValue={new Date().toISOString().split("T")[0]} required onChange={(e) => setFlagDate(e.target.value)} />
        </FloatingLabel>
      </Form.Group> */}
      <Form.Group controlId="eventDateAndTime">
        <FloatingLabel className="mb-3" label="Event Date & Time">
          <Form.Control name="time" type="datetime-local" min={new Date().toISOString().substring(0, 16)} defaultValue={new Date().toISOString().substring(0, 16)} required />
        </FloatingLabel>
      </Form.Group>
      <Row className="px-2">
        <Col xs={6}>
          <Button variant="dark" type="submit" onClick={handleGeneratePDF}>
            Generate PDF
          </Button>
        </Col>
        <Col xs={6}>
          <Button variant="dark" type="submit" onSubmit={handleGenerateExcel}>
            Generate Excel
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Generator;
