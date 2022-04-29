import { Button, ButtonGroup, Stack } from "@mui/material";
import { Delete, Save, Upload } from "@mui/icons-material";

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
        <Button variant="contained" color="error" endIcon={<Delete />}>
          Delete
        </Button>
      </Stack>
    </div>
  );
}
export default MaterialUI;
