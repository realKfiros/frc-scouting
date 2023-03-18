import {FC} from "react";
import {Field} from "../models/field";
import {useForm} from "react-hook-form";
import {Input} from "./input.component";
import {v4 as uuid} from "uuid";

interface FormProps
{
	fields: Field[],
	onSubmit: (data: any) => void,
}

export const Form: FC<FormProps> = ({fields, onSubmit}) =>
{
	const {register, handleSubmit, setValue, getValues} = useForm();

	return <form onSubmit={handleSubmit(onSubmit)}>
		{fields.map(field => <Input field={field} form={register} setValue={setValue} getValue={getValues} key={uuid()} />)}
		<button className="btn btn-primary" type="submit">Download CSV</button>
	</form>
};