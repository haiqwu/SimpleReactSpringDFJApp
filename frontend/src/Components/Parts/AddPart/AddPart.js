import React from 'react';
import { connect } from 'react-redux';
import { dispatchAddPartAction } from '../../../actions/parts.action';
import './AddPart.css';

class AddPart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      number: '',
      price: '',
      errorMsg: '',
    };
  }

  updatePart = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

   handleSubmit = (event) => {
     event.preventDefault();
     if (this.state.name === '') {
       this.setState({ errorMsg: 'Name can\'t be empty' });
     } else {
       this.setState({ errorMsg: '' });
       const {
         name, description, number, price,
       } = this.state;
       const part = {
         name, description, number, price,
       };
       const { dispatchAddPartAction } = this.props;
       dispatchAddPartAction(part,
         (res) => {
           this.setState(
             {
               name: '',
               description: '',
               number: '',
               price: '',
               errorMsg: 'Add success',
             },
           );
         },
         (err) => {
           this.setState({
             errorMsg: `Add failed,${err}`,
           });
         });
     }
   };

   render() {
     return (
       <section>
         <form className="add-form" onSubmit={this.handleSubmit}>
           <div className="form-group col-sm-6">
             <label htmlFor="name">Part Name</label>
             <input className="form-control" type="text" id="name" value={this.state.name} onChange={this.updatePart} />
           </div>
           <div className="form-group col-sm-6">
             <label htmlFor="description">Part Description</label>
             <input className="form-control" type="text" id="description" value={this.state.description} onChange={this.updatePart} />
           </div>
           <div className="form-group col-sm-6">
             <label htmlFor="number">Part Number </label>
             <input className="form-control" type="number" id="number" value={this.state.number} onChange={this.updatePart} />
           </div>
           <div className="form-group col-sm-6">
             <label htmlFor="price">Part Price</label>
             <input className="form-control" type="number" min="0" step="0.01" id="price" value={this.state.price} onChange={this.updatePart} />
           </div>
           <div className="col-sm-6">
             <button type="submit" className="btn btn-info"> Add Now </button>
             <div>
               <p className={this.state.errorMsg.indexOf('success') === -1 ? 'text-danger' : 'text-success'}>
                 {this.state.errorMsg}
               </p>
             </div>
           </div>

         </form>
       </section>
     );
   }
}

export default connect(null, { dispatchAddPartAction })(AddPart);
