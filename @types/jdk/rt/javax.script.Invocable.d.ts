declare namespace javax {
    namespace script {
        interface Invocable {
            invokeMethod(arg0: java.lang.Object, arg1: java.lang.String | string, ...arg2: java.lang.Object[]): java.lang.Object
            invokeFunction(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): java.lang.Object
            getInterface<T>(arg0: java.lang.Class<T>): T
            getInterface<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
        }
    }
}