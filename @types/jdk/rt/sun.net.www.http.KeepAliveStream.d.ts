declare namespace sun {
    namespace net {
        namespace www {
            namespace http {
                class KeepAliveStream extends sun.net.www.MeteredStream implements sun.net.www.http.Hurryable {
                    protected queuedForCleanup: boolean
                    public constructor(arg0: java.io.InputStream, arg1: sun.net.ProgressSource, arg2: long, arg3: sun.net.www.http.HttpClient)
                    public close(): void
                    public markSupported(): boolean
                    public mark(arg0: int): void
                    public reset(): void
                    public hurry(): boolean
                    protected remainingToRead(): long
                    protected setClosed(): void
                    public static class: java.lang.Class<any>
                }
                class KeepAliveStream$$Lambda extends sun.net.www.MeteredStream implements sun.net.www.http.Hurryable {
                    protected queuedForCleanup: boolean
                }
            }
        }
    }
}