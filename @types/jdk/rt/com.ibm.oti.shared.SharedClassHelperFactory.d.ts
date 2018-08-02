declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
interface SharedClassHelperFactory {
    getTokenHelper(arg0: java.lang.ClassLoader): com.ibm.oti.shared.SharedClassTokenHelper
    getTokenHelper(arg0: java.lang.ClassLoader, arg1: com.ibm.oti.shared.SharedClassFilter): com.ibm.oti.shared.SharedClassTokenHelper
    getURLHelper(arg0: java.lang.ClassLoader): com.ibm.oti.shared.SharedClassURLHelper
    getURLClasspathHelper(arg0: java.lang.ClassLoader, arg1: java.net.URL[]): com.ibm.oti.shared.SharedClassURLClasspathHelper
    getURLClasspathHelper(arg0: java.lang.ClassLoader, arg1: java.net.URL[], arg2: com.ibm.oti.shared.SharedClassFilter): com.ibm.oti.shared.SharedClassURLClasspathHelper
    getURLHelper(arg0: java.lang.ClassLoader, arg1: com.ibm.oti.shared.SharedClassFilter): com.ibm.oti.shared.SharedClassURLHelper
    findHelperForClassLoader(arg0: java.lang.ClassLoader): com.ibm.oti.shared.SharedClassHelper
}

            }
        }
    }
}