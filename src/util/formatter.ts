interface IObj {
    [key: string]: number;
}

interface Idata {
    [key: string]: IdataObj;
}

interface IdataObj {
    data: number;
    unit: string;
}


class Dataformatter {
    public static withParentKey = (data: Idata): object => {
        let obj: IObj = {};
        for (let key in data) {
            obj[`climate.${key}`] = data[key].data;
        }
        return obj;
    }

    public static originalObject = (data: Idata): object => {
        let obj: IObj = {};
        for (let key in data) {
            obj[key] = data[key].data;
        }
        return obj;
    }
}

export default Dataformatter;