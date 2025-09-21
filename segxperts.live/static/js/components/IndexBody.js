import React from "react";

function IndexBody() {
  const Step_left = ({ description, image, isAlternate }) => {
    return (
      <div className="step_left">
        <div className="description_left">{description}</div>

        <div className="image_left">
          <img src={image} alt="Step" />
        </div>
      </div>
    );
  };

  const Step_right = ({ description, image, isAlternate }) => {
    return (
      <div className="step_right">
        <div className="image_right">
          <img src={image} alt="Step" />
        </div>
        <div className="description_right">{description}</div>
      </div>
    );
  };

  const Step_right_final = ({ description, image, isAlternate }) => {
    return (
      <div className="step_right_final">
        <div className="image_right">
          <img src={image} alt="Step" />
        </div>
        <div className="description_right">{description}</div>
      </div>
    );
  };

  const step_1 = {
    description: (
      <div>
        <p style={{ color: "black", fontSize: "28px" }}>
          <strong>About Cervical Cancer</strong>
        </p>
        <p style={{ color: "black" }}>
          {" "}
          Cervical cancer is the fourth most common cancer among women, with
          thousands of lives affected each year. It arises from the abnormal
          growth of cells in the cervix, often linked to persistent infection
          with certain types of human papillomavirus (HPV). Early detection
          through regular screenings, such as Pap smears and HPV tests, is
          crucial for successful treatment outcomes. Our system contributes to
          this effort by providing accurate and reliable analysis of cervical
          cell images, ultimately improving patient outcomes and reducing the
          burden of this preventable disease.
        </p>
        {/* <p style={{ color: 'black' }}> Upon successful upload, a confirmation message will be displayed.</p>
        <p style={{ color: 'black' }}><em> <strong> Supported file types: </strong>.jpeg .jpg, .png, .bmp, .zip</em></p> */}
      </div>
    ),
    imageUrl: require("assets/img/content_1.jpeg"),
    isAlternate: false,
  };

  const step_2 = {
    description: (
      <div>
        <p style={{ color: "black", fontSize: "28px" }}>
          <strong>About SegXperts</strong>
        </p>
        <p style={{ color: "grey", fontWeight: "bold", fontStyle: "italic" }}>
          {" "}
          Welcome to SegXperts, which employs our novel algorithm to segment
          cervical cell images using Explainable Artificial Intelligence (XAI).
          Alongside accessing segmentation masks, unlock deeper insights with
          XAI heatmaps and essential cell descriptors like the N:C ratio.
        </p>
        <p style={{ color: "black" }}>
          {" "}
          TThis application was developed as a part of our Final Year Research
          project at the Department of Computer Science and Engineering,
          University of Moratuwa.
        </p>
        {/* <p style={{ color: 'black' }}><em> <strong> Supported file types: </strong>.jpeg .jpg, .png, .bmp, .zip</em></p> */}
      </div>
    ),
    imageUrl: require("assets/img/landingpage2.PNG"),
    isAlternate: true,
  };

  const step_3 = {
    description: (
      <div>
        <p style={{ color: "black", fontSize: "28px" }}>
          <strong>What Does Our System Offer?</strong>
        </p>
        <p style={{ color: "black" }}>
          {" "}
          Our innovative system offers a breakthrough approach to cervical cell
          analysis, specifically focusing on the segmentation of the nucleus and
          cytoplasm. The system operates by ingesting cervical cell images as
          input, which are then processed within the application framework. This
          framework comprises components of our novel methodology, including
          classification models, XAI techniques, relevance grouping techniques,
          and Graph cut algorithms.
        </p>
        <p style={{ color: "black" }}>
          {" "}
          Through this process, our system generates three distinct outputs:
        </p>
        <ul>
          <li style={{ color: "black", fontSize: "15px" }}>
            Pixel-wise segmentation mask depicting three main regions: nucleus,
            cytoplasm, and background.
          </li>
          <li style={{ color: "black", fontSize: "15px" }}>
            XAI heatmaps aiding in the interpretation of classification
            decisions.
          </li>
          <li style={{ color: "black", fontSize: "15px" }}>
            A tabulated summary of cell descriptors, including nucleus and
            cytoplasm area, along with the ratio between their respective areas.
          </li>
        </ul>
        {/* <p style={{ color: 'black' }}><em> <strong> Supported file types: </strong>.jpeg .jpg, .png, .bmp, .zip</em></p> */}
      </div>
    ),
    imageUrl: require("assets/img/landingpage_3_2.jpg"),
    isAlternate: true,
  };

  const step_4 = {
    description: (
      <div>
        <p style={{ color: "black", fontSize: "28px" }}>
          <strong>Usefulness of our system</strong>
        </p>
        <p style={{ color: "black" }}>
          {" "}
          Our system serves as a crucial support tool for medical practitioners
          involved in cervical cancer diagnosis. By accurately identifying and
          segmenting cell structures, it aids in the early detection of
          abnormalities, facilitating timely intervention and treatment.
          Additionally, the incorporation of XAI methods enhances transparency
          and trust in the diagnostic process, empowering healthcare
          professionals to make informed decisions.
        </p>
        <br></br>
        <br></br>
        {/* <p style={{ color: 'black' }}> Through this process, our system generates three distinct outputs:</p>
        <ul>
        <li style={{ color: 'black',fontSize: '18px' }}>Pixel-wise segmentation mask depicting three main regions: nucleus, cytoplasm, and background.</li>
        <li style={{ color: 'black',fontSize: '18px' }}>XAI heatmaps aiding in the interpretation of classification decisions.</li>
        <li style={{ color: 'black',fontSize: '18px' }}>A tabulated summary of cell descriptors, including nucleus and cytoplasm area, along with the ratio between their respective areas.</li>
      </ul> */}
        {/* <p style={{ color: 'black' }}><em> <strong> Supported file types: </strong>.jpeg .jpg, .png, .bmp, .zip</em></p> */}
      </div>
    ),
    imageUrl: require("assets/img/content_3.jpeg"),
    isAlternate: true,
  };

  return (
    <>
      <div className="user-manual">
        {/* {steps.map((step, index) => (
            <Step key={index} description={step.description} image={step.imageUrl} isAlternate={step.isAlternate} />
          ))} */}
        <Step_left
          key="1"
          description={step_1.description}
          image={step_1.imageUrl}
          isAlternate={step_1.isAlternate}
        />
        <Step_right
          key="2"
          description={step_2.description}
          image={step_2.imageUrl}
          isAlternate={step_2.isAlternate}
        />
        <Step_left
          key="1"
          description={step_3.description}
          image={step_3.imageUrl}
          isAlternate={step_3.isAlternate}
        />
        <Step_right_final
          key="2"
          description={step_4.description}
          image={step_4.imageUrl}
          isAlternate={step_4.isAlternate}
        />
      </div>
      {/* CSS styling */}
      <style>{`
    
            .user-manual {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            
            .step_left {
              display: grid;
              grid-template-columns: repeat(2, 1fr); /* Two columns layout */
              gap: 30px;
              align-items: center;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 10px;
              width: 100%; /* Adjust the width of the steps */
              background-color: #f0f0f0; /* Slightly darker gray color */
              
            }
  
            .step_right {
              display: grid;
              grid-template-columns: repeat(2, 1fr); /* Two columns layout */
              gap: 30px;
              align-items: center;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 10px;
              width: 100%; /* Adjust the width of the steps */
              
            }

            .step_right_final {
              display: grid;
              grid-template-columns: repeat(2, 1fr); /* Two columns layout */
              gap: 30px;
              align-items: center;
              border-radius: 8px;
              padding: 20px;
              margin-bottom:100px;
              width: 100%; /* Adjust the width of the steps */
              
            }
            
            .description_left {
              flex: 1;
              margin-left : 25%;
            }

            .description_right {
              flex: 1;
              margin-right : 25%;
            }
            
            .image_left {
              flex: 1;
              
            }
            
            .image_left img {
              max-width: 100%;
              max-height: 300px; /* Adjust height as needed */
            }

            .image_right {
              flex: 1;
              margin-left: 25%
              
            }
            
            .image_right img {
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

export default IndexBody;
