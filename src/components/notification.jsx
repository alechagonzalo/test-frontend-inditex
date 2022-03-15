import { toast } from "react-hot-toast";
import { Typography } from "./Typography";

export const notification = ({
  text = "",
  position = "botom-center",
  type = "success",
}) => {
  return toast(
    () => (
      <Typography fontSize="subtitle3" fontWeight={500}>
        {text}
      </Typography>
    ),
    {
      position: position,
      type: type,
    }
  );
};
