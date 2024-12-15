export const milisecondsToMinutes = (miliseconds: number) => {
	const minutes = Math.floor(miliseconds / 60000);
	let seconds = ((miliseconds % 60000) / 1000).toFixed(0);
	if (seconds.length === 1) {
		seconds = "0" + seconds;
	}
	return `${minutes}:${seconds}`;
};
