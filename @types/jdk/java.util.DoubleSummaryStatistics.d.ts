declare namespace java {
  namespace util {

    class DoubleSummaryStatistics implements java.util.function$.DoubleConsumer {
      public constructor()
      public constructor(arg0: long, arg1: double, arg2: double, arg3: double)
      public accept(arg0: double): void
      public combine(arg0: java.util.DoubleSummaryStatistics): void
      public getCount(): long
      public getSum(): double
      public getMin(): double
      public getMax(): double
      public getAverage(): double
      public toString(): java.lang.String
    }

  }
}
