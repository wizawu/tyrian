declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace jar {
class JarURLConnection extends java.net.JarURLConnection {
    public constructor(arg0: java.net.URL, arg1: sun.net.www.protocol.jar.Handler)
    public getJarFile(): java.util.jar.JarFile
    public getJarEntry(): java.util.jar.JarEntry
    public getPermission(): java.security.Permission
    public connect(): void
    public getInputStream(): java.io.InputStream
    public getContentLength(): int
    public getContentLengthLong(): long
    public getContent(): java.lang.Object
    public getContentType(): string
    public getHeaderField(arg0: java.lang.String | string): string
    public setRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getRequestProperty(arg0: java.lang.String | string): string
    public addRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getRequestProperties(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public setAllowUserInteraction(arg0: boolean): void
    public getAllowUserInteraction(): boolean
    public setUseCaches(arg0: boolean): void
    public getUseCaches(): boolean
    public setIfModifiedSince(arg0: long): void
    public setDefaultUseCaches(arg0: boolean): void
    public getDefaultUseCaches(): boolean
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}