import {
  Paper,
  Toolbar,
  Divider,
  Table as MainTable,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import SingleCampaign from "./SingleCampaign";
import { Campaign } from "../types";

interface CampaignTableProps {
  campaigns: Campaign[];
}

const CampaignTable = ({ campaigns }: CampaignTableProps) => {
  return (
    <Paper elevation={1} variant="outlined">
      <Toolbar></Toolbar>
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
          {campaigns &&
            campaigns.map((row) => <SingleCampaign campaign={row} />)}
        </MainTable>
      </div>
    </Paper>
  );
};

export default CampaignTable;
