declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace ior {
                        namespace iiop {
abstract class IIOPFactories {
    public static makeRequestPartitioningComponentFactory(): com.sun.corba.se.spi.ior.IdentifiableFactory
    public static makeRequestPartitioningComponent(arg0: int): com.sun.corba.se.spi.ior.iiop.RequestPartitioningComponent
    public static makeAlternateIIOPAddressComponentFactory(): com.sun.corba.se.spi.ior.IdentifiableFactory
    public static makeAlternateIIOPAddressComponent(arg0: com.sun.corba.se.spi.ior.iiop.IIOPAddress): com.sun.corba.se.spi.ior.iiop.AlternateIIOPAddressComponent
    public static makeCodeSetsComponentFactory(): com.sun.corba.se.spi.ior.IdentifiableFactory
    public static makeCodeSetsComponent(arg0: com.sun.corba.se.spi.orb.ORB): com.sun.corba.se.spi.ior.iiop.CodeSetsComponent
    public static makeJavaCodebaseComponentFactory(): com.sun.corba.se.spi.ior.IdentifiableFactory
    public static makeJavaCodebaseComponent(arg0: java.lang.String | string): com.sun.corba.se.spi.ior.iiop.JavaCodebaseComponent
    public static makeORBTypeComponentFactory(): com.sun.corba.se.spi.ior.IdentifiableFactory
    public static makeORBTypeComponent(arg0: int): com.sun.corba.se.spi.ior.iiop.ORBTypeComponent
    public static makeMaxStreamFormatVersionComponentFactory(): com.sun.corba.se.spi.ior.IdentifiableFactory
    public static makeMaxStreamFormatVersionComponent(): com.sun.corba.se.spi.ior.iiop.MaxStreamFormatVersionComponent
    public static makeJavaSerializationComponentFactory(): com.sun.corba.se.spi.ior.IdentifiableFactory
    public static makeJavaSerializationComponent(): com.sun.corba.se.impl.ior.iiop.JavaSerializationComponent
    public static makeIIOPProfileFactory(): com.sun.corba.se.spi.ior.IdentifiableFactory
    public static makeIIOPProfile(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg2: com.sun.corba.se.spi.ior.ObjectId, arg3: com.sun.corba.se.spi.ior.iiop.IIOPProfileTemplate): com.sun.corba.se.spi.ior.iiop.IIOPProfile
    public static makeIIOPProfile(arg0: com.sun.corba.se.spi.orb.ORB, arg1: org.omg.IOP.TaggedProfile): com.sun.corba.se.spi.ior.iiop.IIOPProfile
    public static makeIIOPProfileTemplateFactory(): com.sun.corba.se.spi.ior.IdentifiableFactory
    public static makeIIOPProfileTemplate(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: com.sun.corba.se.spi.ior.iiop.IIOPAddress): com.sun.corba.se.spi.ior.iiop.IIOPProfileTemplate
    public static makeIIOPAddress(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string, arg2: int): com.sun.corba.se.spi.ior.iiop.IIOPAddress
    public static makeIIOPAddress(arg0: org.omg.CORBA_2_3.portable.InputStream): com.sun.corba.se.spi.ior.iiop.IIOPAddress
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}