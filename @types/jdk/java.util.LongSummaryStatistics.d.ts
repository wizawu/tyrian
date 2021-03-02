declare namespace java {
  namespace util {

    class LongSummaryStatistics implements java.util.function$.LongConsumer, java.util.function$.IntConsumer {
      public constructor()
      public constructor(arg0: number | java.lang.Long, arg1: number | java.lang.Long, arg2: number | java.lang.Long, arg3: number | java.lang.Long)
      public accept(arg0: number | java.lang.Integer): void
      public accept(arg0: number | java.lang.Long): void
      public combine(arg0: java.util.LongSummaryStatistics): void
      public getCount(): number
      public getSum(): number
      public getMin(): number
      public getMax(): number
      public getAverage(): number
      public toString(): java.lang.String
    }

  }
}
