declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace util {
                        class Utility {
                            public static readonly STUB_PREFIX: string
                            public static readonly RMI_STUB_SUFFIX: string
                            public static readonly DYNAMIC_STUB_SUFFIX: string
                            public static readonly IDL_STUB_SUFFIX: string
                            public static readonly TIE_SUFIX: string
                            public constructor()
                            public static autoConnect(arg0: java.lang.Object, arg1: org.omg.CORBA.ORB, arg2: boolean): java.lang.Object
                            public static loadTie(arg0: java.rmi.Remote): javax.rmi.CORBA.Tie
                            public static clearCaches(): void
                            public static loadClassForClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader, arg3: java.lang.Class, arg4: java.lang.ClassLoader): java.lang.Class
                            public static getHelper(arg0: java.lang.Class, arg1: java.lang.String | string, arg2: java.lang.String | string): org.omg.CORBA.portable.BoxedValueHelper
                            public static getFactory(arg0: java.lang.Class, arg1: java.lang.String | string, arg2: org.omg.CORBA.ORB, arg3: java.lang.String | string): org.omg.CORBA.portable.ValueFactory
                            public static loadStub(arg0: javax.rmi.CORBA.Tie, arg1: com.sun.corba.se.spi.presentation.rmi.PresentationManager$StubFactory, arg2: java.lang.String | string, arg3: boolean): java.rmi.Remote
                            public static getAndForgetTie(arg0: org.omg.CORBA.Object): javax.rmi.CORBA.Tie
                            public static purgeStubForTie(arg0: javax.rmi.CORBA.Tie): void
                            public static purgeTieAndServant(arg0: javax.rmi.CORBA.Tie): void
                            public static stubNameFromRepID(arg0: java.lang.String | string): string
                            public static loadStub(arg0: org.omg.CORBA.Object, arg1: java.lang.Class): java.rmi.Remote
                            public static loadStubClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Class): java.lang.Class
                            public static stubName(arg0: java.lang.String | string): string
                            public static dynamicStubName(arg0: java.lang.String | string): string
                            public static stubNameForCompiler(arg0: java.lang.String | string): string
                            public static tieName(arg0: java.lang.String | string): string
                            public static tieNameForCompiler(arg0: java.lang.String | string): string
                            public static throwNotSerializableForCorba(arg0: java.lang.String | string): void
                            public static idlStubName(arg0: java.lang.String | string): string
                            public static printStackTrace(): void
                            public static readObjectAndNarrow(arg0: org.omg.CORBA.portable.InputStream, arg1: java.lang.Class): java.lang.Object
                            public static readAbstractAndNarrow(arg0: org.omg.CORBA_2_3.portable.InputStream, arg1: java.lang.Class): java.lang.Object
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}