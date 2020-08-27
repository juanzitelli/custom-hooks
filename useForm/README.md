# useForm hook

## Usage example:

```
	const initialForm = {
		name: '',
		age: 20,
		email: '',
	};


	const [formState, handleInputChange, resetForm] = useForm(initialForm);
```