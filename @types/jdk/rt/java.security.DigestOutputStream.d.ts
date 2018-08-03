declare namespace java {
    namespace security {
        class DigestOutputStream extends java.io.FilterOutputStream {
            protected digest: java.security.MessageDigest
            public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.security.MessageDigest)
            public getMessageDigest(): java.security.MessageDigest
            public setMessageDigest(arg0: java.security.MessageDigest): void
            public write(arg0: int): void
            public write(arg0: byte[], arg1: int, arg2: int): void
            public on(arg0: boolean): void
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}