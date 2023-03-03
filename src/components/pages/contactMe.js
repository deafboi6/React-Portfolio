import React, { useState } from 'react';

export default function ContactMe() {
    const [info, setInfo] = useState("");
    const onChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(info);
    };
    

    return (
        <div className='formDiv px-5'>
        <h1 className="text-center pt-3">Contact Me</h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Email address</label>
                <input onChange={onChange} type="email" name='email'className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label>Name</label>
                <input onChange={onChange} name="name" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
            <label>Message:</label>
            <textarea onChange={onChange} name="message" className="form-control"rows="2"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message!</button>
        </form>
        </div>
    )
};

