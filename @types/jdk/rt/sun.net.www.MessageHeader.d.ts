declare namespace sun {
    namespace net {
        namespace www {
            class MessageHeader {
                public constructor()
                public constructor(arg0: java.io.InputStream)
                public getHeaderNamesInList(): string
                public reset(): void
                public findValue(arg0: java.lang.String | string): string
                public getKey(arg0: java.lang.String | string): int
                public getKey(arg0: int): string
                public getValue(arg0: int): string
                public findNextValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                public filterNTLMResponses(arg0: java.lang.String | string): boolean
                public multiValueIterator(arg0: java.lang.String | string): java.util.Iterator<java.lang.String>
                public getHeaders(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                public getHeaders(arg0: java.lang.String[]): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                public filterAndAddHeaders(arg0: java.lang.String[], arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                public print(arg0: java.io.PrintStream): void
                public add(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public prepend(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public set(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                public remove(arg0: java.lang.String | string): void
                public set(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public setIfNotSet(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public static canonicalID(arg0: java.lang.String | string): string
                public parseHeader(arg0: java.io.InputStream): void
                public mergeHeader(arg0: java.io.InputStream): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}