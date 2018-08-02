declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace utils {
                            class SecuritySupport {
                                public static getInstance(): com.sun.org.apache.xerces.internal.utils.SecuritySupport
                                public static getSystemProperty(arg0: java.lang.String | string): string
                                public static getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
                                public static getResourceAsStream(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.io.InputStream
                                public static getResourceBundle(arg0: java.lang.String | string): java.util.ResourceBundle
                                public static getResourceBundle(arg0: java.lang.String | string, arg1: java.util.Locale): java.util.ResourceBundle
                                public static sanitizePath(arg0: java.lang.String | string): string
                                public static checkAccess(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
                                public static getJAXPSystemProperty(arg0: java.lang.String | string): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}