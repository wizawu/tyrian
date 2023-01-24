declare namespace javax {
  namespace print {
    namespace attribute {
      abstract class ResolutionSyntax implements java.io.Serializable, java.lang.Cloneable {
        public static readonly DPI: int
        public static readonly DPCM: int
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        )
        public getResolution(arg0: number | java.lang.Integer): number[]
        public getCrossFeedResolution(arg0: number | java.lang.Integer): number
        public getFeedResolution(arg0: number | java.lang.Integer): number
        public toString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): java.lang.String
        public lessThanOrEquals(arg0: javax.print.attribute.ResolutionSyntax): boolean
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        protected getCrossFeedResolutionDphi(): number
        protected getFeedResolutionDphi(): number
      }
    }
  }
}
