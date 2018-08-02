declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
                class SharedClassURLClasspathHelperImpl extends com.ibm.oti.shared.SharedClassAbstractHelper implements com.ibm.oti.shared.SharedClassURLClasspathHelper {
                    public findSharedClass(arg0: java.lang.String | string, arg1: com.ibm.oti.shared.SharedClassURLClasspathHelper$IndexHolder | com.ibm.oti.shared.SharedClassURLClasspathHelper$IndexHolder$$Lambda): byte[]
                    public findSharedClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.ibm.oti.shared.SharedClassURLClasspathHelper$IndexHolder | com.ibm.oti.shared.SharedClassURLClasspathHelper$IndexHolder$$Lambda): byte[]
                    public storeSharedClass(arg0: java.lang.Class<any>, arg1: int): boolean
                    public storeSharedClass(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: int): boolean
                    public addClasspathEntry(arg0: java.net.URL): void
                    public confirmAllEntries(): void
                    public setClasspath(arg0: java.net.URL[]): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}