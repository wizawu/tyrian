declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
class CDRInputStream_1_2 extends com.sun.corba.se.impl.encoding.CDRInputStream_1_1 {
    protected headerPadding: boolean
    protected restoreHeaderPadding: boolean
    public constructor()
    public mark(arg0: int): void
    public reset(): void
    public dup(): com.sun.corba.se.impl.encoding.CDRInputStreamBase
    protected alignAndCheck(arg0: int, arg1: int): void
    public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
    public read_wchar(): char
    public read_wstring(): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}