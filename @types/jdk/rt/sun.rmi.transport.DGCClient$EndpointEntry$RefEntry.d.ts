declare namespace sun {
    namespace rmi {
        namespace transport {
class DGCClient$EndpointEntry$RefEntry {
    public constructor(arg0: sun.rmi.transport.DGCClient$EndpointEntry, arg1: sun.rmi.transport.LiveRef)
    public getRef(): sun.rmi.transport.LiveRef
    public addInstanceToRefSet(arg0: sun.rmi.transport.LiveRef): void
    public removeInstanceFromRefSet(arg0: sun.rmi.transport.DGCClient$EndpointEntry$RefEntry$PhantomLiveRef): void
    public isRefSetEmpty(): boolean
    public markDirtyFailed(): void
    public hasDirtyFailed(): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}