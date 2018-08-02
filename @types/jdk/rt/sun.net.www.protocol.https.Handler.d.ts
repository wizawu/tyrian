declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace https {
class Handler extends sun.net.www.protocol.http.Handler {
    protected proxy: string
    protected proxyPort: int
    protected getDefaultPort(): int
    public constructor()
    public constructor(arg0: java.lang.String | string, arg1: int)
    protected openConnection(arg0: java.net.URL): java.net.URLConnection
    protected openConnection(arg0: java.net.URL, arg1: java.net.Proxy): java.net.URLConnection
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}