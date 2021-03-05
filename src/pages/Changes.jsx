import React, {Component} from 'react';
import { connect } from 'react-redux';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import trisoft from '../assets/img/logo.png'

class Changes extends Component {    
    constructor() {
        super();
        this.state = {};
    }

    renderImage(){
        return <img src={trisoft} alt="trisoft" width="20px" />
    }
    
    render() {   
        return (  
            <div className="p-grid p-fluid">   
                                
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-lg-12">                
                        <DataTable value={this.props.v3.changes} style={{margin: 0, padding: 0}}  >
                            <Column  body={this.renderImage} header={`${this.props.v3.version}`} style={{textAlign:'center', width: '4em'}}/>
                            <Column field="change" header={`${this.props.v3.date}`} sortable={false}/>                        
                        </DataTable>
                    </div>

                    <div className="p-col-12 p-lg-12">                
                        <DataTable value={this.props.v2.changes} style={{margin: 0, padding: 0}}  >
                            <Column  body={this.renderImage} header={`${this.props.v2.version}`} style={{textAlign:'center', width: '4em'}}/>
                            <Column field="change" header={`${this.props.v2.date}`} sortable={false}/>                        
                        </DataTable>
                    </div>
                </div> 

                <div className="p-col-12 p-lg-12">        
                    <label >                                                 
                        <span style={{marginLeft: '10px', fontSize: '10px'}}>
                            {this.props.v3.name}
                            {this.props.v3.version}
                            - {this.props.v3.date}
                        </span>
                    </label>          
                </div> 

            </div>
        )
    }
}

const mapStateToProps = store => ({
    v3: store.dashboardReducer.dashboardInfoV3,
    v2: store.dashboardReducer.dashboardInfoV2
  });

export default connect(mapStateToProps, null)(Changes);