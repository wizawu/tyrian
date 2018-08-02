declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class AbstractPollSelectorImpl extends sun.nio.ch.SelectorImpl {
                protected INIT_CAP: int
                protected channelArray: sun.nio.ch.SelectionKeyImpl[]
                protected channelOffset: int
                protected totalChannels: int
                public putEventOps(arg0: sun.nio.ch.SelectionKeyImpl, arg1: int): void
                public wakeup(): java.nio.channels.Selector
                protected doSelect(arg0: long): int
                protected implClose(): void
                protected implCloseInterrupt(): void
                protected updateSelectedKeys(): int
                protected implRegister(arg0: sun.nio.ch.SelectionKeyImpl): void
                protected implDereg(arg0: sun.nio.ch.SelectionKeyImpl): void
                public static class: java.lang.Class<any>
            }
        }
    }
}