declare namespace java {
  namespace security {

    class DrbgParameters {
      public static instantiation(arg0: number | java.lang.Integer, arg1: java.security.DrbgParameters$Capability, arg2: byte[]): java.security.DrbgParameters$Instantiation
      public static nextBytes(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean, arg2: byte[]): java.security.DrbgParameters$NextBytes
      public static reseed(arg0: boolean | java.lang.Boolean, arg1: byte[]): java.security.DrbgParameters$Reseed
    }

  }
}
