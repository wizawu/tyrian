declare namespace java {
    namespace util {
        class StringTokenizer implements java.util.Enumeration<java.lang.Object> {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string)
            public hasMoreTokens(): boolean
            public nextToken(): string
            public nextToken(arg0: java.lang.String | string): string
            public hasMoreElements(): boolean
            public nextElement(): java.lang.Object
            public countTokens(): int
            public static class: java.lang.Class<any>
        }
    }
}