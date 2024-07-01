import { useContext,useState } from "react"
import Validation from "./Validation";
import Formcontext from "../context/formcontext";

export default function Form() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
        cpassword: "",
        hobbies: [],
        address: "",
        country: "",
        agreeTerms: false
    });
     

    const context = useContext(Formcontext);
    const {postFormData} = context

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        
        const { name, value, checked, type } = e.target;
        if (type === 'checkbox') {

            if (name === "tc") {
                if (checked) {
                    setFormData((prevData) => ({
                        ...prevData,
                        agreeTerms: true
                    }))
                } else {
                    setFormData((prevData) => ({
                        ...prevData,
                        agreeTerms: false
                    }))
                }

            }
            // If the input is a checkbox, handle updating the hobbies array
            if (checked && name === "hobbies" ) {
                // If the checkbox is checked, add the hobby to the array
                setFormData((prevData) => ({
                    ...prevData,
                    hobbies: [...prevData.hobbies, value],
                }));
            } else {
                // If the checkbox is unchecked, remove the hobby from the array
                setFormData((prevData) => ({
                    ...prevData,
                    hobbies: prevData.hobbies.filter((hobby) => hobby !== value),
                }));
            }
        } else {
            // For other input types (text, email, select, etc.), update the state directly
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }

    const validationErrors = Validation(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(Object.keys(validationErrors).length === 0){
            postFormData(formData)
            e.target.reset()
            setFormData({
                name: "",
                email: "",
                gender: "",
                password: "",
                cpassword: "",
                hobbies: [],
                address: "",
                country: "",
                agreeTerms: false
            });
            setErrors({})
         }else{
             setErrors(validationErrors)
        }
    }

    return (
        <div className="p-5">
            <h3 className="mb-3">Form Validation</h3>
            <form className="myform " id="myform" onSubmit={handleSubmit}>
                <div className="input-div mb-3">
                    <input type="name" className="form-control" id="name" name="name" onChange={handleChange}
                        value={formData.name} placeholder="Name" />
                    {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="input-div mb-3">
                    <input type="email" className="form-control" id="email" name="email" onChange={handleChange}
                        value={formData.email} placeholder="Email" />
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
                <div className="input-div mb-3">
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={handleChange}
                                checked={formData.gender === "male"} />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={handleChange}
                                checked={formData.gender === "female"} />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="other" value="other" onChange={handleChange}
                                checked={formData.gender === "other"} />
                            <label className="form-check-label" htmlFor="other">Other</label>
                        </div>
                    </div>
                    {errors.gender && <span className="error-msg">{errors.gender}</span>}
                </div>
                <div className="input-div mb-3">
                    <input type="password" className="form-control" id="password" name="password" onChange={handleChange}
                        value={formData.password} placeholder="Password" />
                        {errors.password && <span className="error-msg">{errors.password}</span>}
                </div>
                <div className="input-div mb-3">
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={handleChange}
                        value={formData.cpassword} placeholder="Confirm password" />
                        {errors.cpassword && <span className="error-msg">{errors.cpassword}</span>}
                </div>
                <div className="input-div mb-3">
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="c1" name="hobbies" onChange={handleChange}
                                value="playing cricket" />
                            <label className="form-check-label" htmlFor="c1">Playing Cricket</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="c2" name="hobbies" onChange={handleChange}
                                value="listening Music" />
                            <label className="form-check-label" htmlFor="c2">Listening Music</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="c3" name="hobbies" onChange={handleChange}
                                value="reading books" />
                            <label className="form-check-label" htmlFor="c3">Reading Books</label>
                        </div>
                    </div>
                    {errors.hobbies && <span className="error-msg">{errors.hobbies}</span>}
                </div>
                <div className="input-div mb-3">
                    <textarea className="form-control" name="address" id="address" rows="3" onChange={handleChange}
                        value={formData.address} placeholder="Address"></textarea>
                        {errors.address && <span className="error-msg">{errors.address}</span>}
                </div>
                <div className="input-div mb-3">
                    <select className="form-select" value={formData.country} name="country" id="country" onChange={handleChange}>
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                    </select>
                    {errors.country && <span className="error-msg">{errors.country}</span>}
                </div>
                <div className="input-div mb-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" checked={formData.agreeTerms} type="checkbox" id="tc" name="tc" onChange={handleChange}  />
                        <label className="form-check-label" htmlFor="tc">I agree terms & conditions</label>
                    </div>
                    {errors.agreeTerms && <div className="error-msg ">{errors.agreeTerms}</div>}

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
