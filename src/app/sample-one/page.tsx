"use client";

import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function SampleOnePage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Stack spacing={3}>
          <Typography variant="h3" component="h1">
            Sample Page One
          </Typography>

          <Typography color="text.secondary">
            This is the first sample page for checking basic navigation.
          </Typography>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              overflow: "hidden",
              borderRadius: 1,
              bgcolor: "grey.100",
            }}
          >
            <Box
              component="iframe"
              src="https://www.youtube.com/embed/XjeRTTaBP4w?start=83"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>

          <Stack direction="row" spacing={2}>
            <Button component={Link} href="/" variant="outlined">
              Home
            </Button>

            <Button component={Link} href="/sample-two" variant="contained">
              Next Page
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
