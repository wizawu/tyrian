declare namespace java {
    namespace util {
        class LongSummaryStatistics implements java.util.function$.LongConsumer , java.util.function$.IntConsumer {
            public constructor()
            public accept(arg0: int): void
            public accept(arg0: long): void
            public combine(arg0: java.util.LongSummaryStatistics): void
            public getCount(): long
            public getSum(): long
            public getMin(): long
            public getMax(): long
            public getAverage(): double
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}