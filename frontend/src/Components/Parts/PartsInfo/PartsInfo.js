import React from 'react';
import { connect } from 'react-redux';
import { dispatchGetPartsAction } from '../../../actions/parts.action';
import './PartsInfo.css';
import RegexEscapeUtil from '../../../Utils/RegexEscapeUtil';

class PartsInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      suggestions: [],
    };
  }

  componentDidMount() {
    const { parts, loggedIn, dispatchGetPartsAction } = this.props;
    if (!parts && loggedIn) {
      dispatchGetPartsAction();
    }
  }

   onTextChanged = (event) => {
     let { value } = event.target;
     let suggestions = [];
     if (value.length > 0) {
       value = RegexEscapeUtil.regExpEscapeAll(value);
       const regex = new RegExp(`^${value}`, 'i');
       const { parts } = this.props;
       const namesArray = parts.map(p => p.name);
       suggestions = namesArray.sort().filter(val => regex.test(val));
     }
     this.setState({ suggestions, searchTerm: value });
   };

   onSuggestionSelected = (value) => {
     this.setState({
       searchTerm: value,
       suggestions: [],
     });
   };

   filterSearchTerm = (name) => {
     const term = this.state.searchTerm;
     if (term === '') return true;
     return name.toLowerCase().includes(term.trim().toLowerCase());
   };

   render() {
     return (
       <>
         <section className="AutoCompleteText">
           <label htmlFor="searchbar">Search By Name</label>
           <div className="search-section">
             <input type="text" id="searchbar" value={this.state.searchTerm} onChange={this.onTextChanged} />
             <ul style={this.state.searchTerm === '' ? { display: 'none' } : {}}>
               { this.props.parts && this.state.suggestions !== []
               && this.state.suggestions.map((suggest, index) => (
                 <li key={index}
                   onClick={() => this.onSuggestionSelected(suggest)}
                 >
                   { suggest }
                 </li>
               ))
               }
             </ul>
           </div>
         </section>
         <section>
           <table className="table">
             <thead>
               <tr>
                 <th scope="col">Name</th>
                 <th scope="col">Description</th>
                 <th scope="col">Number</th>
                 <th scope="col">Price</th>
               </tr>
             </thead>
             <tbody>
               { this.props.parts
                    && this.props.parts.filter(
                      p => this.filterSearchTerm(p.name),
                    ).map((p, index) => (
                      <tr key={index}>
                        <td>{p.name}</td>
                        <td>{p.description}</td>
                        <td>{p.number}</td>
                        <td>{p.price}</td>
                      </tr>
                    ))
                }

             </tbody>
           </table>
         </section>
       </>
     );
   }
}

const mapStateToProps = state => ({
  parts: state.parts,
  loggedIn: state.loggedIn,
});
export default connect(mapStateToProps, { dispatchGetPartsAction })(PartsInfo);
