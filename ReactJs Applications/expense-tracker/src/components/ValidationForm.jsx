/* eslint-disable no-unused-vars */

export default function ValidationForm(formData,setErrors) {

    let errors = {}

    if (!formData.title.trim()) {
        errors.title = "*Title is required";
    }
    if (!formData.category.trim()) {
        errors.category = "*Category is required";
    }

    if (!formData.amount.trim()) {
        errors.amount = "*Amount is required";
    }
    setErrors(errors)
    return errors
}
