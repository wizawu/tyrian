declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
class TargetAddress implements org.omg.CORBA.portable.IDLEntity {
    public constructor()
    public discriminator(): short
    public object_key(): byte[]
    public object_key(arg0: byte[]): void
    public profile(): org.omg.IOP.TaggedProfile
    public profile(arg0: org.omg.IOP.TaggedProfile): void
    public ior(): com.sun.corba.se.impl.protocol.giopmsgheaders.IORAddressingInfo
    public ior(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.IORAddressingInfo): void
    public _default(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}