declare namespace sun {
    namespace net {
        class TelnetOutputStream extends java.io.BufferedOutputStream {
            public binaryMode: boolean
            public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: boolean)
            public setStickyCRLF(arg0: boolean): void
            public write(arg0: int): void
            public write(arg0: byte[], arg1: int, arg2: int): void
            public static class: java.lang.Class<any>
        }
    }
}