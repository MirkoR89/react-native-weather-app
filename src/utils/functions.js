export const kelvinToCelsius = (kelvin) => {
    if (typeof kelvin !== 'number') {
        throw new Error('Input must be a number');
    }

    const celsius = kelvin - 273.15;
    return  Math.round(celsius);
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
      
      return {day: date.split(', ')[0], date:date.split(', ')[1], time}
} 