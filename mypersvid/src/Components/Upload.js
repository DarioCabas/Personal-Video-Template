import React from 'react'
import axios from 'axios';

class FileUpload extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    submit(){
        const data = new FormData() 
        data.append('csv_file', this.state.selectedFile)
        data.append('campaign', 'tester1')
        console.warn(this.state.selectedFile);
        let url = "http://test-backend-dev2.us-east-2.elasticbeanstalk.com/api/upload/";

        axios({
            method:'POST',
            url:url,
            header:{
                "Content-Type": "multipart/form-data"
            },
            data:data,
        }
        ).then(//function(response)
            
            response => {
                const datum = response.data.data.pk
                console.log(datum)
            }
          //  console.log(response)
        
        
        ).catch(function(response){
            
            console.log(response)

        });

        

    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />

                            <h3 className="text-white">React File Upload - Nicesnippets.com</h3>
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6">
                                    <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}

export default FileUpload;