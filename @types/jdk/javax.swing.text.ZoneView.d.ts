declare namespace javax {
  namespace swing {
    namespace text {

      class ZoneView extends javax.swing.text.BoxView {

        maxZoneSize: int
        maxZonesLoaded: int
        loadedZones: java.util.Vector<javax.swing.text.View>
        public constructor(arg0: javax.swing.text.Element, arg1: int)
        public getMaximumZoneSize(): int
        public setMaximumZoneSize(arg0: int): void
        public getMaxZonesLoaded(): int
        public setMaxZonesLoaded(arg0: int): void
        protected zoneWasLoaded(arg0: javax.swing.text.View): void
        unloadOldZones(): void
        protected unloadZone(arg0: javax.swing.text.View): void
        protected isZoneLoaded(arg0: javax.swing.text.View): boolean
        protected createZone(arg0: int, arg1: int): javax.swing.text.View
        protected loadChildren(arg0: javax.swing.text.ViewFactory): void
        protected getViewIndexAtPosition(arg0: int): int
        handleInsert(arg0: int, arg1: int): void
        handleRemove(arg0: int, arg1: int): void
        splitZone(arg0: int, arg1: int, arg2: int): void
        getDesiredZoneEnd(arg0: int): int
        protected updateChildren(arg0: javax.swing.event.DocumentEvent$ElementChange, arg1: javax.swing.event.DocumentEvent, arg2: javax.swing.text.ViewFactory): boolean
        public insertUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
        public removeUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
      }

    }
  }
}
