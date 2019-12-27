export default function validate(inputs) {
    let errors = {};     
    let first = inputs.firstName;
    let last = inputs.lastName;  
    if (!first){
        errors.firstName = "A first name is required";
    } else if (first.length <= 1){
        errors.firstName = "Name too short";
    } else if (!last){
        errors.lastName = "A last name is required";
    } else if (last.length <= 1){
        errors.firstName = "Name too short";
    } else if (!inputs.email) {
        errors.email = 'An email address is required';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
        errors.email = 'Email address is invalid';
    } else if(!inputs.cross){
        errors.cross = "Cross streets are required";
    } else if(!inputs.refer){
        errors.cross = "A referral is required";
    } else if (!/^.{6,}$/.test(inputs.password)){
        errors.password = "Password must be at least 6 characters long";
    } else if(inputs.password !== inputs.confirmPassword){
        errors.passwordConfirm = "Your passwords do not match";
    } else if(!inputs.password){
        errors.password = "A password is required";
    } else if (inputs.email && inputs.firstName && inputs.lastName && inputs.password && inputs.confirmPassword){    
        errors = {};   
    }
    return errors;
};