declare namespace sun {
    namespace net {
        namespace www {
            namespace http {
                class HttpCapture {
                    public sent(arg0: int): void
                    public received(arg0: int): void
                    public flush(): void
                    public static getCapture(arg0: java.net.URL): sun.net.www.http.HttpCapture
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}