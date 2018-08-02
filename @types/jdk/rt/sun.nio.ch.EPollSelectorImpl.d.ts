declare namespace sun {
    namespace nio {
        namespace ch {
            class EPollSelectorImpl extends sun.nio.ch.SelectorImpl {
                protected fd0: int
                protected fd1: int
                protected doSelect(arg0: long): int
                protected implClose(): void
                protected implRegister(arg0: sun.nio.ch.SelectionKeyImpl): void
                protected implDereg(arg0: sun.nio.ch.SelectionKeyImpl): void
                public putEventOps(arg0: sun.nio.ch.SelectionKeyImpl, arg1: int): void
                public wakeup(): java.nio.channels.Selector
                public static class: java.lang.Class<any>
            }
        }
    }
}