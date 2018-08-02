declare namespace sun {
    namespace misc {
interface JavaIOFileDescriptorAccess {
    set(arg0: java.io.FileDescriptor, arg1: int): void
    get(arg0: java.io.FileDescriptor): int
    setHandle(arg0: java.io.FileDescriptor, arg1: long): void
    getHandle(arg0: java.io.FileDescriptor): long
}

    }
}