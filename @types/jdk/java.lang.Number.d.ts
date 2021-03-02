declare namespace java {
  namespace lang {

    abstract class Number implements java.io.Serializable {
      public constructor()
      public abstract intValue(): int
      public abstract longValue(): long
      public abstract floatValue(): float
      public abstract doubleValue(): double
      public byteValue(): byte
      public shortValue(): short
    }

  }
}
