import React from "react";

const styles = {
    height: '20px',
    width: '30%',
    marginTop: '5px'
};

const SearchBarEnhancement = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = { searchTerm: ''};
        handleSearch = event => {
            this.setState({searchTerm: event.target.value})
        };
        
        render() {
            return (
            <div className="asideItem">
                <input style={styles} onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search table..." aria-label="Search bar for table"/>
                <OriginalComponent searchTerm={this.state.searchTerm}/>
            </div>
        )};
    }
    return NewComponent
}

export default SearchBarEnhancement