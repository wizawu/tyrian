declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
abstract class EventHandlerBase implements com.sun.corba.se.pept.transport.EventHandler {
    protected orb: com.sun.corba.se.spi.orb.ORB
    protected work: com.sun.corba.se.spi.orbutil.threadpool.Work
    protected useWorkerThreadForEvent: boolean
    protected useSelectThreadToWait: boolean
    protected selectionKey: java.nio.channels.SelectionKey
    public constructor()
    public setUseSelectThreadToWait(arg0: boolean): void
    public shouldUseSelectThreadToWait(): boolean
    public setSelectionKey(arg0: java.nio.channels.SelectionKey): void
    public getSelectionKey(): java.nio.channels.SelectionKey
    public handleEvent(): void
    public shouldUseWorkerThreadForEvent(): boolean
    public setUseWorkerThreadForEvent(arg0: boolean): void
    public setWork(arg0: com.sun.corba.se.spi.orbutil.threadpool.Work): void
    public getWork(): com.sun.corba.se.spi.orbutil.threadpool.Work
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}