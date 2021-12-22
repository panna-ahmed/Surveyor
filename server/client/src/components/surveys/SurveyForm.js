import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const Fields = [
    { label: 'Survey Title', name: 'Title' },
    { label: 'Survey Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
]

class SurveyForm extends Component {
    renderFields(){
        return _.map(Fields, ({ label, name}) => {
            return <Field key={name} label={label} type="text" name={name} component={SurveyField}/>
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(val => console.log(val))}>
                    {this.renderFields()}
                    <Link to="/surveys" className='red btn-flat white-text'>
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    console.log('values:', values);
    const errors = {};
    
    if(!values.title){
        errors.title = 'You must provide a title';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);

