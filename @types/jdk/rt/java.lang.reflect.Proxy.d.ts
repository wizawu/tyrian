declare namespace java {
    namespace lang {
        namespace reflect {
class Proxy implements java.io.Serializable {
    protected h: java.lang.reflect.InvocationHandler
    protected constructor(arg0: java.lang.reflect.InvocationHandler | java.lang.reflect.InvocationHandler$$Lambda)
    public static getProxyClass(arg0: java.lang.ClassLoader, ...arg1: java.lang.Class<any>[]): java.lang.Class<any>
    public static newProxyInstance(arg0: java.lang.ClassLoader, arg1: java.lang.Class<any>[], arg2: java.lang.reflect.InvocationHandler | java.lang.reflect.InvocationHandler$$Lambda): java.lang.Object
    public static isProxyClass(arg0: java.lang.Class<any>): boolean
    public static getInvocationHandler(arg0: java.lang.Object): java.lang.reflect.InvocationHandler
    public static class: java.lang.Class<any>
}

        }
    }
}