declare namespace java {
    namespace util {
        class DoubleSummaryStatistics implements java.util.function$.DoubleConsumer {
            public constructor()
            public accept(arg0: double): void
            public combine(arg0: java.util.DoubleSummaryStatistics): void
            public getCount(): long
            public getSum(): double
            public getMin(): double
            public getMax(): double
            public getAverage(): double
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}