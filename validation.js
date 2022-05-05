const inputs = document.querySelectorAll('input');

const patterns = {
    username:/^[a-z\d]{5,12}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,20})(\.[a-z]{2,20})?$/,
    password:/^[\w@-]{8,20}$/,
    telephone:/^\d{10}$/,
    slug:/^[a-z\d-]{8,20}$/
};

//validation function
function validate(field, regex){
    
    if(regex.test(field.value)){
        field.classList = 'valid';
    }else{
       field.classList = 'invalid';
    } 
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.name]);
    });
});
