declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
                class SharedClassHelperFactoryImpl extends com.ibm.oti.shared.SharedAbstractHelperFactory implements com.ibm.oti.shared.SharedClassHelperFactory {
                    public findHelperForClassLoader(arg0: java.lang.ClassLoader): com.ibm.oti.shared.SharedClassHelper
                    public getTokenHelper(arg0: java.lang.ClassLoader, arg1: com.ibm.oti.shared.SharedClassFilter): com.ibm.oti.shared.SharedClassTokenHelper
                    public getTokenHelper(arg0: java.lang.ClassLoader): com.ibm.oti.shared.SharedClassTokenHelper
                    public getURLHelper(arg0: java.lang.ClassLoader, arg1: com.ibm.oti.shared.SharedClassFilter): com.ibm.oti.shared.SharedClassURLHelper
                    public getURLHelper(arg0: java.lang.ClassLoader): com.ibm.oti.shared.SharedClassURLHelper
                    public getURLClasspathHelper(arg0: java.lang.ClassLoader, arg1: java.net.URL[], arg2: com.ibm.oti.shared.SharedClassFilter): com.ibm.oti.shared.SharedClassURLClasspathHelper
                    public getURLClasspathHelper(arg0: java.lang.ClassLoader, arg1: java.net.URL[]): com.ibm.oti.shared.SharedClassURLClasspathHelper
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}