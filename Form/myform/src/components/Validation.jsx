
const Validation = (formData) => {
    let errors = {}

    if (!formData.name.trim()) {
        errors.name = "*Name is required";
    }
    if (!formData.email.trim()) {
        errors.email = "*Email is required";
    } else if (!isValidEmail(formData.email)) {
        errors.email = "*Invalid Email Address"
    }
    
    if (!formData.gender) {
        errors.gender = '*Gender is required';
    }
    if (!formData.password) {
        errors.password = '*Password is required';
    } else if (formData.password.length < 6) {
        errors.password = '*Password must be at least 6 characters long';
    }
    if (formData.password !== formData.cpassword) {
        errors.cpassword = '*Passwords do not match';
    }
    if (formData.hobbies.length === 0) {
        errors.hobbies = '*Select at least one hobby';
    }
    if (!formData.address.trim()) {
        errors.address = '*Address is required';
    }
    if (!formData.country) {
        errors.country = '*Country is required';
    }
    if (!formData.agreeTerms) {
        errors.agreeTerms = '*You must agree to the terms and conditions';
    }

    return errors

}

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default Validation
