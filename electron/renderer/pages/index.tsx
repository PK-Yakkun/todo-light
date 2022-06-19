import { useEffect, useState } from "react";
import {
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
  CssBaseline,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AddButton } from "@/components/AddButton";
import { AllDeleteButton } from "@/components/AllDeleteButton";
import { TodoList } from "@/components/TodoList";
import { customTheme } from "styles/CustomTheme";

const IndexPage = () => {
  // inputのvalueを管理するステート
  const [value, setValue] = useState<string>("");

  // Todoリストに登録されたリストアイテムを管理するステート
  const [listItem, setListItem] = useState<string[]>([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    value && setListItem([...listItem, value]);
    setValue("");
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ padding: "20px" }}>
        <Stack direction="row" alignItems="center" justifyContent="flex-end">
          <AllDeleteButton setListItem={setListItem} />
        </Stack>
        <TodoList listItem={listItem} />
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
              label="Write Todo"
              variant="standard"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ width: "100%", color: "#333" }}
            />
            <AddButton />
          </Stack>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default IndexPage;
