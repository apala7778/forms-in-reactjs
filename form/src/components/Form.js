import React from "react"

export default function Form () {
    
      
      const [formData , setFormData] = React.useState(
                                                        {firstName : ""  , lastName: "" , email: "" , 
                                                        comments: "" , isFriendly: true , employement: "" ,
                                                        favColor: ""} )
       

        function handleChange(event){
            const{name , value , type , checked} = event.target
                        setFormData(prevFormData => {
                            return {
                                ...prevFormData,
                                [name]: type === "checkbox" ? checked : value
                            }
                            
                        } )
                            
               }
               function handleSubmit(event) {
                event.preventDefault()
                console.log(formData)

               }
        return(  <div className="form">
            <form className="input" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                onChange = {handleChange}
                
                name="firstName"
                value={formData.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                
                onChange={handleChange}
                  
                name="lastName"
                value={formData.lastName}
              />
               <input
                type="text"
                placeholder="Email"
                
                onChange={handleChange}
                  
                name="email"
                
                value={formData.email}

              />
              <textarea
              value={formData.comments}
              placeholder="comments"
              name="comments"
              onChange={handleChange}
                />
                <div className="isFriendly">
                <input 
                  type="checkbox"
                  name="isFriendly"
                  value={formData.isFriendly}
                  id="isFriendly"
                />
                  <label htmlFor="isFriendly" > Are you Friendly?</label>
                <br/>
                </div>
                <fieldset>
                    
                     <legend>Current Employement status</legend>
                     <input 
                       type="radio"
                       id="Unemployement"
                       name="employement"
                     />
                     <label htmlFor="Unemployement">Unemployement</label>
                     <br/>
                     
                     <input 
                       type="radio"
                       id="Part-Time"
                       name="employement"
                     />
                     <label htmlFor="Part-Time">Part-Time</label>
                     <br/>
                     
                     <input 
                       type="radio"
                       id="Full-Time"
                       name="employement"
                     />
                     <label htmlFor="Full-Time">Full-Time</label>
                     <br/>

                </fieldset>
                <br/>
                <label htmlFor="favColor"> what is your favorite color?</label>
                <select
                   id="favColor"
                   value={formData.favColor}
                   name="favColor"
                   onChange={handleChange}
                   >
                  <option value="">--choose--</option>
                  <option value="red">red</option>
                  <option value="indigo">indigo</option>
                  <option value="orange">orange</option>
                  <option value="green">green</option>
                  <option value="yellow">yellow</option>
                  <option value="blue">blue</option>
                  <option value="violet">violet</option>
                </select>
                <br/>
                <br/>
                <button type="submit">submit</button>
                 
            </form>
            </div>
        )
}