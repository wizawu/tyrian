declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace png {
class RowFilter {
    public constructor()
    protected static subFilter(arg0: byte[], arg1: byte[], arg2: int, arg3: int): int
    protected static upFilter(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int, arg4: int): int
    protected paethPredictor(arg0: int, arg1: int, arg2: int): int
    public filterRow(arg0: int, arg1: byte[], arg2: byte[], arg3: byte[][], arg4: int, arg5: int): int
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}