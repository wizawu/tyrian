declare namespace com {
    namespace sun {
        namespace beans {
            namespace finder {
                class MethodFinder extends com.sun.beans.finder.AbstractFinder<java.lang.reflect.Method> {
                    public static findMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, ...arg2: java.lang.Class<any>[]): java.lang.reflect.Method
                    public static findInstanceMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, ...arg2: java.lang.Class<any>[]): java.lang.reflect.Method
                    public static findStaticMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, ...arg2: java.lang.Class<any>[]): java.lang.reflect.Method
                    public static findAccessibleMethod(arg0: java.lang.reflect.Method): java.lang.reflect.Method
                    protected isValid(arg0: java.lang.reflect.Method): boolean
                    protected isValid(arg0: java.lang.reflect.Executable): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}