
const Validation = (email, password) => {
  let errors = {}

  if(!email){
    errors.email = 'Email Required'
  }else if (email.length < 5){
    errors.email = 'Email must be more than 5 characters'
  }
  if(!password){
    errors.password = 'Password Required'
  }else if (password.length < 9){
    errors.password = 'Password must be more than 9 characters'
  }


  return errors
}

export default Validation