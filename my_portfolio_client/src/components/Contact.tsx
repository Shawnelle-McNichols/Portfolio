import React, { useState } from 'react';


const Contact: React.FC = () => {
    const [emailForm, setEmailForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    })
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("Submit");

    function resetEmailForm() {
        setEmailForm({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: ""
        })
    }

    function handleEmailFormChange(event: { target: { name: any; value: any; }; }){
        setEmailForm((prevEmailData) => {
            return {
                ...prevEmailData,
                [event.target.name]: event.target.value,
            }
        })
        if (result.length > 0 ){
            setResult('');
        }
    }

    const handleSubmit = async (e: any) => {
        setResult('');
        e.preventDefault();
        setStatus("Sending...");

        const {firstname,lastname,email,phone,message} = e.target.elements;

        let details = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            phone: phone.value,
            message:message.value,
        };

        try {
            let response = await fetch('http://localhost:5000/send', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(details),
            })
            setStatus('Submit');
            let result = await response.json();

            if (result.status === 'success'){
                setResult('Message Sent!');
                resetEmailForm();
            } else if (result.status === 'fail'){
                alert("Uh oh! Your message failed to send.");
            }
        }catch(error){
            setStatus('Submit');
            setResult('Issues with submitting message.');
        }
    }
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form className="col-lg-6 offset-lg-3"
            onSubmit={handleSubmit}
            method="POST">
                <div>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label>First name</label>
                            <input
                                type="text"
                                name="firstname"
                                className="form-control form-box"
                                placeholder="First name"
                                required={true}
                                value={emailForm.firstname} 
                                onChange={handleEmailFormChange}/>
                        </div>

                        <div className="col-sm-6">
                            <label>Last name</label>
                            <input
                                type="text"
                                name="lastname"
                                className="form-control form-box"
                                placeholder="Last name"
                                required={true}
                                value={emailForm.lastname} 
                                onChange={handleEmailFormChange}/>
                        </div>
                    </div>
                    <div className="form-item">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control form-box"
                            placeholder="example@email.com"
                            required={true}
                            value={emailForm.email} 
                            onChange={handleEmailFormChange}/>
                    </div>
                    <div className="form-item">
                        <label>Phone number(optional)</label>
                        <input
                            type="phone"
                            name="phone"
                            className="form-control form-box"
                            placeholder="123-456-7890"                           
                            value={emailForm.phone} 
                            onChange={handleEmailFormChange}/>
                    </div>
                    <div className="form-item">
                        <label>Leave a message</label>
                        <textarea
                        name="message"
                            maxLength={300}
                            className="form-control form-box"
                            required={true}
                            value={emailForm.message}
                            rows={3} 
                            onChange={handleEmailFormChange}/>
                    </div>
                    <span className="form-btn">
                        <button type="submit" className="btn-about btn-sm">{status}</button>
                        <h3>{result}</h3>
                    </span>
                </div>
            </form>
        </section>
    );
}
export default Contact;