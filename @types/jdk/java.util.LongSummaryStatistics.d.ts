declare namespace java {
  namespace util {

    class LongSummaryStatistics implements java.util.function$.LongConsumer, java.util.function$.IntConsumer {
      public constructor()
      public constructor(arg0: long, arg1: long, arg2: long, arg3: long)
      public accept(arg0: int): void
      public accept(arg0: long): void
      public combine(arg0: java.util.LongSummaryStatistics): void
      public getCount(): long
      public getSum(): long
      public getMin(): long
      public getMax(): long
      public getAverage(): double
      public toString(): java.lang.String
    }

  }
}
