import { Stack, IconButton, Typography } from "@mui/material";
import DeleteForever from "@mui/icons-material/DeleteForever";

interface AllDeleteButtonProps {
  setListItem(item: string[]): void;
}

/**
 * 全件削除ボタン
 * @param setListItem リストアイテムのステートの更新関数
 */
export const AllDeleteButton = ({ setListItem }: AllDeleteButtonProps) => {
  // リストアイテムのステートを空に更新する関数
  const onPressDeleteButton = () => {
    setListItem([]);
  };

  return (
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
  );
};
