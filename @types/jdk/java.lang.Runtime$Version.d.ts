declare namespace java {
  namespace lang {

    class Runtime$Version implements java.lang.Comparable<java.lang.Runtime$Version> {
      public static parse(arg0: java.lang.String): java.lang.Runtime$Version
      public feature(): int
      public interim(): int
      public update(): int
      public patch(): int
      public major(): int
      public minor(): int
      public security(): int
      public version(): java.util.List<java.lang.Integer>
      public pre(): java.util.Optional<java.lang.String>
      public build(): java.util.Optional<java.lang.Integer>
      public optional(): java.util.Optional<java.lang.String>
      public compareTo(arg0: java.lang.Runtime$Version): int
      public compareToIgnoreOptional(arg0: java.lang.Runtime$Version): int
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public equalsIgnoreOptional(arg0: java.lang.Object): boolean
      public hashCode(): int
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
