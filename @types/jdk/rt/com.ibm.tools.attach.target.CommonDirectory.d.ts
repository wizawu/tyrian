declare namespace com {
    namespace ibm {
        namespace tools {
            namespace attach {
                namespace target {
                    abstract class CommonDirectory {
                        public static J9PORT_INFO_SHSEM_OPENED_STALE: int
                        public constructor()
                        public static getCommonDirFileObject(): java.io.File
                        public static obtainMasterLock(): void
                        public static releaseMasterLock(): void
                        public static obtainAttachLock(): void
                        public static releaseAttachLock(): void
                        public static notifyVm(arg0: int): int
                        public static cancelNotify(arg0: int): int
                        public static countTargetDirectories(): int
                        public static isFileOwnedByUid(arg0: java.io.File, arg1: long): boolean
                        public static getFileOwner(arg0: java.lang.String | string): long
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}