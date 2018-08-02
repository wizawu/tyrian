declare namespace sun {
    namespace awt {
        namespace X11 {
            interface XDragSourceProtocolListener {
                handleDragReply(arg0: int): void
                handleDragReply(arg0: int, arg1: int, arg2: int): void
                handleDragReply(arg0: int, arg1: int, arg2: int, arg3: int): void
                handleDragFinished(): void
                handleDragFinished(arg0: boolean): void
                handleDragFinished(arg0: boolean, arg1: int): void
                handleDragFinished(arg0: boolean, arg1: int, arg2: int, arg3: int): void
                cleanup(arg0: long): void
            }
        }
    }
}