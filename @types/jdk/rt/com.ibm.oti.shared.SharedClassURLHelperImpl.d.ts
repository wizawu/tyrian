declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
                class SharedClassURLHelperImpl extends com.ibm.oti.shared.SharedClassAbstractHelper implements com.ibm.oti.shared.SharedClassURLHelper {
                    public static readonly MINIMIZE_ENABLED: boolean
                    public setMinimizeUpdateChecks(): boolean
                    public findSharedClass(arg0: java.net.URL, arg1: java.lang.String | string): byte[]
                    public findSharedClass(arg0: java.lang.String | string, arg1: java.net.URL, arg2: java.lang.String | string): byte[]
                    public storeSharedClass(arg0: java.net.URL, arg1: java.lang.Class<any>): boolean
                    public storeSharedClass(arg0: java.lang.String | string, arg1: java.net.URL, arg2: java.lang.Class<any>): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}