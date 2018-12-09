const asyncTypes = type => ({
	[type] : {
		START: `${type}_START`,
		SUCCESS: `${type}_SUCCESS`,
		ERROR: `${type}_ERROR`,
	}
})

export default asyncTypes;

