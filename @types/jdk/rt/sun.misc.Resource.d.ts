declare namespace sun {
    namespace misc {
        abstract class Resource {
            public constructor()
            public getName(): string
            public getURL(): java.net.URL
            public getCodeSourceURL(): java.net.URL
            public getInputStream(): java.io.InputStream
            public getContentLength(): int
            public setClasspathLoadIndex(arg0: int): void
            public getClasspathLoadIndex(): int
            public getBytes(): byte[]
            public getByteBuffer(): java.nio.ByteBuffer
            public getManifest(): java.util.jar.Manifest
            public getCertificates(): java.security.cert.Certificate[]
            public getCodeSigners(): java.security.CodeSigner[]
            public static class: java.lang.Class<any>
        }
    }
}