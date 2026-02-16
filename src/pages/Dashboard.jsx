import { useContext } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { DataContext } from "../context/DataContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(DataContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  const courseList = [
    "Logic",
    "RDBMS",
    "Mongo",
    "Java",
    "RWD",
    "React",
    "Git & Github",
    "Spring",
  ];

  return (
    <Box>
      <Paper elevation={3}>
        <Typography variant="h3">{user.name}'s Dashboard</Typography>
      </Paper>
      <Box>
        <Box>
          <Typography variant="h4">Course: {user.course}</Typography>
          {/* {user.course == "mms" ? } */}
          <Typography variant="h4">Email: {user.email}</Typography>
        </Box>
        <Box>
          <Box>
            <Typography variant="h4">Course List</Typography>
            <Box>
              {courseList.map((c) => {
                return (
                  <Paper key="c" elevation={4}>
                    {c}
                  </Paper>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <h1>Dashboard</h1>
      <p>{user.name}</p>
      <p>{user.studentId}</p>
      <p>{user.email}</p>
      <p>{user.course}</p>
      <p>{user.gender}</p> */}
    </Box>
  );
}
