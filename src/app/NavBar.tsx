"use client";

import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Sample One", href: "/sample-one" },
  { label: "Sample Two", href: "/sample-two" },
  { label: "Sample Three", href: "/sample-three" },
];

export default function NavBar() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, minHeight: 64 }}>
          <Button
            component={Link}
            href="/"
            startIcon={<HomeIcon />}
            variant="contained"
            sx={{ flexShrink: 0 }}
          >
            Home
          </Button>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {navLinks.map((link) => (
              <Button key={link.href} component={Link} href={link.href} color="inherit">
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
