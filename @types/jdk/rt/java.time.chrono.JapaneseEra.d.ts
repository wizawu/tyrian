declare namespace java {
    namespace time {
        namespace chrono {
class JapaneseEra implements java.time.chrono.Era , java.io.Serializable {
    public static MEIJI: java.time.chrono.JapaneseEra
    public static TAISHO: java.time.chrono.JapaneseEra
    public static SHOWA: java.time.chrono.JapaneseEra
    public static HEISEI: java.time.chrono.JapaneseEra
    public static of(arg0: int): java.time.chrono.JapaneseEra
    public static valueOf(arg0: java.lang.String | string): java.time.chrono.JapaneseEra
    public static values(): java.time.chrono.JapaneseEra[]
    public getDisplayName(arg0: java.time.format.TextStyle, arg1: java.util.Locale): string
    public getValue(): int
    public range(arg0: java.time.temporal.TemporalField): java.time.temporal.ValueRange
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}