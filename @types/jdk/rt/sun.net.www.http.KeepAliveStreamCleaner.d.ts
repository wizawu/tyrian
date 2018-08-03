declare namespace sun {
    namespace net {
        namespace www {
            namespace http {
                class KeepAliveStreamCleaner extends java.util.LinkedList<sun.net.www.http.KeepAliveCleanerEntry> implements java.lang.Runnable {
                    protected static MAX_DATA_REMAINING: int
                    protected static MAX_CAPACITY: int
                    protected static TIMEOUT: int
                    public offer(arg0: sun.net.www.http.KeepAliveCleanerEntry): boolean
                    public run(): void
                    public offer(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}