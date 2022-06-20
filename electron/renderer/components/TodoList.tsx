import {
  Box,
  List,
  ListItem,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { Checkbox } from "@/components/Checkbox";
import { getWindowDimensions } from "utils/getWindowDimensions";

interface TodoListProps {
  listItem: string[];
}

/**
 * TodoList本体部分
 * @param listItem 登録されているリストアイテムのステート
 */
export const TodoList = ({ listItem }: TodoListProps) => {
  const dimention = getWindowDimensions();
  return (
    <List sx={{ height: `${dimention.height - 160}px`, overflow: "scroll" }}>
      {listItem.map((item, index) => (
        <ListItem
          key={index}
          style={{ display: "flex", alignItems: "center", padding: 0 }}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={item}
              sx={{
                color: "#333",
                "& .MuiInput-underline": {
                  borderBottom: "1px solid #00d5bb",
                },
              }}
            />
          </FormGroup>
        </ListItem>
      ))}
    </List>
  );
};
