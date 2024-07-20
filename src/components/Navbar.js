import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import { ArrowDropDown, ArrowLeft, ArrowRight } from "@mui/icons-material";

const pages = [
  "Home",
  "About",
  "Contact Us",
  "Group Companies",
  "Gallary",
  "Products",
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [hide, setHide] = React.useState(true);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  const handleNavigate = (page) => {
    if (page === "Contact Us") {
      window.location.href = "/contact";
    } else if (page === "About") {
      window.location.href = "/about";
    } else if (page === "Home") {
      window.location.href = "/";
    } else if (page === "Login") {
      window.location.href = "/login";
    } else if (page === "Gallary") {
      window.location.href = "/gallary";
    } else if (page === "Products") {
      window.location.href = "/products";
    }
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCompanyNavigate = (path) => {
    navigate(path);
    setDropdownOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        position: "fixed",
        top: "0px",
        zIndex: "100",
      }}
    >
      {hide ? (
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: "black" }} />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleNavigate(page)}>
                    {page === "Group Companies" ? (
                      <Typography textAlign="center">
                        Group Companies
                        <ArrowRight
                          onClick={(e) => setHide(false)}
                          style={{
                            position: "relative",
                            top: "7px",
                            left: "5px",
                          }}
                        />
                      </Typography>
                    ) : (
                      <Typography textAlign="center">{page}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "block", lg: "none", md: "none" },
              }}
            >
              <Tooltip title="Lyss Technology">
              <Button id="button" sx={{   
                    marginRight: "20px",
                    my: 2,
                    backgroundColor:"#5656b9",
                    borderRadius: "27px",
                    width: "83px",
                    color: "white",
                    }}
                    onClick={(e) => window.location.href="/login"}  
                  >
                  Login
                </Button>
                <IconButton sx={{ p: 0 }}  onClick={(e) => window.location.href="/"} >
                  <Avatar
                    alt="Remy Sharp"
                    src="./images/logo.jpg"
                    sx={{ width: "50px", height: "50px" }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", lg: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() =>
                    page === "Group Companies"
                      ? handleDropdownClick()
                      : handleNavigate(page)
                  }
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page === "Group Companies" ? (
                    <span style={{ position: "relative", top: "-4px" }}>
                      Group Companies
                      <ArrowDropDown
                        style={{ position: "relative", top: "6px" }}
                      />
                    </span>
                  ) : (
                    <span>{page}</span>
                  )}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "none", lg: "block", md: "block" },
              }}
            >
              <Tooltip >
                <Button
                id="button"
                title="Login"
                  sx={{
                    
                    marginRight: "20px",
                    my: 2,
                    backgroundColor:"#5656b9",
                    borderRadius: "27px",
                    width: "83px",
                    color: "white",
                   
                  }}
                  onClick={(e) => window.location.href="/login"}  
                >
                  Login
                </Button>
                <IconButton sx={{ p: 0 }} title="Lyss Technology" 
                 onClick={(e) => window.location.href="/"} 
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="./images/logo.jpg"
                    sx={{ width: "50px", height: "50px" }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
            {dropdownOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "60px",
                  left: "250px",
                  backgroundColor: "#fff",
                  boxShadow: "5px -4px 8px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                  color: "black",
                  padding: "4px",
                  borderRadius: "4px",
                  width: "14%",
                }}
              >
                <MenuItem onClick={() => handleCompanyNavigate("/company1")}>
                  Company 1
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleCompanyNavigate("/company2")}>
                  Company 2
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => handleCompanyNavigate("/company3")}>
                  Company 3
                </MenuItem>
              </Box>
            )}
          </Toolbar>
        </Container>
      ) : (
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem>
                  <ArrowLeft
                    onClick={(e) => setHide(true)}
                    style={{ position: "relative", right: "5px" }}
                  />
                  Group Companies
                </MenuItem>

                <MenuItem>ATPLC</MenuItem>
                <MenuItem>ATPLC</MenuItem>
                <MenuItem>ATPLC</MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "block", lg: "none", md: "none" },
              }}
            >
              <Tooltip title="Lyss Technology">
                <Button id="button" sx={{   
                    marginRight: "20px",
                    my: 2,
                    backgroundColor:"#5656b9",
                    borderRadius: "27px",
                    width: "83px",
                    color: "white",
                    }}>
                  Login
                </Button>
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="./images/logo.jpg"
                    sx={{ width: "50px", height: "50px" }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      )}
    </AppBar>
  );
};
