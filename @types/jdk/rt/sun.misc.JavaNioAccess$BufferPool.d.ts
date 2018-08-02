declare namespace sun {
    namespace misc {
        interface JavaNioAccess$BufferPool {
            getName(): string
            getCount(): long
            getTotalCapacity(): long
            getMemoryUsed(): long
        }
    }
}