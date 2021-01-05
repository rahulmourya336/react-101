<div className='row'>
  <div className='col-8'>
    <input
      className='form-control'
      id='task-input'
      placeholder='Add Todo'
      value={this.state.value}
      onChange={this.handleChange}
    />
  </div>
  <div className='col-2'>
    <button className='btn btn-primary btn-block' onClick={this.handleSubmit}>
      Add
    </button>
  </div>
</div>;
