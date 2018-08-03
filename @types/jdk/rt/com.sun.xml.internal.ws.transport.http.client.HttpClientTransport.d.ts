declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            namespace client {
                                class HttpClientTransport {
                                    public constructor(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
                                    public getHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                                    protected readResponse(): java.io.InputStream
                                    protected readResponseCodeAndMessage(): void
                                    protected openConnection(arg0: com.sun.xml.internal.ws.api.message.Packet): java.net.HttpURLConnection
                                    protected checkHTTPS(arg0: java.net.HttpURLConnection): boolean
                                    protected setStatusCode(arg0: int): void
                                    public getContentLength(): int
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}