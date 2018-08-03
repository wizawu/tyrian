declare namespace sun {
    namespace tools {
        namespace jar {
            class SignatureFile {
                public constructor(arg0: sun.tools.jar.Manifest, arg1: java.lang.String | string)
                public constructor(arg0: sun.tools.jar.Manifest, arg1: java.lang.String[], arg2: java.lang.String | string)
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string)
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                public constructor(arg0: byte[])
                public getName(): string
                public getBlockName(): string
                public getBlock(): sun.security.pkcs.PKCS7
                public setBlock(arg0: sun.security.pkcs.PKCS7): void
                public add(arg0: java.lang.String[]): void
                public add(arg0: java.lang.String | string): void
                public getEntry(arg0: java.lang.String | string): sun.net.www.MessageHeader
                public entryAt(arg0: int): sun.net.www.MessageHeader
                public entries(): java.util.Enumeration<sun.net.www.MessageHeader>
                public stream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}