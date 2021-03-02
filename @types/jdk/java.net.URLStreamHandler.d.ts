declare namespace java {
  namespace net {

    abstract class URLStreamHandler {
      public constructor()
      protected abstract openConnection(arg0: java.net.URL): java.net.URLConnection
      protected openConnection(arg0: java.net.URL, arg1: java.net.Proxy): java.net.URLConnection
      protected parseURL(arg0: java.net.URL, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      protected getDefaultPort(): number
      protected equals(arg0: java.net.URL, arg1: java.net.URL): boolean
      protected hashCode(arg0: java.net.URL): number
      protected sameFile(arg0: java.net.URL, arg1: java.net.URL): boolean
      protected getHostAddress(arg0: java.net.URL): java.net.InetAddress
      protected hostsEqual(arg0: java.net.URL, arg1: java.net.URL): boolean
      protected toExternalForm(arg0: java.net.URL): java.lang.String
      protected setURL(arg0: java.net.URL, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: java.lang.String | string, arg8: java.lang.String | string): void
      protected setURL(arg0: java.net.URL, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: java.lang.String | string, arg5: java.lang.String | string): void
    }

  }
}
