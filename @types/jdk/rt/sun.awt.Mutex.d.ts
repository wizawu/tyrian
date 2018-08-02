declare namespace sun {
    namespace awt {
        class Mutex {
            public constructor()
            public lock(): void
            public unlock(): void
            protected isOwned(): boolean
            public static class: java.lang.Class<any>
        }
    }
}