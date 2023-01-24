declare namespace javax {
  namespace swing {
    class ActionMap implements java.io.Serializable {
      public constructor()
      public setParent(arg0: javax.swing.ActionMap): void
      public getParent(): javax.swing.ActionMap
      public put(arg0: java.lang.Object | any, arg1: javax.swing.Action): void
      public get(arg0: java.lang.Object | any): javax.swing.Action
      public remove(arg0: java.lang.Object | any): void
      public clear(): void
      public keys(): java.lang.Object[]
      public size(): number
      public allKeys(): java.lang.Object[]
    }
  }
}
