declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace pept {
                    namespace transport {
interface ByteBufferPool {
    getByteBuffer(arg0: int): java.nio.ByteBuffer
    releaseByteBuffer(arg0: java.nio.ByteBuffer): void
    activeCount(): int
}

                    }
                }
            }
        }
    }
}