import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
// sections for this page

// const Step = ({ description, imageUrl }) => (
//     <div className="step">
//         <div className="step-icon">
//       <img src={require("assets/img/bg1.jpg") } alt="Step 1" />
//     </div>
//       <div className="description">{description}</div>
//       <img className="image" src={imageUrl} alt="Step" />
//     </div>
//   );

function UserManual() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const Step = ({ description, image, isAlternate }) => {
    return (
      <div
        className={`step ${isAlternate ? "alternate" : ""}`}
        style={{ marginBottom: "70px" }}
      >
        {/* <div className="step-icon">
//       <img src={require("assets/img/bg1.jpg") } alt="Step 1" />
//     </div> */}
        <div className="description">{description}</div>
        <div className="image">
          <img src={image} alt="Step" />
        </div>
      </div>
    );
  };

  const steps = [
    {
      description: (
        <div>
          <p style={{ color: "black", fontSize: "28px" }}>
            <strong>Step 1 - Upload Cervical Cell Images</strong>
          </p>
          <p style={{ color: "black" }}>
            {" "}
            To initiate, upload cervical cell images. Click the "Image" icon
            button, then select either a zip file containing maximum of 5 images
            or a single image file from your computer. Alternatively, drag and
            drop the files. Confirm by clicking the 'Upload' button.
          </p>
          <p style={{ color: "black" }}>
            {" "}
            Upon successful upload, a confirmation message will be displayed.
          </p>
          <p style={{ color: "black" }}>
            <em>
              {" "}
              <strong> Supported file types: </strong>.jpeg .jpg, .png, .bmp,
              .zip
            </em>
          </p>
        </div>
      ),
      imageUrl: require("assets/img/step1.gif"),
      isAlternate: false,
    },
    {
      description: (
        <div>
          <p style={{ color: "black", fontSize: "28px" }}>
            <strong>Step 2 - Configure the Pipeline</strong>
          </p>
          <p style={{ color: "black" }}>
            {" "}
            Configure the processing pipeline by selecting an XAI (Explainable
            Artificial Intelligence) method from the dropdown menu. Specify the
            Magnification value corresponding to your uploaded images in the
            provided text box. Finally, click the "Generate Segmentation Mask"
            button to proceed.
          </p>
          <p style={{ color: "black" }}>
            {" "}
            Valid configurations will trigger the segmentation mask generation
            process.
          </p>
          {/* <p style={{ color: 'black' }}><em> <strong> Supported file types: </strong>.jpeg .jpg, .png, .bmp, .zip</em></p> */}
        </div>
      ),
      imageUrl: require("assets/img/step2.gif"),
      isAlternate: true,
    },
    {
      description: (
        <div>
          <p style={{ color: "black", fontSize: "28px" }}>
            <strong>Step 3 - View the Generated Results (Summary View)</strong>
          </p>
          <p style={{ color: "black" }}>
            {" "}
            Once segmentation masks are generated, a Summary View will be
            presented. This view shows original images with their corresponding
            segmentation masks, facilitating easy analysis.
          </p>
          <p style={{ color: "black" }}>
            {" "}
            <strong> Segmentation mask: </strong> Depicts nucleus, cytoplasm,
            and background regions in the image. Nucleus is indicated in light
            blue, cytoplasm in dark blue, and background in red.
          </p>
          <p style={{ color: "black" }}>
            {" "}
            <em>
              Note - If more than 5 images are uploaded, a representative sample
              of 5 will be displayed in the Summary View
            </em>{" "}
          </p>
          {/* <p style={{ color: 'black' }}><em> <strong> Supported file types: </strong>.jpeg .jpg, .png, .bmp, .zip</em></p> */}
        </div>
      ),
      imageUrl: require("assets/img/step3.png"),
      isAlternate: false,
    },
    {
      description: (
        <div>
          <p style={{ color: "black", fontSize: "28px" }}>
            <strong>Step 4 - View the Generated Results (Detailed View)</strong>
          </p>
          <p style={{ color: "black" }}>
            {" "}
            For a deeper analysis, access the "Detailed View" by clicking the
            respective button. This view provides segmentation masks, XAI
            heatmaps, and cell descriptor tables for each image from the Summary
            View.
          </p>
          <p style={{ color: "black" }}>
            {" "}
            <strong> XAI heatmap: </strong> The heatmap generated from the
            selected XAI method was overlaid on the original image. Higher
            activation values are shown in red colour regions.
          </p>
          <p style={{ color: "black" }}>
            {" "}
            <strong> Cell Descriptor table: </strong> Summarizes cell
            descriptors such as Nucleus Area, Cytoplasm Area, and
            Nucleus:Cytoplasm ratio from the generated segmentation masks.
          </p>
        </div>
      ),
      imageUrl: require("assets/img/step4.gif"),
      isAlternate: true,
    },
    {
      description: (
        <div>
          <p style={{ color: "black", fontSize: "28px" }}>
            <strong>Step 5 - Download the Generated Results</strong>
          </p>
          <p style={{ color: "black" }}>
            {" "}
            To obtain the generated results, click the "Download" button. This
            action initiates a download of a zip file containing:
          </p>
          <ul>
            <li style={{ color: "black", fontSize: "18px" }}>
              A "segmentation" folder with segmentation maps
            </li>
            <li style={{ color: "black", fontSize: "18px" }}>
              A "heatmap" folder with XAI heatmaps
            </li>
            <li style={{ color: "black", fontSize: "18px" }}>
              A CSV file containing cell descriptor details of the uploaded
              images
            </li>
          </ul>
        </div>
      ),
      imageUrl: require("assets/img/step5.gif"),
      isAlternate: false,
    },
    //   { description: (
    //     <div>
    //       <p style={{ color: 'black' }}><strong>Step 6 - Advanced Configurations:</strong></p>
    //       <p style={{ color: 'black' }}> Explore advanced configuration options to fine-tune segmentation mask generation. Available options include:</p>
    //     </div>
    //   ), imageUrl: require("assets/img/bg1.jpg") , isAlternate: true },
    // Add more steps as needed
  ];

  return (
    <>
      <IndexNavbar />
      {/* <IndexHeader /> */}
      <div className="page-content">
        <h1 className="title">User Manual</h1>
        <div className="user-manual">
          {steps.map((step, index) => (
            <Step
              key={index}
              description={step.description}
              image={step.imageUrl}
              isAlternate={step.isAlternate}
            />
          ))}
        </div>
      </div>
      <DarkFooter />
      {/* CSS styling */}
      <style>{`
        .page-content {
            margin-top: 60px; /* Adjust the value to push the content below the navbar */
          }
  
          .user-manual {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .step {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* Two columns layout */
            gap: 30px;
            align-items: center;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 10px;
            width: 100%; /* Adjust the width of the steps */
            
          }

          .step.alternate {
            background-color: #f0f0f0; /* Slightly darker gray color */
          }
          
          .description {
            flex: 1;
            margin-left: 15%;
          }
          
          .image {
            flex: 1;
           
          }
          
          .image img {
            max-width: 100%;
            max-height: 300px; /* Adjust height as needed */
          }

          .step-icon img {
            max-width: 5px; /* Adjust the size of the step icon image */
            height: auto;
          }

          .title {
            text-align: center; /* Center align the title */
          }
          
  
      `}</style>
    </>
  );
}

export default UserManual;
