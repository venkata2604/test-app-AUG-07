import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function SampleThreePage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Stack spacing={3}>
          <Typography variant="h3" component="h1">
            Sample Page Three
          </Typography>

          <Typography color="text.secondary">
            This is the final sample page in the navigation test flow.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button href="/sample-two" variant="outlined">
              Previous Page
            </Button>

            <Button href="/" variant="contained">
              Back Home
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
