declare namespace java {
  namespace util {

    class IntSummaryStatistics implements java.util.function$.IntConsumer {
      public constructor()
      public constructor(arg0: long, arg1: int, arg2: int, arg3: long)
      public accept(arg0: int): void
      public combine(arg0: java.util.IntSummaryStatistics): void
      public getCount(): long
      public getSum(): long
      public getMin(): int
      public getMax(): int
      public getAverage(): double
      public toString(): java.lang.String
    }

  }
}
