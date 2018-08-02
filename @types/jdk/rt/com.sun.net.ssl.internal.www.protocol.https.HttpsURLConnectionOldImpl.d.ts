declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                namespace internal {
                    namespace www {
                        namespace protocol {
                            namespace https {
class HttpsURLConnectionOldImpl extends com.sun.net.ssl.HttpsURLConnection {
    protected setNewClient(arg0: java.net.URL): void
    protected setNewClient(arg0: java.net.URL, arg1: boolean): void
    protected setProxiedClient(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int): void
    protected setProxiedClient(arg0: java.net.URL, arg1: java.lang.String | string, arg2: int, arg3: boolean): void
    public connect(): void
    protected isConnected(): boolean
    protected setConnected(arg0: boolean): void
    public getCipherSuite(): string
    public getLocalCertificates(): java.security.cert.Certificate[]
    public getServerCertificates(): java.security.cert.Certificate[]
    public getServerCertificateChain(): javax.security.cert.X509Certificate[]
    public getOutputStream(): java.io.OutputStream
    public getInputStream(): java.io.InputStream
    public getErrorStream(): java.io.InputStream
    public disconnect(): void
    public usingProxy(): boolean
    public getHeaderFields(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public getHeaderField(arg0: java.lang.String | string): string
    public getHeaderField(arg0: int): string
    public getHeaderFieldKey(arg0: int): string
    public setRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public addRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getResponseCode(): int
    public getRequestProperty(arg0: java.lang.String | string): string
    public getRequestProperties(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public setInstanceFollowRedirects(arg0: boolean): void
    public getInstanceFollowRedirects(): boolean
    public setRequestMethod(arg0: java.lang.String | string): void
    public getRequestMethod(): string
    public getResponseMessage(): string
    public getHeaderFieldDate(arg0: java.lang.String | string, arg1: long): long
    public getPermission(): java.security.Permission
    public getURL(): java.net.URL
    public getContentLength(): int
    public getContentLengthLong(): long
    public getContentType(): string
    public getContentEncoding(): string
    public getExpiration(): long
    public getDate(): long
    public getLastModified(): long
    public getHeaderFieldInt(arg0: java.lang.String | string, arg1: int): int
    public getHeaderFieldLong(arg0: java.lang.String | string, arg1: long): long
    public getContent(): java.lang.Object
    public getContent(arg0: java.lang.Class[]): java.lang.Object
    public toString(): string
    public setDoInput(arg0: boolean): void
    public getDoInput(): boolean
    public setDoOutput(arg0: boolean): void
    public getDoOutput(): boolean
    public setAllowUserInteraction(arg0: boolean): void
    public getAllowUserInteraction(): boolean
    public setUseCaches(arg0: boolean): void
    public getUseCaches(): boolean
    public setIfModifiedSince(arg0: long): void
    public getIfModifiedSince(): long
    public getDefaultUseCaches(): boolean
    public setDefaultUseCaches(arg0: boolean): void
    protected finalize(): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public setConnectTimeout(arg0: int): void
    public getConnectTimeout(): int
    public setReadTimeout(arg0: int): void
    public getReadTimeout(): int
    public setFixedLengthStreamingMode(arg0: int): void
    public setFixedLengthStreamingMode(arg0: long): void
    public setChunkedStreamingMode(arg0: int): void
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}