import React, { useState } from 'react'

const Form = ({getSearch}) => {

	const [search, setSearch] = useState({
		city: '',
		country: ''
	})

	const	handleChange = e => {
		setSearch({
			...search,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		getSearch(search);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text" 
						id="city"
						name="city"
						className="form-control"
						placeholder="City"
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<select	className="form-control" onChange={handleChange} name="country">
						<option value="">Country</option>
						<option value="US">United States</option>
						<option value="MX">Mexico</option>
						<option value="ES">Spain</option>
						<option value="CL">Chile</option>
					</select>
				</div>

				<div className="text-center">
					<input type="submit" className="btn btn btn-dark" value="Search" />
				</div>
			</form>
		</div>
	)
}
 
export default Form;