import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import bgImg from "../assets/img1.jpg"
export default function FirstPage() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="register" >
        <div className="col1" style={{padding:"12px 12px 12px 12px"}}>
          <div className="row1" style={{padding:"20px 4px 30px 30px"}} >
            <TextField required id="outlined-required" label="Job Type" />
            <TextField required id="outlined-required" label="No of years worked" />
          </div>
          <div className="row2" style={{padding:"4px 4px 30px 30px"}}>
            <TextField required id="outlined-required" label="City" />
            <TextField required id="outlined-required" label="State" />
          </div>
          <div className="row3" style={{padding:"4px 4px 30px 30px"}}>
            <input type="text" placeholder="Write about yourself" />
          </div>
        </div>
        
      </div>
    </Box>
  );
}
