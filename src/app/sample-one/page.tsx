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

          <Stack direction="row" spacing={2}>
            <Button href="/" variant="outlined">
              Home
            </Button>

            <Button href="/sample-two" variant="contained">
              Next Page
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
