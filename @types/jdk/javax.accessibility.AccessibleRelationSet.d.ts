declare namespace javax {
  namespace accessibility {

    class AccessibleRelationSet {

      protected relations: java.util.Vector<javax.accessibility.AccessibleRelation>
      public constructor()
      public constructor(arg0: javax.accessibility.AccessibleRelation[])
      public add(arg0: javax.accessibility.AccessibleRelation): boolean
      public addAll(arg0: javax.accessibility.AccessibleRelation[]): void
      public remove(arg0: javax.accessibility.AccessibleRelation): boolean
      public clear(): void
      public size(): int
      public contains(arg0: java.lang.String): boolean
      public get(arg0: java.lang.String): javax.accessibility.AccessibleRelation
      public toArray(): javax.accessibility.AccessibleRelation[]
      public toString(): java.lang.String
    }

  }
}
