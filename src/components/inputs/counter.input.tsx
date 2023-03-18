import {FC, useState} from "react";
import {Field} from "../../models/field";
import {UseFormGetValues, UseFormRegister, UseFormSetValue} from "react-hook-form";

interface CounterInputProps
{
	field: Field,
	form: UseFormRegister<any>,
	setValue: UseFormSetValue<any>,
	getValue: UseFormGetValues<any>
}

export const CounterInput: FC<CounterInputProps> = ({field, form, setValue}) =>
{
	const [displayValue, setDisplayValue] = useState(field.initialValue || 0);

	const decrement = () =>
	{
		setValue(field.name || '', displayValue - 1);
		setDisplayValue(displayValue - 1);
	};
	const increment = () =>
	{
		setValue(field.name || '', displayValue + 1);
		setDisplayValue(displayValue + 1);
	};

	return <div>
		<label>{field.label}</label>
		<div className="input-group mb-3">
			<button className="btn btn-outline-secondary" type="button" onClick={decrement}>-</button>
			<input type="number" className="form-control" id={field.name} defaultValue={field.initialValue || 0} disabled {...form(field.name || '')}/>
			<button className="btn btn-outline-secondary" type="button" onClick={increment}>+</button>
		</div>
	</div>;
};
