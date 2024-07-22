const createProposal = () => {
	const wrapper = (
		<div>
			<div>
				Viewer
				<input
					type='text'
					placeholder='title'
				/>
				<textarea>Abstract</textarea>
			</div>
			<textarea>Preview</textarea>
			<button>Save</button>
		</div>
	)

	return wrapper
}

export default createProposal
