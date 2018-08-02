declare namespace java {
    namespace time {
        namespace temporal {
interface TemporalAmount {
    get(arg0: java.time.temporal.TemporalUnit): long
    getUnits(): java.util.List<java.time.temporal.TemporalUnit>
    addTo(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
    subtractFrom(arg0: java.time.temporal.Temporal): java.time.temporal.Temporal
}

        }
    }
}