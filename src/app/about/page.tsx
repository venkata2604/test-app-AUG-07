// src/app/about/page.tsx

import { Container, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1">
        About Me
      </Typography>
    </Container>
  );
}