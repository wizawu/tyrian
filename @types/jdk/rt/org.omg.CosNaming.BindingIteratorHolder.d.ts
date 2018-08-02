declare namespace org {
    namespace omg {
        namespace CosNaming {
            class BindingIteratorHolder implements org.omg.CORBA.portable.Streamable {
                public value: org.omg.CosNaming.BindingIterator
                public constructor()
                public constructor(arg0: org.omg.CosNaming.BindingIterator)
                public _read(arg0: org.omg.CORBA.portable.InputStream): void
                public _write(arg0: org.omg.CORBA.portable.OutputStream): void
                public _type(): org.omg.CORBA.TypeCode
                public static class: java.lang.Class<any>
            }
        }
    }
}