class Config {
    public static async getConfigs() {
        return {
            limits: {
                temperature: {
                    min: 12,
                    max: 44
                },
                pressure: {
                    min: 12,
                    max: 70
                }
            },
            lighting: {
                on: '10:10',
                off: '20:10'
            }
        }
    }
}

export default Config;