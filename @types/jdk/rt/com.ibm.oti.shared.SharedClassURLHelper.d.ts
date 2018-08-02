declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
interface SharedClassURLHelper extends com.ibm.oti.shared.SharedClassHelper {
    findSharedClass(arg0: java.net.URL, arg1: java.lang.String | string): byte[]
    findSharedClass(arg0: java.lang.String | string, arg1: java.net.URL, arg2: java.lang.String | string): byte[]
    storeSharedClass(arg0: java.net.URL, arg1: java.lang.Class<any>): boolean
    storeSharedClass(arg0: java.lang.String | string, arg1: java.net.URL, arg2: java.lang.Class<any>): boolean
    setMinimizeUpdateChecks(): boolean
}

            }
        }
    }
}