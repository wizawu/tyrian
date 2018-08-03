declare namespace sun {
    namespace java2d {
        namespace loops {
            abstract class ProcessPath$DrawHandler {
                public xMin: int
                public yMin: int
                public xMax: int
                public yMax: int
                public xMinf: float
                public yMinf: float
                public xMaxf: float
                public yMaxf: float
                public strokeControl: int
                public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
                public setBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
                public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                public adjustBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
                public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
                public abstract drawLine(arg0: int, arg1: int, arg2: int, arg3: int): void
                public abstract drawPixel(arg0: int, arg1: int): void
                public abstract drawScanline(arg0: int, arg1: int, arg2: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}