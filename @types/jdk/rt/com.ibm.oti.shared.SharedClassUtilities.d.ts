declare namespace com {
    namespace ibm {
        namespace oti {
            namespace shared {
class SharedClassUtilities {
    public static NO_FLAGS: int
    public static PERSISTENCE_DEFAULT: int
    public static PERSISTENT: int
    public static NONPERSISTENT: int
    public static SNAPSHOT: int
    public static DESTROYED_ALL_CACHE: int
    public static DESTROYED_NONE: int
    public static DESTROY_FAILED_CURRENT_GEN_CACHE: int
    public static DESTROY_FAILED_OLDER_GEN_CACHE: int
    public constructor()
    public static getSharedCacheInfo(arg0: java.lang.String | string, arg1: int, arg2: boolean): java.util.List<com.ibm.oti.shared.SharedClassCacheInfo>
    public static destroySharedCache(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string, arg3: boolean): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}