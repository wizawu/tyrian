declare namespace sun {
    namespace misc {
        abstract class Resource {
            public constructor()
            public abstract getName(): string
            public abstract getURL(): java.net.URL
            public abstract getCodeSourceURL(): java.net.URL
            public abstract getInputStream(): java.io.InputStream
            public abstract getContentLength(): int
            public getBytes(): byte[]
            public getByteBuffer(): java.nio.ByteBuffer
            public getManifest(): java.util.jar.Manifest
            public getCertificates(): java.security.cert.Certificate[]
            public getCodeSigners(): java.security.CodeSigner[]
            public static class: java.lang.Class<any>
        }
    }
}