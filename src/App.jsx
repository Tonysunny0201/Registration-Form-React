
import { TextField,Stack,Button,FormGroup,FormControlLabel, Checkbox } from '@mui/material'

import './App.css'
import { useState } from 'react'

function App() {
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const [isNameInvalid,setIsNameInvalid] = useState(false)
  const [isPhoneInvalid,setIsPhoneInvalid] = useState(false)
  const [isEmailInvalid,setIsEmailInvalid] = useState(false)
  const [isUsernameInvalid,setIsUsernameInvalid] = useState(false)
  const [isPasswordInvalid,setIsPasswordInvalid] = useState(false)

  const [inputType, setInputType] = useState('password');
  
  
  const userInputValidation =(inputTag)=>{
    // user to validate user inputs
    const {name,value}=inputTag
    console.log(name,value);
    
    if (name=="name") {
      setName(value);
      !!value.match(/^[a-zA-Z\s'-]+$/) ? setIsNameInvalid(false):setIsNameInvalid(true);
    }else if(name=="phone"){
      setPhone(value);
      !!value.match(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/) ? setIsPhonevalid(false):setIsPhoneInvalid(true);
    }else if(name=="email"){
      setEmail(value);
      !!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? setIsEmailInvalid(false):setIsEmailInvalid(true);
    }else if(name=="username"){
      setUsername(value);
      !!value.match(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/) ? setIsUsernameInvalid(false):setIsUsernameInvalid(true);
    }else if(name=="password"){
      setPassword(value);
      !!value.match(/^(?=.*[A-Z])(?=(.*[a-z]){3})(?=(.*\d){3})(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/) ? setIsPasswordInvalid(false):setIsPasswordInvalid(true);
    }

  }

  // to show password
  const myFunction = () => {
    setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));
  };

  const handleSubmit=()=>{
    if(name && phone && email && username && password){
      alert(`Form Submitted Successfully!👍
        Name: ${name}
        Phone: ${phone}
        Email Id: ${email}
        UserName: ${username}
        Password: ${password}
        `)

    }else{
      alert("Please fill the form completely💀")
    }
  }

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setUsername("");
    setPassword("");
    

    setIsNameInvalid(false);
    setIsPhoneInvalid(false);
    setIsEmailInvalid(false);
    setIsUsernameInvalid(false);
    setIsPasswordInvalid(false);
  };



  return (
    <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light rounded p-5'>
        <h3>Registration Form</h3>
        <p>Fill out the form carefully for registration</p>
        <form className="mb-3">
          <div className='mb-3'>
            <TextField value={name || ""} onChange={e=>userInputValidation(e.target)} name='name' className='w-100' id="outlined-name" label="Name" variant="outlined" />
          </div>
          {
            isNameInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Name Input</div>
          }

          <div className='mb-3'>
            <TextField value={phone || ""} name='phone' onChange={e=>userInputValidation(e.target)} className='w-100' id="outlined-phone" label="Phone" variant="outlined" />
          </div>
          {
            isPhoneInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Phone-number Input</div>
          }

          <div className='mb-3'>
            <TextField value={email || ""} name='email' onChange={e=>userInputValidation(e.target)} className='w-100' id="outlined-email" label="Email" variant="outlined" />
          </div>
          {
            isEmailInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Email Input</div>
          }

          <div className='mb-3'>
            <TextField value={username || ""} name='username' onChange={e=>userInputValidation(e.target)} className='w-100' id="outlined-uname" label="Username" variant="outlined" />
          </div>
          {
            isUsernameInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Input</div>
          }

          <div className='mb-3'>
            <TextField value={password || ""} name='password' className='w-100' onChange={e=>userInputValidation(e.target)} type={inputType} id="outlined-psw" label="Password" variant="outlined" />
          </div>
          {
            isPasswordInvalid && <div className='text-danger mb-3 fw-bolder'>*Invalid Password Input</div>
          }
          <FormGroup>
            <FormControlLabel control={<Checkbox onClick={myFunction} />} label="Show Password" /> 
          </FormGroup>

          <Stack direction="row" spacing={2}>
            <Button onClick={handleSubmit} disabled={isNameInvalid || isPhoneInvalid || isEmailInvalid || isUsernameInvalid || isPasswordInvalid } style={{width:'50%', height:'60px'}} variant="contained">SUBMIT</Button>
            <Button onClick={handleReset} style={{width:'50%', height:'60px'}} variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
