"use client";

import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Stack spacing={3}>
          <Typography variant="h2" component="h1">
            Your Name
          </Typography>

          <Typography variant="h5" color="text.secondary">
            Bla bla blaaa ..... bla bla
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button component={Link} href="/about" variant="contained">
              About
            </Button>

            <Button component={Link} href="/sample-one" variant="outlined">
              Start Sample Pages
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
