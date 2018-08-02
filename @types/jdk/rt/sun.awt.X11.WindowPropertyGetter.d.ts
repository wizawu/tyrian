declare namespace sun {
    namespace awt {
        namespace X11 {
            class WindowPropertyGetter {
                public constructor(arg0: long, arg1: sun.awt.X11.XAtom, arg2: long, arg3: long, arg4: boolean, arg5: long)
                public constructor(arg0: long, arg1: sun.awt.X11.XAtom, arg2: long, arg3: long, arg4: boolean, arg5: sun.awt.X11.XAtom)
                public execute(): int
                public execute(arg0: sun.awt.X11.XErrorHandler): int
                public isExecuted(): boolean
                public isDisposed(): boolean
                public getActualFormat(): int
                public getActualType(): long
                public getNumberOfItems(): int
                public getData(): long
                public getBytesAfter(): long
                public dispose(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}