import "./registration.css";
import React, { useState } from "react";

function Registration() {
  const [headOfFamily, setHeadOfFamily] = useState({
    samagraId: "",
    name: "",
    fatherName: "",
    dob: "",
    mobile: "",
    gender: "",
    education: "",
    occupation: "",
    address: "",
    relationOfHead: "",
    maritalStatus: "",
  });

  const [familyMembers, setFamilyMembers] = useState([]);

  const handleHeadInputChange = (e) => {
    const { name, value } = e.target;
    setHeadOfFamily((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddFamilyMember = () => {
    const newFamilyMember = {
      name: "",
      age: "",
      gender: "",
      dob: "",
      relationOfHead: "",
      maritalStatus: "",
    };
    setFamilyMembers([...familyMembers, newFamilyMember]);
  };

  const handleFamilyMemberInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index] = {
      ...updatedFamilyMembers[index],
      [name]: value,
    };
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do whatever you want to do with the form data on submit.
    // For this example, we'll just log the data.
    console.log("Head of Family:", headOfFamily);
    console.log("Family Members:", familyMembers);
  };

  return (
    <div>
      <h1 className="justify text-center">Head of Family Form</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row ml-100">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5 offset-1">
                  <label>
                    Samagra ID:
                    <input
                      type="text"
                      name="samagraId"
                      value={headOfFamily.samagraId}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
                <div className="col-md-5">
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={headOfFamily.name}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 offset-1">
                  <label>
                    Father's Name:
                    <input
                      type="text"
                      name="fatherName"
                      value={headOfFamily.fatherName}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
                <div className="col-md-5">
                  <label>
                    Date of Birth:
                    <input
                      type="date"
                      name="dob"
                      value={headOfFamily.dob}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 offset-1">
                  <label>
                    Gender:
                    <select
                      name="gender"
                      value={headOfFamily.gender}
                      onChange={handleHeadInputChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>
                <div className="col-md-5">
                  <label>
                    marital Status:
                    <select
                      name="maritalstatus"
                      value={headOfFamily.maritalStatus}
                      onChange={handleHeadInputChange}
                    >
                      <option value="" key="">
                        Select maritalStatus
                      </option>
                      <option value="married">married</option>
                      <option value="unmarried">married</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 offset-1">
                  <label>
                    Education:
                    <input
                      type="text"
                      name="education"
                      value={headOfFamily.education}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
                <div className="col-md-5">
                  <label>
                    occupation:
                    <input
                      type="text"
                      name="occupation"
                      value={headOfFamily.occupation}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 offset-1">
                  <label>
                    Relation With Chief:
                    <input
                      type="text"
                      name="relationwithchief"
                      value={headOfFamily.relationOfHead}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
                <div className="col-md-5">
                  <label>
                    Mobile:
                    <input
                      type="text"
                      name="mobile"
                      value={headOfFamily.mobile}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 offset-1">
                  <label>
                    Family Member's:
                    <input
                      type="text"
                      name="familymember"
                      value={headOfFamily.familyMember}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
                <div className="col-md-5">
                  <label>
                    Address:
                    <input
                      type="text"
                      name="address"
                      value={headOfFamily.address}
                      onChange={handleHeadInputChange}
                    />
                  </label>
                </div>
              </div>
              <hr />
              <h2>Family Members:</h2>
              {familyMembers.map((familyMember, index) => (
                <div key={index}>
                  <div className="row">
                    <div className="col-md-5 offset-1">
                      <label>
                        {" "}
                        Name:
                        <input
                          type="text"
                          name="name"
                          value={familyMember.name}
                          onChange={(e) =>
                            handleFamilyMemberInputChange(e, index)
                          }
                        />
                      </label>
                    </div>
                    <div className="col-md-5">
                      <label>
                        Age:
                        <input
                          type="text"
                          name="age"
                          value={familyMember.age}
                          onChange={(e) =>
                            handleFamilyMemberInputChange(e, index)
                          }
                        />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 offset-1">
                      <label>
                        Gender:
                        <select
                          name="gender"
                          value={familyMember.gender}
                          onChange={(e) =>
                            handleFamilyMemberInputChange(e, index)
                          }
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-md-5">
                      <label>
                        marital Status:
                        <select
                          name="maritalstatus"
                          value={familyMember.maritalStatus}
                          onChange={(e) => handleHeadInputChange(e, index)}
                        >
                          <option value="" key="">
                            Select maritalStatus
                          </option>
                          <option value="married">married</option>
                          <option value="unmarried">unmarried</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 offset-1">
                      <label>
                        Date of Birth:
                        <input
                          type="date"
                          name="dob"
                          value={familyMember.dob}
                          onChange={(e) =>
                            handleFamilyMemberInputChange(e, index)
                          }
                        />
                      </label>
                    </div>
                    <div className="col-md-5">
                      <label>
                        Relation With Chief:
                        <input
                          type="text"
                          name="relationwithchief"
                          value={familyMember.relationOfHead}
                          onChange={(e) => handleHeadInputChange(e, index)}
                        />
                      </label>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
              <div className="row">
                <div className="col-md-5 mt-3 mb-3 offset-4">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleAddFamilyMember}
                  >
                    Add Family Member
                  </button>
                </div>
                <div className="col-md-5"></div>
              </div>
              <div className="justify text-center">
                <button className="btn btn-success w-50" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
