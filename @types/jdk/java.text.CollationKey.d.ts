declare namespace java {
  namespace text {

    abstract class CollationKey implements java.lang.Comparable<java.text.CollationKey> {
      public abstract compareTo(arg0: java.text.CollationKey): int
      public getSourceString(): java.lang.String
      public abstract toByteArray(): byte[]
      protected constructor(arg0: java.lang.String)
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
