declare namespace java {
    namespace net {
abstract class URLStreamHandler {
    public constructor()
    protected openConnection(arg0: java.net.URL): java.net.URLConnection
    protected openConnection(arg0: java.net.URL, arg1: java.net.Proxy): java.net.URLConnection
    protected parseURL(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: int): void
    protected getDefaultPort(): int
    protected equals(arg0: java.net.URL, arg1: java.net.URL): boolean
    protected hashCode(arg0: java.net.URL): int
    protected sameFile(arg0: java.net.URL, arg1: java.net.URL): boolean
    protected getHostAddress(arg0: java.net.URL): java.net.InetAddress
    protected hostsEqual(arg0: java.net.URL, arg1: java.net.URL): boolean
    protected toExternalForm(arg0: java.net.URL): string
    protected setURL(arg0: java.net.URL, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: java.lang.String | string, arg8: java.lang.String | string): void
    protected setURL(arg0: java.net.URL, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String | string, arg5: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

    }
}