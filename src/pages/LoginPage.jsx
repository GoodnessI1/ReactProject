import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import img1 from "../assets/man.png";

const Loginpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    course: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          width: "35%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRight: "1px solid #ccc",
        }}
      >
        <img src={img1} alt="" />
      </Box>

      {/* Form Container */}
      <Box
        sx={{
          width: "65%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Student Registration
        </Typography>

        <Paper elevation={3} sx={{width:"70%"}}>
          <form
            onSubmit={handleSubmit}
            style={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: "1rem",
              paddingBottom: "1.1rem"
            }}
          >
            <TextField
              label="FullName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              sx={{ width: "80%" }}
            />
            <TextField
              label="Student ID"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              margin="normal"
              required
              sx={{ width: "80%" }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              sx={{ width: "80%" }}
            />

            <TextField
              label="Course"
              name="course"
              type="course"
              value={formData.course}
              onChange={handleChange}
              margin="normal"
              required
              sx={{ width: "80%" }}
            />

            <TextField
              select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              margin="normal"
              required
              sx={{ width: "80%" }}
            >
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
            </TextField>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ width: "30%", marginTop: "1rem" }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default Loginpage;
