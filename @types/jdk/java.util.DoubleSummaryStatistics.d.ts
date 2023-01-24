declare namespace java {
  namespace util {
    class DoubleSummaryStatistics implements java.util.function$.DoubleConsumer {
      public constructor()
      public constructor(
        arg0: number | java.lang.Long,
        arg1: number | java.lang.Double,
        arg2: number | java.lang.Double,
        arg3: number | java.lang.Double
      )
      public accept(arg0: number | java.lang.Double): void
      public combine(arg0: java.util.DoubleSummaryStatistics): void
      public getCount(): number
      public getSum(): number
      public getMin(): number
      public getMax(): number
      public getAverage(): number
      public toString(): java.lang.String
    }
  }
}
