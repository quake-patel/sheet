import InfoCard from "./InfoCard";

const Dashboard = ({ empList, setEmpData, empData }) => {
  return (
    <section className='dashboard'>
      <div className='dashboard-title'>Dashboard</div>
      <div className='dashboard-data'>
        <div className='dashboard-data-inner'>
          {empList.map((item, index) => (
            <InfoCard
              key={index}
              data={item}
              onClick={(data) => setEmpData(data)}
            />
          ))}
        </div>
      </div>
      {empData && (
        <div onClick={() => setEmpData(null)}>
          <div className='popupData'>
            <div className='popupData-inner'>
              <div className='popup-top-wrapper'>
                <div className='popupData-details'>
                  <div className='popupData-details-inner'>
                    <h2>
                      <span>Full Name:</span>{" "}
                      <span className='data-pop'> {empData.fullname} </span>
                    </h2>
                    <h2>
                      <span>Employ Code:</span>{" "}
                      <span className='data-pop'> {empData.empCode} </span>
                    </h2>
                    <h2>
                      <span>Name:</span>{" "}
                      <span className='data-pop'> {empData.name} </span>
                    </h2>
                    <h2>
                      <span>Surname:</span>{" "}
                      <span className='data-pop'> {empData.surName} </span>
                    </h2>
                    <h2>
                      <span>Father Name:</span>{" "}
                      <span className='data-pop'> {empData.fatherName} </span>
                    </h2>
                    <h2>
                      <span>Employ Education:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.employEducation}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Course:</span>{" "}
                      <span className='data-pop'> {empData.Course} </span>
                    </h2>
                    <h2>
                      <span>Designation:</span>{" "}
                      <span className='data-pop'> {empData.designation} </span>
                    </h2>
                    <h2>
                      <span>Subject / Specialisation:</span>{" "}
                      <span className='data-pop'> {empData.subject} </span>
                    </h2>
                    <h2>
                      <span>Board / University:</span>{" "}
                      <span className='data-pop'> {empData.board} </span>
                    </h2>
                    <h2>
                      <span>Passing Years:</span>{" "}
                      <span className='data-pop'> {empData.passYear} </span>
                    </h2>
                    <h2>
                      <span>Result:</span>{" "}
                      <span className='data-pop'> {empData.result} </span>
                    </h2>
                    <h2>
                      <span>Previous Company:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.previousCompany}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Previous Company Designation:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.previousCompanyDesignation}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Work Experience:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.workExperience}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Communication Address:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.communicationAddress}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Permanent Address: </span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.permanentAddress}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>State:</span>{" "}
                      <span className='data-pop'> {empData.state} </span>
                    </h2>
                    <h2>
                      <span>City:</span>{" "}
                      <span className='data-pop'> {empData.city} </span>
                    </h2>
                    <h2>
                      <span>District: </span>{" "}
                      <span className='data-pop'> {empData.District} </span>
                    </h2>
                    <h2>
                      <span>Personal Email:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.personalEmail}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Phone Number:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.personalNumber}{" "}
                      </span>
                    </h2>
                  </div>
                  <div className='popupData-details-inner'>
                    <h2>
                      <span>Parents Number:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.parentsNumber}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Submitted Documents:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.submittedDocuments}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Aadhar number:</span>{" "}
                      <span className='data-pop'> {empData.aadharNumber} </span>
                    </h2>
                    <h2>
                      <span>PAN Number:</span>{" "}
                      <span className='data-pop'> {empData.PANNumber} </span>
                    </h2>
                    <h2>
                      <span>Bank Account No: </span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.bankAccountNo}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Bank IFSC Code:</span>{" "}
                      <span className='data-pop'> {empData.bankIFSCCode} </span>
                    </h2>
                    <h2>
                      <span>UPI ID: </span>{" "}
                      <span className='data-pop'> {empData.UPIID} </span>
                    </h2>
                    <h2>
                      <span>Date of Birth:</span>{" "}
                      <span className='data-pop'> {empData.dateofBirth} </span>
                    </h2>
                    <h2>
                      <span>Age: </span>{" "}
                      <span className='data-pop'> {empData.age} </span>
                    </h2>
                    <h2>
                      <span>Gender: </span>{" "}
                      <span className='data-pop'> {empData.gender} </span>
                    </h2>
                    <h2>
                      <span>Blood Group:</span>{" "}
                      <span className='data-pop'> {empData.bloodGroup} </span>
                    </h2>
                    <h2>
                      <span>Marital Status:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.maritalStatus}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Mother Tongue:</span>{" "}
                      <span className='data-pop'> {empData.motherTongue} </span>
                    </h2>
                    <h2>
                      <span>Nationality: </span>{" "}
                      <span className='data-pop'> {empData.nationality} </span>
                    </h2>
                    <h2>
                      <span>Skills: </span>{" "}
                      <span className='data-pop'> {empData.Skills} </span>
                    </h2>
                    <h2>
                      <span>Languages Spoken:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.languagesSpoken}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>LinkedIn Profile:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.linkedInProfile}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Home To Office Distance:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.homeToOfficeDist}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Vehicle Type:</span>{" "}
                      <span className='data-pop'> {empData.vehicleType} </span>
                    </h2>
                    <h2>
                      <span>Vehicle Name:</span>{" "}
                      <span className='data-pop'> {empData.vehicleName} </span>
                    </h2>
                    <h2>
                      <span>Vehicle Number:</span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.vehicleNumber}{" "}
                      </span>
                    </h2>
                    <h2>
                      <span>Allergy Information: </span>{" "}
                      <span className='data-pop'>
                        {" "}
                        {empData.allergyInformation}{" "}
                      </span>
                    </h2>
                  </div>

                  <div className='popupData-image'>
                    <img src={empData.image} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
