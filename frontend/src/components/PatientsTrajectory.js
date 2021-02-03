import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
 

const PatientsTrajectory = (props) => {
  // trajectory Data
  const [selectedFile, setSelectedFile] = useState(null);
  const [toggleView, setToggleView] = useState(false);

  // On file select (from the pop up)
  const onFileChange  = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    setToggleView(true);
    props.setPatientsTrajectory(selectedFile);
  };

  let fileView = selectedFile ? (
    <div>
          <br/>
           
<p>File Name: {selectedFile.name}</p>

           
<p>File Type: {selectedFile.type}</p>

           
<p>
            Last Modified:{" "}
            {selectedFile.lastModifiedDate.toDateString()}
          </p>

      </div>
  
) :(<div></div>);

let uploadView = toggleView ? (<p><br/>The Patient's Trajectory Submitted!</p>):(<div><br/><Button variant="primary" onClick={onFileUpload}>
Upload
</Button></div>);

  return (
    <Form>
      <h5>Patient's Trajectory Embedding</h5>
      <br />
      <div>
      <input type="file" name="file" onChange={onFileChange} />
      {fileView}
      {uploadView}
      </div>
    </Form>
  )
};

export default PatientsTrajectory;
