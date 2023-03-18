import {InputType} from "../enums/input_type";

export interface Field
{
	type: InputType;
	label?: string;
	name?: string;
	initialValue?: any;
}