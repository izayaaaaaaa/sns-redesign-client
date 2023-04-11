import { Box } from '@mui/material';
import { styled } from '@mui/system';

// reuse the ff css properties in diff areas
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export default FlexBetween;