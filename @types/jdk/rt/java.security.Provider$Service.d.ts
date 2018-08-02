declare namespace java {
    namespace security {
        class Provider$Service {
            public constructor(arg0: java.security.Provider, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.List<java.lang.String>, arg5: java.util.Map<java.lang.String, java.lang.String>)
            public getType(): string
            public getAlgorithm(): string
            public getProvider(): java.security.Provider
            public getClassName(): string
            public getAttribute(arg0: java.lang.String | string): string
            public newInstance(arg0: java.lang.Object): java.lang.Object
            public supportsParameter(arg0: java.lang.Object): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}