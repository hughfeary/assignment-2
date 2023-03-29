import React from "react";

const SearchBarEnhancement = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = { searchTerm: ''};
        handleSearch = event => {
            this.setState({searchTerm: event.target.value})
        }
        
        render() {
            return (
            <div className="asideItem">
                <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search table.."/>
                <OriginalComponent searchTerm={this.state.searchTerm}/>
            </div>
        )};
    }
    return NewComponent
}

export default SearchBarEnhancement