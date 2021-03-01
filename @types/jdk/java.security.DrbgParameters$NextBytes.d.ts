declare namespace java {
  namespace security {

    class DrbgParameters$NextBytes implements java.security.SecureRandomParameters {

      public getStrength(): int
      public getPredictionResistance(): boolean
      public getAdditionalInput(): byte[]
    }

  }
}
