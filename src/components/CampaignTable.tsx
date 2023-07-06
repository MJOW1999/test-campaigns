import {
  Paper,
  Toolbar,
  Divider,
  Table as MainTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import SingleCampaign from "./SingleCampaign";
import { Campaign } from "../types";

interface CampaignTableProps {
  campaigns: Campaign[];
}

const CampaignTable = ({ campaigns }: CampaignTableProps) => {
  return (
    <Paper elevation={1} variant="outlined">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography>
          Use the <i>window.AddCampaigns</i> method to add more campaigns
        </Typography>
      </Toolbar>
      <Divider />
      <div>
        <MainTable>
          <TableHead>
            <TableRow>
              <TableCell variant="head" scope="col">
                Name
              </TableCell>
              <TableCell variant="head" scope="col">
                Status
              </TableCell>
              <TableCell variant="head" scope="col" align="right">
                Start Date
              </TableCell>
              <TableCell variant="head" scope="col" align="right">
                End Date
              </TableCell>
              <TableCell variant="head" scope="col" align="right">
                Budget ($USD)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaigns &&
              campaigns.map((row) => <SingleCampaign campaign={row} />)}
          </TableBody>
        </MainTable>
      </div>
    </Paper>
  );
};

export default CampaignTable;
