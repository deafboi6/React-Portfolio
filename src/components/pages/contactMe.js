import React, { useState } from 'react';

export default function ContactMe() {
    return (
        <div>
        <h1 className="text-center">Contact Me</h1>
        <form>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
            <label>Message:</label>
            <textarea className="form-control"rows="2"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
};

//input="email" or type="email" required 