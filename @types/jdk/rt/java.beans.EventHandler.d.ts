declare namespace java {
    namespace beans {
class EventHandler implements java.lang.reflect.InvocationHandler {
    public constructor(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
    public getTarget(): java.lang.Object
    public getAction(): string
    public getEventPropertyName(): string
    public getListenerMethodName(): string
    public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
    public static create<T>(arg0: java.lang.Class<T>, arg1: java.lang.Object, arg2: java.lang.String | string): T
    public static create<T>(arg0: java.lang.Class<T>, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: java.lang.String | string): T
    public static create<T>(arg0: java.lang.Class<T>, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): T
    public static class: java.lang.Class<any>
}

class EventHandler$$Lambda implements java.lang.reflect.InvocationHandler {
    public constructor(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
}

    }
}