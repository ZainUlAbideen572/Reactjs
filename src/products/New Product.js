import React from "react";
class NewProduct extends React.Component {
  state = {
    brand: "",
    model: "",
    instock: false,
    price: 0,
    
  };
  oncontrolchange=(evt)=>{
    this.setState({[evt.target.name]:evt.target.value})
  }
  onsave=()=>{
    console.log(this.state)
  }

 
  render() {
    return <div className="container m-3">
      <h4>Add new Product</h4>
      <form>
        <div class="mb-3">
          <label for="brand" class="form-label">Brand</label>
          <input name="brand"type="text" class="form-control" id="brand"  onchange={this.oncontrolchange} />
        </div>
        <div class="mb-3">
          <label for="model" class="form-label">model</label>
          <input name="model"type="text" class="form-control" id="model" onchange={this.oncontrolchange}/>
        </div>
        <div class="mb-3 ">
          <label for="price" class="form-label">Price</label>
          <input name="price"type="text" class="form-control" id="Price"  onchange={this.oncontrolchange} />
        </div>
        <div class="mb-3">
          <label for="instock" class="form-label">instock</label>
          <input  name="instock" type="Checkbox" class="form-check-input" id="instock" onchange={this.oncontrolchange}/>
        </div>
     
      
        <div class="mb-3">
          <label for="discount" class="form-label">discount</label>
          <input name="discount" type="number" class="form-control" id="discount" onchange={this.oncontrolchange}/>
        </div>

      </form>
      <button  className="btn btn-success" onClick={this.onsave}>save
      <i className="fa fa-save"></i>
      </button>
    </div>
  }
}
export default NewProduct;