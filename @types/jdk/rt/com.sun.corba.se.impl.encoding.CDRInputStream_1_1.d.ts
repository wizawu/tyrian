declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
class CDRInputStream_1_1 extends com.sun.corba.se.impl.encoding.CDRInputStream_1_0 {
    protected fragmentOffset: int
    public constructor()
    public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
    public dup(): com.sun.corba.se.impl.encoding.CDRInputStreamBase
    protected get_offset(): int
    protected alignAndCheck(arg0: int, arg1: int): void
    protected grow(arg0: int, arg1: int): void
    public createStreamMemento(): java.lang.Object
    public restoreInternalState(arg0: java.lang.Object): void
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