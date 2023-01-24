declare namespace javax {
  namespace xml {
    namespace validation {
      abstract class Schema {
        protected constructor()
        public abstract newValidator(): javax.xml.validation.Validator
        public abstract newValidatorHandler(): javax.xml.validation.ValidatorHandler
      }
    }
  }
}
