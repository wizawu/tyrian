declare namespace javax {
  namespace swing {

    class DefaultListSelectionModel implements javax.swing.ListSelectionModel, java.lang.Cloneable, java.io.Serializable {

      protected listenerList: javax.swing.event.EventListenerList
      protected leadAnchorNotificationEnabled: boolean
      public constructor()
      public getMinSelectionIndex(): int
      public getMaxSelectionIndex(): int
      public getValueIsAdjusting(): boolean
      public getSelectionMode(): int
      public setSelectionMode(arg0: int): void
      public isSelectedIndex(arg0: int): boolean
      public isSelectionEmpty(): boolean
      public addListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
      public removeListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
      public getListSelectionListeners(): javax.swing.event.ListSelectionListener[]
      protected fireValueChanged(arg0: boolean): void
      protected fireValueChanged(arg0: int, arg1: int): void
      protected fireValueChanged(arg0: int, arg1: int, arg2: boolean): void
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      public setLeadAnchorNotificationEnabled(arg0: boolean): void
      public isLeadAnchorNotificationEnabled(): boolean
      public clearSelection(): void
      public setSelectionInterval(arg0: int, arg1: int): void
      public addSelectionInterval(arg0: int, arg1: int): void
      public removeSelectionInterval(arg0: int, arg1: int): void
      public insertIndexInterval(arg0: int, arg1: int, arg2: boolean): void
      public removeIndexInterval(arg0: int, arg1: int): void
      public setValueIsAdjusting(arg0: boolean): void
      public toString(): java.lang.String
      public clone(): java.lang.Object
      public getAnchorSelectionIndex(): int
      public getLeadSelectionIndex(): int
      public setAnchorSelectionIndex(arg0: int): void
      public moveLeadSelectionIndex(arg0: int): void
      public setLeadSelectionIndex(arg0: int): void
    }

  }
}
