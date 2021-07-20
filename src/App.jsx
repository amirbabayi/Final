import React, {Component} from "react";

// import BigChart from "./bigChart";
// import LineDemo from "./chart";
// import ChartDoughnut from "./chart1";
// import ChartBar2 from "./chart3";

import Grid from "@material-ui/core/Grid";
import Variants from "./Components/card2";
import CenteredTabs from "./Components/card3";
import Chart from "./Components/card1";
import FolderList from "./Components/card4";
import PersistentDrawerLeft from './Components/drawerCard';
import CustomizedTables from './Components/card5';

class App extends Component {

    render() {
        return (
            <div>
                hello
                <Grid container>
                    <PersistentDrawerLeft/>
                </Grid>
                <Grid item container>
                    <Grid item lg={8} style={{padding: "20px 0 20px 40px"}}>
                        <CenteredTabs/>
                    </Grid>
                    <Grid item lg={4} style={{padding: "20px 40px 20px 40px"}}>
                        <Chart/>
                    </Grid>
                </Grid>
                <Grid container style={{padding: "20px 0 20px 32px"}}>
                    <Variants/>
                </Grid>
                <Grid container style={{padding: "20px 40px 20px 40px"}}>
                    <Grid item container lg={4}>
                        <FolderList/>
                    </Grid>
                    <Grid item container lg={8}>
                        <CustomizedTables/>
                    </Grid>
                </Grid>
                {/*<ChartBar />
        <LineChart />*/}
            </div>
        );
    }
}

export default App;

// <div>
//   {/* <LineDemo />
//   <ChartDoughnut />
//   <ChartBar />
//   <ChartBar2 />
//   <LineChart />
//   <BigChart /> */}

// </div>
