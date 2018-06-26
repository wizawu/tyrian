declare namespace sun {
    namespace tools {
        namespace jar {
            class CommandLine {
                public constructor()
                public static parse(arg0: java.lang.String[]): java.lang.String[]
                public static class: java.lang.Class<any>
            }
            class JarException extends java.io.IOException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class Main {
                public constructor(arg0: java.io.PrintStream, arg1: java.io.PrintStream, arg2: java.lang.String | string)
                public run(arg0: java.lang.String[]): boolean
                protected output(arg0: java.lang.String | string): void
                protected error(arg0: java.lang.String | string): void
                public static main(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
            class Manifest {
                public constructor()
                public constructor(arg0: byte[])
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: java.io.InputStream, arg1: boolean)
                public constructor(arg0: java.lang.String[])
                public addEntry(arg0: sun.net.www.MessageHeader): void
                public getEntry(arg0: java.lang.String | string): sun.net.www.MessageHeader
                public entryAt(arg0: int): sun.net.www.MessageHeader
                public entries(): java.util.Enumeration<sun.net.www.MessageHeader>
                public addFiles(arg0: java.io.File, arg1: java.lang.String[]): void
                public addFile(arg0: java.io.File): void
                public doHashes(arg0: sun.net.www.MessageHeader): void
                public stream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static isManifestName(arg0: java.lang.String | string): boolean
                public static class: java.lang.Class<any>
            }
            class SignatureFile {
                public constructor(arg0: sun.tools.jar.Manifest, arg1: java.lang.String | string)
                public constructor(arg0: sun.tools.jar.Manifest, arg1: java.lang.String[], arg2: java.lang.String | string)
                public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string)
                public constructor(arg0: java.io.InputStream)
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
