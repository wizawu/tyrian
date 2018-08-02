declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
            abstract class ObjectReferenceFactoryHelper {
                public constructor()
                public static insert(arg0: org.omg.CORBA.Any, arg1: org.omg.PortableInterceptor.ObjectReferenceFactory): void
                public static extract(arg0: org.omg.CORBA.Any): org.omg.PortableInterceptor.ObjectReferenceFactory
                public static type(): org.omg.CORBA.TypeCode
                public static id(): string
                public static read(arg0: org.omg.CORBA.portable.InputStream): org.omg.PortableInterceptor.ObjectReferenceFactory
                public static write(arg0: org.omg.CORBA.portable.OutputStream, arg1: org.omg.PortableInterceptor.ObjectReferenceFactory): void
                public static class: java.lang.Class<any>
            }
        }
    }
}