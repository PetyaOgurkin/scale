export default class Timeline {

    static hourInMs = 3.6 * 10 ** 6;

    static getRange(name, period, days, start) {

        const startDateTime = this.splitDateTime(start);

        const finishDateTime = startDateTime.getTime() + days * 24 * this.hourInMs;
        const finishDate = new Date(finishDateTime);
        finishDate.setUTCHours(23, 59, 59, 999);

        const times = [];

        for (let i = startDateTime.getTime(); i < finishDate.getTime(); i += period * this.hourInMs) {
            times.push(new Date(i));
        }

        return {
            name,
            times,
            period
        }
    }

    static splitDateTime(dateTime) {
        const splited = dateTime.split(".");
        const time = new Date;
        time.setFullYear(+splited[2], +splited[1] - 1, +splited[0]);
        time.setHours(+splited[3], +splited[4], 0, 0);

        return time;
    }

    static compareRanges(period, ...ranges) {

        const minDay = Math.min(...ranges.map(e => e.times[0].getTime()));
        const maxDay = Math.max(...ranges.map(e => e.times[e.times.length - 1].getTime()));
        console.log(new Date(minDay), new Date(maxDay));

        const firstDate = new Date(minDay);
        


        ranges.forEach(e => {
            console.log(e.times[0].getTime(), e.times[e.times.length - 1].getTime(), e.period, e.times.length);

        });

    }
}


