declare namespace sun {
    namespace java2d {
        namespace pipe {
interface SpanIterator {
    getPathBox(arg0: int[]): void
    intersectClipBox(arg0: int, arg1: int, arg2: int, arg3: int): void
    nextSpan(arg0: int[]): boolean
    skipDownTo(arg0: int): void
    getNativeIterator(): long
}

        }
    }
}