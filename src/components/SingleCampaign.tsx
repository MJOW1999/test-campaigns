import { TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { Campaign } from "../types";

interface SingleCampaignProps {
  campaign: Campaign;
}

const SingleCampaign = ({ campaign }: SingleCampaignProps) => {
  return (
    <TableBody>
      <TableRow key={campaign.id}>
        <TableCell variant="body" scope="row">
          {campaign.name}
        </TableCell>
        <TableCell variant="body" scope="row">
          <Typography noWrap>Inactive</Typography>
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
    </TableBody>
  );
};

export default SingleCampaign;
