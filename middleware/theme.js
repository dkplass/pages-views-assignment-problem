export default ({ route }) => {
	// Take the last value (latest route child)
	const theme = route.meta.reduce((theme, meta) => meta.theme || theme, 'light');
	console.log(theme)
}