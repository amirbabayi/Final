import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Variants from "./Components/Card/chartsCard";
import CenteredTabs from "./Components/Card/dashboardCard";
import Chart from "./Components/Card/doghnutCard";
import PersistentDrawerLeft from './Components/Card/drawerCard';
import CustomizedTables from "./Components/Card/tableCard";
import FolderList from "./Components/Card/activitisCard";
class App extends Component {

    render() {
        return (
            <div>
                <Grid container>
                    <PersistentDrawerLeft/>
                </Grid>
                <Grid container justify={'center'}>
                    <Grid item container justify={'center'} alignItems={'center'} style={{maxWidth: "1520px"}}>
                        <Grid item container justify={"space-evenly"} >
                            <Grid item lg={8} md={10} sm={10} xs={10} justify={"center"} style={{marginTop:"20px"}}>
                                <CenteredTabs/>
                            </Grid>
                            <Grid item lg={3} md={10} sm={10} xs={10} justify={"center"} style={{marginTop:"20px"}}>
                                <Chart/>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginTop:"20px"}} >
                            <Variants/>
                        </Grid>
                        <Grid container item justify={"center"} >
                            <Grid item container justify={"center"} lg={4} md={12} sm={12} xs={10} style={{paddingTop:"20px"}}>
                                <FolderList/>
                            </Grid>
                            <Grid item container justify={"center"} lg={8} md={12} sm={12} xs={11} style={{paddingTop:"20px"}}>
                                <CustomizedTables/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default App;
