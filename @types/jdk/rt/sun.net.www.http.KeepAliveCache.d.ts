declare namespace sun {
    namespace net {
        namespace www {
            namespace http {
class KeepAliveCache extends java.util.HashMap<sun.net.www.http.KeepAliveKey, sun.net.www.http.ClientVector> implements java.lang.Runnable {
    public constructor()
    public put(arg0: java.net.URL, arg1: java.lang.Object, arg2: sun.net.www.http.HttpClient): void
    public remove(arg0: sun.net.www.http.HttpClient, arg1: java.lang.Object): void
    public get(arg0: java.net.URL, arg1: java.lang.Object): sun.net.www.http.HttpClient
    public run(): void
    public static class: java.lang.Class<any>
}

class KeepAliveCache$$Lambda extends java.util.HashMap<sun.net.www.http.KeepAliveKey, sun.net.www.http.ClientVector> implements java.lang.Runnable {
    public constructor()
}

            }
        }
    }
}