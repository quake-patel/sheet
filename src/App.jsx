import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  const [empList, setEmpList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [empData, setEmpData] = useState(null);
  const URL =
    "https://script.google.com/macros/s/AKfycbywplXXupj-X_DRycy52n5LiOyOCRQbnBGTJBaAIVTRnQoxIOY6IyakJ7A7yIrzu2cy/exec";

  const handleFilter = (value) => {
    setfilteredList(
      empList.filter((item) =>
        item.name.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const empDetail = data.data.map((item) => ({
          empCode: item["Employ Code"],
          surName: item.Surname,
          name: item.Name,
          fatherName: item["Father Name"],
          fullname: item["Full Name"],
          image: item["Employ Image"],
          Course: item.Course,
          employEducation: item["Employ Education"],
          designation: item.Designation,
          subject: item["Subject / Specialisation"],
          board: item["Board / University"],
          passYear: item["Passing Years"],
          result: item.Result,
          previousCompany: item["Previous Company"],
          previousCompanyDesignation: item["Previous Company Designation"],
          workExperience: item["Work Experience"],
          communicationAddress: item["Communication Address"],
          permanentAddress: item["Permanent Address"],
          state: item.State,
          city: item.City,
          District: item.District,
          personalEmail: item["Personal Email"],
          personalNumber: item["Phone Number"],
          parentsNumber: item["Parents Number"],
          submittedDocuments: item["Submitted Documents"],
          aadharNumber: item["Aadhar number"],
          PANNumber: item["PAN Number"],
          bankAccountNo: item["Bank Account No"],
          bankIFSCCode: item["Bank IFSC Code"],
          UPIID: item["UPI ID"],
          dateofBirth: item["Date of Birth"],
          age: item.Age,
          gender: item.Gender,
          bloodGroup: item["Blood Group"],
          maritalStatus: item["Marital Status"],
          motherTongue: item["Mother Tongue"],
          nationality: item.Nationality,
          Skills: item.Skills,
          languagesSpoken: item["Languages Spoken"],
          linkedInProfile: item["LinkedIn Profile"],
          homeToOfficeDist: item["Home To Office Dist."],
          vehicleType: item["Vehicle Type"],
          vehicleName: item["Vehicle Name"],
          vehicleNumber: item["Vehicle Number"],
          allergyInformation: item["Disease/Allergy information"],
        }));
        setEmpList(empDetail);
        setfilteredList(empDetail);
        console.log(empDetail);
      });
  }, [URL]);

  return (
    <>
      <Header handleFilter={handleFilter} empList={filteredList} />
      <Dashboard
        empList={filteredList}
        setEmpData={setEmpData}
        empData={empData}
      />
    </>
  );
}

export default App;
