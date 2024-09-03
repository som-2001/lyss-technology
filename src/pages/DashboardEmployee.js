import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@mui/material";
  import { IoMdArrowRoundUp } from "react-icons/io";
  import { Navbar } from "../components/Navbar";
  import { Helmet } from "react-helmet";
  import { useEffect, useState } from "react";
  import { useFormik } from "formik";
  import * as Yup from "yup";
  import { Pie } from "react-chartjs-2";
  import "chart.js/auto";
import { DrawSharp } from "@mui/icons-material";
import Footer from "../components/Footer";
  
  const validationSchema = Yup.object({
    from: Yup.date().required("From date is required"),
    to: Yup.date()
      .min(Yup.ref("from"), "To date cannot be before From date")
      .required("To date is required"),
    leaveType: Yup.string().required("Please select a leave type"),
    additionalInfo: Yup.string().max(
      500,
      "Additional information cannot exceed 500 characters"
    ),
  });
  
  export const DashboardEmployee = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const formik = useFormik({
      initialValues: {
        from: "",
        to: "",
        leaveType: "",
        additionalInfo: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  
    const pieData = {
      labels: ["Present", "Absent"],
      datasets: [
        {
          data: [75, 25],
          backgroundColor: ["#36A2EB", "#FF6384"],
          hoverBackgroundColor: ["#36A2EB", "#FF6384"],
        },
      ],
    };

    
  
    return (
      <Box
        style={{
          overflowX: "hidden",
          backgroundColor: "whitesmoke",
          color: "#113",
          fontFamily: "math",
        }}
      >
        <Helmet>
          <title>Lyss Technology Pvt. Ltd. | Employee Dashboard</title>
        </Helmet>
        <Navbar />

        <Box
      sx={{
        width: "100vw",
        textAlign: "center",
        backgroundImage:
          `url(../images/about.png)`,
        marginTop:"70px",  
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: {xs:"8vw",lg:"2vw",md:"2vw"},
        paddingBottom: "15vw",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay with opacity
          zIndex: 1,
        },
      }}
    >
      <Grid
        container
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          padding: { xs: "20px", sm: "20px", md: "50px" },
        }}
      >
        <Grid item xs={12} sm={12} lg={6} md={6}>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.4rem",
                md: "2.6rem",
                lg: "2.6rem",
              },
              marginTop: { xs: "20px", md: "80px" },
              fontWeight: "bold",
            }}
          >
           Employee Dashboard
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
                lg: "1.2rem",
              },
              marginTop: "10px",
              fontWeight: "500",
              padding: { xs: "10px", sm: "10px", md: "0px" },
            }}
          >
            The Employee Dashboard is a centralized hub designed to empower employees with quick access to essential tools, resources, and personalized information, streamlining daily tasks and enhancing overall productivity.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={6} md={6}></Grid>
      </Grid>
    </Box>
        <Box
         
        >
          {scrollPosition > 150 && (
            <Button
              id="button"
              sx={{
                position: "fixed",
                bottom: "20px",
                right: "10px",
                zIndex: "10",
                fontSize: "1.5rem",
                backgroundColor: "#7a7ad4",
                borderRadius: "59px",
              }}
              onClick={() => {
                window.scrollTo({
                  top: "0px",
                  behavior: "smooth",
                });
              }}
            >
              <IoMdArrowRoundUp style={{ color: "white" }} />
            </Button>
          )}
        
        </Box>
  
        <Box sx={{ width: "100vw", textAlign: "center", marginTop: "50px" }}>
          <Typography
            variant="h4"
            sx={{ fontSize: "2.5rem", marginTop: "20px" }}
            className="header"
          >
            Role: Employee
          </Typography>
        </Box>
  
        <Box sx={{ width: "100vw", marginTop: "50px" }}>
          <Grid container spacing={4} sx={{textAlign:"-webkit-center"}}>
            <Grid item xs={12} lg={6} md={6} sm={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop:{lg:"12%",md:"12%"},
                  width:"300px",height:"300px"
                }}
              >
                <Pie data={pieData} options={{ responsive: true }} style={{}} />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6} md={6} sm={12} sx={{padding:{lg:"20px",md:"20px",sm:"0px",xs:"0px"}}}>
              <Box
                sx={{
                  marginTop: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "50px",
                  padding:"10px"
                }}
              >
                <Typography variant="h5">Applying For Leave</Typography>
                <form onSubmit={formik.handleSubmit}>
                  <FormControl fullWidth margin="normal" alignItems="center">
                    <TextField
                      id="from"
                      label="From"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                    //   sx={{ width: { lg: "80%", xs: "100%" } }}
                      value={formik.values.from}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.from && Boolean(formik.errors.from)}
                      helperText={formik.touched.from && formik.errors.from}
                    />
                  </FormControl>
  
                  <FormControl fullWidth margin="normal">
                    <TextField
                      id="to"
                      label="To"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                    //   sx={{ width: { lg: "80%", xs: "100%" } }}
                      value={formik.values.to}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.to && Boolean(formik.errors.to)}
                      helperText={formik.touched.to && formik.errors.to}
                    />
                  </FormControl>
  
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={
                      formik.touched.leaveType && Boolean(formik.errors.leaveType)
                    }
                  >
                    <InputLabel id="leaveType-label">Leave Type</InputLabel>
                    <Select
                      id="leaveType"
                      name="leaveType"
                      labelId="leaveType-label"
                      value={formik.values.leaveType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      label="Leave Type"
                    //   sx={{ width: { lg: "80%", xs: "100%" } }}
                    >
                      <MenuItem value="Personal Leave">Personal Leave</MenuItem>
                      <MenuItem value="Casual Leave">Casual Leave</MenuItem>
                    </Select>
                    {formik.touched.leaveType && formik.errors.leaveType && (
                      <FormHelperText>{formik.errors.leaveType}</FormHelperText>
                    )}
                  </FormControl>
  
                  <FormControl fullWidth margin="normal">
                    <TextField
                      id="additionalInfo"
                      label="Additional Information"
                      multiline
                      rows={4}
                      InputLabelProps={{ shrink: true }}
                      value={formik.values.additionalInfo}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    //   sx={{ width: { lg: "80%", xs: "100%" } }}
                      error={
                        formik.touched.additionalInfo &&
                        Boolean(formik.errors.additionalInfo)
                      }
                      helperText={
                        formik.touched.additionalInfo &&
                        formik.errors.additionalInfo
                      }
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 3, width: { lg: "80%", xs: "100%" } }}
                  >
                    Apply
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
  
        <center><Box sx={{ width: "100vw", marginTop: "50px",marginBottom:"50px" }}>
          <Typography
            variant="h4"
            sx={{ fontSize: "2.5rem", marginTop: "20px" }}
            className="header"
          >
            Task Overview
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 4,width:"90vw",borderRadius: "10px",
                     border: "none",
                     "&:last-child td, &:last-child th": { border: 0 },
                     borderRight: 0,
                     borderBottom: 0, }}>
            <Table sx={{ borderRight: 0,
                       "&:last-child td, &:last-child th": { border: 0 },
                       border: 0,
                       borderBottom: 0,}}>
              <TableHead style={{ backgroundColor: "#545959" }}>
                <TableRow>
                  <TableCell  sx={{
                             color: "white",
                           }}>Title</TableCell>
                  <TableCell  sx={{
                             color: "white",
                           }}>Assigned Date</TableCell>
                  <TableCell  sx={{
                             color: "white",
                           }}>Status</TableCell>
                  <TableCell  sx={{
                             color: "white",
                           }}>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Add your rows here */}
                <TableRow>
                  <TableCell>Task 1</TableCell>
                  <TableCell>2024-09-03</TableCell>
                  <TableCell>In Progress</TableCell>
                  <TableCell><DrawSharp/></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Task 2</TableCell>
                  <TableCell>2024-09-02</TableCell>
                  <TableCell>Completed</TableCell>
                  <TableCell><DrawSharp/></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        </center>
        <Footer/>
      </Box>
    );
  };
  