declare namespace javax {
    namespace xml {
        namespace soap {
            class MimeHeaders {
                public constructor()
                public getHeader(arg0: java.lang.String | string): java.lang.String[]
                public setHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public addHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public removeHeader(arg0: java.lang.String | string): void
                public removeAllHeaders(): void
                public getAllHeaders(): java.util.Iterator
                public getMatchingHeaders(arg0: java.lang.String[]): java.util.Iterator
                public getNonMatchingHeaders(arg0: java.lang.String[]): java.util.Iterator
                public static class: java.lang.Class<any>
            }
        }
    }
}