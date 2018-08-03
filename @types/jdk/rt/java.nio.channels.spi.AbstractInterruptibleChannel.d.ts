declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                abstract class AbstractInterruptibleChannel implements java.nio.channels.Channel , java.nio.channels.InterruptibleChannel {
                    protected constructor()
                    public close(): void
                    protected abstract implCloseChannel(): void
                    public isOpen(): boolean
                    protected begin(): void
                    protected end(arg0: boolean): void
                    public static class: java.lang.Class<any>
                }
                interface AbstractInterruptibleChannel$$Lambda implements java.nio.channels.Channel , java.nio.channels.InterruptibleChannel {
                    (): void
                }
            }
        }
    }
}