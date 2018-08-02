declare namespace com {
    namespace sun {
        namespace naming {
            namespace internal {
                abstract class VersionHelper {
                    public static INITIAL_CONTEXT_FACTORY: int
                    public static OBJECT_FACTORIES: int
                    public static URL_PKG_PREFIXES: int
                    public static STATE_FACTORIES: int
                    public static PROVIDER_URL: int
                    public static DNS_URL: int
                    public static CONTROL_FACTORIES: int
                    public static getVersionHelper(): com.sun.naming.internal.VersionHelper
                    public loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                    public loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Class<any>
                    protected static getUrlArray(arg0: java.lang.String | string): java.net.URL[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}