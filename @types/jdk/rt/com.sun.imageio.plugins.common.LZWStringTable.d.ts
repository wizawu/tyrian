declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace common {
                    class LZWStringTable {
                        public constructor()
                        public addCharString(arg0: short, arg1: byte): int
                        public findCharString(arg0: short, arg1: byte): short
                        public clearTable(arg0: int): void
                        public static hash(arg0: short, arg1: byte): int
                        public expandCode(arg0: byte[], arg1: int, arg2: short, arg3: int): int
                        public dump(arg0: java.io.PrintStream): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}