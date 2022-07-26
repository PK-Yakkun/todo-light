import {
  List,
  ListItem,
  FormGroup,
  FormControlLabel,
  Stack,
  SvgIcon,
} from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Checkbox } from "@/components/Checkbox";
import { useWindowHeight } from "@/hooks/useWindowHeight";

interface TodoListProps {
  listItem: string[];
  setListItem(item: string[]): void;
}

/**
 * TodoList本体部分
 * @param listItem 登録されているリストアイテムのステート
 * @param setListItem listItemの更新関数
 */
export const TodoList = ({ listItem, setListItem }: TodoListProps) => {
  const windowHeight = useWindowHeight();

  const iconStyle = {
    transition: ".5s",
    cursor: "pointer",
    opacity: ".4",
    "&:hover": {
      opacity: "1",
    },
  };

  /**
   * 各リストの個別削除の処理
   * @param index listItemのindex番号
   */
  const onRemoveButton = (index: number) => {
    const newListItems = listItem.filter((items, i) => i !== index);
    setListItem(newListItems);
  };

  return (
    <List
      sx={{
        height: `${windowHeight - 160}px`,
        overflow: "scroll",
        overflowX: "scroll",
        " &::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {listItem.map((item, index) => (
        <ListItem
          key={index}
          style={{ display: "flex", alignItems: "center", padding: 0 }}
        >
          <FormGroup>
            <Stack
              direction="row"
              sx={{
                "&:hover > div": {
                  opacity: "0.6",
                },
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={item}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  color: "#333",
                  "& .MuiInput-underline": {
                    borderBottom: "1px solid #00d5bb",
                  },
                  "& .MuiTypography-root": {
                    mt: "9.5px",
                  },
                }}
              />
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  opacity: "0",
                  transition: ".5s",
                }}
              >
                <SvgIcon sx={iconStyle} onClick={() => onRemoveButton(index)}>
                  <CancelRoundedIcon />
                </SvgIcon>
              </Stack>
            </Stack>
          </FormGroup>
        </ListItem>
      ))}
    </List>
  );
};
