declare namespace java {
    namespace util {
        namespace concurrent {
            class Phaser {
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: java.util.concurrent.Phaser)
                public constructor(arg0: java.util.concurrent.Phaser, arg1: int)
                public register(): int
                public bulkRegister(arg0: int): int
                public arrive(): int
                public arriveAndDeregister(): int
                public arriveAndAwaitAdvance(): int
                public awaitAdvance(arg0: int): int
                public awaitAdvanceInterruptibly(arg0: int): int
                public awaitAdvanceInterruptibly(arg0: int, arg1: long, arg2: java.util.concurrent.TimeUnit): int
                public forceTermination(): void
                public getPhase(): int
                public getRegisteredParties(): int
                public getArrivedParties(): int
                public getUnarrivedParties(): int
                public getParent(): java.util.concurrent.Phaser
                public getRoot(): java.util.concurrent.Phaser
                public isTerminated(): boolean
                protected onAdvance(arg0: int, arg1: int): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}