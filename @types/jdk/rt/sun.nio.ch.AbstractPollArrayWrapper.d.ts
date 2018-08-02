declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class AbstractPollArrayWrapper {
                protected pollArray: sun.nio.ch.AllocatedNativeObject
                protected totalChannels: int
                protected pollArrayAddress: long
                public constructor()
                public static class: java.lang.Class<any>
            }
        }
    }
}