import React, { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [folioId, setFolioId] = useState("");
 // const [NameOfShareHolder, setNameOfShareHolder]=useState("");


  const [error, setError] = useState(""); 

  const navigate = useNavigate();

  useEffect (()=>{
    
const folioId = sessionStorage.getItem('folioNo');


 if (folioId !==null){
  navigate('/form');
 }
  }
  
  );


  const handleLogin = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
myHeaders.append("X-Cleartax-Auth-Token", "5e750eb7-ba46-467c-a8ba-42401dab5c20");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "FolioNoClientID": folioId,
  "MobileNo": "7003395014"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


function fetchData(callback) {
  fetch("https://Live.jfsl.in/Survey_Api/api/API/SurveyStockHolderDetails", requestOptions)
    .then(response => response.json()) // Use response.json() instead of response.text()
    .then(data => {
      callback(data); // Pass the entire parsed JSON data to the callback function
    })
    .catch(error => console.log('error', error));
}


fetchData((responseData) => {
  //var responseData1=responseData.result;
 // console.log(responseData1);
//alert(responseData1);
//alert(responseData);
  const surveyStockHolderDetailsList = responseData.SurveyStockHolderDetailsList; // extract the QCMAUserLoginDetailsList array
  if (surveyStockHolderDetailsList && surveyStockHolderDetailsList.length > 0) { // check if the array exists and has at least one item
    const folioNo = surveyStockHolderDetailsList[0].FolioNo;
    const NameOfShareHolder=surveyStockHolderDetailsList[0].NameOfShareHolder;
    const EmailID=surveyStockHolderDetailsList[0].EmailID;
    const MobileNumber= surveyStockHolderDetailsList[0].MobileNumber;
    // Store the 'Folio No' in sessionStorage
    sessionStorage.setItem('folioNo', folioNo);
  
    sessionStorage.setItem('NameOfShareHolder', NameOfShareHolder);
  
    sessionStorage.setItem('EmailID', EmailID);
  
    sessionStorage.setItem('MobileNumber', MobileNumber);
  
    navigate('/form', {
      state: {
        NameOfShareHolder,
        EmailID,
        MobileNumber,
      },
    });

   } else {
    alert(responseData.SurveyStockHolderDetailsList)
     setError("Invalid Folio ID");
   }   
});
 

  
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* <h1 className="text-3xl font-bold mb-8"></h1> */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          {error}
        </div>
      )}

      <div className="border border-slate-300 p-10">   
        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          <div className="mb-4     ">
          <div className="flex justify-center items-center">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="folio">
            Folio No. / DP ID Client ID
            </label>
            </div>
            <input
              type="text"
              className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="folio"
              value={folioId}
              onChange={(e) => setFolioId(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
          <button
            type="submit" 
            className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          </div>
        </form>
      </div> 
    </div>
  );
};

export default Login;