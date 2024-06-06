import { createContext, useContext, useState } from 'react';
import { toastError, toastSuccess, toastWarn } from './tostify';
import { loginAxiosServices, sendEmailAxiosService, signUpAxiosServices } from './AxiosServices';
import Navigation from './useNavigation.js'

const ServiceProviderContext = createContext();

export const GlobalServiceProvider = ({ children }) => {
  
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLogged,setIsLogged] = useState(false);
  const [isShowPassword,setIsShowPassword] = useState(false);

  const [newUserName,setNewUserName] = useState('');
  const [newUserEmail,setNewUserEmail]= useState('');
  const [newUserPassword,setNewUserPassword] = useState('');
  const {directPage}= Navigation();

  // email here
  const [toAddress, setToAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

const handleSignUp = async (e)=>{
  e.preventDefault();
  const isValid = signUpValidation();
  
  if(isValid)
    {
       const registerDetails = {
        "userName":newUserName,
        "userEmail":newUserEmail,
        "userPassword":newUserPassword
       }

       const response = await signUpAxiosServices(registerDetails);

        const result = response.data;
        if(result.success)
        {
          toastSuccess(result.message);
          setNewUserEmail('');
          setNewUserName('');
          setNewUserPassword('');

        }
        else{
          toastWarn(result.message);
        }
       
    }

}

const signUpValidation = ()=>{
  let isValid = true;
  if(newUserName.trim()===""){
    isValid = false;
    toastWarn("user name must be filled")
    return
  }
  if(newUserEmail.trim()==="")
    {
      isValid= false;
      toastWarn("user email must be filled");
      return
    }
    if(!emailValidation(newUserEmail)){
      toastError("invalid email id format")
      return  
  }
    if(newUserPassword.trim()==="")
      {
        isValid=false;
          toastWarn("user password must be filled");
          return
      }
   
 

if(!passwordValidation(newUserPassword)){
    toastError("password must contatin only number and only letter atleast 6 character")
    return
}

return isValid;

}

// user login  here 
  const handleLogin = async (e)=>{
    e.preventDefault();
     // login validation
    const isValid = loginValidation();
    if(isValid){
      
        const LoginDetails = {
            "userEmail" : userEmail,
            "userPassword" : userPassword,
        }
        const response = await loginAxiosServices(LoginDetails);
        if(response.data.success)
          {
            toastSuccess(response.data.message);
            const userLogData = response.data.getUserData
            localStorage.setItem("userData",JSON.stringify(userLogData))
            localStorage.setItem("userToken",JSON.stringify(response.data.token))
            await  setIsLogged(true);
            directPage('Homepage');
            
          }
          else{
            toastWarn(response.data.message);
          }

    }

  }
// check the password  here 
  const passwordValidation = (password)=>{
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    return passwordRegex.test(password);

  }

  // check the email format here
  const emailValidation = (email)=>{
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
return emailRegex.test(email);

  }

  // login validation here
  const loginValidation = ()=>{
    let isvalid = true;

    // email validation here
    if(userEmail.trim()==="")
        {
             isvalid= false;
            toastWarn("user email must be filled");
            return
        }
        if(!emailValidation(userEmail)){
            toastError("invalid email id format")
            return  
        }

         // password validation here 
         if(userPassword.trim()==="")
            {
                 isvalid=false;
                toastWarn("user password must be filled");
                return
            }

        if(!passwordValidation(userPassword)){
            toastError("password must contatin only number and only letter atleast 6 character")
            return
        }

        return isvalid
  }

  // log out here
  const handleLogOut = ()=>{
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");
    setIsLogged(false);
    directPage("")
  }
  // password visible code here
const passswordVisible = ()=>{
setIsShowPassword(!isShowPassword);
}
const handleEmailValidation = () => {
  let isValid = true;
  if (toAddress.trim() === "") {
    isValid = false;
    toastWarn("To Address must be filled");
    return false;
  }
  if (!emailValidation(toAddress)) {
    toastError("Invalid email id format");
    return false;
  }
  if (subject.trim() === "") {
    isValid = false;
    toastWarn("Subject must be filled");
    return false;
  }
  if (description.trim() === "") {
    isValid = false;
    toastWarn("Description must be filled");
    return false;
  }
  return isValid;
};

const handleEmail = async (e) => {
  e.preventDefault();
  const isValid = handleEmailValidation();
  if (isValid) {
    try {
      const emailDetails = {
        to: toAddress,
        subject: subject,
        text: description,
      };
      const response = await sendEmailAxiosService(emailDetails);
      const result = response.data;
      if (result.success) {
        toastSuccess('Email sent successfully');
        setToAddress('');
        setSubject('');
        setDescription('');
      } else {
        toastWarn('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toastError('Error sending email');
    }
  }
};

  return (
    <ServiceProviderContext.Provider
      value={{
        userEmail,
        userPassword,
        setUserEmail,
        setUserPassword,
        isLogged,
        setIsLogged,
        handleLogin,
        isShowPassword,
        setIsShowPassword,
        handleLogOut,
        passswordVisible,
        newUserName,
        newUserEmail,
        newUserPassword,
        setNewUserEmail,
        setNewUserName,
        setNewUserPassword,
        handleSignUp,
        toAddress,
        setToAddress,
        description,
        setDescription,
        subject,
        setSubject,
        handleEmail
      }}
    >
      {children}
    </ServiceProviderContext.Provider>
  );
};

export const GlobalServices = () => {
  return useContext(ServiceProviderContext);
};