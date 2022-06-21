import { List, ListItem, FormGroup, FormControlLabel } from "@mui/material";
import { Checkbox } from "@/components/Checkbox";
import { useEffect, useState } from "react";

interface TodoListProps {
  listItem: string[];
}

/**
 * TodoList本体部分
 * @param listItem 登録されているリストアイテムのステート
 */
export const TodoList = ({ listItem }: TodoListProps) => {
  // windowの高さを管理するステート
  const [windowHeight, setWindowHeight] = useState<number>(400);

  /**
   * ウィンドウサイズを変更するたびにwindowHeightを更新
   */
  useEffect(() => {
    const getWindwHeight = () => {
      const windowDimensions = window.outerHeight;
      return windowDimensions;
    };

    const changeWindowHeight = () => {
      setWindowHeight(getWindwHeight());
    };

    window.addEventListener("resize", changeWindowHeight);
  }, [windowHeight]);

  return (
    <List sx={{ height: `${windowHeight - 160}px`, overflow: "scroll" }}>
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
