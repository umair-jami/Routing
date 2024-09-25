import React from "react";
import './page.css'

export default function Contact() {
  return (
    <div className=" ">
      <form>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" />
        </div>
        <div>
          <label>Phone</label>
          <input type="tel" />
        </div>
        <div>
          <label>Message</label>
          <textarea />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
