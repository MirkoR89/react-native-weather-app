export const kelvinToCelsius = (kelvin) => {
	if (typeof kelvin !== 'number') {
		throw new Error('Input must be a number');
	}

	const celsius = kelvin - 273.15;
	return Math.round(celsius);
}

export const getDateTime = (sunrise, timezone) => {
	if (typeof sunrise !== 'number' && typeof timezone !== 'number') {
		throw new Error('Input must be a number');
	}

	const dateTime = new Date((sunrise + timezone) * 1000)

	const options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	};

	const timeOptions = {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	};

	const date = dateTime.toLocaleDateString('en-US', options);
	const time = dateTime.toLocaleTimeString('en-US', timeOptions);

	return { day: date.split(', ')[0], date: date.split(', ')[1], time }
}

export const getHours = (time, timezone) => {
	const date = new Date(time * 1000 - (timezone * 1000))
	let hours = date.getHours();
	const minutes = date.getMinutes();
	let period = "a.m.";

	if (hours >= 12) {
		period = "p.m.";
		if (hours > 12) {
			hours -= 12;
		}
	}

	if (hours === 0) {
		hours = 12;
	}

	return `${hours} ${period}`;
}

export const getBgAndIcon = (cardIcon) => {
	let icon
	let bgGradient

	switch (cardIcon) {
		case '01n':
		case '01d':
			icon = require('../assets/icons/Sunny.png')
			bgGradient = ['#5374E7', '#77B9F5']
			break;
		case '02n':
		case '02d':
			icon = require('../assets/icons/PartlyCloudyDay.png')
			bgGradient = ['#5374E7', '#77B9F5']
			break;
		case '03n':
		case '03d':
		case '04n':
		case '04d':
			icon = require('../assets/icons/Cloudy.png')
			bgGradient = ['#464C64', '#99A9B9']
			break;
		case '09n':
		case '09d':
		case '11n':
		case '11d':
		case '13d':
			icon = require('../assets/icons/OccLightRain.png')
			bgGradient = ['#464C64', '#99A9B9']
			break;
		case '10n':
		case '10d':
			icon = require('../assets/icons/ModRainSwrsDay.png')
			bgGradient = ['#011354', '#5B9FE3']
			break;
		default:
			icon = require('../assets/icons/Cloudy.png')
			bgGradient = ['#464C64', '#99A9B9']
			break;
	}
	return { icon, bgGradient }
}

export const truncate = (string, n, noDots) => {
	return string?.length > n ? string.substring(0, n) + (!noDots ? '..' : '') : string
}