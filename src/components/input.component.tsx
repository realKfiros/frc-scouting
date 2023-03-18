import {FC} from "react";
import {Field} from "../models/field";
import {UseFormGetValues, UseFormRegister, UseFormSetValue} from "react-hook-form";
import {InputType} from "../enums/input_type";
import {CounterInput} from "./inputs/counter.input";

interface FormFieldProps
{
	field: Field,
	form: UseFormRegister<any>,
	setValue: UseFormSetValue<any>,
	getValue: UseFormGetValues<any>
}

export const Input: FC<FormFieldProps> = (props) =>
{
	const {field, form} = props;

	switch (field.type)
	{
		case InputType.title:
		case InputType.subTitle:
			return <p className={field.type}>{field.label}</p>;
		case InputType.checkbox:
			return <div className="form-check">
				<input className="form-check-input" type="checkbox" value="" id={field.name} {...form(field.name || '')}/>
				<label className="form-check-label" htmlFor={field.name}>{field.label}</label>
			</div>;
		case InputType.counter:
			return <CounterInput {...props} />
		default:
			const InputComponent = field.type === InputType.textarea ? 'textarea' : 'input';
			return <div className="mb-3">
				<label htmlFor={field.name} className="form-label">{field.label}</label>
				<InputComponent type={field.type} className="form-control" id={field.name} {...form(field.name || '')}/>
			</div>;
	}
}
