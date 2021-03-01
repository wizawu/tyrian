declare namespace java {
  namespace security {

    class DrbgParameters$Capability extends java.lang.Enum<java.security.DrbgParameters$Capability> {

      public static readonly PR_AND_RESEED: java.security.DrbgParameters$Capability
      public static readonly RESEED_ONLY: java.security.DrbgParameters$Capability
      public static readonly NONE: java.security.DrbgParameters$Capability
      public static values(): java.security.DrbgParameters$Capability[]
      public static valueOf(arg0: java.lang.String): java.security.DrbgParameters$Capability
      public toString(): java.lang.String
      public supportsReseeding(): boolean
      public supportsPredictionResistance(): boolean
    }

  }
}
