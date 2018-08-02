declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
class IORTemplateListImpl extends com.sun.corba.se.impl.ior.FreezableList implements com.sun.corba.se.spi.ior.IORTemplateList {
    public set(arg0: int, arg1: java.lang.Object): java.lang.Object
    public add(arg0: int, arg1: java.lang.Object): void
    public constructor()
    public constructor(arg0: org.omg.CORBA_2_3.portable.InputStream)
    public makeImmutable(): void
    public write(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
    public makeIOR(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.ior.ObjectId): com.sun.corba.se.spi.ior.IOR
    public isEquivalent(arg0: com.sun.corba.se.spi.ior.IORFactory): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}