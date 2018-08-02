declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace file {
class Handler extends java.net.URLStreamHandler {
    public constructor()
    protected parseURL(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: int): void
    public openConnection(arg0: java.net.URL): java.net.URLConnection
    public openConnection(arg0: java.net.URL, arg1: java.net.Proxy): java.net.URLConnection
    protected createFileURLConnection(arg0: java.net.URL, arg1: java.io.File): java.net.URLConnection
    protected hostsEqual(arg0: java.net.URL, arg1: java.net.URL): boolean
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}