declare namespace java {
  namespace security {
    class DrbgParameters$NextBytes implements java.security.SecureRandomParameters {
      public getStrength(): number
      public getPredictionResistance(): boolean
      public getAdditionalInput(): number[]
    }
  }
}
