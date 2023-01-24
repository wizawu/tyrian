declare namespace java {
  namespace util {
    class IntSummaryStatistics implements java.util.function$.IntConsumer {
      public constructor()
      public constructor(
        arg0: number | java.lang.Long,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Long
      )
      public accept(arg0: number | java.lang.Integer): void
      public combine(arg0: java.util.IntSummaryStatistics): void
      public getCount(): number
      public getSum(): number
      public getMin(): number
      public getMax(): number
      public getAverage(): number
      public toString(): java.lang.String
    }
  }
}
