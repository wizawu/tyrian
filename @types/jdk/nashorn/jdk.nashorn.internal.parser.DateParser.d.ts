declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
                class DateParser {
                    public static YEAR: int
                    public static MONTH: int
                    public static DAY: int
                    public static HOUR: int
                    public static MINUTE: int
                    public static SECOND: int
                    public static MILLISECOND: int
                    public static TIMEZONE: int
                    public constructor(arg0: java.lang.String | string)
                    public parse(): boolean
                    public parseEcmaDate(): boolean
                    public parseLegacyDate(): boolean
                    public getDateFields(): java.lang.Integer[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}