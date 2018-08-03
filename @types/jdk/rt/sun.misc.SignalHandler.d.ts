declare namespace sun {
    namespace misc {
        interface SignalHandler {
            SIG_DFL: sun.misc.SignalHandler
            SIG_IGN: sun.misc.SignalHandler
            handle(arg0: sun.misc.Signal): void
        }
        interface SignalHandler$$Lambda {
            SIG_DFL: sun.misc.SignalHandler
        }
    }
}