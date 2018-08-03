declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace parser {
                class DateParser {
                    public static readonly YEAR: int
                    public static readonly MONTH: int
                    public static readonly DAY: int
                    public static readonly HOUR: int
                    public static readonly MINUTE: int
                    public static readonly SECOND: int
                    public static readonly MILLISECOND: int
                    public static readonly TIMEZONE: int
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