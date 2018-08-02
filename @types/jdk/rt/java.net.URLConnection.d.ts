declare namespace java {
    namespace net {
        abstract class URLConnection {
            protected url: java.net.URL
            protected doInput: boolean
            protected doOutput: boolean
            protected allowUserInteraction: boolean
            protected useCaches: boolean
            protected ifModifiedSince: long
            protected connected: boolean
            public static getFileNameMap(): java.net.FileNameMap
            public static setFileNameMap(arg0: java.net.FileNameMap | java.net.FileNameMap$$Lambda): void
            public connect(): void
            public setConnectTimeout(arg0: int): void
            public getConnectTimeout(): int
            public setReadTimeout(arg0: int): void
            public getReadTimeout(): int
            protected constructor(arg0: java.net.URL)
            public getURL(): java.net.URL
            public getContentLength(): int
            public getContentLengthLong(): long
            public getContentType(): string
            public getContentEncoding(): string
            public getExpiration(): long
            public getDate(): long
            public getLastModified(): long
            public getHeaderField(arg0: java.lang.String | string): string
            public getHeaderFields(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
            public getHeaderFieldInt(arg0: java.lang.String | string, arg1: int): int
            public getHeaderFieldLong(arg0: java.lang.String | string, arg1: long): long
            public getHeaderFieldDate(arg0: java.lang.String | string, arg1: long): long
            public getHeaderFieldKey(arg0: int): string
            public getHeaderField(arg0: int): string
            public getContent(): java.lang.Object
            public getContent(arg0: java.lang.Class[]): java.lang.Object
            public getPermission(): java.security.Permission
            public getInputStream(): java.io.InputStream
            public getOutputStream(): java.io.OutputStream
            public toString(): string
            public setDoInput(arg0: boolean): void
            public getDoInput(): boolean
            public setDoOutput(arg0: boolean): void
            public getDoOutput(): boolean
            public setAllowUserInteraction(arg0: boolean): void
            public getAllowUserInteraction(): boolean
            public static setDefaultAllowUserInteraction(arg0: boolean): void
            public static getDefaultAllowUserInteraction(): boolean
            public setUseCaches(arg0: boolean): void
            public getUseCaches(): boolean
            public setIfModifiedSince(arg0: long): void
            public getIfModifiedSince(): long
            public getDefaultUseCaches(): boolean
            public setDefaultUseCaches(arg0: boolean): void
            public setRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public addRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public getRequestProperty(arg0: java.lang.String | string): string
            public getRequestProperties(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
            public static setDefaultRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public static getDefaultRequestProperty(arg0: java.lang.String | string): string
            public static setContentHandlerFactory(arg0: java.net.ContentHandlerFactory | java.net.ContentHandlerFactory$$Lambda): void
            public static guessContentTypeFromName(arg0: java.lang.String | string): string
            public static guessContentTypeFromStream(arg0: java.io.InputStream): string
            public static class: java.lang.Class<any>
        }
    }
}