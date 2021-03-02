declare namespace java {
  namespace lang {

    abstract class Number implements java.io.Serializable {
      public constructor()
      public abstract intValue(): number
      public abstract longValue(): number
      public abstract floatValue(): number
      public abstract doubleValue(): number
      public byteValue(): number
      public shortValue(): number
    }

  }
}
