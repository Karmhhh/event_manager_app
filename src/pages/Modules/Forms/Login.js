import { Box, Stack } from "@mui/material";
import { useState } from "react";
import {TextField, Button} from "@mui/material";

export function LoginClients(){

  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
   e.preventDefault();
   console.log("Email:", email);
   console.log("Password:", password);

  };
   return <Box style={{border: 'groove 3px black',borderRadius:'30px',  width:'20rem',padding:'2rem',height:'60vh'}} className={'center'}>
    <div>
      <h2>Welcome to the Art Event Site</h2>
      <form onSubmit={handleSubmit}>
       <Stack direction={'column'} spacing={7} >
       <TextField id="email" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
       <TextField id="password" label="Password" variant="standard" 
        onChange={(e) => setPassword(e.target.value)} />
         <Button type="submit" variant="outlined" color="success">Login</Button>
 
       </Stack>
         </form>
    </div>
  

   </Box>

}

export function LoginPromoters(){
   return 'Login for promoters'

}