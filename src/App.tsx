import {Field} from "./models/field";
import {InputType} from "./enums/input_type";
import {Form} from "./components/form.component";
import {v1 as uuid} from 'uuid';

const form: Array<Field> = [
	{type: InputType.title, label: 'Neat team scouting!'},
	{type: InputType.number, name: 'groupNumber', label: 'Group number'},
	{type: InputType.number, name: 'gameNumber', label: 'Game number'},

	{type: InputType.subTitle, label: 'Autonomous'},
	{type: InputType.checkbox, name: 'leftCommunityAuto', label: 'Left the community'},
	{type: InputType.counter, name: 'bottomCubeAutoAdd', label: 'Bottom cube'},
	{type: InputType.counter, name: 'middleCubeAutoAdd', label: 'Middle cube'},
	{type: InputType.counter, name: 'upperCubeAutoAdd', label: 'Upper cube'},
	{type: InputType.counter, name: 'bottomConeAutoAdd', label: 'Bottom cone'},
	{type: InputType.counter, name: 'middleConeAutoAdd', label: 'Middle cone'},
	{type: InputType.counter, name: 'upperConeAutoAdd', label: 'Upper cone'},
	{type: InputType.checkbox, name: 'balancingAuto', label: 'Balanced'},

	{type: InputType.subTitle, label: 'Teleop'},
	{type: InputType.counter, name: 'bottomCubeTeleAdd', label: 'Bottom cube'},
	{type: InputType.counter, name: 'middleCubeTeleAdd', label: 'Middle cube'},
	{type: InputType.counter, name: 'upperCubeTeleAdd', label: 'Upper cube'},
	{type: InputType.counter, name: 'bottomConeTeleAdd', label: 'Bottom cone'},
	{type: InputType.counter, name: 'middleConeTeleAdd', label: 'Middle cone'},
	{type: InputType.counter, name: 'upperConeTeleAdd', label: 'Upper cone'},
	{type: InputType.counter, name: 'gamePiecesDropped', label: 'Game pieces dropped'},
	{type: InputType.checkbox, name: 'isDefensive', label: 'Defensive'},
	{type: InputType.checkbox, name: 'struggleDefense', label: 'Struggled with defense'},

	{type: InputType.textarea, name: 'remarks', label: 'Remarks'},
];

const App = () =>
{
	const downloadCSV = (data: any) =>
	{
		const titles: string[] = [];
		let values: string[] = [];
		form.forEach((field) =>
		{
			if (field.name)
			{
				titles.push(`"${field.label || ''}"`);
				values.push(field.name);
			}
		});
		values = values.map(fieldName => data[fieldName] || '');

		const csv = titles.join(',') + '\n' + values.join(',') + '\n';
		const el = document.createElement('a');
		el.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
		el.target = '_blank';
		el.download = uuid() + '.csv';
		el.click();
	};

	return <div className="container">
		<Form onSubmit={downloadCSV} fields={form} />
	</div>;
};

export default App;
