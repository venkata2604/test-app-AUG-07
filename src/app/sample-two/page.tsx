import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function SampleTwoPage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <Stack spacing={3}>
          <Typography variant="h3" component="h1">
            Sample Page Two
          </Typography>

          <Typography color="text.secondary">
            This is the second sample page. Use the buttons to move backward or forward.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button component={Link} href="/sample-one" variant="outlined">
              Previous Page
            </Button>

            <Button component={Link} href="/sample-three" variant="contained">
              Next Page
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
