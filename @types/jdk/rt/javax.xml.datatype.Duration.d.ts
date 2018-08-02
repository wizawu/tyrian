declare namespace javax {
    namespace xml {
        namespace datatype {
            abstract class Duration {
                public constructor()
                public getXMLSchemaType(): javax.xml.namespace.QName
                public getSign(): int
                public getYears(): int
                public getMonths(): int
                public getDays(): int
                public getHours(): int
                public getMinutes(): int
                public getSeconds(): int
                public getTimeInMillis(arg0: java.util.Calendar): long
                public getTimeInMillis(arg0: java.util.Date): long
                public getField(arg0: javax.xml.datatype.DatatypeConstants$Field): java.lang.Number
                public isSet(arg0: javax.xml.datatype.DatatypeConstants$Field): boolean
                public add(arg0: javax.xml.datatype.Duration): javax.xml.datatype.Duration
                public addTo(arg0: java.util.Calendar): void
                public addTo(arg0: java.util.Date): void
                public subtract(arg0: javax.xml.datatype.Duration): javax.xml.datatype.Duration
                public multiply(arg0: int): javax.xml.datatype.Duration
                public multiply(arg0: java.math.BigDecimal): javax.xml.datatype.Duration
                public negate(): javax.xml.datatype.Duration
                public normalizeWith(arg0: java.util.Calendar): javax.xml.datatype.Duration
                public compare(arg0: javax.xml.datatype.Duration): int
                public isLongerThan(arg0: javax.xml.datatype.Duration): boolean
                public isShorterThan(arg0: javax.xml.datatype.Duration): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}