declare namespace java {
  namespace util {

    class DoubleSummaryStatistics implements java.util.function$.DoubleConsumer {

      public constructor()
      public constructor(arg0: long, arg1: double, arg2: double, arg3: double)
      public accept(arg0: double): void
      public combine(arg0: java.util.DoubleSummaryStatistics): void
      public readonly getCount(): long
      public readonly getSum(): double
      public readonly getMin(): double
      public readonly getMax(): double
      public readonly getAverage(): double
      public toString(): java.lang.String
    }

  }
}
