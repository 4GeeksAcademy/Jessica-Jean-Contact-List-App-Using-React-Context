import React, { useState, useEffect, useContext } from "react";

export const Addcontacts = () => {

const[FullName, setFullName] = useState("")
const[Email, setEmail] = useState("")
const[Address, setAddress] = useState("")
const[Phone, setPhone] = useState("")

return(
    <div className = "container">
        <h1>Add New Contact</h1>
        <form>
            <div className="form">

                <div>
                    <label>
                        Full Name
                    </label>
                    <input value={FullName} onChange={(e)=> setFullName(e.target.value)}> 
                    </input>
                </div>
                <div>
                    <label>
                        Email
                    </label>
                    <input value={Email} onChange={(e)=> setEmail(e.target.value)}> 
                    </input>
                </div>
                <div>
                    <label>
                        Address
                    </label>
                    <input value={Address} onChange={(e)=> setAddress(e.target.value)}> 
                    </input>
                </div>
                <div>
                    <label>
                        Phone
                    </label>
                    <input value={Phone} onChange={(e)=> setPhone(e.target.value)}> 
                    </input>
                </div>
            </div>


        </form>
    </div>
)


}