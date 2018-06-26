declare namespace com {
    namespace sun {
        namespace net {
            namespace httpserver {
                abstract class Authenticator {
                    public constructor()
                    public authenticate(arg0: com.sun.net.httpserver.HttpExchange): com.sun.net.httpserver.Authenticator$Result
                    public static class: java.lang.Class<any>
                }
                abstract class BasicAuthenticator extends com.sun.net.httpserver.Authenticator {
                    protected realm: string
                    public constructor(arg0: java.lang.String | string)
                    public getRealm(): string
                    public authenticate(arg0: com.sun.net.httpserver.HttpExchange): com.sun.net.httpserver.Authenticator$Result
                    public checkCredentials(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                    public static class: java.lang.Class<any>
                }
                abstract class Filter {
                    protected constructor()
                    public doFilter(arg0: com.sun.net.httpserver.HttpExchange, arg1: com.sun.net.httpserver.Filter$Chain): void
                    public description(): string
                    public static class: java.lang.Class<any>
                }
                class Headers implements java.util.Map<java.lang.String, java.util.List<java.lang.String>> {
                    public constructor()
                    public size(): int
                    public isEmpty(): boolean
                    public containsKey(arg0: java.lang.Object): boolean
                    public containsValue(arg0: java.lang.Object): boolean
                    public get(arg0: java.lang.Object): java.util.List<java.lang.String>
                    public getFirst(arg0: java.lang.String | string): string
                    public put(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): java.util.List<java.lang.String>
                    public add(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                    public set(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                    public remove(arg0: java.lang.Object): java.util.List<java.lang.String>
                    public putAll(arg0: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
                    public clear(): void
                    public keySet(): java.util.Set<java.lang.String>
                    public values(): java.util.Collection<java.util.List<java.lang.String>>
                    public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, java.util.List<java.lang.String>>>
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public remove(arg0: java.lang.Object): java.lang.Object
                    public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                    public get(arg0: java.lang.Object): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                abstract class HttpContext {
                    protected constructor()
                    public getHandler(): com.sun.net.httpserver.HttpHandler
                    public setHandler(arg0: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): void
                    public getPath(): string
                    public getServer(): com.sun.net.httpserver.HttpServer
                    public getAttributes(): java.util.Map<java.lang.String, java.lang.Object>
                    public getFilters(): java.util.List<com.sun.net.httpserver.Filter>
                    public setAuthenticator(arg0: com.sun.net.httpserver.Authenticator): com.sun.net.httpserver.Authenticator
                    public getAuthenticator(): com.sun.net.httpserver.Authenticator
                    public static class: java.lang.Class<any>
                }
                abstract class HttpExchange {
                    protected constructor()
                    public getRequestHeaders(): com.sun.net.httpserver.Headers
                    public getResponseHeaders(): com.sun.net.httpserver.Headers
                    public getRequestURI(): java.net.URI
                    public getRequestMethod(): string
                    public getHttpContext(): com.sun.net.httpserver.HttpContext
                    public close(): void
                    public getRequestBody(): java.io.InputStream
                    public getResponseBody(): java.io.OutputStream
                    public sendResponseHeaders(arg0: int, arg1: long): void
                    public getRemoteAddress(): java.net.InetSocketAddress
                    public getResponseCode(): int
                    public getLocalAddress(): java.net.InetSocketAddress
                    public getProtocol(): string
                    public getAttribute(arg0: java.lang.String | string): java.lang.Object
                    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public setStreams(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public getPrincipal(): com.sun.net.httpserver.HttpPrincipal
                    public static class: java.lang.Class<any>
                }
                interface HttpHandler {
                    handle(arg0: com.sun.net.httpserver.HttpExchange): void
                }
                interface HttpHandler$$Lambda {
                    (arg0: com.sun.net.httpserver.HttpExchange): void
                }
                class HttpPrincipal implements java.security.Principal {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                    public equals(arg0: java.lang.Object): boolean
                    public getName(): string
                    public getUsername(): string
                    public getRealm(): string
                    public hashCode(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                abstract class HttpServer {
                    protected constructor()
                    public static create(): com.sun.net.httpserver.HttpServer
                    public static create(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpServer
                    public bind(arg0: java.net.InetSocketAddress, arg1: int): void
                    public start(): void
                    public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                    public getExecutor(): java.util.concurrent.Executor
                    public stop(arg0: int): void
                    public createContext(arg0: java.lang.String | string, arg1: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): com.sun.net.httpserver.HttpContext
                    public createContext(arg0: java.lang.String | string): com.sun.net.httpserver.HttpContext
                    public removeContext(arg0: java.lang.String | string): void
                    public removeContext(arg0: com.sun.net.httpserver.HttpContext): void
                    public getAddress(): java.net.InetSocketAddress
                    public static class: java.lang.Class<any>
                }
                class HttpsConfigurator {
                    public constructor(arg0: javax.net.ssl.SSLContext)
                    public getSSLContext(): javax.net.ssl.SSLContext
                    public configure(arg0: com.sun.net.httpserver.HttpsParameters): void
                    public static class: java.lang.Class<any>
                }
                abstract class HttpsExchange extends com.sun.net.httpserver.HttpExchange {
                    protected constructor()
                    public getSSLSession(): javax.net.ssl.SSLSession
                    public static class: java.lang.Class<any>
                }
                abstract class HttpsParameters {
                    protected constructor()
                    public getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator
                    public getClientAddress(): java.net.InetSocketAddress
                    public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
                    public getCipherSuites(): java.lang.String[]
                    public setCipherSuites(arg0: java.lang.String[]): void
                    public getProtocols(): java.lang.String[]
                    public setProtocols(arg0: java.lang.String[]): void
                    public getWantClientAuth(): boolean
                    public setWantClientAuth(arg0: boolean): void
                    public getNeedClientAuth(): boolean
                    public setNeedClientAuth(arg0: boolean): void
                    public static class: java.lang.Class<any>
                }
                abstract class HttpsServer extends com.sun.net.httpserver.HttpServer {
                    protected constructor()
                    public static create(): com.sun.net.httpserver.HttpsServer
                    public static create(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpsServer
                    public setHttpsConfigurator(arg0: com.sun.net.httpserver.HttpsConfigurator): void
                    public getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator
                    public static class: java.lang.Class<any>
                }
                namespace spi {
                    abstract class HttpServerProvider {
                        public createHttpServer(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpServer
                        public createHttpsServer(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpsServer
                        protected constructor()
                        public static provider(): com.sun.net.httpserver.spi.HttpServerProvider
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
declare namespace sun {
    namespace net {
        namespace httpserver {
            class AuthFilter extends com.sun.net.httpserver.Filter {
                public constructor(arg0: com.sun.net.httpserver.Authenticator)
                public description(): string
                public setAuthenticator(arg0: com.sun.net.httpserver.Authenticator): void
                public consumeInput(arg0: com.sun.net.httpserver.HttpExchange): void
                public doFilter(arg0: com.sun.net.httpserver.HttpExchange, arg1: com.sun.net.httpserver.Filter$Chain): void
                public static class: java.lang.Class<any>
            }
            class ChunkedInputStream extends sun.net.httpserver.LeftOverInputStream {
                protected readImpl(arg0: byte[], arg1: int, arg2: int): int
                public available(): int
                public isDataBuffered(): boolean
                public markSupported(): boolean
                public mark(arg0: int): void
                public reset(): void
                public static class: java.lang.Class<any>
            }
            class ChunkedOutputStream extends java.io.FilterOutputStream {
                public write(arg0: int): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public close(): void
                public flush(): void
                public static class: java.lang.Class<any>
            }
            class Code {
                public static HTTP_CONTINUE: int
                public static HTTP_OK: int
                public static HTTP_CREATED: int
                public static HTTP_ACCEPTED: int
                public static HTTP_NOT_AUTHORITATIVE: int
                public static HTTP_NO_CONTENT: int
                public static HTTP_RESET: int
                public static HTTP_PARTIAL: int
                public static HTTP_MULT_CHOICE: int
                public static HTTP_MOVED_PERM: int
                public static HTTP_MOVED_TEMP: int
                public static HTTP_SEE_OTHER: int
                public static HTTP_NOT_MODIFIED: int
                public static HTTP_USE_PROXY: int
                public static HTTP_BAD_REQUEST: int
                public static HTTP_UNAUTHORIZED: int
                public static HTTP_PAYMENT_REQUIRED: int
                public static HTTP_FORBIDDEN: int
                public static HTTP_NOT_FOUND: int
                public static HTTP_BAD_METHOD: int
                public static HTTP_NOT_ACCEPTABLE: int
                public static HTTP_PROXY_AUTH: int
                public static HTTP_CLIENT_TIMEOUT: int
                public static HTTP_CONFLICT: int
                public static HTTP_GONE: int
                public static HTTP_LENGTH_REQUIRED: int
                public static HTTP_PRECON_FAILED: int
                public static HTTP_ENTITY_TOO_LARGE: int
                public static HTTP_REQ_TOO_LONG: int
                public static HTTP_UNSUPPORTED_TYPE: int
                public static HTTP_INTERNAL_ERROR: int
                public static HTTP_NOT_IMPLEMENTED: int
                public static HTTP_BAD_GATEWAY: int
                public static HTTP_UNAVAILABLE: int
                public static HTTP_GATEWAY_TIMEOUT: int
                public static HTTP_VERSION: int
                public static class: java.lang.Class<any>
            }
            class ContextList {
                public add(arg0: sun.net.httpserver.HttpContextImpl): void
                public size(): int
                public remove(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public remove(arg0: sun.net.httpserver.HttpContextImpl): void
                public static class: java.lang.Class<any>
            }
            class DefaultHttpServerProvider extends com.sun.net.httpserver.spi.HttpServerProvider {
                public constructor()
                public createHttpServer(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpServer
                public createHttpsServer(arg0: java.net.InetSocketAddress, arg1: int): com.sun.net.httpserver.HttpsServer
                public static class: java.lang.Class<any>
            }
            class Event {
                protected constructor(arg0: sun.net.httpserver.ExchangeImpl)
                public static class: java.lang.Class<any>
            }
            class ExchangeImpl {
                public getRequestHeaders(): com.sun.net.httpserver.Headers
                public getResponseHeaders(): com.sun.net.httpserver.Headers
                public getRequestURI(): java.net.URI
                public getRequestMethod(): string
                public getHttpContext(): sun.net.httpserver.HttpContextImpl
                public close(): void
                public getRequestBody(): java.io.InputStream
                public getResponseCode(): int
                public getResponseBody(): java.io.OutputStream
                public sendResponseHeaders(arg0: int, arg1: long): void
                public getRemoteAddress(): java.net.InetSocketAddress
                public getLocalAddress(): java.net.InetSocketAddress
                public getProtocol(): string
                public getSSLSession(): javax.net.ssl.SSLSession
                public getAttribute(arg0: java.lang.String | string): java.lang.Object
                public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public setStreams(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public getPrincipal(): com.sun.net.httpserver.HttpPrincipal
                public static class: java.lang.Class<any>
            }
            class FixedLengthInputStream extends sun.net.httpserver.LeftOverInputStream {
                protected readImpl(arg0: byte[], arg1: int, arg2: int): int
                public available(): int
                public markSupported(): boolean
                public mark(arg0: int): void
                public reset(): void
                public static class: java.lang.Class<any>
            }
            class FixedLengthOutputStream extends java.io.FilterOutputStream {
                public write(arg0: int): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public close(): void
                public static class: java.lang.Class<any>
            }
            class HttpConnection {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class HttpContextImpl extends com.sun.net.httpserver.HttpContext {
                public getHandler(): com.sun.net.httpserver.HttpHandler
                public setHandler(arg0: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): void
                public getPath(): string
                public getServer(): com.sun.net.httpserver.HttpServer
                public getProtocol(): string
                public getAttributes(): java.util.Map<java.lang.String, java.lang.Object>
                public getFilters(): java.util.List<com.sun.net.httpserver.Filter>
                public setAuthenticator(arg0: com.sun.net.httpserver.Authenticator): com.sun.net.httpserver.Authenticator
                public getAuthenticator(): com.sun.net.httpserver.Authenticator
                public static class: java.lang.Class<any>
            }
            class HttpError extends java.lang.RuntimeException {
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class HttpExchangeImpl extends com.sun.net.httpserver.HttpExchange {
                public getRequestHeaders(): com.sun.net.httpserver.Headers
                public getResponseHeaders(): com.sun.net.httpserver.Headers
                public getRequestURI(): java.net.URI
                public getRequestMethod(): string
                public getHttpContext(): sun.net.httpserver.HttpContextImpl
                public close(): void
                public getRequestBody(): java.io.InputStream
                public getResponseCode(): int
                public getResponseBody(): java.io.OutputStream
                public sendResponseHeaders(arg0: int, arg1: long): void
                public getRemoteAddress(): java.net.InetSocketAddress
                public getLocalAddress(): java.net.InetSocketAddress
                public getProtocol(): string
                public getAttribute(arg0: java.lang.String | string): java.lang.Object
                public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public setStreams(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public getPrincipal(): com.sun.net.httpserver.HttpPrincipal
                public getHttpContext(): com.sun.net.httpserver.HttpContext
                public static class: java.lang.Class<any>
            }
            class HttpServerImpl extends com.sun.net.httpserver.HttpServer {
                public bind(arg0: java.net.InetSocketAddress, arg1: int): void
                public start(): void
                public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                public getExecutor(): java.util.concurrent.Executor
                public stop(arg0: int): void
                public createContext(arg0: java.lang.String | string, arg1: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): sun.net.httpserver.HttpContextImpl
                public createContext(arg0: java.lang.String | string): sun.net.httpserver.HttpContextImpl
                public removeContext(arg0: java.lang.String | string): void
                public removeContext(arg0: com.sun.net.httpserver.HttpContext): void
                public getAddress(): java.net.InetSocketAddress
                public createContext(arg0: java.lang.String | string): com.sun.net.httpserver.HttpContext
                public createContext(arg0: java.lang.String | string, arg1: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): com.sun.net.httpserver.HttpContext
                public static class: java.lang.Class<any>
            }
            class HttpsExchangeImpl extends com.sun.net.httpserver.HttpsExchange {
                public getRequestHeaders(): com.sun.net.httpserver.Headers
                public getResponseHeaders(): com.sun.net.httpserver.Headers
                public getRequestURI(): java.net.URI
                public getRequestMethod(): string
                public getHttpContext(): sun.net.httpserver.HttpContextImpl
                public close(): void
                public getRequestBody(): java.io.InputStream
                public getResponseCode(): int
                public getResponseBody(): java.io.OutputStream
                public sendResponseHeaders(arg0: int, arg1: long): void
                public getRemoteAddress(): java.net.InetSocketAddress
                public getLocalAddress(): java.net.InetSocketAddress
                public getProtocol(): string
                public getSSLSession(): javax.net.ssl.SSLSession
                public getAttribute(arg0: java.lang.String | string): java.lang.Object
                public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public setStreams(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public getPrincipal(): com.sun.net.httpserver.HttpPrincipal
                public getHttpContext(): com.sun.net.httpserver.HttpContext
                public static class: java.lang.Class<any>
            }
            class HttpsServerImpl extends com.sun.net.httpserver.HttpsServer {
                public setHttpsConfigurator(arg0: com.sun.net.httpserver.HttpsConfigurator): void
                public getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator
                public bind(arg0: java.net.InetSocketAddress, arg1: int): void
                public start(): void
                public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                public getExecutor(): java.util.concurrent.Executor
                public stop(arg0: int): void
                public createContext(arg0: java.lang.String | string, arg1: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): sun.net.httpserver.HttpContextImpl
                public createContext(arg0: java.lang.String | string): sun.net.httpserver.HttpContextImpl
                public removeContext(arg0: java.lang.String | string): void
                public removeContext(arg0: com.sun.net.httpserver.HttpContext): void
                public getAddress(): java.net.InetSocketAddress
                public createContext(arg0: java.lang.String | string): com.sun.net.httpserver.HttpContext
                public createContext(arg0: java.lang.String | string, arg1: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): com.sun.net.httpserver.HttpContext
                public static class: java.lang.Class<any>
            }
            abstract class LeftOverInputStream extends java.io.FilterInputStream {
                protected closed: boolean
                protected eof: boolean
                public constructor(arg0: sun.net.httpserver.ExchangeImpl, arg1: java.io.InputStream)
                public isDataBuffered(): boolean
                public close(): void
                public isClosed(): boolean
                public isEOF(): boolean
                protected readImpl(arg0: byte[], arg1: int, arg2: int): int
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public drain(arg0: long): boolean
                public static class: java.lang.Class<any>
            }
            class Request {
                public inputStream(): java.io.InputStream
                public outputStream(): java.io.OutputStream
                public readLine(): string
                public requestLine(): string
                public static class: java.lang.Class<any>
            }
            class SSLStreams {
                public sendData(arg0: java.nio.ByteBuffer): sun.net.httpserver.SSLStreams$WrapperResult
                public recvData(arg0: java.nio.ByteBuffer): sun.net.httpserver.SSLStreams$WrapperResult
                public static class: java.lang.Class<any>
            }
            class ServerConfig {
                public static class: java.lang.Class<any>
            }
            class ServerImpl implements sun.net.httpserver.TimeSource {
                public bind(arg0: java.net.InetSocketAddress, arg1: int): void
                public start(): void
                public setExecutor(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
                public getExecutor(): java.util.concurrent.Executor
                public setHttpsConfigurator(arg0: com.sun.net.httpserver.HttpsConfigurator): void
                public getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator
                public stop(arg0: int): void
                public createContext(arg0: java.lang.String | string, arg1: com.sun.net.httpserver.HttpHandler | com.sun.net.httpserver.HttpHandler$$Lambda): sun.net.httpserver.HttpContextImpl
                public createContext(arg0: java.lang.String | string): sun.net.httpserver.HttpContextImpl
                public removeContext(arg0: java.lang.String | string): void
                public removeContext(arg0: com.sun.net.httpserver.HttpContext): void
                public getAddress(): java.net.InetSocketAddress
                public getTime(): long
                public static class: java.lang.Class<any>
            }
            class ServerImpl$$Lambda implements sun.net.httpserver.TimeSource {
                public (arg0: java.net.InetSocketAddress, arg1: int): void
            }
            class StreamClosedException extends java.io.IOException {
                public static class: java.lang.Class<any>
            }
            interface TimeSource {
                getTime(): long
            }
            interface TimeSource$$Lambda {
                (): long
            }
            class UndefLengthOutputStream extends java.io.FilterOutputStream {
                public write(arg0: int): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public close(): void
                public static class: java.lang.Class<any>
            }
            class UnmodifiableHeaders extends com.sun.net.httpserver.Headers {
                public size(): int
                public isEmpty(): boolean
                public containsKey(arg0: java.lang.Object): boolean
                public containsValue(arg0: java.lang.Object): boolean
                public get(arg0: java.lang.Object): java.util.List<java.lang.String>
                public getFirst(arg0: java.lang.String | string): string
                public put(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): java.util.List<java.lang.String>
                public add(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public set(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public remove(arg0: java.lang.Object): java.util.List<java.lang.String>
                public putAll(arg0: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
                public clear(): void
                public keySet(): java.util.Set<java.lang.String>
                public values(): java.util.Collection<java.util.List<java.lang.String>>
                public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, java.util.List<java.lang.String>>>
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public remove(arg0: java.lang.Object): java.lang.Object
                public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                public get(arg0: java.lang.Object): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class WriteFinishedEvent extends sun.net.httpserver.Event {
                public static class: java.lang.Class<any>
            }
        }
    }
}
