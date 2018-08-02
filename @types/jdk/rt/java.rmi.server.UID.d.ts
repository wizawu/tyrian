declare namespace java {
    namespace rmi {
        namespace server {
            class UID implements java.io.Serializable {
                public constructor()
                public constructor(arg0: short)
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public write(arg0: java.io.DataOutput): void
                public static read(arg0: java.io.DataInput): java.rmi.server.UID
                public static class: java.lang.Class<any>
            }
        }
    }
}