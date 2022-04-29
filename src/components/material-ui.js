import {
  Button,
  ButtonGroup,
  FormGroup,
  Stack,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { DeleteForever, Save, Upload } from "@mui/icons-material";

function MaterialUI() {
  let alertMsg = () => {
    alert("MAterial UI");
  };
  return (
    <div>
      <Stack direction="row">
        <Button variant="text">Text</Button>
        <Button
          variant="contained"
          onClick={() => {
            alertMsg();
          }}
        >
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="success" startIcon={<Upload />}>
          Success
        </Button>
        <Button variant="contained" color="error" endIcon={<DeleteForever />}>
          Delete
        </Button>
      </Stack>
      <ButtonGroup variant="contained" color="success" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="agree" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="disagree"
        />
      </FormGroup>
      <Card variant="outlined" style={{ width: "400px" }}>
        <CardContent></CardContent>
        <h1>Monika Abhihjeet</h1>
        <h3>email: abc@gamil.com</h3>
        <CardActions>
          <Button color="success">Learn more</Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default MaterialUI;
