declare namespace java {
  namespace security {
    class DrbgParameters$Instantiation implements java.security.SecureRandomParameters {
      public getStrength(): number
      public getCapability(): java.security.DrbgParameters$Capability
      public getPersonalizationString(): number[]
      public toString(): java.lang.String
    }
  }
}
