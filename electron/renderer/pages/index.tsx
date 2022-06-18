import { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  List,
  ListItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import DeleteForever from "@mui/icons-material/DeleteForever";

const IndexPage = () => {
  const [value, setValue] = useState<string>("");
  const [listItem, setListItem] = useState<string[]>([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    value && setListItem([...listItem, value]);
    setValue("");
  };
  const onPressDeleteButton = () => {
    setListItem([]);
  };
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args);

    // add a listener to 'message' channel
    global.ipcRenderer.addListener("message", handleMessage);

    return () => {
      global.ipcRenderer.removeListener("message", handleMessage);
    };
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          onClick={() => onPressDeleteButton()}
        >
          <IconButton>
            <DeleteForever />
          </IconButton>
          <Typography
            variant="caption"
            color="gray"
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            All Delete
          </Typography>
        </Stack>
      </Stack>
      <List>
        {listItem.map((item, index) => (
          <ListItem
            key={index}
            style={{ display: "flex", alignItems: "center", padding: 0 }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox sx={{ p: "5px" }} />}
                label={item}
              />
            </FormGroup>
          </ListItem>
        ))}
      </List>
      <form
        onSubmit={handleSubmit}
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          boxSizing: "border-box",
          padding: "20px",
        }}
      >
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <TextField
            id="standard-basic"
            label="Todo"
            variant="standard"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{ width: "100%" }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ textTransform: "none" }}
          >
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default IndexPage;
