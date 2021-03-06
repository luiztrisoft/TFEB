import React, {Component} from 'react';
import {fetchBrazilianDataByUf} from '../../../services/covid-19';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import Button from '../../../components/form/button/Button';
import trisoft from '../../../assets/img/logo.png'


class Grid extends Component {    
    constructor(props) {
        super(props);
        this.state = { 
            brazilianData:[]
         }
    }

    async componentDidMount() {        
        this.setState({
            brazilianData: await fetchBrazilianDataByUf()
        });
    }

    renderImage(rowData, column){
       // var src={imgFromAsset};
        return <img src={trisoft}  alt={rowData.brand} width="20px" />; 
    }

    renderActionButton(rowData, column) {
        return <Button icon="search" onClick={()=>alert(rowData.provinceState)} color="blue" style={{marginRight: '.1em'}}></Button>                    
    }

    colorTemplate(rowData, column) {
        let gravidade 
        if(rowData.deaths < 10000){
            gravidade = {color: 'blue'};
        }else if(rowData.deaths >= 10000 && rowData.deaths < 15000){
            gravidade = {color: 'green'};
        }else if (rowData.deaths >= 15000 && rowData.deaths <= 30000){
            gravidade = {color: 'orange'};
        }else{
            gravidade = {color: 'red'};
        }
        return <span style={gravidade}>{rowData.deaths}</span>;
    }

    render() {       
        console.log(this.state.brazilianData) 
        return ( 
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-lg-12">                
                    <DataTable 
                        value={this.state.brazilianData} 
                        style={{margin: 0, padding: 0}}                            
                        paginator
                        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        currentPageReportTemplate="Resultado {first} a {last} de {totalRecords}" 
                        rows={10} 
                        rowsPerPageOptions={[5, 10, 20, this.state.brazilianData.length]}
                        
                    >
                        {/* <Column  body={this.renderImage} style={{textAlign:'center', width: '4em'}}/> */}
                        <Column field="provinceState" header="Estado" sortable={true}/>
                        <Column field="uid" header="UID" style={{textAlign:'center', width: '5em'}}/>
                        <Column field="confirmed" header="Confirmados" style={{textAlign:'right', width: '10em'}}/>
                        <Column field="recovered" header="Recuperados" style={{textAlign:'right', width: '10em'}}/>
                        <Column field="deaths" header="Mortes" sortable={true} body={this.colorTemplate} style={{textAlign:'right', width: '10em'}}/>
                        {/* <Column field="lat" header="Latitude" style={{textAlign:'right', width: '10em'}}/>
                        <Column field="long" header="Longitude" style={{textAlign:'right', width: '10em'}}/> */}
                        {/* <Column body={this.renderActionButton} style={{textAlign:'center', width: '5em'}}/> */}
                    </DataTable>
                </div>
            </div> 
        );
    }
}

export default Grid;