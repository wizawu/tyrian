declare namespace com {
    namespace sun {
        namespace naming {
            namespace internal {
                abstract class VersionHelper {
                    public static readonly INITIAL_CONTEXT_FACTORY: int
                    public static readonly OBJECT_FACTORIES: int
                    public static readonly URL_PKG_PREFIXES: int
                    public static readonly STATE_FACTORIES: int
                    public static readonly PROVIDER_URL: int
                    public static readonly DNS_URL: int
                    public static readonly CONTROL_FACTORIES: int
                    public static getVersionHelper(): com.sun.naming.internal.VersionHelper
                    public abstract loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                    public abstract loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Class<any>
                    protected static getUrlArray(arg0: java.lang.String | string): java.net.URL[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}