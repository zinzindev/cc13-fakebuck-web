import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
// import en from 'javascript-time-ago/locale/th'

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

// export const timeSince = dateStr => timeAgo.format(new Date(dateStr), 'mini');
export const timeSince = dateStr => timeAgo.format(new Date(dateStr), 'round');