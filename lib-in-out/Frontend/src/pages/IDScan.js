import React, { useRef, useState, useCallback, createRef } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';
import { Header, Grid, Button, Icon, Message, Loader } from 'semantic-ui-react';

function IDScan() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [textOcr, setTextOcr] = useState(null);
  const [load, setLoad] = useState(false);
  let fileInputRef = createRef();

  const capture = useCallback(() => {
    setLoad(true);
    const imageSrc = webcamRef.current.getScreenshot();
    let url = 'http://localhost:5000/capture';
    let config = {
      headers: {'Content-Type': 'application/json'}
    };
    let dataBody = {
      img: imageSrc
    };
    axios.post(url, dataBody, config)
    .then((res) => {
        console.log(res.data);
        const { entryNumber, name, department } = extractInformation(res.data.text);
        setTextOcr({ entryNumber, name, department });
        setImgSrc(imageSrc);
        setLoad(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [webcamRef, setImgSrc]);

  const upload = (file) => {
    setLoad(true);
    var url = 'http://localhost:5000/upload';
    var formData = new FormData();
    formData.append('file', file);
    var config = {
      headers: {'Content-Type': 'multipart/form-data'}
    };
    return axios.post(url, formData, config)
    .then((res)=>{
      console.log(res.data);
      const { entryNumber, name, department } = extractInformation(res.data.text);
      setTextOcr({ entryNumber, name, department });
      setImgSrc(res.data.image);
      setLoad(false);
    });
  };

  const toggleEntry = () => {
    axios.post('http://localhost:5000/toggleEntry', {
      name: textOcr.name,
      entryNo: textOcr.entryNumber,
      department: textOcr.department
    })
    .then((res) => {
      console.log(res.data);
      alert('Entry toggled successfully!');
      // Optionally, you can handle success response here
    })
    .catch((err) => {
      console.log(err);
      alert('Error toggling entry!');
      // Optionally, you can handle error response here
    });
  };

  // Function to extract relevant information from OCR text
  const extractInformation = (text) => {
    // Implement your logic here to extract the entry number, name, and department
    // Sample logic assuming a simple pattern matching
    const entryNumberRegex = /Entry No\s*:\s*(\w+)/i;
    const nameRegex = /Name\s*:\s*(.+)/i;
    const departmentRegex = /Department\s*:\s*(.+)/i;

    const entryNumberMatch = text.match(entryNumberRegex);
    const nameMatch = text.match(nameRegex);
    const departmentMatch = text.match(departmentRegex);

    return {
      entryNumber: entryNumberMatch ? entryNumberMatch[1] : '',
      name: nameMatch ? nameMatch[1] : '',
      department: departmentMatch ? departmentMatch[1] : ''
    };
  };

  return (
    <>
      <Grid divided className='mt-10 flex '>
        <Grid.Column style={{width:"50%"}} key={0}>
          <center>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <Grid.Column>
              <Button size='big' onClick={capture} style={{margin:20}} icon labelPosition='left' inverted color='green'>
                <Icon name='camera' />
                Capture
              </Button>
              
              <Button size='big' onClick={() => fileInputRef.current.click()} style={{margin:20}} icon labelPosition='left' inverted color='blue'>
                <Icon name='upload' />
                Upload
                <form encType="multipart/form-data">
                  <input ref={fileInputRef} type='file' hidden name='filename'
                  onChange={(x)=>{upload(x.target.files[0])}}
                  accept="image/*"
                  />
                </form>
              </Button>

              {/* Button to toggle entry */}
              {textOcr && (
                <Button size='big' onClick={toggleEntry} style={{margin:20}} icon labelPosition='left' inverted color='orange'>
                  <Icon name='toggle on' />
                  Toggle Entry
                </Button>
              )}
            </Grid.Column>
          </center>
        </Grid.Column>
        
        <Grid.Column style={{width:"50%"}} key={1}>
          {
            load
            ?
            <Loader style={{marginTop: 120}} active inline='centered' size='big'>Loading...</Loader>
            :
            (
              imgSrc 
              ?
              <>
                <Header style={{margin:10, fontFamily:'roboto'}} size='large'>
                  Result
                </Header>
                <img style= {{marginLeft:10, height:'50%'}} alt="captured" src={imgSrc}/>
                <Message
                  size='massive'
                  color='orange'
                  header={`Entry Number: ${textOcr.entryNumber}`}
                  content={`Name: ${textOcr.name}\nDepartment: ${textOcr.department}`}
                  style={{margin:15}}
                />
              </>
              :
              <Header style={{margin:10, fontFamily:'roboto'}} size='large'>
                No data preview
              </Header>
            )
          }
        </Grid.Column>
      </Grid>
    </>
  );
}

export default IDScan;
