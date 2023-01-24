declare namespace javax {
  namespace print {
    namespace attribute {
      abstract class Size2DSyntax implements java.io.Serializable, java.lang.Cloneable {
        public static readonly INCH: int
        public static readonly MM: int
        protected constructor(
          arg0: number | java.lang.Float,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Integer
        )
        protected constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        )
        public getSize(arg0: number | java.lang.Integer): number[]
        public getX(arg0: number | java.lang.Integer): number
        public getY(arg0: number | java.lang.Integer): number
        public toString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): java.lang.String
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        protected getXMicrometers(): number
        protected getYMicrometers(): number
      }
    }
  }
}
