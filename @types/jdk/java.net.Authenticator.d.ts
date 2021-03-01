declare namespace java {
  namespace net {

    abstract class Authenticator {

      public constructor()
      public static setDefault(arg0: java.net.Authenticator): void
      public static getDefault(): java.net.Authenticator
      public static requestPasswordAuthentication(arg0: java.net.InetAddress, arg1: int, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String): java.net.PasswordAuthentication
      public static requestPasswordAuthentication(arg0: java.lang.String, arg1: java.net.InetAddress, arg2: int, arg3: java.lang.String, arg4: java.lang.String, arg5: java.lang.String): java.net.PasswordAuthentication
      public static requestPasswordAuthentication(arg0: java.lang.String, arg1: java.net.InetAddress, arg2: int, arg3: java.lang.String, arg4: java.lang.String, arg5: java.lang.String, arg6: java.net.URL, arg7: java.net.Authenticator$RequestorType): java.net.PasswordAuthentication
      public static requestPasswordAuthentication(arg0: java.net.Authenticator, arg1: java.lang.String, arg2: java.net.InetAddress, arg3: int, arg4: java.lang.String, arg5: java.lang.String, arg6: java.lang.String, arg7: java.net.URL, arg8: java.net.Authenticator$RequestorType): java.net.PasswordAuthentication
      public requestPasswordAuthenticationInstance(arg0: java.lang.String, arg1: java.net.InetAddress, arg2: int, arg3: java.lang.String, arg4: java.lang.String, arg5: java.lang.String, arg6: java.net.URL, arg7: java.net.Authenticator$RequestorType): java.net.PasswordAuthentication
      protected readonly getRequestingHost(): java.lang.String
      protected readonly getRequestingSite(): java.net.InetAddress
      protected readonly getRequestingPort(): int
      protected readonly getRequestingProtocol(): java.lang.String
      protected readonly getRequestingPrompt(): java.lang.String
      protected readonly getRequestingScheme(): java.lang.String
      protected getPasswordAuthentication(): java.net.PasswordAuthentication
      protected getRequestingURL(): java.net.URL
      protected getRequestorType(): java.net.Authenticator$RequestorType
      static getKey(arg0: java.net.Authenticator): java.lang.String
    }

  }
}
