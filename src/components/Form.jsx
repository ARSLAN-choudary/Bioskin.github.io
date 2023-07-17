import React from 'react'

function Form() {
  return (
    <div>
      <div class="input-group mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter your Name'/>
              </div>
              <div class="input-group mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter Email @'/>
              </div>
              <div class="input-group mb-3">
                <input type="text" className="form-control py-5" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Subject*'/>
              </div>
              {/* <input type="text" name="" id="" class="form-control" aria-label="Text input with checkbox" placeholder='Message here' style={{width:'36rem',height:'5rem'}} /> */}
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Message here..."></input>
              <div class="d-grid gap-2">
              <button type="button" className="btn btn-outline-primary btn-md my-5 btn-center">Submit</button>
              </div>
    </div>
  )
}

export default Form
