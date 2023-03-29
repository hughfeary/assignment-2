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
                <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
                <OriginalComponent searchTerm={this.state.searchTerm}/>
            </div>
        )};
    }
    return NewComponent
}

export default SearchBarEnhancement

//just need to connect it to somewhere**
//**i can pass down what is in the searchbar(via the prop searchTerm) 
// I just need to write how to use the search term to highlight the text


//code from assignment 1


// function pageSearch() {
//     console.log("the button worked")

//     let searchQuery = document.getElementById("searchBar").value;
    
//     if (searchQuery != "") {
//         let regExp = new RegExp(searchQuery,"gi");
//         let p = document.getElementById("welcomePara");
//         p.innerHTML = (p.textContent).replace(regExp, "<mark>$&</mark>");
//     }
// }




// function addSearchBarEventListener () {
//     let searchBar = document.getElementById("searchBar");
//     searchBar.addEventListener("keypress", function(event) {
//         if (event.key==="Enter") {
//             event.preventDefault;
//             document.getElementById("searchConfirmation").click();
//         }
//     })
// }