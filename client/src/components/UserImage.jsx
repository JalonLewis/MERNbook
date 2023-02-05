import { Box } from "@mui/material";

const URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <a href={`https://mernbook-server.onrender.com/assets/${image}`} target="_blank" rel="noreferrer"><img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${URL}/assets/${image}`}
      /></a>
    </Box>
  );
};

export default UserImage;
