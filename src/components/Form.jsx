import React from 'react';
import styles from './Form.module.css';


export default class Form extends React.Component {
    state = {
        email: "",
        password: ""
    }

    render() {

        const {email, password} = this.state
        
        return(
            <div className={styles.container}>
                <h1>Form</h1>
                <form>
                    <label placeholder="email">Email</label>
                </form>
            </div>
        )
    }

}