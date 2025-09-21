import React from "react";
import {
  Button,
  Input,
  Label,
  Form,
  FormGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DarkFooter from "components/Footers/DarkFooter";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { useRef, useState } from "react";
import { Image } from "primereact/image";
import { InputSwitch } from "primereact/inputswitch";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
// import { Button } from 'primereact/button';
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import CustomizedSteppers from "components/stepper";
import axios from "axios";
import { ToggleButton } from "primereact/togglebutton";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { SelectButton } from "primereact/selectbutton";
import { ProgressSpinner } from "primereact/progressspinner";
import { Dialog } from "primereact/dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Segmentation() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [magVal, setMagVal] = useState("0.2");
  const [xaiMethod, setXaiMethod] = useState("VGGNet + LRP");
  const [imageSrc, setImageSrc] = useState("desktop_app/backend/uploads/7.png");
  const [checked, setChecked] = useState("Summary View");
  const [csvData, setCsvData] = useState("");
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);
  const switchoptions = ["Summary View", "Detailed View"];
  const [showDialog, setShowDialog] = useState(false);
  const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const downloadCsv = () => {
    const link = document.createElement("a");
    link.href = csvData;
    link.setAttribute("download", "output.zip");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const onTemplateSelect = (e) => {
    let _totalSize = totalSize;
    let files = e.files;

    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0;
    });

    setTotalSize(_totalSize);
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: "40%" }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <i
            className="pi pi-image mt-3 p-5"
            style={{
              fontSize: "5em",
              borderRadius: "50%",
              backgroundColor: "var(--surface-b)",
              color: "var(--surface-d)",
            }}
          ></i>
        </div>
        <div>
          <span
            style={{
              fontSize: "1.2em",
              color: "var(--text-color-secondary)",
            }}
            className="my-5"
          >
            Drag and Drop Image Here
          </span>
        </div>
      </div>
    );
  };
  const fetchCsvFile = () => {
    axios
      .get(`https://${api_endpoint}/api/zip`, { responseType: "blob" })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        setCsvData(url);
      })
      .catch((error) => {});
  };
  const getLastNumber = (str) => {
    const match = str.match(/image(\d+)$/);
    return match ? parseInt(match[1]) : null;
  };
  const renderDetailedView = () => {
    const imageRows = [];

    for (let key in imageSrc) {
      if (imageRows.length >= 5 || !key.includes("image")) {
        break; // Break loop if we have reached the limit or key does not represent an image
      }

      const num = getLastNumber(key);
      const image = imageSrc[key];
      const mask = imageSrc[`mask${num}`];
      const inter1 = imageSrc[`inter${num}`];
      const table = imageSrc[`table${num}`];

      imageRows.push(
        <tr key={key}>
          <td style={{ width: "25%" }}>
            <img
              src={`data:image/png;base64,${image}`}
              alt={`image${key}`}
              style={{ width: "80%", height: "auto" }}
            />
          </td>
          <td style={{ width: "25%" }}>
            <img
              src={`data:image/png;base64,${mask}`}
              alt={`mask${key}`}
              style={{ width: "80%", height: "auto" }}
            />
          </td>
          <td style={{ width: "25%" }}>
            <img
              src={`data:image/png;base64,${inter1}`}
              alt={`inter1${key}`}
              style={{ width: "80%", height: "auto" }}
            />
          </td>
          <td style={{ width: "25%" }}>
            <img
              src={`data:image/png;base64,${table}`}
              alt={`table${key}`}
              style={{ width: "80%", height: "auto" }}
            />
          </td>
        </tr>
      );
    }

    return (
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "25%", fontSize: "20px" }}>Original Image</th>
            <th style={{ width: "25%", fontSize: "20px" }}>
              Segmentation Mask
            </th>
            <th style={{ width: "25%", fontSize: "20px" }}>XAI Heatmap</th>
            <th style={{ width: "25%", fontSize: "20px" }}>Cell Descriptor</th>
          </tr>
        </thead>
        <tbody>{imageRows}</tbody>
      </table>
    );
  };

  const renderImages = () => {
    const images = [];
    let colImages = [];
    let count = 1;
    for (let key in imageSrc) {
      const num = getLastNumber(key);
      if (images.length < 5 && key.includes("image")) {
        const image = imageSrc[key];
        const mask = imageSrc[`mask${num}`]; // Getting corresponding mask
        images.push(
          <Col key={key} xs="6" md="6" className="mb-4">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1 }}>
                <h4>{`Image ${count}`}</h4>
                <img
                  src={`data:image/png;base64,${image}`}
                  alt={`image${key}`}
                  width="80%"
                />
              </div>
              <div style={{ flex: 1 }}>
                <h4>{`Segmentation Mask ${count}`}</h4>
                <img
                  src={`data:image/png;base64,${mask}`}
                  alt={`mask${key}`}
                  width="80%"
                />
              </div>
            </div>
          </Col>
        );

        // Push colImages array when it reaches 2 elements
        if (colImages.length === 2) {
          images.push(
            <Row key={images.length} className="mb-4">
              {colImages}
            </Row>
          );
          colImages = [];
        }
      } else {
        break;
      }
      count += 1;
    }

    // Push remaining images if any
    if (colImages.length > 0) {
      images.push(
        <Row key={images.length} className="mb-4">
          {colImages}
        </Row>
      );
    }

    return images;
  };

  function UploadFile() {
    return (
      <div className="card">
        <FileUpload
          ref={fileUploadRef}
          name="demo[]"
          url={`https://${api_endpoint}/api/upload`}
          accept="*"
          maxFileSize={1000000000}
          onUpload={handleFileUpload}
          // onSelect={onTemplateSelect}
          onError={onTemplateClear}
          onClear={onTemplateClear}
          // headerTemplate={headerTemplate}
          itemTemplate={itemTemplate}
          emptyTemplate={emptyTemplate}
          chooseOptions={chooseOptions}
          uploadOptions={uploadOptions}
          cancelOptions={cancelOptions}
        />
      </div>
    );
  }

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 1000000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef.current.formatSize(totalSize)
        : "0 B";

    return (
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 100 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          ></ProgressBar>
        </div>
      </div>
    );
  };

  function handleFileUpload(e) {
    let _totalSize = 0;

    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);

    axios
      .get(`https://${api_endpoint}/api/upload`)
      .then((response) => {
        toast.success("File uploaded Successfully!"); // or toast.error for error message, toast.warn for warning, toast.info for information

        setActiveStep(activeStep + 1);
        // You can handle the response data here
      })
      .catch((error) => {
        // You can handle errors here
      });
  }
  function handleGeneration(e) {
    e.preventDefault();
    // Do something with the selected model and XAI method
    setShowDialog(true);

    axios
      .post(`https://${api_endpoint}/api/inputform`, {
        magval: magVal,
        xaiMethod: xaiMethod,
      })
      .then((response) => {
        const arrayBufferView = response.data;
        setShowDialog(false);

        setImageSrc(arrayBufferView);
        fetchCsvFile();
        toast.success("Output Generated Successfully");
        setActiveStep(activeStep + 1);

        // You can handle the response data here
      })
      .catch((error) => {
        toast.error(error);

        // You can handle errors here
      });
  }

  function StepperComponent(step) {
    const options = [
      { name: "XceptionNet + GradCAM++", value: "XceptionNet + GradCAM++" },
      { name: "VGGNet + LRP", value: "VGGNet + LRP" },
    ];
    if (step.step === 0) {
      return (
        <PrimeReactProvider>
          <UploadFile />
        </PrimeReactProvider>
      );
    } else if (step.step === 1) {
      return (
        <Container
          style={{
            borderStyle: "solid",
            borderRadius: "6px",
            borderColor: "#1560bd",
          }}
        >
          <Form style={{ margin: "30px" }}>
            <FormGroup>
              {/* <Label for="exampleSelect">XAI Methods</Label> */}
              <Dropdown
                value={xaiMethod}
                onChange={(e) => setXaiMethod(e.value)}
                options={options}
                optionLabel="name"
                placeholder="Select an XAI Method"
                // className="w-full md:w-14rem"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  color: "black",
                }}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="example">Magnification Value</Label>
              <br />

              <InputText
                value={magVal}
                onChange={(e) => setMagVal(e.target.value)}
                style={{ width: "100%" }}
              />
              <br />

              <small id="username-help">
                Enter your Magnification Value in μ/pixel.
              </small>
            </FormGroup>
            <Button
              style={{
                marginLeft: "400px",
                color: "white",
                backgroundColor: "#191970",
              }}
              onClick={handleGeneration}
            >
              Generate Segmentation Mask
            </Button>
          </Form>
          <Dialog
            className="card flex justify-content-center"
            visible={showDialog}
            onHide={() => setShowDialog(false)}
            style={{
              width: "20%",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <ProgressSpinner />
            <p>Generating Output...</p>
          </Dialog>
        </Container>
      );
    } else if (step.step === 2 && checked == "Summary View") {
      return (
        <div style={{ textAlign: "center" }}>
          <SelectButton
            value={checked}
            onChange={(e) => setChecked(e.value)}
            options={switchoptions}
            style={{ color: "#191970" }}
          />
          <div style={{ marginLeft: "900px" }}>
            <Button
              onClick={downloadCsv}
              style={{ backgroundColor: "#191970" }}
            >
              <span style={{ color: "white" }}>Download</span>
            </Button>
          </div>
          <Container style={{ borderStyle: "unset", marginTop: "40px" }}>
            <Row>{renderImages()}</Row>
          </Container>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <SelectButton
            value={checked}
            onChange={(e) => setChecked(e.value)}
            options={switchoptions}
          />
          <div style={{ marginLeft: "900px" }}>
            <Button
              onClick={downloadCsv}
              style={{ backgroundColor: "#191970" }}
            >
              <span style={{ color: "white" }}>Download</span>
            </Button>
          </div>

          <Container
            style={{
              borderStyle: "unset",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <Row>{renderDetailedView()}</Row>
          </Container>
        </div>
      );
    }
  }

  return (
    <>
      <IndexNavbar />
      <ToastContainer />
      <div className="wrapper">
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/primeicons/4.1.0/primeicons.min.css"
        />

        {/* <LandingPageHeader /> */}
        <div className="section section-about-us">
          <Container style={{ marginTop: "50px" }}>
            <CustomizedSteppers activeStep={activeStep} />
            <br></br> <br></br>
            <StepperComponent step={activeStep} />
            <div className="separator separator-primary"></div>
          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
}

export default Segmentation;
