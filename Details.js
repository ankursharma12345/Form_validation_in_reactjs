import React, { forwardRef,useImperativeHandle, useState } from "react";
import { spacing } from "@mui/system";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import User from "../User";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik, ErrorMessage } from "formik";
import { Navigate } from "react-router-dom";

import {
  DetailsControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { getTreeViewUtilityClass } from "@mui/lab";

const Details=forwardRef((props,ref)=> {
  const [data, setData] = useState({});
  

  useImperativeHandle(ref,()=>({
      detailsData : data
  }));
  // console.log(data);
  
  const navigate = useNavigate();

  // const handleData = () => {
    
  // };
  const onChange = (e) => {
    setData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  // const navigate = useNavigate();

  // const handleUser=()=>{
  //   navigate('/User')
  // };

  const {errors,handleSubmit} = useFormik({
    initialValues:data,
    
    enableReinitialize:true, 
     // helps to update the initialValues
     onSubmit:props.handleSave,

    validationSchema:Yup.object({
  
    Name:Yup.string()
    .required()
    .min(10,'Name can not be less than 10 characters'),

    EmailId:Yup.string().email().required(),

    password:Yup.string().required().min(8,'Password not less than 8'),
    // .matches(/[0-9]/,'Password requires a number')
    // .matches(/[a-z]/,'Password have at least a lowercase letter')
    // .matches(/[A-Z]/,'Password have atleast a uppercase letter')
    // .matches(/[^w]/,'Password requires a symbol')

    confirmpassword: Yup.string().required().oneOf([Yup.ref('password')],'Please check the password first'),

    Phone:Yup.number().max(9999999999,'Number can not be greater than 10').min(6300000000,'Number can not be less than 6')
    }), 
   
  })

  const handleSaveDetails = (e)=>{
    handleSubmit(e)
    
   
  }
  return (
    <>
      <h2>My Details</h2>
      <form>
      <Grid container spacing={6}>
        <Grid item xl={6} md={6} sm={6} xs={6}>
          <TextField
            // id="standard-basic"
            label="Name"
            variant="outlined"
            value={data.name}
            name="Name"
            required={true}
            onChange={onChange}
            error={Boolean(errors.Name)}
            helperText={errors?.Name}
            margin="normal"
            color="success"
          />
        </Grid>
        <Grid item xl={6} md={6} sm={6} xs={6} size="medium">
          <InputLabel
            // id="demo-simple-select"
            size={{ m: 1, minWidth: 120 }}
            labelId="demo-simple-select-label"
          >
            Gender
          </InputLabel>
          <Select
            label="Gender"
            variant="outlined"
            sx={{ width: 220 }} 
            // sx se box ki width increase or decrease ki jaa sakti hai

            name="Gender"
            onChange={onChange}
            color="success"
          >
            <MenuItem value={"Male"} name="Gender" onChange={onChange}>
              Male
            </MenuItem>
            <MenuItem value={"Female"} name="Gender">
              Female
            </MenuItem>
            <MenuItem value={"Others"} name="Gender">
              Others
            </MenuItem>
          </Select>
        </Grid>
        <Grid item xl={6} md={6} sm={6} xs={6}>
          <TextField
            // id="standard-basic"
            label="EmailId"
            variant="outlined"
            name="EmailId"
            value={data.EmailId}
            onChange={onChange}
            error={Boolean(errors.EmailId)}
            helperText={errors?.EmailId}
            required
            color="success"
          />
        </Grid>
        <Grid item xl={6} md={6} sm={6} xs={6}>
          <TextField
            label="password"
            variant="outlined"  // outlined karne se box ban jata hai, standard karne se underline aa jaati hai
            value={data.password}
            name="password"
            onChange={onChange}
            error={Boolean(errors.password)}
            helperText={errors?.password}
            required
            color="success"
            type="password"
          />
        </Grid>

        <Grid item xl={6} md={6} sm={6} xs={6}>
          <TextField
            label="confirm password"
            variant="outlined"  // outlined karne se box ban jata hai, standard karne se underline aa jaati hai
            value={data.confirmpassword}
            name="confirmpassword"
            onChange={onChange}
            error={Boolean(errors.confirmpassword)}
            helperText={errors?.confirmpassword}
            required
            color="success"
            type="password"
          />
        </Grid>

        <Grid item xl={6} md={6} sm={6} xs={6}>
          <InputLabel id="demo-simple-select-label" color="success"
          size={{ m: 1, minWidth: 150 }}>
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            sx={{ width: 220 }}
            // id="demo-simple-select"
            name="age"
            label="Age"
            // value={age}
            onChange={onChange}
            color="success"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xl={6} md={6} sm={6} xs={6}>
          <TextField
            // id="standard-basic"
            label="Phone No."
            variant="outlined"
            name="Phone"
            value={data.phone}
            onChange={onChange}
            error={Boolean(errors.Phone)}
            helperText={errors?.Phone}
            color="success"
          />
        </Grid>
        {/* <Grid item xl={6} md={6} sm={6} xs={6}>
          <Typography align="auto">
            {/* <Link to="/User" state={{data}} onClick={handleUser}>
              OpenTheTable
            </Link> */}
            {/* {<User tableData = {data}/>} */}
            {/* <Button
              id="btn"
              onClick={handleSubmit}
              variant="outlined"
              type="submit"
            >
              Click Here
            </Button> */}
          {/* </Typography>
        </Grid> */} 
      </Grid>
      {/* {open && <User tableData={data} />} */}
      <br></br>
      <Button
              id="btn"
              onClick={handleSaveDetails}
              variant="outlined"
              type="submit"
            >
              Click Here
            </Button>
      </form>
    </>
  );
})
export default Details;
