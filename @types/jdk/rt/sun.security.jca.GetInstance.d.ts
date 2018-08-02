declare namespace sun {
    namespace security {
        namespace jca {
            class GetInstance {
                public static getService(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.Provider$Service
                public static getService(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.security.Provider$Service
                public static getService(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.Provider): java.security.Provider$Service
                public static getServices(arg0: java.lang.String | string, arg1: java.lang.String | string): java.util.List<java.security.Provider$Service>
                public static getServices(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): java.util.List<java.security.Provider$Service>
                public static getServices(arg0: java.util.List<sun.security.jca.ServiceId>): java.util.List<java.security.Provider$Service>
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: java.lang.String | string): sun.security.jca.GetInstance$Instance
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Object): sun.security.jca.GetInstance$Instance
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.String | string): sun.security.jca.GetInstance$Instance
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Object, arg4: java.lang.String | string): sun.security.jca.GetInstance$Instance
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.security.Provider): sun.security.jca.GetInstance$Instance
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Object, arg4: java.security.Provider): sun.security.jca.GetInstance$Instance
                public static getInstance(arg0: java.security.Provider$Service, arg1: java.lang.Class<any>): sun.security.jca.GetInstance$Instance
                public static getInstance(arg0: java.security.Provider$Service, arg1: java.lang.Class<any>, arg2: java.lang.Object): sun.security.jca.GetInstance$Instance
                public static checkSuperClass(arg0: java.security.Provider$Service, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): void
                public static class: java.lang.Class<any>
            }
        }
    }
}