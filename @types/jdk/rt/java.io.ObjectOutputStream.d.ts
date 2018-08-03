declare namespace java {
    namespace io {
        class ObjectOutputStream extends java.io.OutputStream implements java.io.ObjectOutput , java.io.ObjectStreamConstants {
            public constructor(arg0: java.io.OutputStream)
            protected constructor()
            public useProtocolVersion(arg0: int): void
            public writeObject(arg0: java.lang.Object): void
            protected writeObjectOverride(arg0: java.lang.Object): void
            public writeUnshared(arg0: java.lang.Object): void
            public defaultWriteObject(): void
            public putFields(): java.io.ObjectOutputStream$PutField
            public writeFields(): void
            public reset(): void
            protected annotateClass(arg0: java.lang.Class<any>): void
            protected annotateProxyClass(arg0: java.lang.Class<any>): void
            protected replaceObject(arg0: java.lang.Object): java.lang.Object
            protected enableReplaceObject(arg0: boolean): boolean
            protected writeStreamHeader(): void
            protected writeClassDescriptor(arg0: java.io.ObjectStreamClass): void
            public write(arg0: int): void
            public write(arg0: byte[]): void
            public write(arg0: byte[], arg1: int, arg2: int): void
            public flush(): void
            protected drain(): void
            public close(): void
            public writeBoolean(arg0: boolean): void
            public writeByte(arg0: int): void
            public writeShort(arg0: int): void
            public writeChar(arg0: int): void
            public writeInt(arg0: int): void
            public writeLong(arg0: long): void
            public writeFloat(arg0: float): void
            public writeDouble(arg0: double): void
            public writeBytes(arg0: java.lang.String | string): void
            public writeChars(arg0: java.lang.String | string): void
            public writeUTF(arg0: java.lang.String | string): void
            public static class: java.lang.Class<any>
        }
    }
}