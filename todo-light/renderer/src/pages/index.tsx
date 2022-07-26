import { useState } from "react";
import { TextField, Stack, Box } from "@mui/material";
import { AddButton } from "@/components/AddButton";
import { AllDeleteButton } from "@/components/AllDeleteButton";
import { TodoList } from "@/components/TodoList";

const IndexPage = () => {
  // inputのvalueを管理するステート
  const [value, setValue] = useState<string>("");

  // Todoリストに登録されたリストアイテムを管理するステート
  const [listItem, setListItem] = useState<string[]>([]);

  /**
   * フォーム送信時に実行
   * @param e テキストフィールドのイベント
   */
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    value && setListItem([...listItem, value]);
    setValue("");
  };

  return (
    <Box sx={{ padding: "20px", "-webkit-app-region": "drag" }}>
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        <AllDeleteButton setListItem={setListItem} />
      </Stack>
      <TodoList listItem={listItem} setListItem={setListItem} />
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
            label="What to do?"
            variant="standard"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{ width: "100%", color: "#333" }}
          />
          <AddButton />
        </Stack>
      </form>
    </Box>
  );
};

export default IndexPage;
