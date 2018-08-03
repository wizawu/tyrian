declare namespace sun {
    namespace awt {
        namespace datatransfer {
            abstract class DataTransferer$IndexedComparator implements java.util.Comparator {
                public static readonly SELECT_BEST: boolean
                public static readonly SELECT_WORST: boolean
                protected readonly order: boolean
                public constructor()
                public constructor(arg0: boolean)
                protected static compareIndices(arg0: java.util.Map, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Integer): int
                protected static compareLongs(arg0: java.util.Map, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Long): int
                public static class: java.lang.Class<any>
            }
        }
    }
}