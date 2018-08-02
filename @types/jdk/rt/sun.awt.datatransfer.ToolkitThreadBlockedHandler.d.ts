declare namespace sun {
    namespace awt {
        namespace datatransfer {
interface ToolkitThreadBlockedHandler {
    lock(): void
    unlock(): void
    enter(): void
    exit(): void
}

        }
    }
}