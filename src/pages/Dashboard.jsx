import { useContext } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { DataContext } from "../context/DataContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(DataContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  const courseList = {
    FirstSemester: ["Logic", "RDBMS", "Mongo", "Java",],
    SecondSemester: ["RWD","React","Git & Github"],
    ThirdSemester: ["Spring", "JUnit 5"],
    FourthSemester: ["Kubernetes", "Docker", "Jenkins"],
  };

  const name = user.name;
  const nameCap = name.charAt(0).toUpperCase() + name.slice(1);
  const course = "Master Mind Series (MMS)";

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <Paper sx={{padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "0.2rem", border: "none", boxShadow: "none"}}>
        <Typography variant="h3">Welcome! {nameCap}</Typography>
      </Paper>
      <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", padding: "2.5rem", paddingTop: "0"}}>
        <Box sx={{}}>
          <Typography variant="h5">Course: {course}</Typography>
          <Typography variant="h5">Email: {user.email}</Typography>
        </Box>
        <Box>
          <Box>
            <Typography variant="h4" sx={{width: "100%", display: "flex", justifyContent: "center", padding: "1rem"}}>Course List</Typography>
            <Box sx={{display: "flex", flexDirection: "column", gap: "1.2rem"}}>
              {Object.keys(courseList).map((semester) => {
                return (
                  <Paper key={semester} elevation={4} sx={{padding: "1rem", gap: "5rem"}}>
                    <Typography variant="h5">{semester}</Typography>
                    <Box sx={{display: "flex", gap: "2rem", padding: "1rem"}}>
                      {courseList[semester].map((c) => {
                        return (
                          <Paper key={c} elevation={4} sx={{padding: "0.5rem", width: "15vw", height: "5vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Typography variant="h6">{c}</Typography>
                          </Paper>
                        );
                      })}
                    </Box>
                  </Paper>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
