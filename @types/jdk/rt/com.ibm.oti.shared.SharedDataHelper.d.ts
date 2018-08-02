declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
                interface SharedDataHelper extends com.ibm.oti.shared.SharedHelper {
                    findSharedData(arg0: java.lang.String | string): java.nio.ByteBuffer
                    storeSharedData(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer): java.nio.ByteBuffer
                }
            }
        }
    }
}