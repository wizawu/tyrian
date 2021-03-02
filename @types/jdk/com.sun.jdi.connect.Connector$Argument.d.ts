declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {

        interface Connector$Argument extends java.io.Serializable {
          name(): java.lang.String
          label(): java.lang.String
          description(): java.lang.String
          value(): java.lang.String
          setValue(arg0: java.lang.String): void
          isValid(arg0: java.lang.String): boolean
          mustSpecify(): boolean
        }

      }
    }
  }
}
