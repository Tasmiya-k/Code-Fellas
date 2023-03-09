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
        <div className="col-1" style={{padding:"12px 12px 12px 12px"}}>
            <h4>Add Your top 5 skills</h4>
          <form id="form" className="flex flex-col">
            <input type="text" placeholder="Skill 1" />
            <input type="text" placeholder="Skill 2" />
            <input type="text" placeholder="Skill 3" />
            <input type="text" placeholder="Skill 4" />
            <input type="text" placeholder="Skill 5" />
          </form>
          
        </div>
        
      </div>
    </Box>
  );
}
