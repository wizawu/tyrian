declare namespace java {
  namespace awt {
    namespace datatransfer {

      interface Transferable {

        getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
        isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
        getTransferData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
      }

    }
  }
}
