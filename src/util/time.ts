import moment from 'moment';

class Time {
    public static currentDate = (): string => {
        return moment(Date.now()).format('MM/DD/YYYY');
    }
}

export default Time;