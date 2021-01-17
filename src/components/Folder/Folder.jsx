import React, { Component } from 'react';
import "./Folder.css"

class Folder extends Component{

    toggleFiles(){
        console.log(document.querySelector('ul').style.display)
        document.querySelector('ul').style.display = (document.querySelector('ul').style.display === 'block' ? 'none' : 'block')
    }

    render() { 
        return (
            <div className="folder"> Folder <br/>
                <label for="checkbox">Toggle Files:</label> 
                <input type="checkbox" id="checkbox" name="checkbox" onClick={this.toggleFiles}/>
                <ul>
                    <li>File 1</li>
                    <li>File 2</li>
                    <li>File 3</li>
                </ul>
            </div>
        )
    }
}


export default Folder;