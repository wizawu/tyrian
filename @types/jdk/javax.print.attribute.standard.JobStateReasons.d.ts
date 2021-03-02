declare namespace javax {
  namespace print {
    namespace attribute {
      namespace standard {

        class JobStateReasons extends java.util.HashSet<javax.print.attribute.standard.JobStateReason> implements javax.print.attribute.PrintJobAttribute {
          public constructor()
          public constructor(arg0: number | java.lang.Integer)
          public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Float)
          public constructor(arg0: java.util.Collection<javax.print.attribute.standard.JobStateReason>)
          public add(arg0: javax.print.attribute.standard.JobStateReason): boolean
          public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
          public getName(): java.lang.String
          public add(arg0: java.lang.Object | any): boolean
        }

      }
    }
  }
}
