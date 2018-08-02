declare namespace jdk {
    namespace net {
class SocketFlow {
    public static NORMAL_PRIORITY: int
    public static HIGH_PRIORITY: int
    public static create(): jdk.net.SocketFlow
    public priority(arg0: int): jdk.net.SocketFlow
    public bandwidth(arg0: long): jdk.net.SocketFlow
    public priority(): int
    public bandwidth(): long
    public status(): jdk.net.SocketFlow$Status
    public static class: java.lang.Class<any>
}

    }
}