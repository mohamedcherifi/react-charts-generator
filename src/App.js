import PieChart from "./components/pie-chart";
import StackedBarChart from "./components/stacked-bar-chart";
import {Grid} from "@mui/material";
import GroupedBarChart from "./components/grouped-bar-chart";

export default function App() {

    return (
      <div className="App">
          <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
          >
              <Grid item xs={4}>
                  <PieChart />
              </Grid>
              <Grid item xs={4}>
                  <StackedBarChart />
              </Grid>
              <Grid item xs={4}>
                  <GroupedBarChart />
              </Grid>
          </Grid>
      </div>
  );
}

