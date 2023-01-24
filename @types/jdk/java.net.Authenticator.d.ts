declare namespace java {
  namespace net {
    abstract class Authenticator {
      public constructor()
      public static setDefault(arg0: java.net.Authenticator): void
      public static getDefault(): java.net.Authenticator
      public static requestPasswordAuthentication(
        arg0: java.net.InetAddress,
        arg1: number | java.lang.Integer,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string,
        arg4: java.lang.String | string
      ): java.net.PasswordAuthentication
      public static requestPasswordAuthentication(
        arg0: java.lang.String | string,
        arg1: java.net.InetAddress,
        arg2: number | java.lang.Integer,
        arg3: java.lang.String | string,
        arg4: java.lang.String | string,
        arg5: java.lang.String | string
      ): java.net.PasswordAuthentication
      public static requestPasswordAuthentication(
        arg0: java.lang.String | string,
        arg1: java.net.InetAddress,
        arg2: number | java.lang.Integer,
        arg3: java.lang.String | string,
        arg4: java.lang.String | string,
        arg5: java.lang.String | string,
        arg6: java.net.URL,
        arg7: java.net.Authenticator$RequestorType
      ): java.net.PasswordAuthentication
      public static requestPasswordAuthentication(
        arg0: java.net.Authenticator,
        arg1: java.lang.String | string,
        arg2: java.net.InetAddress,
        arg3: number | java.lang.Integer,
        arg4: java.lang.String | string,
        arg5: java.lang.String | string,
        arg6: java.lang.String | string,
        arg7: java.net.URL,
        arg8: java.net.Authenticator$RequestorType
      ): java.net.PasswordAuthentication
      public requestPasswordAuthenticationInstance(
        arg0: java.lang.String | string,
        arg1: java.net.InetAddress,
        arg2: number | java.lang.Integer,
        arg3: java.lang.String | string,
        arg4: java.lang.String | string,
        arg5: java.lang.String | string,
        arg6: java.net.URL,
        arg7: java.net.Authenticator$RequestorType
      ): java.net.PasswordAuthentication
      protected getRequestingHost(): java.lang.String
      protected getRequestingSite(): java.net.InetAddress
      protected getRequestingPort(): number
      protected getRequestingProtocol(): java.lang.String
      protected getRequestingPrompt(): java.lang.String
      protected getRequestingScheme(): java.lang.String
      protected getPasswordAuthentication(): java.net.PasswordAuthentication
      protected getRequestingURL(): java.net.URL
      protected getRequestorType(): java.net.Authenticator$RequestorType
      static getKey(arg0: java.net.Authenticator): java.lang.String
    }
  }
}
