declare namespace sun {
    namespace rmi {
        namespace server {
            interface DeserializationChecker {
                check(arg0: java.lang.reflect.Method, arg1: java.io.ObjectStreamClass, arg2: int, arg3: int): void
                checkProxyClass(arg0: java.lang.reflect.Method, arg1: java.lang.String[], arg2: int, arg3: int): void
                end(arg0: int): void
            }
        }
    }
}