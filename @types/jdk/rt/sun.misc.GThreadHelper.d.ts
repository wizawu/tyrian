declare namespace sun {
    namespace misc {
        class GThreadHelper {
            public constructor()
            public static lock(): void
            public static unlock(): void
            public static getAndSetInitializationNeededFlag(): boolean
            public static class: java.lang.Class<any>
        }
    }
}