import React, {Component} from 'react';

import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
// import {Button} from 'primereact/button';
import Button from '../../../components/form/button/Button';

class Form extends Component {    
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>          
                <div className="p-grid p-fluid"> 
                    <div className="p-col-12 p-md-12">
                        <h1> <i className='fas fa-home'/> Formulário</h1>
                    </div>  

                    <div className="p-col-12 p-md-12">
                        <InputText placeholder="Nome"/>
                    </div>

                    <div className="p-col-12 p-md-12">                        
                        <InputTextarea rows={13} cols={30} placeholder="Texto" autoResize={true} />
                    </div>
                    
                    <div className="p-col-12 p-md-2" style={{textAlign:'center'}} >
                        <Button color="blue"  icon="user-edit" label="Salvar"/>
                    </div>
                    <div className="p-col-12 p-md-2" style={{textAlign:'center'}}>
                        <Button color="red" icon="times" label="Cancelar"/>                        
                    </div>
                    <div className="p-col-12 p-md-2" style={{textAlign:'center'}}>
                        <Button icon="ban" label="Neutro"/>                        
                    </div>
                </div>      
            </div>
        )
    }
}

export default Form;