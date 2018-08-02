declare namespace sun {
    namespace rmi {
        namespace server {
            class UnicastRef2 extends sun.rmi.server.UnicastRef {
                public constructor()
                public constructor(arg0: sun.rmi.transport.LiveRef)
                public getRefClass(arg0: java.io.ObjectOutput): string
                public writeExternal(arg0: java.io.ObjectOutput): void
                public readExternal(arg0: java.io.ObjectInput): void
                public static class: java.lang.Class<any>
            }
        }
    }
}