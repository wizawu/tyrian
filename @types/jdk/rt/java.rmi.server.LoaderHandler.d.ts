declare namespace java {
    namespace rmi {
        namespace server {
            interface LoaderHandler {
                packagePrefix: string
                loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                loadClass(arg0: java.net.URL, arg1: java.lang.String | string): java.lang.Class<any>
                getSecurityContext(arg0: java.lang.ClassLoader): java.lang.Object
            }
        }
    }
}