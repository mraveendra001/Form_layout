import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import 'react-phone-number-input/style.css'; // Import the styles


const Form = () => {
  const [attendedMeeting, setAttendedMeeting] = useState(null); // Tracks if the user attended the meeting

  const location = useLocation();
  const { state } = location;
  const [formData, setFormData] = useState({
    stakeholderName: '',
    emailId: '',
    Folio: '',
    customerPhone: '',
  });
  const [formErrors, setFormErrors] = useState({
    stakeholderName: false,
    emailId: false,
    Folio: false,
    customerPhone: true
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Update the folio state
    if (name === 'Folio') {
      setFolio(value);
    }

    if (name === '')

      // Clear the error message when user starts typing in the field
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
  };;


  const [folio, setFolio] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setFormData({
        stakeholderName: state.NameOfShareHolder || '',
        emailId: state.EmailID || '',
        Folio: state.folioNo || '',
        customerPhone: state.MobileNumber || '',
      });
    }
  }, [state]);

  useEffect(() => {
    // Retrieve user session data from sessionStorage.
    const storedFolio = sessionStorage.getItem('folioNo');


    if (storedFolio) {
      // Set the Folio ID from session data.
      setFolio(storedFolio);
    } else {
      // Redirect the user to the login page if session data is not available.
      navigate('/login');
    }
  }, [navigate]);

  /*table 1 contents rules - start*/
  const parameterRows = [
    'Quality of Information',
    'Relevance and adequancy of information',
    'Ease & accessibility while navigating',
    'Sustainability Webpage and ESG related information'
  ];

  const initialState = {
    excellent: Array(parameterRows.length).fill(false),
    veryGood: Array(parameterRows.length).fill(false),
    good: Array(parameterRows.length).fill(false),
    satisfactory: Array(parameterRows.length).fill(false),
    needsImprovement: Array(parameterRows.length).fill(false),
  };


  const [checkboxes, setCheckboxes] = useState(initialState); /*table 1*/
  const handleCheckboxChange = (paramIndex, option) => {
    const updatedCheckboxes = { ...checkboxes };
    for (const key in updatedCheckboxes) {
      updatedCheckboxes[key][paramIndex] = key === option;

    }
    setCheckboxes(updatedCheckboxes);
    // alert(option);

    // const [checkboxes, setCheckboxes] = useState(initialState); /*table 1*/
    // const handleOptionChange = (paramIndex, option, type) => {
    //   if (type === 'checkbox') {
    //     const updatedCheckboxes = { ...checkboxes };
    //     for (const key in updatedCheckboxes) {
    //       updatedCheckboxes[key][paramIndex] = key === option;
    //   }
    //   setCheckboxes(updatedCheckboxes);
    // } else if (type === 'radio') {
    //   const updatedCheckboxes = { ...checkboxes };
    //   for (const key in updatedCheckboxes) {
    //     updatedCheckboxes[key] = updatedCheckboxes[key].map((_, index) =>
    //       index === paramIndex ? key === option : false
    //     );
    //   }
    //   setCheckboxes(updatedCheckboxes);
    // }
  };


  /*table 1 contents rules - end*/
  /*table 2 contents rules - start*/
  const parameterRows1 = [
    'Dividend / ECS Intimation',
    'General Notice / Updates'
  ];
  const initialState1 = {
    excellent: Array(parameterRows1.length).fill(false),
    veryGood: Array(parameterRows1.length).fill(false),
    good: Array(parameterRows1.length).fill(false),
    satisfactory: Array(parameterRows1.length).fill(false),
    needsImprovement: Array(parameterRows1.length).fill(false),
  };
  const [checkboxes1, setCheckboxes1] = useState(initialState1); /*table 2*/
  const handleCheckboxChange1 = (paramIndex1, option1) => {
    const updatedCheckboxes1 = { ...checkboxes1 };
    for (const key in updatedCheckboxes1) {
      updatedCheckboxes1[key][paramIndex1] = key === option1;
    }
    setCheckboxes1(updatedCheckboxes1);
  };
  /*table 2 contents rules - end*/
  /*table 3 contents rules - start*/
  const parameterRows2 = [
    'Shareholder Communication',
    'Annual Report',
    'Newspapers / Press Release',
    'Company’s Website',
    'Investor Presentation',
    'E-mails'
  ];
  const initialState2 = {
    excellent: Array(parameterRows2.length).fill(false),
    veryGood: Array(parameterRows2.length).fill(false),
    good: Array(parameterRows2.length).fill(false),
    satisfactory: Array(parameterRows2.length).fill(false),
    needsImprovement: Array(parameterRows2.length).fill(false),
  };
  const [checkboxes2, setCheckboxes2] = useState(initialState2); /*table 2*/
  const handleCheckboxChange2 = (paramIndex2, option2) => {
    const updatedCheckboxes2 = { ...checkboxes2 };
    for (const key in updatedCheckboxes2) {
      updatedCheckboxes2[key][paramIndex2] = key === option2;
    }
    setCheckboxes2(updatedCheckboxes2);
  };
  /*table 3 contents rules - end*/
  /*table 4 contents rules - start*/
  const parameterRows3 = [
    'Sequencing of Meeting',
    'Q & A Session',
    'E-voting Facility',
    'Live Streaming of Proceedings',
    'Facilty to submit queries during Meeting'
  ];

  const initialState3 = {
    excellent: Array(parameterRows3.length).fill(false),
    veryGood: Array(parameterRows3.length).fill(false),
    good: Array(parameterRows3.length).fill(false),
    satisfactory: Array(parameterRows3.length).fill(false),
    needsImprovement: Array(parameterRows3.length).fill(false),
  };
  const [checkboxes3, setCheckboxes3] = useState(initialState3); /*table 2*/
  const handleCheckboxChange3 = (paramIndex3, option3) => {
    const updatedCheckboxes3 = { ...checkboxes3 };
    for (const key in updatedCheckboxes3) {
      updatedCheckboxes3[key][paramIndex3] = key === option3;
    }
    setCheckboxes3(updatedCheckboxes3);
  };
  /*table 4 contents rules - end*/
  /*table 5 contents rules - start*/
  const parameterRows4 = [
    'Design & Layout',
    'Quality and Content of Annual Report',
    'Timely receipt of Annual Report'
  ];
  const initialState4 = {
    excellent: Array(parameterRows4.length).fill(false),
    veryGood: Array(parameterRows4.length).fill(false),
    good: Array(parameterRows4.length).fill(false),
    satisfactory: Array(parameterRows4.length).fill(false),
    needsImprovement: Array(parameterRows4.length).fill(false),
  };
  const [checkboxes4, setCheckboxes4] = useState(initialState4); /*table 5*/
  const handleCheckboxChange4 = (paramIndex4, option4) => {
    const updatedCheckboxes4 = { ...checkboxes4 };
    for (const key in updatedCheckboxes4) {
      updatedCheckboxes4[key][paramIndex4] = key === option4;
    }
    setCheckboxes4(updatedCheckboxes4);
  };
  /*table 5 contents rules - end*/

  /*table 6 contents rules - start*/
  const parameterRows5 = [
    'Behaviour / Hospitality',
    'Quality and relevance of information',
    'Accesibility',
    'Solution to queries',
    'Overall rating'
  ];
  const initialState5 = {
    excellent: Array(parameterRows5.length).fill(false),
    veryGood: Array(parameterRows5.length).fill(false),
    good: Array(parameterRows5.length).fill(false),
    satisfactory: Array(parameterRows5.length).fill(false),
    needsImprovement: Array(parameterRows5.length).fill(false),
  };
  const [checkboxes5, setCheckboxes5] = useState(initialState5); /*table 5*/
  const handleCheckboxChange5 = (paramIndex5, option5) => {
    const updatedCheckboxes5 = { ...checkboxes5 };
    for (const key in updatedCheckboxes5) {
      updatedCheckboxes5[key][paramIndex5] = key === option5;
    }
    setCheckboxes5(updatedCheckboxes5);
  };
  /*table 6 contents rules - end*/
  /*table 7 contents rules - start*/
  const parameterRows6 = [
    'Behaviour / Hospitality',
    'Quality and relevance of information',
    'Accesibility',
    'Solution to queries',
    'Overall rating'
  ];
  const initialState6 = {
    excellent: Array(parameterRows6.length).fill(false),
    veryGood: Array(parameterRows6.length).fill(false),
    good: Array(parameterRows6.length).fill(false),
    satisfactory: Array(parameterRows6.length).fill(false),
    needsImprovement: Array(parameterRows6.length).fill(false),
  };
  const [checkboxes6, setCheckboxes6] = useState(initialState6); /*table 5*/
  const handleCheckboxChange6 = (paramIndex6, option6) => {
    const updatedCheckboxes6 = { ...checkboxes6 };
    for (const key in updatedCheckboxes6) {
      updatedCheckboxes6[key][paramIndex6] = key === option6;
    }
    setCheckboxes6(updatedCheckboxes6);
  };
  /*table 7 contents rules - end*/
  /*table 8 contents rules - start*/
  const parameterRows7 = [
    'Response time to queries',
    'Quality of response'
  ];
  const initialState7 = {
    excellent: Array(parameterRows7.length).fill(false),
    veryGood: Array(parameterRows7.length).fill(false),
    good: Array(parameterRows7.length).fill(false),
    satisfactory: Array(parameterRows7.length).fill(false),
    needsImprovement: Array(parameterRows7.length).fill(false),
  };
  const [checkboxes7, setCheckboxes7] = useState(initialState7); /*table 5*/
  const handleCheckboxChange7 = (paramIndex7, option7) => {
    const updatedCheckboxes7 = { ...checkboxes7 };
    for (const key in updatedCheckboxes7) {
      updatedCheckboxes7[key][paramIndex7] = key === option7;
    }
    setCheckboxes7(updatedCheckboxes7);
  };
  /*table 8 contents rules - end*/
  /* Table 9 contents rules - start */
  const parameterRows8 = [
    '',
    'If yes, please provide a brief summary of the grievance:'
  ];
  const initialState8 = {
    Yes: Array(parameterRows8.length).fill(false),
    No: Array(parameterRows8.length).fill(false)
  };
  const [checkboxes8, setCheckboxes8] = useState(initialState8); /* table 9 */
  const [textAreaDisabled, setTextAreaDisabled] = useState(false); // Add the textAreaDisabled state
  const handleCheckboxChange8 = (paramIndex8, option8) => {
    const updatedCheckboxes8 = { ...checkboxes8 };
    for (const key in updatedCheckboxes8) {
      updatedCheckboxes8[key][paramIndex8] = key === option8;
    }
    setCheckboxes8(updatedCheckboxes8);

    // Update the textAreaDisabled state based on the "No" checkbox
    if (option8 === 'Yes') {
      setTextAreaDisabled(false);
    } else if (option8 === 'No') {
      setTextArea('');
      setTextAreaDisabled(true);
    }
  };
  /* Table 9 contents rules - end */
  const [textArea, setTextArea] = useState("");
  const handleTextareaChange = (event) => {
    // Check if the textarea is disabled before updating the state
    if (true) {
      setTextArea(event.target.value);
    }
  };
  const validateForm = () => {
    // Check if any of the text fields are empty
    if (
      formData.stakeholderName === '' ||
      formData.emailId === ''
      // formData.Folio === '' 
      //formData.customerPhone === ''

    ) {
      setFormErrors({
        stakeholderName: formData.stakeholderName === '',
        emailId: formData.emailId === '',
        // Folio: formData.Folio === '',
        //customerPhone: formData.customerPhone === ''
      });
      alert('Please fill in all required fields.');
      return false;
    }


    // Add your custom field-level validation here
    const errors = {
      stakeholderName: false,
      emailId: false,
      // Folio: false,
      customerPhone: false,
    };

    // Check if any of the text fields are empty and set corresponding error flags
    if (formData.stakeholderName === '') {
      errors.stakeholderName = true;
    }
    if (formData.emailId === '') {
      errors.emailId = true;
    }
    // if (formData.Folio === '') {
    //   errors.Folio = true;
    // }
    // if (formData.customerPhone === '') {
    //   errors.customerPhone = true;
    // }

    // Check if any of the checkboxes in each table are selected and set error flags accordingly
    //commenting all validations for now
    // Check if any of the checkboxes in Table 1 are selected
    // for (let i = 0; i < checkboxes.excellent.length; i++) {
    //   if (
    //     !checkboxes.excellent[i] &&
    //     !checkboxes.veryGood[i] &&
    //     !checkboxes.good[i] &&
    //     !checkboxes.satisfactory[i] &&
    //     !checkboxes.needsImprovement[i]
    //   ) {
    //     alert(`Please fill out at least one checkbox in the "${parameterRows[i]}" row of Table 1.`);
    //     return false;
    //   }
    // }

    //   // Check if any of the checkboxes in Table 2 are selected
    //   for (let i = 0; i < checkboxes1.excellent.length; i++) {
    //     if (
    //       !checkboxes1.excellent[i] &&
    //       !checkboxes1.veryGood[i] &&
    //       !checkboxes1.good[i] &&
    //       !checkboxes1.satisfactory[i] &&
    //       !checkboxes1.needsImprovement[i]
    //     ) {
    //       alert(`Please fill out at least one checkbox in the "${parameterRows1[i]}" row of Table 2.`);
    //       return false;
    //     }
    //   }

    //   // Check if any of the checkboxes in Table 3 are selected
    //   for (let i = 0; i < checkboxes2.excellent.length; i++) {
    //     if (
    //       !checkboxes2.excellent[i] &&
    //       !checkboxes2.veryGood[i] &&
    //       !checkboxes2.good[i] &&
    //       !checkboxes2.satisfactory[i] &&
    //       !checkboxes2.needsImprovement[i]
    //     ) {
    //       alert(`Please fill out at least one checkbox in the "${parameterRows2[i]}" row of Table 3.`);
    //       return false;
    //     }
    //   }

    //   // Check if any of the checkboxes in Table 4 are selected
    //   for (let i = 0; i < checkboxes3.excellent.length; i++) {
    //     if (
    //       !checkboxes3.excellent[i] &&
    //       !checkboxes3.veryGood[i] &&
    //       !checkboxes3.good[i] &&
    //       !checkboxes3.satisfactory[i] &&
    //       !checkboxes3.needsImprovement[i]
    //     ) {
    //       alert(`Please fill out at least one checkbox in the "${parameterRows3[i]}" row of Table 4.`);
    //       return false;
    //     }
    //   }

    //   // Check if any of the checkboxes in Table 5 are selected
    //   for (let i = 0; i < checkboxes4.excellent.length; i++) {
    //     if (
    //       !checkboxes4.excellent[i] &&
    //       !checkboxes4.veryGood[i] &&
    //       !checkboxes4.good[i] &&
    //       !checkboxes4.satisfactory[i] &&
    //       !checkboxes4.needsImprovement[i]
    //     ) {
    //       alert(`Please fill out at least one checkbox in the "${parameterRows4[i]}" row of Table 5.`);
    //       return false;
    //     }
    //   }

    // Check if "Yes" or "No" is selected in Table 6
    // if (!checkboxes5.Yes[1] && !checkboxes5.No[1]) {
    //   alert('Please select either "Yes" or "No" in Table 6.');
    //   return false;
    // } else if (checkboxes5.Yes[1] && !textAreaDisabled && textArea.trim() === '') {
    //   alert('Please provide a brief summary of your grievance in Table 6.');
    //   return false;
    // }



    // Set formErrors state to indicate which fields have errors
    setFormErrors(errors);

    // Check if any error exists
    const fieldErrorsExist = Object.values(errors).some((hasError) => hasError);
    if (fieldErrorsExist) {
      // Display custom error messages for each field if needed
      if (errors.stakeholderName) {
        alert('Please fill in the Stakeholder Name field.');
      }
      if (errors.emailId) {
        alert('Please fill in the Email ID field.');
      }
      // if (errors.Folio) {
      //   alert('Please fill in the Folio field.');
      // }

    }

    return !fieldErrorsExist; // All validations passed
  };
  const handleSubmit = async (event) => {
    event.preventDefault();



    // Validate the form
    if (validateForm()) {
      const missingRows = [];

      // Table 1
      const selectedOptions = {};
      parameterRows.forEach((param, index) => {
        const selectedOption = Object.keys(checkboxes).find(
          (key) => checkboxes[key][index]
        );
        if (selectedOption) {
          selectedOptions[`var${index + 1}`] = selectedOption;
        } else {
          missingRows.push(`Row ${index + 1} of Table 1`);
        }
      });
      const var11 = selectedOptions['var1'] || 0;
      const var12 = selectedOptions['var2'] || 0;
      const var13 = selectedOptions['var3'] || 0;

      // Table 2
      const selectedOptions1 = {};
      parameterRows1.forEach((param1, index1) => {
        const selectedOption1 = Object.keys(checkboxes1).find(
          (key1) => checkboxes1[key1][index1]
        );
        if (selectedOption1) {
          selectedOptions1[`var${index1 + 1}`] = selectedOption1;
        } else {
          missingRows.push(`Row ${index1 + 1} of Table 2`);
        }
      });
      const var21 = selectedOptions1['var1'] || 0;
      const var22 = selectedOptions1['var2'] || 0;
      const var23 = selectedOptions1['var3'] || 0;

      // Table 3
      const selectedOptions2 = {};
      parameterRows2.forEach((param2, index2) => {
        const selectedOption2 = Object.keys(checkboxes2).find(
          (key2) => checkboxes2[key2][index2]
        );
        if (selectedOption2) {
          selectedOptions2[`var${index2 + 1}`] = selectedOption2;
        } else {
          missingRows.push(`Row ${index2 + 1} of Table 3`);
        }
      });
      const var31 = selectedOptions2['var1'] || 0;
      const var32 = selectedOptions2['var2'] || 0;
      const var33 = selectedOptions2['var3'] || 0;

      // Table 4 (only if 'attendedMeeting' is 'yes')
      let var41 = 0, var42 = 0, var43 = 0; // Default values
      if (attendedMeeting === 'yes') {
        const selectedOptions3 = {};
        parameterRows3.forEach((param3, index3) => {
          const selectedOption3 = Object.keys(checkboxes3).find(
            (key3) => checkboxes3[key3][index3]
          );
          if (selectedOption3) {
            selectedOptions3[`var${index3 + 1}`] = selectedOption3;
          } else {
            missingRows.push(`Row ${index3 + 1} of Table 4`);
          }
        });
        var41 = selectedOptions3['var1'] || 0;
        var42 = selectedOptions3['var2'] || 0;
        var43 = selectedOptions3['var3'] || 0;
      }

      // Table 5
      const selectedOptions4 = {};
      parameterRows4.forEach((param4, index4) => {
        const selectedOption4 = Object.keys(checkboxes4).find(
          (key4) => checkboxes4[key4][index4]
        );
        if (selectedOption4) {
          selectedOptions4[`var${index4 + 1}`] = selectedOption4;
        } else {
          missingRows.push(`Row ${index4 + 1} of Table 5`);
        }
      });
      const var51 = selectedOptions4['var1'] || 0;
      const var52 = selectedOptions4['var2'] || 0;
      const var53 = selectedOptions4['var3'] || 0;

      // Table 6
      const selectedOptions5 = {};
      parameterRows5.forEach((param5, index5) => {
        const selectedOption5 = Object.keys(checkboxes5).find(
          (key5) => checkboxes5[key5][index5]
        );
        if (selectedOption5) {
          selectedOptions5[`var${index5 + 1}`] = selectedOption5;
        } else {
          missingRows.push(`Row ${index5 + 1} of Table 6`);
        }
      });
      const var61 = selectedOptions5['var1'] || 0;
      const var62 = selectedOptions5['var2'] || 0;
      const var63 = selectedOptions5['var3'] || 0;

      // Table 7
      const selectedOptions6 = {};
      parameterRows6.forEach((param6, index6) => {
        const selectedOption6 = Object.keys(checkboxes6).find(
          (key6) => checkboxes6[key6][index6]
        );
        if (selectedOption6) {
          selectedOptions6[`var${index6 + 1}`] = selectedOption6;
        } else {
          missingRows.push(`Row ${index6 + 1} of Table 7`);
        }
      });
      const var71 = selectedOptions6['var1'] || 0;
      const var72 = selectedOptions6['var2'] || 0;
      const var73 = selectedOptions6['var3'] || 0;

      // Table 8
      const selectedOptions7 = {};
      parameterRows7.forEach((param7, index7) => {
        const selectedOption7 = Object.keys(checkboxes7).find(
          (key7) => checkboxes7[key7][index7]
        );
        if (selectedOption7) {
          selectedOptions7[`var${index7 + 1}`] = selectedOption7;
        } else {
          missingRows.push(`Row ${index7 + 1} of Table 8`);
        }
      });
      const var81 = selectedOptions7['var1'] || 0;
      const var82 = selectedOptions7['var2'] || 0;
      const var83 = selectedOptions7['var3'] || 0;

      // Table 9 (text area)
      const selectedOptions8 = {};
      let var92;
      parameterRows8.forEach((param8, index8) => {
        if (index8 === 1) {
          var92 = ` ${textArea}`;
        } else {
          const selectedOption8 = Object.keys(checkboxes8).find(
            (key8) => checkboxes8[key8][index8]
          );
          if (selectedOption8) {
            selectedOptions8[`var${index8 + 1}`] = selectedOption8;
          } else {
            missingRows.push(`Row ${index8 + 1} of Table 9`);
          }
        }
      });
      const var91 = selectedOptions8['var1'] || 0;

      // Validate that var92 (Remarks) is not empty
      if (!var92 || var92.trim() === "") {
        missingRows.push("Remarks must be filled out.");
      }

      // Check if any rows are missing and display an alert
      if (missingRows.length > 0) {
        alert(`Please fill out the following rows before submitting:\n\n${missingRows.join("\n")}`);
        return;
      }

      // Validate 'attendedMeeting'
      if (!attendedMeeting) {
        alert("Please select 'Yes' or 'No' for attending the shareholders' meeting.");
        return;
      }

      // Prepare the form data for submission
      const myHeaders = new Headers();
      myHeaders.append("X-Cleartax-Auth-Token", "5e750eb7-ba46-467c-a8ba-42401dab5c20");
      myHeaders.append("Content-Type", "application/json");

      const customerPhone = formData.customerPhone || '';
      const raw = JSON.stringify({
        NameOfShareHolder: formData.stakeholderName,
        EmailID: formData.emailId,
        FolioNoClientID: folio,
        MobileNumber: customerPhone,
        SrNo11: var11,
        SrNo12: var12,
        SrNo13: var13,
        SrNo21: var21,
        SrNo22: var22,
        SrNo23: var23,
        SrNo31: var31,
        SrNo32: var32,
        SrNo33: var33,
        SrNo41: var41,
        SrNo42: var42,
        SrNo43: var43,
        SrNo51: var51,
        SrNo52: var52,
        SrNo53: var53,
        SrNo61: var61,
        SrNo62: var62,
        SrNo63: var63,
        SrNo71: var71,
        SrNo72: var72,
        SrNo73: var73,
        SrNo81: var81,
        SrNo82: var82,
        SrNo83: var83,
        SrNo91: var91,
        Remarks: var92
      });

      // Log the raw object before it's stringified and sent
      console.log("Form Data and Variables to be sent:", raw);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://Live.jfsl.in/Survey_Api/api/API/SurveyDetails", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);

          if (result.Result === 1) {
            // Redirect to the thank you page if successful
            window.location.href = '/thank-you';
          }
          if (result.Result === 3) {
            alert("FolioNo/DPID is already registered");
          }
        })
        .catch(error => console.log('error', error));
    }



  };




  return (
    <div>
      <form className='p-10'>
        <div className="flex flex-wrap">
          {/* first pair */}

          <div className="w-full md:w-1/2 pr-16">
            <label className={`pr-6 py-4 ${formErrors.stakeholderName ? 'text-red-500' : ''}`}>
              Name of the shareholder:
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="stakeholderName"
              name="stakeholderName"
              readOnly
              value={formData.stakeholderName}
              required
              pattern="[A-Za-z ]+"
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.stakeholderName ? 'border-red-500' : ''
                }`}
              placeholder="Enter Stakeholder name"
            />
            {formErrors.stakeholderName && (
              <p className="text-red-500 text-sm">This field is required.</p>
            )}
          </div>
          <div className="w-full md:w-1/2 pr-16">
            <label className={`pr-6 py-4 ${formErrors.emailId ? 'text-red-500' : ''}`}>
              Email ID:
              <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="EmailId"
              name="emailId"
              readOnly
              value={formData.emailId}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              title="Enter a valid email address"
              required
              onChange={handleInputChange}
              className={`shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.emailId ? 'border-red-500' : ''
                }`}
              placeholder="Enter email ID"
            />
            {formErrors.emailId && (
              <p className="text-red-500 text-sm">This field is required.</p>
            )}
          </div>

          {/* Second Pair */}
          {/*the folio part with error validations and readonly */}
          {/* <div className="w-full md:w-1/2 pr-16">
  <label className={`pr-6 py-4 ${formErrors.Folio ? 'text-red-500' : ''}`}>
    Folio No./DP ID Client ID :
    <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    id="Folio"
    name="Folio"
    value={folio} // Use the folio state to prefill the input field
    readOnly
    pattern="[A-Za-z ]+"
    required 
    onChange={handleInputChange}
    className={`shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
      formErrors.Folio ? 'border-red-500' : ''
    }`}
    placeholder="Please enter Folio No./DP ID Client ID"
  />
  {formErrors.Folio && (
    <p className="text-red-500 text-sm">This field is required.</p>
  )}
</div> */}

          <div className="w-full md:w-1/2 pr-16">
            <label className="pr-6 py-4">
              Folio No./DP ID Client ID :
            </label>
            <input
              type="text"
              id="Folio"
              name="Folio"
              value={folio} // Use the folio state to prefill the input field
              readOnly
              pattern="[A-Za-z ]+"
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please enter Folio No./DP ID Client ID"
            />
          </div>

          <div className="w-full md:w-1/2 pr-16">
            <label className="pr-6 py-4">
              Mobile Number:

            </label>
            <input
              type="tel"
              id="customerPhone"
              name="customerPhone"
              value={formData.customerPhone}
              onChange={(e) => {
                let inputNumber = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                inputNumber = inputNumber.slice(0, 10); // Limit to 10 digits
                handleInputChange({ target: { name: 'customerPhone', value: inputNumber } });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                  return;
                }
                if (formData.customerPhone && formData.customerPhone.length >= 10) {
                  e.preventDefault();
                }
              }}
              className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Customer Mobile Number"
            // maxLength={10} // Set the maximum input length to 10 characters
            />
            {/* {formData.customerPhone && formData.customerPhone.length < 10 && (
    <p className="text-red-500 text-sm">Mobile number must be at least 10 digits.</p>
  )} */}
            {/* {formErrors.customerPhone && (
            <p className="text-red-500 text-sm">This field is required.</p>
          )} */}
          </div>


        </div>


        {/* Use responsive classes to show/hide table or radio buttons */}
        {/* <div className="hidden sm:block"> */}

        {/* Table 1 */}
        <p className='font-bold py-6 px-0'>1. HOW DO YOU RATE WEBSITE OF THE COMPANY?</p>
        <div className="overflow-x-auto px-26">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Parameters</th>
                <th className="px-4 py-2">Excellent</th>
                <th className="px-4 py-2">Very Good</th>
                <th className="px-4 py-2">Good</th>
                <th className="px-4 py-2">Satisfactory</th>
                <th className="px-4 py-2">Needs Improvement</th>
              </tr>
            </thead>
            <tbody>
              {parameterRows.map((param, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{param}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes.excellent[index]}
                      onChange={() => handleCheckboxChange(index, 'excellent')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes.veryGood[index]}
                      onChange={() => handleCheckboxChange(index, 'veryGood')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes.good[index]}
                      onChange={() => handleCheckboxChange(index, 'good')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes.satisfactory[index]}
                      onChange={() => handleCheckboxChange(index, 'satisfactory')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes.needsImprovement[index]}
                      onChange={() => handleCheckboxChange(index, 'needsImprovement')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*table 2*/}
        <p className='font-bold py-6 px-2'>2.HOW DO YOU RATE THE RECEIPT OF VARIOUS INTIMATIONS FROM THE COMPANY?</p>
        <div className="overflow-x-auto px-26">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Parameters</th>
                <th className="px-4 py-2">Excellent</th>
                <th className="px-4 py-2">Very Good</th>
                <th className="px-4 py-2">Good</th>
                <th className="px-4 py-2">Satisfactory</th>
                <th className="px-4 py-2">Needs Improvement</th>
              </tr>
            </thead>
            <tbody>
              {parameterRows1.map((param1, index1) => (
                <tr key={index1}>
                  <td className="border px-4 py-2">{param1}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes1.excellent[index1]}
                      onChange={() => handleCheckboxChange1(index1, 'excellent')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes1.veryGood[index1]}
                      onChange={() => handleCheckboxChange1(index1, 'veryGood')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes1.good[index1]}
                      onChange={() => handleCheckboxChange1(index1, 'good')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes1.satisfactory[index1]}
                      onChange={() => handleCheckboxChange1(index1, 'satisfactory')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes1.needsImprovement[index1]}
                      onChange={() => handleCheckboxChange1(index1, 'needsImprovement')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>




        {/*Table 3 */}
        <p className='font-bold py-6 px-0'>3. HOW DO YOU RATE DISSEMINATION OF INFORMATION ABOUT THE COMPANY BY WAY OF THE FOLLOWING?</p>
        <div className="overflow-x-auto px-26">
          <div>
            <table className="table-auto min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Parameters</th>
                  <th className="px-4 py-2">Excellent</th>
                  <th className="px-4 py-2">Very Good</th>
                  <th className="px-4 py-2">Good</th>
                  <th className="px-4 py-2">Satisfactory</th>
                  <th className="px-4 py-2">Needs Improvement</th>
                </tr>
              </thead>
              <tbody>
                {parameterRows2.map((param2, index2) => (
                  <tr key={index2}>
                    <td className="border px-4 py-2">{param2}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={checkboxes2.excellent[index2]}
                        onChange={() => handleCheckboxChange2(index2, 'excellent', 'checkbox')}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={checkboxes2.veryGood[index2]}
                        onChange={() => handleCheckboxChange2(index2, 'veryGood', 'checkbox')}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={checkboxes2.good[index2]}
                        onChange={() => handleCheckboxChange2(index2, 'good', 'checkbox')}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={checkboxes2.satisfactory[index2]}
                        onChange={() => handleCheckboxChange2(index2, 'satisfactory', 'checkbox')}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={checkboxes2.needsImprovement[index2]}
                        onChange={() => handleCheckboxChange2(index2, 'needsImprovement', 'checkbox')}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>


        {/* Table 3 */}
        {/* Table 4 */}
        <p className="font-bold py-4 px-2">
          Did you attend the Shareholders’ Meeting of the Company through VC/OVAM?
        </p>
        <div className="flex items-center gap-4 px-2">
          <label>
            <input
              type="radio"
              name="attendedMeeting"
              value="yes"
              checked={attendedMeeting === 'yes'}
              onChange={() => setAttendedMeeting('yes')}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="attendedMeeting"
              value="no"
              checked={attendedMeeting === 'no'}
              onChange={() => setAttendedMeeting('no')}
            />
            No
          </label>
        </div>

        {attendedMeeting === 'yes' && (
          <>
            <p className='font-bold py-6 px-2'>4. IN CASE YOU ATTENDED SHAREHOLDERS’ MEETING OF THE COMPANY THROUGH VC/OVAM, HOW DID YOU FIND THE ARRANGEMENT?</p>
            <div className="overflow-x-auto px-26">
              <table className="table-auto min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Parameters</th>
                    <th className="px-4 py-2">Excellent</th>
                    <th className="px-4 py-2">Very Good</th>
                    <th className="px-4 py-2">Good</th>
                    <th className="px-4 py-2">Satisfactory</th>
                    <th className="px-4 py-2">Needs Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {parameterRows3.map((param3, index3) => (
                    <tr key={index3}>
                      <td className="border px-4 py-2">{param3}</td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          checked={checkboxes3.excellent[index3]}
                          onChange={() => handleCheckboxChange3(index3, 'excellent')}
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          checked={checkboxes3.veryGood[index3]}
                          onChange={() => handleCheckboxChange3(index3, 'veryGood')}
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          checked={checkboxes3.good[index3]}
                          onChange={() => handleCheckboxChange3(index3, 'good')}
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          checked={checkboxes3.satisfactory[index3]}
                          onChange={() => handleCheckboxChange3(index3, 'satisfactory')}
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          checked={checkboxes3.needsImprovement[index3]}
                          onChange={() => handleCheckboxChange3(index3, 'needsImprovement')}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}


        {/* Table 5 */}
        <p className='font-bold py-6 px-2'>5. HOW DO YOU RATE ANNUAL REPORT OF THE COMPANY?</p>
        <div className="overflow-x-auto px-26">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Parameters</th>
                <th className="px-4 py-2">Excellent</th>
                <th className="px-4 py-2">Very Good</th>
                <th className="px-4 py-2">Good</th>
                <th className="px-4 py-2">Satisfactory</th>
                <th className="px-4 py-2">Needs Improvement</th>
              </tr>
            </thead>
            <tbody>
              {parameterRows4.map((param4, index4) => (
                <tr key={index4}>
                  <td className="border px-4 py-2">{param4}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes4.excellent[index4]}
                      onChange={() => handleCheckboxChange4(index4, 'excellent')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes4.veryGood[index4]}
                      onChange={() => handleCheckboxChange4(index4, 'veryGood')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes4.good[index4]}
                      onChange={() => handleCheckboxChange4(index4, 'good')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes4.satisfactory[index4]}
                      onChange={() => handleCheckboxChange4(index4, 'satisfactory')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes4.needsImprovement[index4]}
                      onChange={() => handleCheckboxChange4(index4, 'needsImprovement')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Table 6 */}
        <p className='font-bold py-6 px-2'>6. HOW DO YOU RATE INTERACTION WITH COMPANY OFFICIALS?</p>
        <div className="overflow-x-auto px-26">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Parameters</th>
                <th className="px-4 py-2">Excellent</th>
                <th className="px-4 py-2">Very Good</th>
                <th className="px-4 py-2">Good</th>
                <th className="px-4 py-2">Satisfactory</th>
                <th className="px-4 py-2">Needs Improvement</th>
              </tr>
            </thead>
            <tbody>
              {parameterRows5.map((param5, index5) => (
                <tr key={index5}>
                  <td className="border px-4 py-2">{param5}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes5.excellent[index5]}
                      onChange={() => handleCheckboxChange5(index5, 'excellent')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes5.veryGood[index5]}
                      onChange={() => handleCheckboxChange5(index5, 'veryGood')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes5.good[index5]}
                      onChange={() => handleCheckboxChange5(index5, 'good')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes5.satisfactory[index5]}
                      onChange={() => handleCheckboxChange5(index5, 'satisfactory')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes5.needsImprovement[index5]}
                      onChange={() => handleCheckboxChange5(index5, 'needsImprovement')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 7*/}
        <p className='font-bold py-6 px-2'>7.HOW DO YOU RATE INTERACTION WITH RTA OF THE COMPANY-LINK INTIME INDIA PRIVATE LIMITED?
        </p>
        <div className="overflow-x-auto px-26">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Parameters</th>
                <th className="px-4 py-2">Excellent</th>
                <th className="px-4 py-2">Very Good</th>
                <th className="px-4 py-2">Good</th>
                <th className="px-4 py-2">Satisfactory</th>
                <th className="px-4 py-2">Needs Improvement</th>
              </tr>
            </thead>
            <tbody>
              {parameterRows6.map((param6, index6) => (
                <tr key={index6}>
                  <td className="border px-4 py-2">{param6}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes6.excellent[index6]}
                      onChange={() => handleCheckboxChange6(index6, 'excellent')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes6.veryGood[index6]}
                      onChange={() => handleCheckboxChange6(index6, 'veryGood')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes6.good[index6]}
                      onChange={() => handleCheckboxChange6(index6, 'good')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes6.satisfactory[index6]}
                      onChange={() => handleCheckboxChange6(index6, 'satisfactory')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes6.needsImprovement[index6]}
                      onChange={() => handleCheckboxChange6(index6, 'needsImprovement')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 8*/}
        <p className='font-bold py-6 px-2'>8. HOW DO YOU RATE INVESTOR GRIEVANCE REDRESSAL MECHANISM OF THE COMPANY?
        </p>
        <div className="overflow-x-auto px-26">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Parameters</th>
                <th className="px-4 py-2">Excellent</th>
                <th className="px-4 py-2">Very Good</th>
                <th className="px-4 py-2">Good</th>
                <th className="px-4 py-2">Satisfactory</th>
                <th className="px-4 py-2">Needs Improvement</th>
              </tr>
            </thead>
            <tbody>
              {parameterRows7.map((param7, index7) => (
                <tr key={index7}>
                  <td className="border px-4 py-2">{param7}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes7.excellent[index7]}
                      onChange={() => handleCheckboxChange7(index7, 'excellent')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes7.veryGood[index7]}
                      onChange={() => handleCheckboxChange7(index7, 'veryGood')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes7.good[index7]}
                      onChange={() => handleCheckboxChange7(index7, 'good')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes7.satisfactory[index7]}
                      onChange={() => handleCheckboxChange7(index7, 'satisfactory')}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={checkboxes7.needsImprovement[index7]}
                      onChange={() => handleCheckboxChange7(index7, 'needsImprovement')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        {/* Table 9 */}
        <p className='font-bold py-6 px-2'>9. DO YOU HAVE ANY GRIEVANCE WHICH IS NOT ADDRESSED SO FAR?</p>
        <div className="overflow-x-auto px-26">
          <table className="table-auto min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2"></th>
                <th className="px-4 py-2">Yes</th>
                <th className="px-4 py-2">No</th>
              </tr>
            </thead>
            <tbody>
              {parameterRows8.map((param8, index8) => (
                <tr key={index8}>
                  <td className="border px-4 py-2">{param8}</td>
                  {index8 === 1 ? ( /* Render textarea only for the 2nd row*/
                    <td className="border px-4 py-2" colSpan="2">
                      <textarea
                        rows="5" /* Adjust rows as needed */
                        className="w-full px-2 py-1 border-blue-500"
                        placeholder="Brief summary of grievance..."
                        value={textArea} /* Provide a state value for the textarea value*/
                        onChange={handleTextareaChange} /* Handle textarea value change */
                        disabled={textAreaDisabled} /* Use the textAreaDisabled state to control the textarea*/
                        readOnly={textAreaDisabled}
                      ></textarea>

                    </td>

                  ) : (
                    <>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          checked={checkboxes8.Yes[index8]}
                          onChange={() => handleCheckboxChange8(index8, 'Yes')}
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="checkbox"
                          checked={checkboxes8.No[index8]}
                          onChange={() => {
                            handleCheckboxChange8(index8, 'No');
                            // Disable the textarea when "No" is checked
                            if (checkboxes8.No[index8]) {
                              setTextAreaDisabled(true);
                            } else {
                              setTextAreaDisabled(false);
                            }
                          }}
                        />
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='p-10  flex justify-center'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            onClick={handleSubmit}
          >
            Submit Response
          </button>

        </div>

      </form>
    </div>
  );
};
export default Form;