import { TableCell, TableRow, Typography } from "@mui/material";
import { Campaign } from "../types";

interface SingleCampaignProps {
  campaign: Campaign;
}

const SingleCampaign = ({ campaign }: SingleCampaignProps) => {
  const todaysDate = new Date(new Date().setHours(0, 0, 0, 0)); // get todays date at midnight
  return (
    <TableRow
      sx={
        todaysDate <= new Date(campaign.endDate)
          ? { backgroundColor: "#b7e1cd" }
          : { backgroundColor: "#f4c7c3" }
      }
    >
      <TableCell variant="body" scope="row">
        {campaign.name}
      </TableCell>
      <TableCell variant="body" scope="row">
        <Typography noWrap>
          {todaysDate > new Date(campaign.endDate) ? (
            <span>Inactive</span>
          ) : (
            <span>Active</span>
          )}
        </Typography>
      </TableCell>
      <TableCell variant="body" scope="row" align="right">
        {campaign.startDate.toString()}
      </TableCell>
      <TableCell variant="body" scope="row" align="right">
        {campaign.endDate.toString()}
      </TableCell>
      <TableCell variant="body" scope="row" align="right">
        ${campaign.budget.toLocaleString()}
      </TableCell>
    </TableRow>
  );
};

export default SingleCampaign;
