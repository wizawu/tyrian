declare namespace com {
    namespace ibm {
        namespace oti {
            namespace util {
                class PriviAction implements java.security.PrivilegedAction {
                    public static getSecurityProperty(arg0: java.lang.String | string): java.security.PrivilegedAction
                    public static loadMessages(arg0: java.lang.String | string): java.security.PrivilegedAction
                    public constructor()
                    public constructor(arg0: java.lang.reflect.AccessibleObject)
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: java.util.Locale)
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PriviAction$$Lambda implements java.security.PrivilegedAction {
                    public static (arg0: java.lang.String | string): java.security.PrivilegedAction
                }
            }
        }
    }
}