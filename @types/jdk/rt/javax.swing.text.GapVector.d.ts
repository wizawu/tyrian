declare namespace javax {
    namespace swing {
        namespace text {
            abstract class GapVector implements java.io.Serializable {
                public constructor()
                public constructor(arg0: int)
                protected abstract allocateArray(arg0: int): java.lang.Object
                protected abstract getArrayLength(): int
                protected getArray(): java.lang.Object
                protected getGapStart(): int
                protected getGapEnd(): int
                protected replace(arg0: int, arg1: int, arg2: java.lang.Object, arg3: int): void
                protected shiftEnd(arg0: int): void
                protected shiftGap(arg0: int): void
                protected shiftGapStartDown(arg0: int): void
                protected shiftGapEndUp(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}