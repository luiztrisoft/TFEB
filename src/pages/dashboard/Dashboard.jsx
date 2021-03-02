import React, {Component} from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {    
    constructor() {
        super();
        this.state = {};
    }
    
    render() {   
        return (  
            <div className="p-grid p-fluid">   

                <div className="p-col-12 p-lg-12">        
                    <img src="img/oficial.png" style={{width: '50%', marginTop: '5%'}} alt="TriSoft"/>
                </div>
                <div className="p-col-12 p-lg-12">        
                    <label >                                                 
                        <span style={{marginLeft: '10px', fontSize: '10px'}}>
                            {this.props.dashboardInfo.name}
                            {this.props.dashboardInfo.version}
                            - {this.props.dashboardInfo.date}
                        </span>
                    </label>          
                </div> 

            </div>
        )
    }
}

const mapStateToProps = store => ({
    dashboardInfo: store.dashboardReducer.dashboardInfo
  });

export default connect(mapStateToProps, null)(Dashboard);