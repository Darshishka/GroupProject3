export default function validate(inputs) {
    let errors = {}; 
    if (!inputs.type){
        errors.type = "A type is required";
    } else if (!inputs.category){
        errors.category = "A category is required";
    } else if (!inputs.title){
        errors.title = "A title is required";
    } else if (!inputs.message){
        errors.firstName = "A message is required";
    } 
    return errors;
};