import { Component } from 'react'
const emailState = {
    email: '',
    error: ''
}
class Form extends Component {

    constructor() {
        super();
        this.state = emailState;
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    emailValidation() {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!this.state.email || regex.test(this.state.email) === false) {
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }
        return true;
    }
    onSubmit() {
        if (this.emailValidation()) {
            console.log(this.state);
            this.setState(emailState);
        }
    }
    render() {
        return (
            <>
                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" placeholder="Type Your Email" />
                    <span className="text-danger validation">{this.state.error}</span>
                    <button type="submit" className="btn primary-btn" onClick={() => this.onSubmit()}>Subscribe</button>

            </>
        )
    }
}

export default Form;