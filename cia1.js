import React ,{useState}from 'react'
import TextField from  '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { style } from '@mui/system';

function Pro() {
    const[userName,setUserName]=useState('');
  const[email,setEmail]=useState('');
  const [password, setPassword] = useState('');
  const[error,setError]=useState(false)
  const formHandler=(event)=>{
    event.preventDefault();

    if(userName.length==0 || email.length==0 || password.length==0)
    {
     
    setError(true);
  
    }
    if(userName && email){
        console.log("Username:",userName,"\nEmail",email,"\nPassword",password)
        
      
      const obj={
        userName:userName,
        email:email,
        password:password
      }
      console.log(obj)
    
      }
  
    }
    const [meter, setMeter] = React.useState(false);
   
  
    const passwordRegex =
      /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/g;
    const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
    const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
    const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
    const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
    const eightCharsOrMore = /.{8,}/g; // eight characters or more
  
    const passwordTracker = {
      uppercase: password.match(atLeastOneUppercase),
      lowercase: password.match(atLeastOneLowercase),
      number: password.match(atLeastOneNumeric),
      specialChar: password.match(atLeastOneSpecialChar),
      eightCharsOrGreater: password.match(eightCharsOrMore),
    };
  
    const passwordStrength = Object.values(passwordTracker).filter(
      (value) => value
    ).length;
  
  return (
      <div>
      <h1>Dynamic Form</h1>
        <div>
      
       <TextField
        id="input-with-icon-textfield" value={userName} onChange={e=>setUserName(e.target.value)}
         style={{backgroundColor:'white'}} placeholder="Enter "
        InputProps={{
          startAdornment: (
            <InputAdornment position="end" >
             
            </InputAdornment>
          ),
        }}
        variant="outlined"
        /></div>
        <div>
          { error && userName.length===0 ?
          
          <label style ={{borderColor:"red" ,color:"red"}}>Please Fill the Column</label>:""}
        </div>
        
        <TextField
        id="input-with-icon-textfield" value={email} onChange={e=>setEmail(e.target.value)}
         style={{backgroundColor:'white'}} placeholder="Enter "
        InputProps={{
          startAdornment: (
            <InputAdornment position="end" >
             
            </InputAdornment>
          ),
        }}
        variant="outlined"
        />
        <div>
          { error && email.length===0 ? 
          <label style ={{borderColor:"red" ,color:"red"}}>Invalid Email</label>:"" }
        </div>
        
        <form>
          <br></br>
          <input
            onFocus={() => setMeter(true)}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your password"
            value={password}
            name="password"
          />
          {meter && (
            <div>
              <div className="password-strength-meter"></div>
              <div>
                {passwordStrength < 5 && 'Must contain '}
                {!passwordTracker.uppercase && 'uppercase, '}
                {!passwordTracker.lowercase && 'lowercase, '}
                {!passwordTracker.specialChar && 'special character, '}
                {!passwordTracker.number && 'number, '}
                {!passwordTracker.eightCharsOrGreater &&
                    'eight characters or more'}
                </div>
              </div>
            )}
            <div>
            { error && password.length===0 ? 
            <label style ={{borderColor:"red" ,color:"red"}}>password is weak</label>:"" }
          </div>
          <br></br>
          </form>
          <style jsx>
            {`
              input {
                padding:0.5rem;
                
                border: 1px solid grey;
                max-width: 17%;
                width:100%
              }
              .password-strength-meter {
                height: 0.3rem;
                background-color: lightgrey;
                border-radius: 3px;
                margin: .5rem 0
              }
    
              .password-strength-meter::before {
                content: "";
                background-color: ${
                  ['red', 'orange', '#03a2cc', '#03a2cc', '#0ce052'][
                    passwordStrength - 1
                  ] || ''
                };
                height: 100%;
                width: ${(passwordStrength / 5) * 100}%;
                display: block;
                border-radius: 3px;
                transition: width 0.2s;
              }
            `}
          </style>
           <Button variant="Text" style={{
         borderRadius: 35, color:'black',
         backgroundColor: "white",
         padding: "12px 66px",
         fontSize: "18px"}}
         onClick={formHandler}
         >Log In </Button>
      </div>
    )
  }
  
  export default Pro