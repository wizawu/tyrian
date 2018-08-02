declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class Source implements jdk.nashorn.internal.runtime.logging.Loggable {
                    public static sourceFor(arg0: java.lang.String | string, arg1: char[], arg2: boolean): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: java.lang.String | string, arg1: char[]): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: java.lang.String | string, arg1: java.lang.String | string): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: java.lang.String | string, arg1: java.net.URL): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: java.lang.String | string, arg1: java.net.URL, arg2: java.nio.charset.Charset): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: java.lang.String | string, arg1: java.io.File): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: java.lang.String | string, arg1: java.io.File, arg2: java.nio.charset.Charset): jdk.nashorn.internal.runtime.Source
                    public static sourceFor(arg0: java.lang.String | string, arg1: java.io.Reader): jdk.nashorn.internal.runtime.Source
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getString(): string
                    public getName(): string
                    public getLastModified(): long
                    public getBase(): string
                    public getString(arg0: int, arg1: int): string
                    public getString(arg0: long): string
                    public getURL(): java.net.URL
                    public getExplicitURL(): string
                    public setExplicitURL(arg0: java.lang.String | string): void
                    public isEvalCode(): boolean
                    public getLine(arg0: int): int
                    public getColumn(arg0: int): int
                    public getSourceLine(arg0: int): string
                    public getContent(): char[]
                    public getLength(): int
                    public static readFully(arg0: java.io.Reader): char[]
                    public static readFully(arg0: java.io.File): char[]
                    public static readFully(arg0: java.io.File, arg1: java.nio.charset.Charset): char[]
                    public static readFully(arg0: java.net.URL): char[]
                    public static readFully(arg0: java.net.URL, arg1: java.nio.charset.Charset): char[]
                    public getDigest(): string
                    public static baseURL(arg0: java.net.URL): string
                    public toString(): string
                    public initLogger(arg0: jdk.nashorn.internal.runtime.Context): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public getLogger(): jdk.nashorn.internal.runtime.logging.DebugLogger
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}