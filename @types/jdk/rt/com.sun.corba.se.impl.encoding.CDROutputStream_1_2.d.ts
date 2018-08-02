declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class CDROutputStream_1_2 extends com.sun.corba.se.impl.encoding.CDROutputStream_1_1 {
                            protected primitiveAcrossFragmentedChunk: boolean
                            protected specialChunk: boolean
                            public constructor()
                            protected handleSpecialChunkBegin(arg0: int): void
                            protected handleSpecialChunkEnd(): void
                            public write_octet(arg0: byte): void
                            public write_short(arg0: short): void
                            public write_long(arg0: int): void
                            public write_longlong(arg0: long): void
                            protected alignAndReserve(arg0: int, arg1: int): void
                            protected grow(arg0: int, arg1: int): void
                            public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                            public write_wchar(arg0: char): void
                            public write_wchar_array(arg0: char[], arg1: int, arg2: int): void
                            public write_wstring(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}