declare namespace java {
    namespace nio {
        namespace channels {
            abstract class Pipe {
                protected constructor()
                public abstract source(): java.nio.channels.Pipe$SourceChannel
                public abstract sink(): java.nio.channels.Pipe$SinkChannel
                public static open(): java.nio.channels.Pipe
                public static class: java.lang.Class<any>
            }
        }
    }
}