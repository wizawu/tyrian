declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
                interface SharedClassURLClasspathHelper extends com.ibm.oti.shared.SharedClassHelper {
                    findSharedClass(arg0: java.lang.String | string, arg1: com.ibm.oti.shared.SharedClassURLClasspathHelper$IndexHolder | com.ibm.oti.shared.SharedClassURLClasspathHelper$IndexHolder$$Lambda): byte[]
                    findSharedClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.ibm.oti.shared.SharedClassURLClasspathHelper$IndexHolder | com.ibm.oti.shared.SharedClassURLClasspathHelper$IndexHolder$$Lambda): byte[]
                    storeSharedClass(arg0: java.lang.Class<any>, arg1: int): boolean
                    storeSharedClass(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: int): boolean
                    addClasspathEntry(arg0: java.net.URL): void
                    setClasspath(arg0: java.net.URL[]): void
                    confirmAllEntries(): void
                }
            }
        }
    }
}