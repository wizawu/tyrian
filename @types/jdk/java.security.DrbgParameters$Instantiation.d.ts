declare namespace java {
  namespace security {

    class DrbgParameters$Instantiation implements java.security.SecureRandomParameters {
      public getStrength(): int
      public getCapability(): java.security.DrbgParameters$Capability
      public getPersonalizationString(): byte[]
      public toString(): java.lang.String
    }

  }
}
