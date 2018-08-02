declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class TypeCodeOutputStream extends com.sun.corba.se.impl.encoding.EncapsOutputStream {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: boolean)
                            public create_input_stream(): org.omg.CORBA.portable.InputStream
                            public setEnclosingOutputStream(arg0: org.omg.CORBA_2_3.portable.OutputStream): void
                            public getTopLevelStream(): com.sun.corba.se.impl.encoding.TypeCodeOutputStream
                            public getTopLevelPosition(): int
                            public addIDAtPosition(arg0: java.lang.String | string, arg1: int): void
                            public getPositionForID(arg0: java.lang.String | string): int
                            public writeRawBuffer(arg0: org.omg.CORBA.portable.OutputStream, arg1: int): void
                            public createEncapsulation(arg0: org.omg.CORBA.ORB): com.sun.corba.se.impl.encoding.TypeCodeOutputStream
                            protected makeEncapsulation(): void
                            public static wrapOutputStream(arg0: org.omg.CORBA_2_3.portable.OutputStream): com.sun.corba.se.impl.encoding.TypeCodeOutputStream
                            public getPosition(): int
                            public getRealIndex(arg0: int): int
                            public getTypeCodeBuffer(): byte[]
                            public printTypeMap(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}