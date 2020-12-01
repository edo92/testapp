interface IState {
}

class Store {
    public state: IState = {};

    public setState(data: object): void {
        this.state = { ...this.state, ...data };
    }

    public getState(): object {
        return this.state;
    }
}

export default new Store;