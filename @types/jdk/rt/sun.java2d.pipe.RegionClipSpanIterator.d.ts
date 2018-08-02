declare namespace sun {
    namespace java2d {
        namespace pipe {
            class RegionClipSpanIterator implements sun.java2d.pipe.SpanIterator {
                public constructor(arg0: sun.java2d.pipe.Region, arg1: sun.java2d.pipe.SpanIterator)
                public getPathBox(arg0: int[]): void
                public intersectClipBox(arg0: int, arg1: int, arg2: int, arg3: int): void
                public nextSpan(arg0: int[]): boolean
                public skipDownTo(arg0: int): void
                public getNativeIterator(): long
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}