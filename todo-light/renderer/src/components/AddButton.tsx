import Button from "@mui/material/Button";

export const AddButton = () => {
  return (
    <Button
      variant="contained"
      type="submit"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "16px",
        background:
          "linear-gradient(90deg, rgba(0,223,159,1) 0%, rgba(0,226,221,1) 100%)",
        px: 4,
        borderRadius: "8px",
      }}
    >
      Add
    </Button>
  );
};
