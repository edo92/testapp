import { climate } from '../models';
import { Time, Formatter } from '../../util';

interface IdataObj {
    data: number;
    unit: string;
}

interface Idata {
    [key: string]: IdataObj
}


class ClimateDB {
    public async getCurrentTable(date: string) {
        return await climate.findOne({ date });
    }

    public async createClimateTable(date: string, data: object) {
        try {
            return await climate.create({
                date: date,
                climate: data
            })

        } catch (err) { return { err } };
    }

    public async updateClimateTable(id: string, data: object) {
        try {
            return await climate.updateMany(
                { _id: id },
                { $push: data }
            )
        } catch (err) { return { err } };
    }
}


class ClimateActions {
    public static async saveClimate(data: Idata) {
        const climate = new ClimateDB();
        const date = Time.currentDate();

        // Format climate data specific for each actions
        const ordata = Formatter.originalObject(data);
        const pkdata = Formatter.withParentKey(data);

        // Get current day data table / extract _id
        const currTable = await climate.getCurrentTable(date);
        const ctId: string | null = currTable && currTable._id;

        if (ctId)
            climate.updateClimateTable(ctId, pkdata);
        else
            climate.createClimateTable(date, ordata);
    }
}

export default ClimateActions;