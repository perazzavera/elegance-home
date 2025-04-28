import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const RatingStars = ({ rating }) => {
  return (
    <Box className="flex items-center">
      <Rating name="user-rating" value={rating} precision={0.5} />
    </Box>
  );
};

export default RatingStars;
