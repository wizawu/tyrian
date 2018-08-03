declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace io {
                        class IIOPInputStream extends com.sun.corba.se.impl.io.InputStreamHook {
                            public static readonly kRemoteTypeCode: org.omg.CORBA.TypeCode
                            public static readonly kValueTypeCode: org.omg.CORBA.TypeCode
                            protected getStreamFormatVersion(): byte
                            public static setTestFVDFlag(arg0: boolean): void
                            public constructor()
                            public setSender(arg0: com.sun.org.omg.SendingContext.CodeBase): void
                            public getSender(): com.sun.org.omg.SendingContext.CodeBase
                            public setValueHandler(arg0: javax.rmi.CORBA.ValueHandler): void
                            public getValueHandler(): javax.rmi.CORBA.ValueHandler
                            public readObjectDelegate(): java.lang.Object
                            public simpleSkipObject(arg0: java.lang.String | string, arg1: com.sun.org.omg.SendingContext.CodeBase): void
                            protected readObjectOverride(): java.lang.Object
                            public enableResolveObjectDelegate(arg0: boolean): boolean
                            public mark(arg0: int): void
                            public markSupported(): boolean
                            public reset(): void
                            public available(): int
                            public close(): void
                            public read(): int
                            public read(arg0: byte[], arg1: int, arg2: int): int
                            public readBoolean(): boolean
                            public readByte(): byte
                            public readChar(): char
                            public readDouble(): double
                            public readFloat(): float
                            public readFully(arg0: byte[]): void
                            public readFully(arg0: byte[], arg1: int, arg2: int): void
                            public readInt(): int
                            public readLine(): string
                            public readLong(): long
                            public readShort(): short
                            protected readStreamHeader(): void
                            public readUnsignedByte(): int
                            public readUnsignedShort(): int
                            protected internalReadUTF(arg0: org.omg.CORBA.portable.InputStream): string
                            public readUTF(): string
                            public registerValidation(arg0: java.io.ObjectInputValidation | java.io.ObjectInputValidation$$Lambda, arg1: int): void
                            protected resolveClass(arg0: com.sun.corba.se.impl.io.ObjectStreamClass): java.lang.Class
                            protected resolveObject(arg0: java.lang.Object): java.lang.Object
                            public skipBytes(arg0: int): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}