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
            Frontend developer learning Next.js and MUI.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button href="/about" variant="contained">
              About
            </Button>

            <Button href="/sample-one" variant="outlined">
              Start Sample Pages
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
