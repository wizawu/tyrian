declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class CDROutputStream_1_1 extends com.sun.corba.se.impl.encoding.CDROutputStream_1_0 {
                            protected fragmentOffset: int
                            public constructor()
                            protected alignAndReserve(arg0: int, arg1: int): void
                            protected grow(arg0: int, arg1: int): void
                            public get_offset(): int
                            public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                            public write_wchar(arg0: char): void
                            public write_wstring(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}