"use client";
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
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { useStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

function Header() {
  const { isAuth, userDetails, setAuth, setUserDetails } = useStore();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const logout = () => {
    setAuth(false);
    localStorage.clear();
    router.replace("/login");
  };
  const appName = "Bus Ticket Booking System";
  const adminPages = [
    {
      label: "View all tickets",
      onClick: () => {
        router.push("/admin/view-all-tickets");
      },
    },
    {
      label: "View all users",
      onClick: () => {
        router.push("/admin/view-all-users");
      },
    },
    {
      label: "Add Bus details",
      onClick: () => {
        router.push("/admin/add-booking-details");
      },
    },
  ];
  let pages: any = [
    {
      label: "Book Ticket",
      onClick: () => {
        router.push("/user/ticket-booking");
      },
    },
    {
      label: "View Booked Tickets",
      onClick: () => {
        router.push("/user/view-booked-tickets");
      },
    },
  ];
  if (userDetails?.role === "admin") {
    pages = [...pages, ...adminPages];
  }
  const settings = [
    {
      label: "Book Ticket",
      onClick: () => {
        router.push("/user/ticket-booking");
      },
    },
    {
      label: "View Booked Tickets",
      onClick: () => {
        router.push("/user/view-booked-tickets");
      },
    },
    { label: "Logout", onClick: logout },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DirectionsBusIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Nunito Sans",
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {appName}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages?.map((page: any) => (
                  <MenuItem
                    key={page?.label}
                    onClick={() => {
                      handleCloseNavMenu();
                      page?.onClick();
                    }}
                  >
                    <Typography textAlign="center">{page?.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <DirectionsBusIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Nunito Sans",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {"BTBS"}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page: any) => (
                <Button
                  key={page?.label}
                  onClick={() => {
                    handleCloseNavMenu();
                    page?.onClick();
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page?.label}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {isAuth ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        sx={{
                          fontFamily: "Nunito Sans",
                          backgroundColor: "secondary.200",
                          color: "primary.dark",
                        }}
                      >
                        <Typography
                          sx={{ fontWeight: "700", fontSize: "20px" }}
                          color="inherit"
                        >
                          {userDetails?.name?.[0]}
                        </Typography>
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting.label}
                        onClick={() => {
                          handleCloseUserMenu();
                          setting?.onClick();
                        }}
                      >
                        <Typography textAlign="center">
                          {setting.label}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Box>
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </Button>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ height: { xs: "56px", sm: "64px" } }} />
    </div>
  );
}
export default Header;
