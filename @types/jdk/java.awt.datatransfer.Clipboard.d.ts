declare namespace java {
  namespace awt {
    namespace datatransfer {
      class Clipboard {
        name: java.lang.String
        protected owner: java.awt.datatransfer.ClipboardOwner
        protected contents: java.awt.datatransfer.Transferable
        public constructor(arg0: java.lang.String | string)
        public getName(): java.lang.String
        public setContents(
          arg0: java.awt.datatransfer.Transferable,
          arg1: java.awt.datatransfer.ClipboardOwner | java.awt.datatransfer.ClipboardOwner$$lambda
        ): void
        public getContents(arg0: java.lang.Object | any): java.awt.datatransfer.Transferable
        public getAvailableDataFlavors(): java.awt.datatransfer.DataFlavor[]
        public isDataFlavorAvailable(arg0: java.awt.datatransfer.DataFlavor): boolean
        public getData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
        public addFlavorListener(
          arg0: java.awt.datatransfer.FlavorListener | java.awt.datatransfer.FlavorListener$$lambda
        ): void
        public removeFlavorListener(
          arg0: java.awt.datatransfer.FlavorListener | java.awt.datatransfer.FlavorListener$$lambda
        ): void
        public getFlavorListeners(): java.awt.datatransfer.FlavorListener[]
      }
    }
  }
}
