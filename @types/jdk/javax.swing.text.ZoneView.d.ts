declare namespace javax {
  namespace swing {
    namespace text {
      class ZoneView extends javax.swing.text.BoxView {
        maxZoneSize: int
        maxZonesLoaded: int
        loadedZones: java.util.Vector<javax.swing.text.View>
        public constructor(arg0: javax.swing.text.Element, arg1: number | java.lang.Integer)
        public getMaximumZoneSize(): number
        public setMaximumZoneSize(arg0: number | java.lang.Integer): void
        public getMaxZonesLoaded(): number
        public setMaxZonesLoaded(arg0: number | java.lang.Integer): void
        protected zoneWasLoaded(arg0: javax.swing.text.View): void
        unloadOldZones(): void
        protected unloadZone(arg0: javax.swing.text.View): void
        protected isZoneLoaded(arg0: javax.swing.text.View): boolean
        protected createZone(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.text.View
        protected loadChildren(arg0: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda): void
        protected getViewIndexAtPosition(arg0: number | java.lang.Integer): number
        handleInsert(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        handleRemove(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        splitZone(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        getDesiredZoneEnd(arg0: number | java.lang.Integer): number
        protected updateChildren(
          arg0: javax.swing.event.DocumentEvent$ElementChange,
          arg1: javax.swing.event.DocumentEvent,
          arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): boolean
        public insertUpdate(
          arg0: javax.swing.event.DocumentEvent,
          arg1: java.awt.Shape,
          arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): void
        public removeUpdate(
          arg0: javax.swing.event.DocumentEvent,
          arg1: java.awt.Shape,
          arg2: javax.swing.text.ViewFactory | javax.swing.text.ViewFactory$$lambda
        ): void
      }
    }
  }
}
