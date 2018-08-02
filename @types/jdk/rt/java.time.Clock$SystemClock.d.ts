declare namespace java {
    namespace time {
        class Clock$SystemClock extends java.time.Clock implements java.io.Serializable {
            public getZone(): java.time.ZoneId
            public withZone(arg0: java.time.ZoneId): java.time.Clock
            public millis(): long
            public instant(): java.time.Instant
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}