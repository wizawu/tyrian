declare namespace javax {
  namespace swing {
    class DefaultListSelectionModel
      implements javax.swing.ListSelectionModel, java.lang.Cloneable, java.io.Serializable
    {
      protected listenerList: javax.swing.event.EventListenerList
      protected leadAnchorNotificationEnabled: boolean
      public constructor()
      public getMinSelectionIndex(): number
      public getMaxSelectionIndex(): number
      public getValueIsAdjusting(): boolean
      public getSelectionMode(): number
      public setSelectionMode(arg0: number | java.lang.Integer): void
      public isSelectedIndex(arg0: number | java.lang.Integer): boolean
      public isSelectionEmpty(): boolean
      public addListSelectionListener(
        arg0: javax.swing.event.ListSelectionListener | javax.swing.event.ListSelectionListener$$lambda
      ): void
      public removeListSelectionListener(
        arg0: javax.swing.event.ListSelectionListener | javax.swing.event.ListSelectionListener$$lambda
      ): void
      public getListSelectionListeners(): javax.swing.event.ListSelectionListener[]
      protected fireValueChanged(arg0: boolean | java.lang.Boolean): void
      protected fireValueChanged(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      protected fireValueChanged(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: boolean | java.lang.Boolean
      ): void
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      public setLeadAnchorNotificationEnabled(arg0: boolean | java.lang.Boolean): void
      public isLeadAnchorNotificationEnabled(): boolean
      public clearSelection(): void
      public setSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public addSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public removeSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public insertIndexInterval(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: boolean | java.lang.Boolean
      ): void
      public removeIndexInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public setValueIsAdjusting(arg0: boolean | java.lang.Boolean): void
      public toString(): java.lang.String
      public clone(): java.lang.Object
      public getAnchorSelectionIndex(): number
      public getLeadSelectionIndex(): number
      public setAnchorSelectionIndex(arg0: number | java.lang.Integer): void
      public moveLeadSelectionIndex(arg0: number | java.lang.Integer): void
      public setLeadSelectionIndex(arg0: number | java.lang.Integer): void
    }
  }
}
