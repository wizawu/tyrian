declare namespace sun {
    namespace management {
        namespace jdp {
            abstract class JdpGenericPacket implements sun.management.jdp.JdpPacket {
                protected constructor()
                public static checkMagic(arg0: int): void
                public static checkVersion(arg0: short): void
                public static getMagic(): int
                public static getVersion(): short
                public static class: java.lang.Class<any>
            }
            abstract class JdpGenericPacket$$Lambda implements sun.management.jdp.JdpPacket {
                protected constructor()
            }
        }
    }
}