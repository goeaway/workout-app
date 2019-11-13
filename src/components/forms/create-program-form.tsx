import * as React from "react";
import { useForm, useField } from "react-final-form-hooks";

export interface CreateProgramFormProps {
    onSuccess: () => void;
    onFailure?: () => void;
}

const CreateProgramForm: React.FC<CreateProgramFormProps> = ({ onSuccess, onFailure }) => {
    const validate = (values: Object) => {

    }

    const { form, handleSubmit, values, pristine, submitting } = useForm({
        onSuccess, 
        validate
    });

    const name = useField('name', form);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input {...name.input} placeholder="Name" />
                {name.meta.touched && name.meta.error && (
                    <span>{name.meta.error}</span>
                )}
            </div>
            <button type="submit" disabled={pristine || submitting}>
                Submit
            </button>
        </form>
    )
}

export default CreateProgramForm;