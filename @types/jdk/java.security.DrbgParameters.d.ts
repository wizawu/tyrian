declare namespace java {
  namespace security {

    class DrbgParameters {

      public static instantiation(arg0: int, arg1: java.security.DrbgParameters$Capability, arg2: byte[]): java.security.DrbgParameters$Instantiation
      public static nextBytes(arg0: int, arg1: boolean, arg2: byte[]): java.security.DrbgParameters$NextBytes
      public static reseed(arg0: boolean, arg1: byte[]): java.security.DrbgParameters$Reseed
    }

  }
}
