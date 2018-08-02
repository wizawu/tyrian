declare namespace java {
    namespace awt {
        namespace datatransfer {
interface FlavorTable extends java.awt.datatransfer.FlavorMap {
    getNativesForFlavor(arg0: java.awt.datatransfer.DataFlavor): java.util.List<java.lang.String>
    getFlavorsForNative(arg0: java.lang.String | string): java.util.List<java.awt.datatransfer.DataFlavor>
}

        }
    }
}