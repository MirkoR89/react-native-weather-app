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
		weekday: 'long', // Full weekday name (e.g., "Friday")
		day: 'numeric', // Day of the month (e.g., "18")
		month: 'long', // Full month name (e.g., "September")
	};

	const timeOptions = {
		hour: 'numeric', // Hours (e.g., "2")
		minute: 'numeric', // Minutes (e.g., "38")
		hour12: true, // Use 12-hour clock format (e.g., "a.m." or "p.m.")
	};

	const date = dateTime.toLocaleDateString('en-US', options);
	const time = dateTime.toLocaleTimeString('en-US', timeOptions);

	return { day: date.split(', ')[0], date: date.split(', ')[1], time }
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