declare namespace java {
  namespace text {

    abstract class CollationKey implements java.lang.Comparable<java.text.CollationKey> {
      public abstract compareTo(arg0: java.text.CollationKey): number
      public getSourceString(): java.lang.String
      public abstract toByteArray(): number[]
      protected constructor(arg0: java.lang.String | string)
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
