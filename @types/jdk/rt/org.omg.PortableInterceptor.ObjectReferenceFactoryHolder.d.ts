declare namespace org {
    namespace omg {
        namespace PortableInterceptor {
            class ObjectReferenceFactoryHolder implements org.omg.CORBA.portable.Streamable {
                public value: org.omg.PortableInterceptor.ObjectReferenceFactory
                public constructor()
                public constructor(arg0: org.omg.PortableInterceptor.ObjectReferenceFactory | org.omg.PortableInterceptor.ObjectReferenceFactory$$Lambda)
                public _read(arg0: org.omg.CORBA.portable.InputStream): void
                public _write(arg0: org.omg.CORBA.portable.OutputStream): void
                public _type(): org.omg.CORBA.TypeCode
                public static class: java.lang.Class<any>
            }
        }
    }
}