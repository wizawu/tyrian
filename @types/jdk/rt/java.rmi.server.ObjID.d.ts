declare namespace java {
    namespace rmi {
        namespace server {
            class ObjID implements java.io.Serializable {
                public static REGISTRY_ID: int
                public static ACTIVATOR_ID: int
                public static DGC_ID: int
                public constructor()
                public constructor(arg0: int)
                public write(arg0: java.io.ObjectOutput): void
                public static read(arg0: java.io.ObjectInput): java.rmi.server.ObjID
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}