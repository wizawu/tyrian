declare namespace java {
  namespace lang {

    class Runtime$Version implements java.lang.Comparable<java.lang.Runtime$Version> {
      public static parse(arg0: java.lang.String | string): java.lang.Runtime$Version
      public feature(): number
      public interim(): number
      public update(): number
      public patch(): number
      public major(): number
      public minor(): number
      public security(): number
      public version(): java.util.List<java.lang.Integer>
      public pre(): java.util.Optional<java.lang.String>
      public build(): java.util.Optional<java.lang.Integer>
      public optional(): java.util.Optional<java.lang.String>
      public compareTo(arg0: java.lang.Runtime$Version): number
      public compareToIgnoreOptional(arg0: java.lang.Runtime$Version): number
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public equalsIgnoreOptional(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
