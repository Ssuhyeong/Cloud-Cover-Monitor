import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";

import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { SiNaver } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { FaCloud } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/reducers/AuthReducer";

const items = [
  {
    title: "AWS",
    href: "aws",
    icon: <FaAws />,
  },
  {
    title: "Azure",
    href: "azure",
    icon: <SiMicrosoftazure />,
  },
  {
    title: "GCP",
    href: "gcp",
    icon: <FaGoogle />,
  },
  {
    title: "Ncloud",
    href: "ncp",
    icon: <SiNaver />,
  },
  {
    title: "Compare",
    href: "cloud",
    icon: <FaCloud />,
  },
  {
    title: "AI",
    href: "AI",
    icon: <BiBrain />,
  },
];

const NavBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationHook = useLocation();
  const splitUrl = locationHook?.pathname?.split("/") ?? null;
  const location = splitUrl?.length > 1 ? splitUrl[splitUrl.length - 1] : null;

  const handleListItemClick = (value) => {
    navigate(`/menu/${value}`);
  };

  const handlelogout = async () => {
    alert("로그아웃 되었습니다.");
    navigate("/");
    await dispatch(setToken(""));
  };

  return (
    <Box>
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "content-box",
            border: 0,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <Box sx={{ pl: 20, py: 22, pr: 18.88 }}>
            {/* <img
              src={"../../../assets/Cloud Logo.png"}
              style={{ width: "100%" }}
              onClick={handleLogoClick}
            /> */}
            <Typography
              sx={{ width: "100%", fontSize: "20px", fontWeight: 600 }}
            >
              Cloud Cover Monitor
            </Typography>
          </Box>
          <Divider sx={{ mb: "20px" }} />
          {/* 아이템  */}
          {items.map((value, i) => {
            const selected = location === value.href;

            return (
              <ListItemButton
                onClick={() => {
                  handleListItemClick(value.href);
                }}
                key={i}
                sx={{
                  mx: 20,
                  fontSize: "50px",
                  fontWeight: "bold",
                  "&:hover": {
                    borderRadius: "4px",
                    backgroundColor: "rgba(56, 85, 179, 0.08)",
                  },
                }}
                selected={selected}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 16,
                    pr: 15,
                    color: selected && "primary.main",
                    fontSize: "16px",
                  }}
                >
                  {value.icon}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: selected && "primary.main",
                  }}
                  primary={value.title}
                />
              </ListItemButton>
            );
          })}
        </List>
        <Box sx={{ pl: 120, py: 22, pr: 18.88, mt: 450 }}>
          <Typography
            sx={{
              display: "flex",
              width: "100%",
              fontSize: "20px",
              fontWeight: 600,
              alignItems: "center",
              "&:hover": {
                borderRadius: "4px",
                color: "red",
              },
            }}
            onClick={handlelogout}
            style={{ cursor: "pointer" }}
          >
            logout <SlLogout />
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavBar;
