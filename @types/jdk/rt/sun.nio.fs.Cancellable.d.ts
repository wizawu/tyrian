declare namespace sun {
    namespace nio {
        namespace fs {
            abstract class Cancellable implements java.lang.Runnable {
                protected constructor()
                protected addressToPollForCancel(): long
                protected cancelValue(): int
                public run(): void
                public static class: java.lang.Class<any>
            }
            abstract class Cancellable$$Lambda implements java.lang.Runnable {
                protected constructor()
            }
        }
    }
}