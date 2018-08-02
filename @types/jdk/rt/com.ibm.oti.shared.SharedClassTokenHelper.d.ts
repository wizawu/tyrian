declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
                interface SharedClassTokenHelper extends com.ibm.oti.shared.SharedClassHelper {
                    findSharedClass(arg0: java.lang.String | string, arg1: java.lang.String | string): byte[]
                    storeSharedClass(arg0: java.lang.String | string, arg1: java.lang.Class<any>): boolean
                }
            }
        }
    }
}